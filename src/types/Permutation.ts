type Permutation1<T, I = T> = [T] extends never[] ? [] : I extends infer R ? [R, ...Permutation1<Exclude<T, R>>] : []

export {
  Permutation1
}
