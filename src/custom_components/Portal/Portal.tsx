import { useState, useEffect } from 'react'
import { PortalProps } from "@typedef/custom_components/interfaces";
import * as ReactDOM from "react-dom";

const Portal = ({ containerId, children }: PortalProps) => {
  const [isMounted, setIsMounted] = useState(false);

 useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (isMounted) {
    return ReactDOM.createPortal(
      children,
      document.getElementById(containerId) as HTMLElement
    );
  }
  return null;
};

export default Portal;
