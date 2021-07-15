export function ThreeDAnimation(target: HTMLElement, value: number = 25) {
  const mouseMove = () => {
    target.addEventListener("mousemove", function (event: MouseEvent) {
      if (target.style.transition == "all 300ms ease 0s") {
        setTimeout(() => {
          target.style.transition = "none";
        }, 300);
      }
      let rotateX =
        -(target.offsetHeight / 2 - (event.clientY - target.offsetTop)) / value;
      let rotateY =
        (target.offsetWidth / 2 - (event.clientX - target.offsetLeft)) / value;
      target.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01,1.01,1.01)`;
    });
  };
  const mouseEnter = () => {
    target?.addEventListener("mouseenter", function () {
      target.style.transition = "all 300ms";
    });
  };
  const mouseLeave = () => {
    target?.addEventListener("mouseleave", function () {
      target.style.transition = "all 300ms";
      target.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    });
  };
  const execute = () => {
    mouseEnter();
    mouseMove();
    mouseLeave();
  };
  const cleanUp = () => {
    target.removeEventListener("mousemove", mouseMove);
    target.removeEventListener("mouseleave", mouseLeave);
  };
  return {
    execute,
    cleanUp,
  };
}

export type ModifiersProp<M extends string> = M | M[];
export type modifiersType = string[] | string | undefined;
export function mapModifiers(
  baseClass: string,
  modifiers: modifiersType,
  classname?: string
) {
  let finalClassName = baseClass;
  if (Array.isArray(modifiers)) {
    let modifiersArray = modifiers.map((item) => baseClass + "--" + item);
    finalClassName += " " + modifiersArray.join(" ");
  } else if (modifiers) {
    finalClassName += " " + baseClass + "--" + modifiers;
  }
  if (classname) {
    finalClassName += " " + classname;
  }
  return finalClassName;
}
