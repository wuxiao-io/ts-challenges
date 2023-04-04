import Reverse from './Reverse'

type FlipArgument<T extends (...args: any[]) => any> = T extends (...args: infer A) => infer R ? (...args: Reverse<A>) => R : never
type FlipArgument1<T extends (...args: any[]) => any> = (...args: Reverse<Parameters<T>>) => ReturnType<T>

export {
  FlipArgument,
  FlipArgument1
}
