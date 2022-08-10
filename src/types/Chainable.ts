// https://github.com/type-challenges/type-challenges/blob/main/questions/00012-medium-chainable-options/README.md
type Chainable<T = {}> = {
  option: <K extends string, V>(key: K extends keyof T ?
    V extends T[K] ? never : K
    : K,
    value: V) => Chainable<Omit<T, K> & Record<K, V>>
  get: () => T;
}

type Chainable2<T = {}> = {
  option: <K extends string, V>(key: K, value: V) => Chainable2<T & Record<K, V>>,
  get: () => T
}

// Excellent answer
// https://github.com/type-challenges/type-challenges/issues/13951
