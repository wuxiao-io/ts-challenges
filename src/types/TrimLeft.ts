type TrimLeft<Str extends string> = Str extends `${' ' | '\n' | '\t'}${infer Rest}` ? TrimLeft<Rest> : Str;

export default TrimLeft
