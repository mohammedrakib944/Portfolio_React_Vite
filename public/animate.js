export const pAnimate = {
  offscreen: { opacity: 0, y: -50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4 },
  },
};

export const pAnimateY = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4 },
  },
};

export const Iam = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4 },
  },
};

export const emoji = {
  offscreen: { scale: 0 },
  onscreen: {
    scale: 1,
    transition: { type: "spring", bounce: 0.4, delay: 1 },
  },
};
export const popUp = {
  offscreen: { scale: 0 },
  onscreen: {
    scale: 1,
    transition: { type: "spring", bounce: 0.4 },
  },
};

export const imgAnimate = {
  offscreen: { scale: 0, opacity: 0, y: 100 },
  onscreen: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4 },
  },
};
