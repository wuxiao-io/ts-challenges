type IsIndexSignature<Index> = string extends Index
    ? never
    : number extends Index
      ? never
      : symbol extends Index
        ? never
        : Index

// https://github.com/type-challenges/type-challenges/issues/15572
type RemoveIndexSignature1<Object> = {
  [
    i in keyof Object as
      IsIndexSignature<i> extends never ? never : i
    ]: Object[i];
}

// https://github.com/type-challenges/type-challenges/issues/14662
type RemoveIndexSignature2<T, P = PropertyKey> = {
  [K in keyof T as P extends K ? never : K extends P ? K : never] : T[K]
}
