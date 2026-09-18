import { useState, useEffect } from 'react';

/**
 * Returns true once the user has interacted with the page (mouse, keyboard, touch, wheel).
 * Pre-rendering bots never interact, so third-party scripts gated on this
 * never load during react-snap crawls (and defer for real users, improving LCP).
 * Note: 'scroll' is excluded on purpose - programmatic scrollTo fires it.
 */
const useUserInteraction = () => {
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    if (interacted) return;
    const handler = () => setInteracted(true);
    const events = ['mousedown', 'mousemove', 'keydown', 'touchstart', 'wheel'];
    events.forEach((e) => window.addEventListener(e, handler, { once: true, passive: true, capture: true }));
    return () => events.forEach((e) => window.removeEventListener(e, handler, { capture: true }));
  }, [interacted]);

  return interacted;
};

export default useUserInteraction;
