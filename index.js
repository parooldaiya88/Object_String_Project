/* 1. Write a JavaScript function to truncate a string to a certain number of words. */

function truncate(str, num) {
  //convert string to array by using split method
  let newStr = str.split(" ");
  //if given number is bigger than array length than return the string
  if (num >= newStr.length) {
    return str;
  } else {
    //use slice method to get a portion of an array
    const truncateArr = newStr.slice(0, num);
    //The join() method creates and returns a new string by concatenating all of the elements in an array
    return truncateArr.join(" ");
  }
}

console.log(truncate("The quick brown fox jumps over the lazy dog", 4)); // "The quick brown fox"

/* 2. Write a JavaScript function to alphabetize a given string. */

function alphabetize_string(str) {
  //toLowerCase() method returns the calling string value converted to lower case.
  let newStr = str.toLowerCase().split("");
  //sort method sort an array by the default sort order is ascending
  return newStr.sort().join("");
}

console.log(alphabetize_string("United States"));
//"adeeinsstttu"

/* 3. Write a JavaScript function to convert ASCII to Hexadecimal format.
 */
function ascii_to_hexa(str) {
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    //!The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
    //! toString() method returns a string representation the specified. for example  hexadecimal numbers(base 16)
    const hex = Number(str.charCodeAt(i).toString(16));
    newStr.push(hex);
  }
  return newStr.join("");
}

console.log(ascii_to_hexa("12")); //3132
console.log(ascii_to_hexa("100")); //313030

// /* 4. Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.r
//  */
function humanize(num) {
  if (typeof num !== "number") {
    return "function requires arguments as a number";
  }
  //if reminder is between
  if (num % 100 >= 11 && num % 100 <= 13) {
    return num + "th";
  }
  //Switch statements to check each cases to determine suffix
  switch (num % 10) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}
console.log(humanize(1)); //"1st"
console.log(humanize(20)); //"20th"
console.log(humanize(302)); //"302nd"

// /* 5. Write a JavaScript function to get the successor of a string. */

function successor(str) {
  // Convert the string into an array of characters
  let arr = str.split("");

  // Set the carry variable to true
  let carry = true;

  // Iterate over the characters of the array from right to left
  for (let i = arr.length - 1; i >= 0; i--) {
    let char = arr[i];

    // If the character is alphanumeric, increment it
    if (/[0-9a-zA-Z]/.test(char)) {
      let code = char.charCodeAt(0);

      // Increment the character
      if (code === 57) {
        // Character is '9'
        code = 65; // Set character to 'A'
      } else if (code === 90) {
        // Character is 'Z'
        code = 97; // Set character to 'a'
      } else if (code === 122) {
        // Character is 'z'
        code = 48; // Set character to '0'
      } else {
        // Increment the character
        code++;
      }

      // Set the character in the array
      arr[i] = String.fromCharCode(code);

      // Reset the carry
      carry = false;

      // Break out of the loop
      break;
    } else {
      // Character is not alphanumeric
      arr[i] = "0"; // Set character to '0'
    }
  }

  // Check if there is still a carry
  if (carry) {
    arr.unshift("1"); // Add an additional character
  }

  // Join the array into a string and return it
  return arr.join("");
}

console.log(successor("abcd")); // "abce"
console.log(successor("THX1138")); // "THX1139"
console.log(successor("< >")); // "< >"
console.log(successor("1999zzz")); // "2000aaa"
console.log(successor("ZZZ9999")); // "AAAA0000"

// /* 6. Write a JavaScript function to sort the following array of objects by title value. */

function compare_to_sort(arrayOfObjects) {
  //sort method
  return arrayOfObjects.sort((a, b) => {
    //function returns -1 if a should come before b
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    //function returns 1 if 1 if a should come after b
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    //return 0 if they are equal
    return 0;
  });
}

let library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

console.log(compare_to_sort(library));

// /* 7. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds. */

function num_string_range(start, end, step) {
  const result = [];
  //!The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
  let current = start.charCodeAt(0);

  while (current <= end.charCodeAt(0)) {
    //!The String.fromCharCode() static method returns a string created from the specified sequence of UTF-16 code units.
    result.push(String.fromCharCode(current));
    current += step;
  }

  return result;
}

console.log(num_string_range("a", "z", 2));

// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

// /* 8. Write a JavaScript program to create a Clock.
//    `Note`: The output will come every second. */
class my_Clock {
  constructor({ template }) {
    //properties
    this.template = template;
    this.intervalId = null;
  }
  //methods
  render() {
    //Date is a built-in-object that represents a single moment in time.he new keyword creates a new instance of the Date object.
    let date = new Date();
    //getHours() method is a built-in function of the Date object that returns the hour of the day for a given Date object.
    //value between 0-23
    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    //getMinutes() method is a built-in function return minutes in the hour for a given Date.
    //value between 0-59
    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    //getSeconds() method is a built-in function return minutes in the hour for a given Date.
    //value between 0-59
    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  run() {
    //!setInterval() method repeatedly calls a function or executes a code snippet,with a fixed time delay between each call
    this.intervalId = setInterval(() => {
      return this.render();
    }, 1000);
  }
}

let clock = new my_Clock({ template: "h:m:s" });
clock.run();
// "14:37:42";
// "14:37:43";
// "14:37:44";
// "14:37:45";
// "14:37:46";
// "14:37:47";

// /* 9. Write a JavaScript function to print all the methods in an JavaScript object.
//  */

//!The Object.getOwnPropertyNames() static method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.

function all_properties(obj) {
  return Object.getOwnPropertyNames(obj).filter((property) => {
    return typeof obj[property] == "function";
  });
}

console.log(all_properties(Array));
//  ["isArray", "from", "of"]
console.log(all_properties(Math));
// ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"]

// /* 10. Write a JavaScript function to print all the properties in an JavaScript object. */

function allPropertiesNames(obj) {
  return Object.getOwnPropertyNames(obj);
}

console.log(181, allPropertiesNames(Math));
// ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"]
console.log(allPropertiesNames(Array));
// ["length", "name", "prototype", "isArray", "from", "of"]
