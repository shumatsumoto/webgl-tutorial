/**
 * GSAP
 * https://greensock.com/
 *
 * GSAP Eases
 * https://greensock.com/docs/v3/Eases
 */
import { gsap } from "gsap";

init();
async function init() {
  gsap.to(".box", {
    y: 200,
    borderRadius: "50%",
    scale: 2,
    backgroundColor: "#ff0000",
    rotate: 360,
    duration: 2,
    ease: "power3.inOut",
    delay: 1,
    repeat: -1,
    yoyo: true,
  });

  const obj = { value: 0 };
  gsap.to(obj, {
    value: 1,
    duration: 2,
    delay: 1,
    ease: "back.inOut(1.7)",
    onUpdate() {
      console.log(obj.value);
    },
    onComplete() {
      console.log("Animation End!");
    },
  });
}
