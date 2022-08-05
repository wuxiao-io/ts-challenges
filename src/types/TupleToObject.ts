type TupleToObject<T extends readonly PropertyKey[]> = {
  [TKey in T[number]]: TKey
}

export default TupleToObject
