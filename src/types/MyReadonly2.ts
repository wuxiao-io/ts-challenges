type MyReadonly2<T extends object, K extends keyof T = keyof T> = {
  [P in keyof T as (P extends K ? never : P)]: T[P]
} & {
  readonly [P in K]: T[P]
}

export default MyReadonly2
