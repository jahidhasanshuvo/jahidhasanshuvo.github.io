type MoveAnimationTargetProps = {
  item: HTMLElement;
  speed: number;
};
export function MoveAnimation(
  surface: HTMLElement,
  value: number = 25,
  targets: MoveAnimationTargetProps[]
) {
  const mouseMove = () => {
    surface.addEventListener("mousemove", function (event: MouseEvent) {
      [...targets].map(({ item, speed }, index) => {
        let target = item as HTMLElement;
        if (target.style.transition == "all 1000ms ease 0s") {
          setTimeout(() => {
            target.style.transition = "none";
          }, 1000);
        }
      });

      let yAxisValue =
        -(surface.offsetHeight / 2 - (event.clientY - surface.offsetTop)) /
        value;
      let xAxisValue =
        -(surface.offsetWidth / 2 - (event.clientX - surface.offsetLeft)) /
        value;

      targets.map(({ item, speed }, index) => {
        let target = item as HTMLElement;
        target.style.transform = `translate(${xAxisValue * speed}px,${
          yAxisValue * speed
        }px)`;
      });
    });
  };
  const mouseEnter = () => {
    surface?.addEventListener("mouseenter", function () {
      targets.map(({ item, speed }, index) => {
        let target = item as HTMLElement;
        target.style.transition = "all 1000ms";
      });
    });
  };
  const mouseLeave = () => {
    surface?.addEventListener("mouseleave", function () {
      targets.map(({ item, speed }, index) => {
        let target = item as HTMLElement;
        target.style.transition = "all 1000ms";
        target.style.transform = "translate(0px,0px)";
      });
    });
  };
  const execute = () => {
    mouseEnter();
    mouseMove();
    mouseLeave();
  };
  const cleanUp = () => {
    surface.removeEventListener("mousemove", mouseMove);
    surface.removeEventListener("mouseenter", mouseEnter);
    surface.removeEventListener("mouseleave", mouseLeave);
  };
  return {
    execute,
    cleanUp,
  };
}

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
    target.removeEventListener("mouseenter", mouseEnter);
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
