type Shift<T extends unknown[]> = T extends [infer Head, ...infer Tail] ? [...Tail] : T;

export default Shift
