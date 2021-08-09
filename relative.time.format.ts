console.log(new Intl.RelativeTimeFormat("en").format(-1, "day"));
// 1 day ago

console.log(new Intl.RelativeTimeFormat("en").format(-1, "week"));
// 1 week ago

console.log(new Intl.RelativeTimeFormat("en").format(-1, "hours"));
// 1 hour ago

console.log(new Intl.RelativeTimeFormat("th").format(-1, "hours"));
// 1 ชั่วโมงที่ผ่านมา

console.log(
  new Intl.RelativeTimeFormat("th", { numeric: "always" }).format(1, "year")
);
// ในอีก 1 ปี

console.log(
  new Intl.RelativeTimeFormat("th", { numeric: "auto" }).format(1, "year")
);
// ปีหน้า

console.log(
  new Intl.RelativeTimeFormat("th", { numeric: "always" }).format(-1, "week")
);
// 1 สัปดาห์ที่ผ่านมา

console.log(
  new Intl.RelativeTimeFormat("th", { numeric: "auto" }).format(-1, "week")
);
// สัปดาห์ที่แล้ว

console.log(new Intl.RelativeTimeFormat("en").formatToParts(-3, "minute"));
// [
//   { type: "integer", value: "3", unit: "minute" },
//   { type: "literal", value: " minutes ago" },
// ];
