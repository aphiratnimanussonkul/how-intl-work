const collator = new Intl.Collator("en");

const charactors = ["A", "C", "X", "E"];
console.log(charactors.sort(collator.compare));
// [ 'A', 'C', 'E', 'X' ]

const apple = ["Apple", "AppleA", "AppleY", "AppleW"];
console.log(apple.sort(collator.compare));
// [ 'Apple', 'AppleA', 'AppleW', 'AppleY' ]

// caseFirst
console.log("// caseFirst");
const upperCaseCallater = new Intl.Collator("en", { caseFirst: "upper" });
const lowerCaseCallater = new Intl.Collator("en", { caseFirst: "lower" });
const apple2 = ["apple", "Apple", "aPple", "APPPLE"];
console.log(apple2.sort(collator.compare));
console.log(apple2.sort(upperCaseCallater.compare));
console.log(apple2.sort(lowerCaseCallater.compare));
// [ 'apple', 'aPple', 'Apple', 'APPPLE' ]
// [ 'Apple', 'aPple', 'apple', 'APPPLE' ]
// [ 'apple', 'aPple', 'Apple', 'APPPLE' ]

