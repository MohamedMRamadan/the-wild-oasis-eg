import { useEffect, useRef } from "react";

function useOutsideClick(action, listenCapturing = true) {
  const ref = useRef();
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) action?.();
    };
    document.addEventListener("click", handleClick, listenCapturing);
    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [action, listenCapturing]);
  return ref;
}

export default useOutsideClick;
