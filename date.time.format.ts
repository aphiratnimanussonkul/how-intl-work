const currentDate = new Date();

console.log(new Intl.DateTimeFormat().formatToParts(currentDate));
// [
//     { type: 'month', value: '8' },
//     { type: 'literal', value: '/' },
//     { type: 'day', value: '7' },
//     { type: 'literal', value: '/' },
//     { type: 'year', value: '2021' }
// ]

console.log(new Intl.DateTimeFormat().format(currentDate));
// 8/7/2021

console.log(
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(currentDate)
);
// Aug 7, 2021

console.log(
  new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "long",
    year: "2-digit",
  }).format(currentDate)
);
// August 07, 21

console.log(new Intl.DateTimeFormat("th").format(currentDate));
// 7/8/2564

console.log(
  new Intl.DateTimeFormat("th", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(currentDate)
);
// 7 สิงหาคม 2564

console.log(
  new Intl.DateTimeFormat("th", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }).format(currentDate)
);
// 07/08/64

console.log(
  new Intl.DateTimeFormat("th", {
    day: "numeric",
    month: "narrow",
    year: "numeric",
  }).format(currentDate)
);
// 7 ส.ค. 2564

console.log(
  new Intl.DateTimeFormat("th", {
    dateStyle: "full",
  }).format(currentDate)
);
// วันเสาร์ที่ 7 สิงหาคม พ.ศ. 2564

console.log(
  new Intl.DateTimeFormat("th", {
    dateStyle: "long",
  }).format(currentDate)
);
// 7 สิงหาคม 2564

console.log(
  new Intl.DateTimeFormat("th", {
    timeZoneName: "long",
  }).format(currentDate)
);
// 7/8/2564 เวลาอินโดจีน

console.log(
  new Intl.DateTimeFormat("en-US", {
    timeStyle: "long",
  }).formatToParts(currentDate)
);
// [
//   { type: "hour", value: "6" },
//   { type: "literal", value: ":" },
//   { type: "minute", value: "20" },
//   { type: "literal", value: ":" },
//   { type: "second", value: "59" },
//   { type: "literal", value: " " },
//   { type: "dayPeriod", value: "PM" },
//   { type: "literal", value: " " },
//   { type: "timeZoneName", value: "GMT+7" },
// ];

// dd-mm-yyyy
const dateParts = new Intl.DateTimeFormat("en", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
}).formatToParts();

console.log(
  `${dateParts[2].value}-${dateParts[0].value}-${dateParts[4].value}`
);

// dd-MMM-yyyy
const dateParts2 = new Intl.DateTimeFormat("en", {
  day: "2-digit",
  month: "short",
  year: "numeric",
}).formatToParts();
console.log(
  `${dateParts2[2].value}-${dateParts2[0].value}-${dateParts2[4].value}`
);

console.log(
  new Intl.DateTimeFormat("en", {
    dateStyle: "full",
  }).formatToParts(currentDate)
);
// [
//   { type: 'weekday', value: 'Monday' },
//   { type: 'literal', value: ', ' },
//   { type: 'month', value: 'August' },
//   { type: 'literal', value: ' ' },
//   { type: 'day', value: '9' },
//   { type: 'literal', value: ', ' },
//   { type: 'year', value: '2021' }
// ]
