type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

export default MyPick
