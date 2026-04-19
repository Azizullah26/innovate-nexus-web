import { useEffect } from "react";

/**
 * Reveal-on-scroll: any element with the `.reveal` class fades + slides in
 * once it enters the viewport. Mounts a single IntersectionObserver per page.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      // Fallback: show everything immediately
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) =>
        el.classList.add("is-visible"),
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const observe = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((el) => observer.observe(el));
    };

    observe();

    // Re-observe when DOM changes (route transitions, lazy content)
    const mutationObserver = new MutationObserver(() => observe());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};
