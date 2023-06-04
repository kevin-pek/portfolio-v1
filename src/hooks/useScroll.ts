import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const update = () => {
      const docElement = document.documentElement;
      const docBody = document.body;
      const offset = (docElement.scrollTop - docBody.scrollTop)
        / ((docElement.scrollHeight || docBody.scrollHeight)
          - docElement.clientHeight);
      setScrollOffset(offset);
    }
    window.addEventListener("scroll", update);
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return scrollOffset;
};

export default useScroll;
