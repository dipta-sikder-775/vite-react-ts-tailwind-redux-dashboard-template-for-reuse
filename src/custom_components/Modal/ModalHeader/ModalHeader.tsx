import { IModalHeaderProps } from "@typedef/custom_components/interfaces";
// import { GrClose } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";

export default function ModalHeader({
  title,
  onClose,
  className = "",
  titleClassName="",
  style = {},
  ...rest
}: IModalHeaderProps) {
  return (
    <div
      style={style}
      className={`mb-6 flex items-center justify-between ${className}`}
      {...rest}
    >
      {title ? (
        <h1 className={`text-lg font-semibold leading-[1.375rem] text-gray-900 lg:text-[2rem] lg:leading-10 ${titleClassName}`}>
          {title}
        </h1>
      ) : null}
      <button
        onClick={onClose}
        className="lg:p- ml-auto cursor-pointer justify-self-end rounded-full bg-artBoard"
      >
        <RxCrossCircled className="h-[1.27rem] w-[1.27rem] text-gray-500 lg:h-[1.787rem] lg:w-[1.787rem]" />
      </button>
    </div>
  );
}
// 15.98px exist
