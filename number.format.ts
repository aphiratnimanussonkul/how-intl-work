// locale: string;
// numberingSystem: string;
// style: string;
// currency?: string;
// currencyDisplay?: string;
// minimumIntegerDigits: number;
// minimumFractionDigits: number;
// maximumFractionDigits: number;
// minimumSignificantDigits?: number;
// maximumSignificantDigits?: number;
// useGrouping: boolean;

console.log(Intl.NumberFormat("en").format(9999));
// 9,999

console.log(Intl.NumberFormat("en", { useGrouping: false }).format(9999));
// 9999

console.log(Intl.NumberFormat("en", { minimumFractionDigits: 2 }).format(9999));
// 9,999.00

console.log(Intl.NumberFormat("en", { maximumFractionDigits: 2 }).format(9999));
// 9,999

console.log(
  Intl.NumberFormat("en", { minimumFractionDigits: 2 }).format(9999.555)
);
// 9,999.555

console.log(
  Intl.NumberFormat("en", { maximumFractionDigits: 2 }).format(9999.555)
);
// 9,999.556

console.log(
  Intl.NumberFormat("en", { minimumSignificantDigits: 2 }).format(9999.555)
);
// 9,999.555

console.log(
  Intl.NumberFormat("en", { maximumSignificantDigits: 2 }).format(9999.555)
);
// 10,000

//Currentcy System

console.log(
  Intl.NumberFormat("en", {
    currencyDisplay: "code",
    currency: "USD",
    style: "currency",
  }).format(9999)
);
// USD 9,999.00

console.log(
  Intl.NumberFormat("en", {
    currencyDisplay: "symbol",
    currency: "USD",
    style: "currency",
  }).format(9999)
);
// $9,999.00

console.log(
  Intl.NumberFormat("en", {
    currencyDisplay: "narrowSymbol",
    currency: "USD",
    style: "currency",
  }).format(9999)
);
// $9,999.00

console.log(
  Intl.NumberFormat("en", {
    currencyDisplay: "name",
    currency: "THB",
    style: "currency",
  }).format(9999)
);
// 9,999.00 US dollars

console.log(
  Intl.NumberFormat("th", {
    currencyDisplay: "code",
    currency: "THB",
    style: "currency",
  }).format(9999)
);
// THB 9,999.00

console.log(
  Intl.NumberFormat("th", {
    currencyDisplay: "symbol",
    currency: "THB",
    style: "currency",
  }).format(9999)
);
// ฺฺ฿9,999.00

console.log(
  Intl.NumberFormat("th", {
    currencyDisplay: "narrowSymbol",
    currency: "THB",
    style: "currency",
  }).format(9999)
);
// ฿9,999.00

console.log(
  Intl.NumberFormat("th", {
    currencyDisplay: "name",
    currency: "THB",
    style: "currency",
  }).format(9999)
);
// 9,999.00 บาทไทย

// Unit system
console.log(
  Intl.NumberFormat("en", { unit: "kilometer-per-hour", style: "unit" }).format(
    120
  )
);
// 120 km/h

console.log(
  Intl.NumberFormat("en", {
    unit: "liter",
    style: "unit",
    unitDisplay: "long",
  }).format(120)
);
// 120 liters

console.log(
  Intl.NumberFormat("en", {
    unit: "liter",
    style: "unit",
    unitDisplay: "narrow",
  }).format(120)
);
// 120L

// Percent
console.log(Intl.NumberFormat("en", { style: "percent" }).format(1));
// 100%

console.log(Intl.NumberFormat("en", { style: "percent" }).format(0.483));
// 48%

console.log(
  Intl.NumberFormat("en", {
    style: "percent",
    maximumFractionDigits: 3,
  }).format(0.483)
);
// 48.3%

//Decimal
console.log(Intl.NumberFormat("en", { style: "decimal" }).format(9999.99));
// 9,999.99
