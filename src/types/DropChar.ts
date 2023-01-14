type DropChar<S extends string, C extends string, Acc extends string = ''> =
  S extends `${infer F}${infer R}` ? F extends C ? DropChar<R, C, Acc> : DropChar<R, C, `${Acc}${F}`> : Acc;
