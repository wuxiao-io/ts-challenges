type MyCapitalize<S extends string> = S extends `${infer R}${infer U}` ? `${Uppercase<R>}${U}` : S;

export default MyCapitalize
