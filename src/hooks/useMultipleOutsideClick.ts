import { RefObject } from "react";

import { useEventListener } from "usehooks-ts";

type Handler = (event: MouseEvent) => void;

function useMultipleOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>[],
  handler: Handler,
  mouseEvent: "mousedown" | "mouseup" = "mousedown"
): void {
  useEventListener(mouseEvent, (event) => {
    const isOutside = ref.some((ref) => {
      return !ref.current?.contains(event.target as Node);
    });
    if (isOutside) {
      handler(event);
    }
  });
}

export default useMultipleOutsideClick;
