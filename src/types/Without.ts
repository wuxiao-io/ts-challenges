type ToUnion<T> = T extends any[] ? T[number] : T
type Without<T extends any[], U> =
  T extends [infer R, ...infer F]
    ? R extends ToUnion<U>
      ? Without<F, U>
      : [R, ...Without<F, U>]
    : T;

export default Without
