// Create a function that reverses a string:
// 'Hi My name is Antwi' => 'iwtnA si eman yM iH'

function reverse(str) {
  // check if empty return empty string
  if (str.length < 1) {
    return "";
  }
  // split the string
  const reversedStr = [];
  // loop through the string and rotate the last to begining in order
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr.push(str[i]);
  }
  // join the string back again
  const finalStr = reversedStr.join("");
  // return the string.
  return finalStr;
}

function reverse2(str) {
    return str.split('').reverse().join('')
}

console.log(reverse2("Hi My name is Antwi"));
