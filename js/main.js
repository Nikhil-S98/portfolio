import barba from "@barba/core";
import gsap from "gsap";

barba.init({
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
          duration: 0.7,
          onComplete() {
            data.current.container.style.display = "none";
          },
        });
      },
      enter(data) {
        data.next.container.style.display = "none";
        gsap.set(data.next.container, { opacity: 0 });
        data.next.container.style.display = "";
        return gsap.to(data.next.container, {
          opacity: 1,
          duration: 0.7,
        });
      },
    },
  ],
});
