type ObjectEntries<T> = {
  [P in keyof Required<T>]: [P, T[P] extends undefined | infer U ? U : undefined]
}[keyof T];

export default ObjectEntries
