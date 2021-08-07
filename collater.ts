//Collater

// Sort
const collater = new Intl.Collator("en");

const charactors = ["A", "C", "X", "E"];
console.log(charactors.sort(collater.compare));
// [ 'A', 'C', 'E', 'X' ]

const apple = ["Apple", "AppleA", "AppleY", "AppleW"];
console.log(apple.sort(collater.compare));
// [ 'Apple', 'AppleA', 'AppleW', 'AppleY' ]

// caseFirst
console.log("// caseFirst");
const upperCaseCallater = new Intl.Collator("en", { caseFirst: "upper" });
const lowerCaseCallater = new Intl.Collator("en", { caseFirst: "lower" });
const apple2 = ["apple", "Apple", "aPple", "APPPLE"];
console.log(apple2.sort(collater.compare));
console.log(apple2.sort(upperCaseCallater.compare));
console.log(apple2.sort(lowerCaseCallater.compare));
