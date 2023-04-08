type Whitespace = ' ' | '\n' | '\t';

type TrimRight<T extends string> =
  T extends `${infer Head}${Whitespace}`
    ? TrimRight<Head>
    : T;

export default TrimRight
