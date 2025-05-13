/*
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnTitle = "A"
Output: 1
Example 2:

Input: columnTitle = "AB"
Output: 28
Example 3:

Input: columnTitle = "ZY"
Output: 701

result = result * 26 + num
*/

function excelSheetColumn(str) {
    // calculated the number value for each char in the string and rebase
    // calculate and add the result of each number in base 26
    let result = 0;
    for(let i = 0; i < str.length; i++) {
        let char = str[i]
        let number = char.charCodeAt(0) - 'A'.charCodeAt(0) + 1
        result = result * 26 + number
    }
    return result 
}

console.log(excelSheetColumn("AB"))