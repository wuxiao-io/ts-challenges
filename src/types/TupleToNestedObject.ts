type TupleToNestedObject<T extends unknown[], U> =
  T extends [infer First, ...infer Rest]
    ? First extends string
      ? Rest['length'] extends 0
        ? Record<First, U>
        : Record<First, TupleToNestedObject<Rest, U>>
      : {}
    : U

export default TupleToNestedObject
