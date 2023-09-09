import { useEffect,useRef } from 'react'
import { IModal } from "@typedef/custom_components/interfaces";
import Portal from "../Portal/Portal";

export default function Modal({
  onClose,
  isOpen,
  children,
  className = "",
  style = {},
}: IModal) {
  const backdropRef = useRef<HTMLDivElement>(null);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose?.();
  };

  const handleEscape: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Escape") {
      handleClose(e as any);
    }
  };

  useEffect(() => {
    const backdrop = backdropRef.current;
    if (backdrop) {
      //  stop scrollng without moving the screen to the top
      if (isOpen) {
        backdrop.style.display = "flex";
        backdrop.scrollTop = window.scrollY;
      } else {
        backdrop.style.display = "none";
        window.scrollTo(0, backdrop.scrollTop);
      }
    }
  }, [isOpen]);

  return (
    <Portal containerId="backdrop">
      {isOpen && (
        <div
          style={style}
          className={`modal-backdrop opacity-100 ${className}`}
          onClick={handleClose}
          onPointerDown={(e) => e.stopPropagation()}
          onKeyDown={handleEscape}
          ref={backdropRef}
        >
          {children}
        </div>
      )}
    </Portal>
  );
}
