import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const update = () => {
      const offset =
        (document.documentElement.scrollTop - document.body.scrollTop)
        / ((document.documentElement.scrollHeight || document.body.scrollHeight)
           - document.documentElement.clientHeight) * 100;
      setScrollOffset(offset);
    }
    window.addEventListener("scroll", update);
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return { offset: scrollOffset };
};

export default useScroll;
