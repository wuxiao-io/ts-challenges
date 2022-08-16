type StringToUnion<T extends string, N extends string[] = []> = T extends `${infer F}${infer Rest}` ? StringToUnion<Rest, [...N, F]> : N[number];

export default StringToUnion
