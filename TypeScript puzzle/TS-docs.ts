// ----------------------------------------------       EXTENDS       ----------------------------------------------
// description : used to create a relationship between types, it express that one type is subtype of another type

type Person = {
    name: string;
    lastName: string;
    age: number;
}

type Programmer = Person & {
    profession: string;
    yearsOfExperience: number;
}

let webDeveloper: Programmer = {
    name: 'Jhon',
    lastName: 'Doe',
    age: 25,
    profession: 'Web developer',
    yearsOfExperience: 5
}

type Animal = {
    name: string;
    makeSound(): void;
}

type Cat<T extends Animal> = T & {
    breed: string;
    jump(): void;
}

let myCat: Cat<Animal> = {
    name: 'Felix',
    makeSound: () => 'meow',
    breed: 'British Short hair',
    jump: () => 'jump!'
}

myCat.makeSound()
myCat.jump()

// ----------------------------------------------       INFER       ----------------------------------------------
// description: used within conditional types into extract types from another types

type MathResult<T> = T extends (...args: any[]) => infer R ? R : never;
type AddFunction = (a: number, b: number) => number;

type AddResult = MathResult<AddFunction>;

// function add(x: number, y: number): AddFunction {
//   return x + y;
// }

// const result: AddResult = add(5, 3);

// extract the return type of a function
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never
type Result = MyReturnType<() => string>; 

// extracting the element type of the array
type ElementType<T> = T extends (infer U)[] ? U : never;
type ArrayElement = ElementType<number[]>

let myNumbers: ArrayElement;
myNumbers = 12 // not [1, 2, 3], because we have extracted the type of the elements from above type function

// extracting value types of the object
type ValueOf<T> = T[keyof T]
type ObjectValue = ValueOf<{ name: string; age: number }>

type student = {
    name: string;
    isPartTime: boolean;
}

let studentValue: ValueOf<student> // string | boolean
studentValue = false // only string and boolean is acceptable, because we 

// extracting para types of a function
type myParameters<T> = T extends (...args: infer P) => any ? P : never;
type FunctionParameters = myParameters<(name: string, age: number) => void>


// ----------------------------------------------       KEYOF       ----------------------------------------------
// description : used to create a union type of all object keys. allows to access and manipulate the keys of the object.

type Car = {
    brand: string;
    model: string;
    year: number;
    bodyType: string;
    isInsured: boolean;
}

type KeysCar = keyof Car // 'brand' | 'model' | 'year' | 'bodyType' | 'isInsured'
let myCar: KeysCar = 'brand' // only ^^^^^^^ options are acceptable as value since it has KeysCar type

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

let car: Car = {
    brand: 'Lamborghini',
    model: 'Huracan EVO',
    year: 2023,
    bodyType: 'Coupe',
    isInsured: true,
}

let carBrand = getProperty(car, 'model') // returns 'Huracan EVO'


// ----------------------------------------------       TYPEOF       ----------------------------------------------
// description : used to obtain type information of a value or variable at compile time, allows to refer to the type of an expression without explicitly specifying

const secondPerson = {name: 'Jhon', age: 30}
type PersonType = typeof secondPerson // name: string, age: number

function printType<T>(value: T): void {
    const valueType: typeof value = value
    console.log(valueType)
}

printType(secondPerson); // { name: "John", age: 30 }


// ----------------------------------------------       MAPPED TYPES       ----------------------------------------------
// description : allows you to create a new types based on properties of existing types. You can modify, add and remove properties by mapping types.

type OptionalType<T> = {
    [K in keyof T]?: T[K]
}

type OptioanlCar = OptionalType<Car>

let optionalCar: OptioanlCar = {
    model: 'Lamborghini',
    year: 2020,
}

// * Modifiers -> modifiy properties of mapped types

// readonly - add readonly modifier to all props
// ? - make all props optional by adding ? to their names  
// - remove modifiers, like `propName-?`, makes the prop required if optional

type optionalStudent<student> = {
    [K in keyof student]?: student[K]
}

// * Key mapping via `as` -> allows you to change or remap properties names in mapped types, proved a way to explicitly define the new names for properties during mapping

type FullName<Person> = {
    [K in keyof Person as `full${Capitalize<K>}`]: Person[K];
}

// type MappedTypeWithNewKeyProperties<Type> = {
//     [Properties in keyof Type as NewKeyType]: Type[Properties]
// }

// filter out keys by producing never via a conditional type
type RemoveBodyTypeKey<Car> = {
    [Property in keyof Car as Exclude<Property, 'bodyType'>]: Car[Property]
}

// ----------------------------------------------       CONDITIONAL TYPES       ----------------------------------------------
// description : allows to create types depend on a condition or type relationships
// SomeType extends OtherType ? TrueType : FalseType;

type CheckType<T> = T extends string ? string : number;
type ResultA = CheckType<"Hello World"> // string
type ResultB = CheckType<42> // number

interface LabelID {
    id: number;
}

interface LabelName {
    name: string;
}

type NameOrID<T extends string | number> = T extends number ? LabelID : LabelName;

function createLabel<T extends number | string>(nameOrId: T): NameOrID<T> {
    throw "unimplemented";
}

let stringLabel = createLabel("typescript");
let numberLabel = createLabel(77);


// ----------------------------------------------       TEMPLATE LITERAL TYPES       ----------------------------------------------
// description : Template literal produces a new string literal type by concatenating the contents

type hello = 'hello'
type world = `${hello}, world` // 'hello world'

type EmailLocaleIDs = 'welcome_email' | 'heading_email'
type FooterLocaleIDs = 'footer_title' | 'footer_sendoff' 

type AllLocalIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`
// 'welcome_email_id', 'heading_email_id', 'footer_title_id', 'footer_sendoff_id'

// manual, repetetive
type manualPadding = 'padding-top' | 'padding-right' | 'padding-bottom' | 'padding-left'
type manualMargin = 'margin-top' | 'margin-right' | 'margin-bottom' | 'margin-left'

// with template literals 
type direction = 'top' | 'right' | 'bottom' | 'left'
type cssPadding = `padding-${direction}`
type cssmargin = `margin-${direction}`

type GetPaddingDirection<T> = T extends `padding-${infer R}` ? R : never;
type GetCSSProperty<T> = T extends `${infer P}-${string}` ? P : never;

let marginTop: GetCSSProperty<'margin-top'> // margin
let paddingLeft: GetPaddingDirection<'padding-left'> // left

type PaddingTop = GetPaddingDirection<"padding-top">;  // "top"
type PaddingBottom = GetPaddingDirection<"padding-bottom">; // "bottom"

// Recursive usage of template literals - Template literals mapping
type TrimRight<T extends string> = T extends `${infer R} ` ? TrimRight<R> : T;
let trimmedLOL: TrimRight<'LOL  '>