// This is a JavaScript Quiz from BFE.dev

console.log(/^4\d\d$/.test('404')) // true
console.log(/^4\d\d$/.test(404)) // true
console.log(/^4\d\d$/.test(['404'])) // true
console.log(/^4\d\d$/.test([404]))

// regexp
// syntax : /pattern/modifier(s)

// modifiers :
// g - perform global search, find all matches
// i - perform case insensitive matching
// m - perform multiline matching 


// brackets : used to find a range of characters 
// [abc] - find any character between brackets 
// [^abc] - find any character NOT betweent the brackets
// [0-9] - find any digits between  the characters
// [^0-9] find any NON digits between the characters


// metacharacters : characters with a special meaning

// . - find a single character 
// \w - find a word character 
// \W - find a non-word character 
// \d - find a digit
// \D - find a non digit character
// \s - find a whitespace character
// \S - find a non whitespace character
// \b find a match at the beginning/end of the word, beginning like this : \bHI, end like this : HI\b
// \B - find a match but not at the beginning/end of the word

// quantifiers:
// n+ - matches any string that contains at least one n
// n* - matches any string that contains zero or more occurence of n 
// n? - matches any string that contains zero or one occurence of n
// n{X} - matches any string that contains a sequence of X n's
// n$ - matches any string with n at the end of it
// ^n - matches any string with n at the beginning of it 
// ?=n - matches any string that is followed by a specific string n
// ?!n - matches any string that is not followed by a specific string n

// regexp methods : 
// exec() - tests for a match in a string, returns the first match
// test() - tests for a matching in a string returns true or false 
