const transition = { duration: .9, ease: [0.72, 0, 0.35, 1] }

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

export const opacity = {
  initial: {
      opacity: 0
  },
  open: {
      opacity: 1,
      transition: {duration: 0.35}
  },
  closed: {
      opacity: 0,
      transition: {duration: 0.35}
  }
}

export const height = {
  initial: {
    height: 0
  },
  enter: {
    height: "auto",
    transition
  },
  exit: {
    height: 0,
    transition
  }
}

export const background = {
  initial: {
      height: 0
  },
  open: {
      height: "100vh",
      duration: 20, ease: [0.72, 0, 0.35, 1]
  },
  closed: {
      height: 0,
      duration: 20, ease: [0.72, 0, 0.35, 1]
  }
}