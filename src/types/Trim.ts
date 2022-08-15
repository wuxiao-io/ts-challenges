type trim = ' ' | '\n' | '\t';

type Trim<S extends string> = S extends `${trim}${infer R}` ? Trim<R> : S extends `${infer R}${trim}` ? Trim<R> : S;

export default Trim
