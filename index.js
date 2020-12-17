// Challenge 1: REVERSE A STRING
// Return a string in reverse
// ex. reversestring('hello') === 'olleh'
function reverseString(str) {
  // 1. We use split(), .revserse() and .join("")
  // Split string into an array
  // const strArray = str.split("");
  // Use PrototypeArray.reverse
  // strArray.reverse();
  // This returns a reversed array
  // We now want to put back into a string w/ .join()
  // return strArray.join("");
  // We can clean this code up by stringing these methods together
  // return str.split("").reverse().join("");
  // 2. For loop - Decrement
  // let revString = "";
  // -1 is to address the undefined, without it str.length returns 0 - 5
  // for (let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i];
  // }
  // return " " + revString;
  // 3. For loop - Increment
  // let revString = "";
  // -1 is to address the undefined, without it str.length returns 0 - 5
  // for (let i = 0; i <= str.length - 1; i++) {}
  // return revString;
  // 4. "for of" loop
  // let revString = "";
  // for (let char of str) {
  //   revString = char + revString;
  // }
  // return revString;
  // 5. High order array function  "for each"
  // let revString = "";
  // // Need to convert string to array, we'll do this with split()
  // str.split("").forEach((char) => (revString = char + revString));
  // return revString;
  // 6. High order, more complex, 'reduce' method. Like higher order methods, like,
  // .map and .filter, .reduce return an array. So you can directly return
  // The first argument, revStr, is a variable we can instantiate, instead of
  // instantiating it its own variable
  // return str.split("").reduce((revStr, char) => {
  //   return char + revStr;
  // "" is what we want to begin with, which is an empty string
  // }, "");
}

// Call Function
// run: node index
// const output = reverseString("hello");

/////////////////////////////////////////////////////////////////////////////////////////////
// ***** Palindrome
// function isPalindrome(str) {
//   const revString = str.split("").reverse().join("");

//   return revString === str;
// }

// ****** Reverse Integer
function reverseInt(int) {
  // 1.
  // const revString = int.toString().split("").reverse().join("");
  // 2. For Each
  // let revStr = "";
  // convert integer to string then place in array
  // const str = int.toString().split("");
  // use For Each to reverse the array
  // str.forEach((element) => (revStr = element + revStr));
  // convert back to integer with parseInt
  // return parseInt(revStr) * Math.sign(int);
  // return parseInt(revString) * Math.sign(int);
}

function capitalizeLetters(str) {
  // this function return the string with the first letter of each word capitalized
  // const strArray = str.toLowerCase().split(" ");
  // for (let i = 0; i < strArray.length; i++) {
  //   console.log(strArray[i].substring(2));
  //   strArray[i] =
  //     strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1);
  // }
  // return strArray.join(" ");
  //////////////////////////////////////////////////
  // return str
  //   .toLowerCase()
  //   .split(" ")
  //   .map((word) => word[0].toUpperCase() + word.substr(1))
  //   .join(" ");
  /////////////////////////// Regular expression
  // return str.replace(/\b[a-z]/gi, function (char) {
  //   return char.toUpperCase();
  // });
}

function maxCharacter(str) {
  //////////// This function return the character that appears the most often ///////
  const charMap = {};
  str.split("").forEach(function (char) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  /////////// for-in loop is to loop over objects
  for (let item in charMap) {
    debugger;
  }
}

const output = maxCharacter(
  "This is the string that we'll be running in our function"
);
console.log(output);
