type AppendArgument<Fn extends Function, A> = Fn extends (...args: infer B) => infer R ? (...args: [...B, A]) => R : never;

export default AppendArgument
