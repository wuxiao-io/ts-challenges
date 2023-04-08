type Chunk<
  T extends unknown[],
  U extends number,
  Acc extends unknown[] = [],
> =
  Acc['length'] extends U
    ? [Acc, ...Chunk<T, U>] // we reached our chunk size
    : T extends [infer Head, ...infer Tail]
      ? Chunk<Tail, U, [...Acc, Head]>
      : Acc extends []
        ? Acc
        : [Acc]
  ;

export default Chunk
