type GreaterThan<A extends number, B extends number, Count extends 1[] = []>
  = Count['length'] extends A
    ? false
      : Count['length'] extends B
        ? true
        : GreaterThan<A, B, [...Count, 1]>

export default GreaterThan
