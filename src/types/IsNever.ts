type IsNever<T> = [T] extends [never] ? true : false;

export default IsNever
