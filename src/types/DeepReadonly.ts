// https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.md

type DeepReadonly<T> = {
  readonly [P in keyof T] : T[P] extends Function ? T[P] : T[P] extends Object ? DeepReadonly<T[P]> : T[P];
}

export default DeepReadonly
