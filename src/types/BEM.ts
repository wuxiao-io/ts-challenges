type BEM<B extends string, E extends string[], M extends string[]> =
  `${B}${E extends [] ? '' : `__${E[number]}`}${M extends [] ? '' : `--${M[number]}`}`

export default BEM

type A1 = BEM<'btn', ['price'], ['warning', 'success']>
const a: A1 = 'btn__price--success'
console.log(a)

type Test = ['a', 'b'][number]; // a | b

type A = 'a' | 'A'
type B = 'b' | 'B'

type C = `${A}${B}` // => 'ab' | 'Ab' | 'aB' | 'AB'
