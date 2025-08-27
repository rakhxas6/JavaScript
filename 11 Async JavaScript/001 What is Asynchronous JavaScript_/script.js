//? Synchronous JS

//? --JS can run ONE statement at a <time time datetime.
// console.log("line one"); //it runs first then so on
// console.log("line two");
// console.log("line three");

//? single threaded means same
// console.table([
//   { step: "statement 1", status: "done" },
//   { step: "statement 2", status: "done" },
//   { step: "statement 3 --loading db--", status: "pending" },
//   { step: "statement 4", status: "not started" },
// ]);


//? ASynchronous (Async) JS

//? - Governs how we perform tasks which take some time to complete (e.g. Getting data from a database)

//! Start something now and finish it later
console.table([
  { step: "statement 1", status: "done" },
  { step: "statement 2 --loading db--", status: "pending" },
  { step: "statement 3", status: "done" },
  { step: "statement 4", status: "done" },
  { step: "callback -cntd to st. 2", status: "done" },
]);
