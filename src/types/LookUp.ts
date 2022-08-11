type LookUp<U, T extends string> = U extends { type: T } ? U : never;

export default LookUp
