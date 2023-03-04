type PickByType1<T, U> = {
  [K in keyof T]: T[K] extends U ? T[K] : never
}[keyof T]

type PickByType2<T, U> = Pick<T, {
  [K in keyof T]: T[K] extends U ? K : never
}[keyof T]>

type PickByType3<T, U> = Pick<T, {
  [K in keyof T]: Extract<T[K], U> extends never ? never : K;
}[keyof T]>;

type PickByType4<T, U> = Pick<T, {
  [K in keyof T]: Extract<T[K], U> extends never ? never : K;
}[keyof T]>

export {
  PickByType1,
  PickByType2,
  PickByType3,
  PickByType4
}
