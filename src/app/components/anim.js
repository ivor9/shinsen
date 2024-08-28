const transition = { duration: .85, ease: [0.72, 0, 0.35, 1] }

export const translate = {
  initial: {
    y: 9.5,
    opacity: 0,
  },
  enter: ({
    y: 0,
    opacity: 1,
    transition: { duration: .7, ease: [0.66, 0, 0.45, 1] }
  }),
}

export const translate2 = {
  initial: {
    y: 9.5,
    opacity: 0,
  },
  enter: ({
    y: 0,
    opacity: 1,
    transition: { duration: .7, ease: [0.66, 0, 0.45, 1], delay: 1.9 }
  }),
}