import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ZoomIn } from "lucide-react";
import { useState } from "react";

interface ImageDialogProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title?: string;
  description?: string;
  className?: string;
}

export function ImageDialog({
  isOpen,
  onClose,
  image,
  title,
  description,
  className
}: ImageDialogProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-black/90">
        <div 
          className="relative w-full h-full cursor-zoom-in flex items-center justify-center"
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={image}
            alt={title || "Image preview"}
            className={cn(
              "max-h-[80vh] w-auto object-contain transition-transform duration-300",
              isZoomed ? "scale-150" : "scale-100",
              className
            )}
          />
          {(title || description) && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
              {description && <p className="text-sm text-white/80">{description}</p>}
            </div>
          )}
          <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white/80 animate-pulse">
            <ZoomIn className="w-6 h-6" />
          </div>
          {isZoomed && (
            <div className="absolute top-4 left-4 bg-black/50 rounded-full px-3 py-1 text-white/80 text-sm">
              Click to zoom out
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
} 