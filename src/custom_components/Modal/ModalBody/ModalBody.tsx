import { IModalBodyProps } from "@typedef/custom_components/interfaces";

export default function ModalBody({
  className = "",
  style = {},
  children,
}: IModalBodyProps) {
  const preventClickToClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      style={style}
      className={`modal-body w-[calc(100%-2rem)] max-w-lg px-4  scrollbar-hide lg:max-w-4xl lg:px-8 ${className}`}
      onClick={preventClickToClose}
    >
      {children}
    </div>
  );
}
