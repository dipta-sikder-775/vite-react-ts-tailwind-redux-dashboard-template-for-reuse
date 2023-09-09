import { useState } from 'react'
import { TToggler } from "@typedef/custom_components/types";

type TToggleEvent =
  | React.MouseEvent<HTMLButtonElement>
  | React.MouseEvent<HTMLDivElement>;

export default function useToggle(): TToggler {
  const [value, setValue] = useState(false);

  const toggle = (e: TToggleEvent) => {
    setValue((prev) => !prev);
  };
  const customToggle = (e: TToggleEvent, value: boolean) => {
    setValue(value);
  };

  return [value, toggle, customToggle];
}
