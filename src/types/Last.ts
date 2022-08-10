type Last<T extends unknown[]> = T extends [...infer F, infer L] ? L : never;

export default Last
