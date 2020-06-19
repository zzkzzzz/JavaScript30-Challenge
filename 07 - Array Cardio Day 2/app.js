// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const one = people.some((p) => {
  const currentyear = new Date().getFullYear();
  return currentyear - p.year >= 19;
});
console.log({ one });
// Array.prototype.every() // is everyone 19 or older?
const two = people.every((p) => {
  const currentyear = new Date().getFullYear();
  return currentyear - p.year >= 19;
});
console.log({ two });

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const three = comments.find((comment) => comment.id == 823423);
console.log(three);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const four = comments.findIndex((comment) => comment.id == 823423);
console.log(four);
const newComments = [...comments.slice(0, four), ...comments.slice(four + 1)];
console.log(newComments);
