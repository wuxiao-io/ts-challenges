type Sign = '+' | '-'

type SignParcer<S extends string> = S extends `${Sign}${infer Num}`
  ? S extends `-${Num}` ? ['-', Num] : ['+', Num]
  : ['', S]

type PercentageParser<S extends string> = S extends `${infer Num}%`
  ? [...SignParcer<Num>, '%']
  : [...SignParcer<S>, '']

export default PercentageParser
