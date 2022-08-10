type Pop<T extends any[]> = T extends [...infer Poped, infer Last] ? Poped : never;

export default Pop
