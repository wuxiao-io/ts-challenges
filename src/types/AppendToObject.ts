type AppendToObject<T extends object, U extends string, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V
}

export default AppendToObject
