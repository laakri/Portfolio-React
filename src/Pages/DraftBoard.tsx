import React, { useReducer, useEffect, useState, KeyboardEvent, FC } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { CheckCircle, Circle, Play, Pause, RotateCcw, Trash2, PlusCircle, HelpCircle, Sparkles } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

// --- Types ---
type BlockType = "title" | "task" | "timer" | "note";

interface Block {
  id: string;
  type: BlockType;
  content: string;
  done: boolean;
  priority: 1 | 2 | 3 | null;
  duration?: number;
  elapsedTime: number;
  isRunning: boolean;
}

interface State {
  blocks: Block[];
  insertingAt: number | null;
}

type Action =
  | { type: "SET_STATE"; payload: State }
  | { type: "ADD_BLOCK"; payload: { input: string } }
  | { type: "INSERT_BLOCK"; payload: { input: string; index: number } }
  | { type: "UPDATE_BLOCK"; payload: { id: string; updates: Partial<Block> } }
  | { type: "DELETE_BLOCK"; payload: { id: string } }
  | { type: "START_INSERTING"; payload: { index: number | null } }
  | { type: "CLEAR_ALL" };

interface Command { cmd: string; desc: string; }

// --- Utility Functions ---
const parseTimerInput = (input: string): { duration?: number, text: string } => {
    const match = input.match(/^(\d+)(s|m|h)\s(.*)/s);
    if (!match) return { text: input, duration: undefined };
    const value = parseInt(match[1]);
    const unit = match[2];
    const text = match[3];
    let duration = 0;
    if (unit === 's') duration = value;
    if (unit === 'm') duration = value * 60;
    if (unit === 'h') duration = value * 3600;
    return { duration, text };
};

const formatTime = (seconds: number, duration?: number): string => {
    const time = duration ? Math.max(0, duration - seconds) : seconds;
    const h = Math.floor(time / 3600).toString().padStart(2, '0');
    const m = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const s = Math.floor(time % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
};

const parseInput = (input: string): Omit<Block, 'id'> => {
    let type: BlockType = "note";
    let content = input;
    let priority: Block['priority'] = null;
    let duration: number | undefined;

    const priorityMatch = content.match(/^\/p([1-3])\s(.*)/s);
    if (priorityMatch) {
        priority = parseInt(priorityMatch[1], 10) as Block['priority'];
        content = priorityMatch[2];
    }
    
    if (content.startsWith("/title ")) { type = "title"; content = content.replace("/title ", "").trim(); }
    else if (content.startsWith("/task ")) { type = "task"; content = content.replace("/task ", "").trim(); }
    else if (content.startsWith("/timer ")) {
        type = "timer";
        const { duration: d, text } = parseTimerInput(content.replace("/timer ", ""));
        content = text;
        duration = d;
    }
    
    return { type, content, priority, done: false, duration, elapsedTime: 0, isRunning: false };
};

// --- Reducer ---
const boardReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_STATE": return { ...action.payload, insertingAt: null };
        case "START_INSERTING": return { ...state, insertingAt: action.payload.index };
        case "ADD_BLOCK": {
            const newBlockData = parseInput(action.payload.input);
            if (!newBlockData.content) return state;
            const newBlock: Block = { id: Date.now().toString(), ...newBlockData };
            return { ...state, blocks: [...state.blocks, newBlock] };
        }
        case "INSERT_BLOCK": {
            const newBlockData = parseInput(action.payload.input);
            if (!newBlockData.content) return { ...state, insertingAt: null };
            const newBlock: Block = { id: Date.now().toString(), ...newBlockData };
            const newBlocks = [...state.blocks];
            newBlocks.splice(action.payload.index, 0, newBlock);
            return { ...state, blocks: newBlocks, insertingAt: null };
        }
        case "DELETE_BLOCK": return { ...state, blocks: state.blocks.filter(b => b.id !== action.payload.id) };
        case "UPDATE_BLOCK": return { ...state, blocks: state.blocks.map(b => b.id === action.payload.id ? { ...b, ...action.payload.updates } : b) };
        case "CLEAR_ALL": return { blocks: [], insertingAt: null };
        default: return state;
    }
};

const initialState: State = { blocks: [], insertingAt: null };

// --- Custom Hook for Timer Logic ---
const useTimer = (block: Block, dispatch: React.Dispatch<Action>) => {
    useEffect(() => {
        if (!block.isRunning) return;
        const interval = setInterval(() => {
            dispatch({ type: 'UPDATE_BLOCK', payload: { id: block.id, updates: { elapsedTime: (block.elapsedTime ?? 0) + 1 } } });
        }, 1000);
        return () => clearInterval(interval);
    }, [block.isRunning, block.id, block.elapsedTime, dispatch]);

    const toggle = () => dispatch({ type: 'UPDATE_BLOCK', payload: { id: block.id, updates: { isRunning: !block.isRunning } } });
    const reset = () => dispatch({ type: 'UPDATE_BLOCK', payload: { id: block.id, updates: { elapsedTime: 0, isRunning: false } } });
    const formattedTime = formatTime(block.elapsedTime ?? 0, block.duration);
    const isFinished = block.duration !== undefined && (block.elapsedTime ?? 0) >= block.duration;

    return { toggle, reset, formattedTime, isFinished };
};

// --- Components ---
const CommandInput: FC<{ onSubmit: (value: string) => void; placeholder: string; autoFocus?: boolean; }> = ({ onSubmit, placeholder, autoFocus = false }) => {
    const [input, setInput] = useState("");
    const [filteredCommands, setFilteredCommands] = useState<Command[]>([]);
    const commandList: Command[] = [
        { cmd: "/title", desc: "Add a section title." },
        { cmd: "/task", desc: "Create a checkable task." },
        { cmd: "/timer", desc: "e.g., /timer 15m Sprint" },
        { cmd: "/p1", desc: "Set high priority." },
        { cmd: "/p2", desc: "Set medium priority." },
        { cmd: "/p3", desc: "Set low priority." },
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);
        if (value.startsWith("/") && !value.includes(" ")) {
            setFilteredCommands(commandList.filter(c => c.cmd.startsWith(value)));
        } else {
            setFilteredCommands([]);
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if ((e.key === 'Tab' || e.key === 'Enter') && filteredCommands.length > 0 && !e.nativeEvent.isComposing) {
        e.preventDefault();
            const completedCmd = filteredCommands[0].cmd + " ";
            setInput(completedCmd);
            setFilteredCommands([]);
        }
    };

    return (
        <form onSubmit={e => { e.preventDefault(); if (!input.trim()) return; onSubmit(input); setInput(""); }} className="w-full relative">
            <input autoFocus={autoFocus} value={input} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder={placeholder} className="w-full bg-transparent outline-none text-base placeholder:text-muted-foreground/80" />
            <AnimatePresence>
                {filteredCommands.length > 0 && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-full left-0 mt-2 w-full max-w-md bg-muted/90 backdrop-blur-sm border rounded-lg p-2 text-sm shadow-lg z-10">
                        <ul className="space-y-1">
                            {filteredCommands.map(c => (
                                <li key={c.cmd} className="flex justify-between items-center p-1.5 rounded-md">
                                    <strong className="font-mono text-xs bg-background/50 border rounded px-1">{c.cmd}</strong>
                                    <span className="text-muted-foreground text-right">{c.desc}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </form>
    );
};

const BlockItem: FC<{ block: Block; dispatch: React.Dispatch<Action>; index: number; }> = ({ block, dispatch, index }) => {
    const [isHovering, setIsHovering] = useState(false);
    const { toggle, reset, formattedTime, isFinished } = useTimer(block, dispatch);

    const handleUpdate = (updates: Partial<Block>) => dispatch({ type: 'UPDATE_BLOCK', payload: { id: block.id, updates } });
    const handleDelete = () => dispatch({ type: 'DELETE_BLOCK', payload: { id: block.id } });

    const priorityClasses: Record<number, string> = { 1: 'border-l-red-500/80', 2: 'border-l-orange-500/80', 3: 'border-l-blue-500/80' };

    const PriorityControls = () => (
        <div className="ml-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={() => handleUpdate({ priority: 1 })} className={`text-[10px] px-1 py-0.5 rounded border ${block.priority === 1 ? 'text-red-400 border-red-400' : 'text-gray-400 border-gray-600 hover:text-red-300 hover:border-red-300'}`}>P1</button>
            <button onClick={() => handleUpdate({ priority: 2 })} className={`text-[10px] px-1 py-0.5 rounded border ${block.priority === 2 ? 'text-orange-400 border-orange-400' : 'text-gray-400 border-gray-600 hover:text-orange-300 hover:border-orange-300'}`}>P2</button>
            <button onClick={() => handleUpdate({ priority: 3 })} className={`text-[10px] px-1 py-0.5 rounded border ${block.priority === 3 ? 'text-blue-400 border-blue-400' : 'text-gray-400 border-gray-600 hover:text-blue-300 hover:border-blue-300'}`}>P3</button>
        </div>
    );

    const renderContent = () => {
        switch (block.type) {
            case "title": return <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-300">{block.content}</h2>;
            case "task": return (
                <div className="flex items-center gap-3">
                    <motion.button layout onClick={() => handleUpdate({ done: !block.done })}>{block.done ? <CheckCircle className="text-green-500" size={14} /> : <Circle className="text-muted-foreground/60" size={14} />}</motion.button>
                    <span className={block.done ? "line-through text-gray-500" : "text-gray-300"}>{block.content}</span>
                    <div className="ml-auto flex items-center">
                        <PriorityControls />
                    </div>
                </div>
            );
            case "timer": return (
                <div className="flex items-center gap-3">
                    <span className={block.done ? "line-through text-gray-500" : "text-gray-300"}>{block.content}</span>
                    <div className="flex items-center gap-1.5 font-mono text-[11px] ml-auto text-gray-400">
                        <span className={isFinished ? 'text-red-500 font-semibold' : ''}>{formattedTime}</span>
                        <button onClick={toggle} className="hover:text-gray-300">{block.isRunning ? <Pause size={14} /> : <Play size={14} />}</button>
                        <button onClick={reset} className="hover:text-gray-300"><RotateCcw size={14} /></button>
                    </div>
                </div>
            );
            default: return <span className="text-gray-300">{block.content}</span>;
        }
    };

    return (
        <motion.div layout="position" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="group relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <AnimatePresence>
                {isHovering && (
                    <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                        onClick={() => dispatch({ type: 'START_INSERTING', payload: { index: index + 1 } })}
                        className="absolute left-2 sm:-left-8 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                        <PlusCircle size={14} />
                    </motion.button>
                )}
            </AnimatePresence>
            <div className={`py-1 pl-2 pr-8 sm:pr-6 border-l-2 ${block.priority ? priorityClasses[block.priority] : 'border-l-transparent'} ${block.type === 'title' ? 'mt-2' : ''} ${isFinished ? 'bg-red-500/10 rounded-r-lg' : ''}`}>
                {renderContent()}
            </div>
            <button onClick={handleDelete} className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-500">
                <Trash2 size={14} />
            </button>
        </motion.div>
    );
};

const DraftBoard: FC = () => {
    const [state, dispatch] = useReducer(boardReducer, initialState);
    const [isHydrated, setIsHydrated] = useState(false); 

    // This hook now loads data from localStorage and sets the hydration flag
    useEffect(() => {
        try {
            const saved = localStorage.getItem("draftBoardState"); // Version bump for safety
            if (saved) {
                dispatch({ type: "SET_STATE", payload: JSON.parse(saved) });
            }
        } catch (error) { 
            console.error("Failed to load state from localStorage", error);
        }
        setIsHydrated(true); 
    }, []); 

    // This hook ONLY saves to localStorage if the component has been hydrated
    useEffect(() => {
        if (isHydrated) {
            localStorage.setItem("draftBoardState", JSON.stringify(state));
        }
    }, [state, isHydrated]); 

  return (
        <div className="w-full max-w-2xl mx-auto my-2 px-3 min-h-[80vh]">
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl font-light tracking-tight text-gray-300">Draft Board</h1>
        <div className="flex items-center gap-3">
        <button onClick={() => dispatch({ type: 'CLEAR_ALL' })} className="text-[11px] text-gray-400 hover:text-red-400">Clear</button>
        <HoverCard>
          <HoverCardTrigger asChild>
                        <HelpCircle className="h-4 w-4 text-gray-500 cursor-pointer" />
          </HoverCardTrigger>
          <HoverCardContent className="w-64">
            <div className="space-y-1.5">
                            <h4 className="text-[11px] font-medium flex items-center text-gray-300"><Sparkles className="h-3 w-3 mr-1" />Tips</h4>
              <ul className="text-[11px] list-disc list-inside text-gray-400">
                                <li><code className="bg-muted px-1 rounded">/title</code> Add a section title</li>
                                <li><code className="bg-muted px-1 rounded">/task</code> Add a to-do item</li>
                                <li><code className="bg-muted px-1 rounded">/timer 25m Focus</code> Add a timer</li>
                                <li><code className="bg-muted px-1 rounded">/p1 /p2 /p3</code> Set priority</li>
              </ul>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      </div>
            <div className="space-y-2">
                {state.blocks.length === 0 && (
                    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center py-12 text-gray-400">
                        <Sparkles className="h-6 w-6 text-gray-500 mb-2" />
                        <p className="text-xs text-center">
                            Your board is empty. Start with <code className="bg-muted px-1 rounded">/title</code>, <code className="bg-muted px-1 rounded">/task</code>,
                            or just type to begin.
                        </p>
                    </motion.div>
                )}
                <LayoutGroup>
                    {state.blocks.map((block, index) => (
                        <React.Fragment key={block.id}>
                            <BlockItem block={block} dispatch={dispatch} index={index} />
                            <AnimatePresence>
                                {state.insertingAt === index + 1 && (
                                    <motion.div layout initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                                        className="py-0.5"
                                    >
                                        <CommandInput autoFocus placeholder="Type '/' for commands..." onSubmit={(input) => dispatch({ type: 'INSERT_BLOCK', payload: { input, index: index + 1 } })} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </React.Fragment>
                    ))}
                </LayoutGroup>
                <div className="pt-2">
                    <CommandInput placeholder="Type '/' for commands, or just start writing..." onSubmit={(input) => dispatch({ type: 'ADD_BLOCK', payload: { input } })} />
            </div>
            </div>
    </div>
  );
};

export default DraftBoard;