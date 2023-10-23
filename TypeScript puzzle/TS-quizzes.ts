// ----------------------------------------------       BIGFRONTEND.DEV TYPESCRIPT       ----------------------------------------------


// 1. Partial<T> returns a type whichs represents all subsets of type T.
// Please implement MyPartial<T> by yourself.
type MyPartial<T> = {[K in keyof T]?: T[K]}


// 2. As the opposite of Partial<T>, Required<T> sets all properties of T to required.
// Please implement MyRequired<T> by yourself.
type MyRequired<T> = {[K in keyof T]-?: T[K]}


// 3. Readonly<T> returns a type that sets all properties of T to readonly.
// Pleaes implement MyReadonly<T> by yourself.
type MyReadonly<T> = { readonly [K in keyof T]: T[K]}


// 4. Record<K, T> returns an object type with keys of K and values of T.
// Please implement MyRecord<K, V> by yourself.
// Notice that property key could only be number | string | symbol.
type MyRecord<K extends number | string | symbol, T> = {[P in K]: T}


// 5. Pick<T, K>, as the name implies, returns a new type by picking properties in K from T.
// Please implement MyPick<T, K> by yourself.
type MyPick<T, K extends keyof T> = {[P in K]: T[P]} // first extends keys of T


// 6. Omit<T, K> returns a new type by picking the properties in T but not in K.
// Please implement MyOmit<T, K> by yourself.
type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}
type AltMyOmit<T, K extends keyof any> = {
  [key in keyof T as key extends K ? never : key] : T[key]
}


// 7. Exclude<T, K> returns a type by removing from T the union members that are assignable to K.
// Please implement MyExclude<T, K> by yourself.
type MyExclude<T, K> = T extends K ? never : T;


// 8. As the opposite of Exclude<T, K>, Extract<T, U> returns a type by extracting union members from T that are assignable to U.
// Please implement MyExtract<T, U> by yourself.
type MyExtract<T, K> = T extends K ? T : never;


// 9. NonNullable<T> returns a type by excluding null and undefined from T.
// Please implement MyNonNullable<T> by yourself.
type MyNonNullable<T> = T extends null | undefined ? never : T;


// 10. For function type T, Parameters<T> returns a tuple type from the types of its parameters.
// Please implement MyParameters<T> by yourself.
type MyParameters<T> = T extends (...args: infer U) => any ? U : never;


// 11. Parameters<T> handles function type. Similarly, ConstructorParameters<T> is meant for class, it returns a tuple type from the types of a constructor function T.
// Please implement MyConstructorParameters<T> by yourself.
type MyConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer U) => any ? U : never;


// 12. Similar to Parameters<T>, ReturnType<T>, as the name says itself, returns the return type of function type T.
// Please implement MyReturnType<T> by yourself.
type SecondReturnType<T> = T extends (...args: any[]) => infer R ? R : never;


// 13. For a constructor function type T, InstanceType<T> returns the instance type.
// Please implement MyInstanceType<T> by yourself.
type MyInstanceType<T extends new (...args: any[]) => any> = T extends new (...args: any[]) => infer R ? R : never;


// 14. For a function type T, ThisParameterType<T> extracts the this type. If this is not set, unknown is used.
// Please implement MyThisParameterType<T> by yourself.
type MyThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any ? U : unknown;


// 15. When Function.prototype.bind() is used, the returned function has a bound this. OmitThisParameter<T> could be used to type this.
// Please implement MyOmitThisParameter<T> by yourself.
type MyOmitThisParameter<T extends Function> = T extends (this: any, ...args: any) => infer R ? () => R : never;


// 16. Please implement FirstChar<T> to get the first character of a string.
type MyFirstChar<T extends string> = T extends `${infer U}${string}` ? U : never;


// 17. Similar to FirstChar<T>, please implment LastChar<T> to get the last character.
type LastChar<T extends string> = T extends `${infer F}${infer L}` ? L extends '' ? F : LastChar<L> : never;


// 18. Given a tuple type, implement TupleToUnion<T> to get a union type from it.
type TupleToUnion<T extends any[]> = T extends [infer Fst, ...infer Rest] ? Fst | TupleToUnion<Rest> : never;
type MyTupleToUnion<T extends any[]> = T[number];

type MyTuple = [string, number, boolean]
let myTuple: MyTuple = ['hello', 12, true]
let tupleToUnion: TupleToUnion<MyTuple>


// 19. Similar to 16. FirstChar<T>, please implement FirstItem<T> to obtain first item of a tuple type.
type FirstItem<T extends any[]> = T extends [infer F, ...infer R] ? F : never;

// type A = FirstItem<[string, number, boolean]> // string
// type B = FirstItem<['B', 'F', 'E']> // 'B'


// 20. Please implement a utility type IsNever<T> which returns true if T is never and false otherwise.
type IsNever<T> = [T] extends [never] ? true : false;
// type A = IsNever<never> // true
// type B = IsNever<string> // false
// type C = IsNever<undefined> // false


// 21. Similar to 19. FirstItem<T>, please implement LastItem<T> to obtain last item of a tuple type.
type LastItem<T extends any[]> = T extends [...infer R, infer L] ? L : never;
// type A = LastItem<[string, number, boolean]> // boolean
// type B = LastItem<['B', 'F', 'E']> // 'E'
// C = LastItem<[]> // never


// 22. Given a string literal type, please implement StringToTuple<T> to genrate a tuple type by spreading each characters.
type StringToTuple<T extends string> = T extends `${infer F}${infer R}` ? [F, ...StringToTuple<R>] : []; // while recursion, add F (first string) to the tuple
// type A = StringToTuple<'BFE.dev'> // ['B', 'F', 'E', '.', 'd', 'e','v']
// type B = StringToTuple<''> // []


// 23. Here is an easy problem, please implement LengthOfTuple<T> to return the length of tuple.
type LengthOfTuple<T extends any[]> = T['length']
// type A = LengthOfTuple<['B', 'F', 'E']> // 3
// type B = LengthOfTuple<[]> // 0


// 24. Implement LengthOfString<T> to return the length of a string.
type AltStringToTuple<T extends string> = T extends `${infer F}${infer R}` ? R extends '' ? [F] : [F, ...StringToTuple<R>] : []
type LengthOfString<T extends string> = AltStringToTuple<T>['length']
// type A = LengthOfString<'BFE.dev'> // 7
// type B = LengthOfString<''> // 0


// 25. Implement UnwrapPromise<T> to return the resolved type of a promise.
type UnwrapPromise<T extends Promise<any>> = T extends Promise<infer U> ? U : never;
// type A = UnwrapPromise<Promise<string>> // string
// type B = UnwrapPromise<Promise<null>> // null
// type C = UnwrapPromise<null> // Error


// 26. Implement ReverseTuple<T> to reverse a tuple type.
type ReverseTuple<T extends any[]> = T extends [infer H, ...infer R] ? [...ReverseTuple<R>, H] : [];
// type A = ReverseTuple<[string, number, boolean]> // [boolean, number, string]
// type B = ReverseTuple<[1,2,3]> // [3,2,1]
// type C = ReverseTuple<[]> // []


// 27. Implement Flat<T> to flatten a tuple type.
type Flat<T extends unknown[]> = T extends [infer H, ...infer R] ? [...(H extends unknown[] ? Flat<H> : [H]), ...Flat<R>] : [];
// type A = Flat<[1,2,3]> // [1,2,3]
// type B = Flat<[1,[2,3], [4,[5,[6]]]]> // [1,2,3,4,5,6]
// type C = Flat<[]> // []


// 28. Implement IsEmptyType<T> to check if T is empty type {}.
type IsEmptyType<T> = T extends Record<string,string> ? [keyof T] extends [never] ? true: false: false
// type A = IsEmptyType<string> // false
// type B = IsEmptyType<{a: 3}> // false
// type C = IsEmptyType<{}> // true
// type D = IsEmptyType<any> // false
// type E = IsEmptyType<object> // false
// type F = IsEmptyType<Object> // false


// 29. Implement Shift<T> to shift the first item of a tuple type.
type Shift<T extends any[]> = T extends [infer F, ...infer Rest] ? Rest : [];
// type A = Shift<[1,2,3]> // [2,3]
// type B = Shift<[1]> // []
// type C = Shift<[]> // []


// 30. Implement IsAny<T> to check against any.
type IsAny<T> = boolean extends (T extends never ? true : false) ? true : false; 
// type A = IsAny<string> // false
// type B = IsAny<any> // true
// type C = IsAny<unknown> // false
// type D = IsAny<never> // false


// 31. Implement Push<T, I> to return a new type by pushing new type into tuple type.
// type Push<T extends any[], I> = [...T, I]; // AI solution
type Push<T extends any[], I> = T extends [...args: infer F] ? [...F, I] : never;
// type A = Push<[1,2,3], 4> // [2,3]
// type B = Push<[1], 2> // [1, 2]
// type C = Push<[], string> // [string]


// 32. Similar to String.prototype.repeat(), implement RepeatString<T, C> to create a new type by repeating string T for C times.
type RepeatString<T extends string, C extends number, A extends string[] = []> = A['length'] extends C ? '' : `${T}${RepeatString<T, C, [T, ...A]>}`;
// type A = RepeatString<'a', 3> // 'aaa'
// type B = RepeatString<'a', 0> // ''