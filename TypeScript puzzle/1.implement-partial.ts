type Foo = {
    a: string
    b: number
    c: boolean
  }

  // type MyPartial<T> = {
  //   [P in keyof T]?: T[P] // for each property in T, create an optional property in MyPartial<T> with the same key and value type
  // };
  
type MyPartial<T> = {
  [K in keyof T]?: T[K] // for each property in T, create an optional property in MyPartial<T>, with the same key and value
}
  // below are all valid
  
  // const a: MyPartial<Foo> = {}
  
  // const b: MyPartial<Foo> = {
  //   a: 'BFE.dev'
  // }
  
  // const c: MyPartial<Foo> = {
  //   b: 123
  // }
  
  // const d: MyPartial<Foo> = {
  //   b: 123,
  //   c: true
  // }
  
  // const e: MyPartial<Foo> = {
  //   a: 'BFE.dev',
  //   b: 123,
  //   c: true
  // }