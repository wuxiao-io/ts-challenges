type isTrue<T> = T extends 0 | '' | false | [] | {[key: string]: never} ? false : true

type AnyOf<T extends any[]> = T extends [infer F, ...infer L] ? isTrue<F> extends true ? true : AnyOf<L> : false;

export default AnyOf
