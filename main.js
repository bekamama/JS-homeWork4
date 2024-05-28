// Homework 4A

const replaceAll = (str, valueToReplace, valueToReplaceWith) => {
  const parts = str.split(valueToReplace);
  return parts.join(valueToReplaceWith);
};

const originalString = "Hello world, world is beautiful!";
const newString = replaceAll(originalString, "world", "universe");

console.log(newString); // Output: "Hello universe, universe is beautiful!"

// Homework 4B

const capitalizeWords = (sentence) => {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const sentence = "the euro2024 tournament will be an exciting event for football fans across the globe.";
const capitalizedSentence = capitalizeWords(sentence);

console.log(capitalizedSentence); 
// Output: "The Euro2024 Tournament Will Be An Exciting Event For Football Fans Across The Globe."

// Homework 4C

const sortUsersByAge = (users) => {
  return users.sort((a, b) => a.age - b.age);
};

const users = [
  { name: 'Tarieli', age: 35 },
  { name: 'Avtandili', age: 28 },
  { name: 'Fridoni', age: 40 },
  { name: 'Tinatini', age: 22 },
  { name: 'Nestani', age: 25 },
  { name: 'Darejani', age: 30 }
];

const sortedUsers = sortUsersByAge(users);

console.log(sortedUsers);
// Output:
//   { name: 'Tinatini', age: 22 },
//   { name: 'Nestani', age: 25 },
//   { name: 'Avtandili', age: 28 },
//   { name: 'Darejani', age: 30 },
//   { name: 'Tarieli', age: 35 },
//   { name: 'Fridoni', age: 40 }

