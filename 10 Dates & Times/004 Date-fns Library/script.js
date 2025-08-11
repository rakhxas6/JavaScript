const now = new Date();

// console.log(dateFns.isToday(now))

//formatting options

// console.log(dateFns.format(now, "yyyy"));
// console.log(dateFns.format(now, "MMMM"));
// console.log(dateFns.format(now, "MMM"));
// console.log(dateFns.format(now, "dddd")); //day of month
// console.log(dateFns.format(now, "Do")); //day of year
// console.log(dateFns.format(now, "eeee"));

// day of year
// console.log(dateFns.format(now, "ddd"));
console.log(dateFns.format(now, "iiii Do MMMM yyyy"));

// comparing dates

const before = new Date("August 11 2025 18:00:00");


console.log(dateFns.formatDistance(now, before));