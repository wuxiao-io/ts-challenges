type Flatten<S extends any[], R extends any[] = []> =
  S extends [infer X, ...infer Y]
    ? X extends any[]
      ? Flatten<[...X, ...Y], R>
      : Flatten<[...Y], [...R, X]>
    : R;

export default Flatten
