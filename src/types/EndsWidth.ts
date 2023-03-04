// Impl1
type EndsWith<T extends string, U extends string> = T extends `${infer R}${U}` ? true : false;

// Impl2
type RemoveFirst<T extends string> = T extends `${infer first}${infer rest}` ? rest : ''

type EndsWith2<T extends string, U extends string> = U extends '' ? true :
  T extends U ? true
  : T extends `${infer first}${infer rest}` ? U extends `${RemoveFirst<T>}`
  ? true : EndsWith2<RemoveFirst<T>, U>
  : false;

export {
  EndsWith,
  EndsWith2
}
