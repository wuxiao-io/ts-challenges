type MyExclude<T, U> = T extends U ? never : T
type Diff<O, O1> = {
  [P in MyExclude<keyof O | keyof O1, keyof O & keyof O1>]: (O & O1)[P]
}

export default Diff
