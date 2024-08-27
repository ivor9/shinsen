const transition = { duration: 1.2, ease: [0.76, 0, 0.34, 1]}

export const slideUp = {
  initial: {
    y: "0"
  },
  exit: {
    y: "100vh",
    transition
  }
}

export const slideDown = {
  initial: {
    y: "-100%"
  },
  enter: {
    y: "0",
    transition
  }
}

export const background = {
  initial: {
    y: "0"
  },
  exit: {
    y: "100vh",
    transition: { duration: 1.78, ease: [0.76, 0, 0.64, 1]}
  }
}

export const opacity = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {duration: 0.4}
  }
}






