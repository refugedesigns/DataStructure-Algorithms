/*
You are given a list of integers where each element represents the answer of a person in a room to the following question:

"How many other people (excluding yourself) are wearing the same t-shirt as you?"

Each integer x indicates that the person belongs to a group of x + 1 individuals (including themselves) who all wear the same t-shirt.

Your task is to compute the minimum number of people that must be in the room, assuming all responses are truthful and logically consistent.

📌 Examples
Example 1:
Input: [1, 4, 1]

Two people said "1", which implies groups of size 1 + 1 = 2.
→ These two can be grouped together.

One person said "4", meaning they belong to a group of 5.
→ Even if only one person says this, we must count all 5 people.

Output: 7
✅ 2 people (group of 2) + 5 people (group of 5) = 7 people

Example 2:
Input: [30, 30, 30]

Each person says "30", meaning each is in a group of 30 + 1 = 31.

Only 3 people gave this answer, but they can all fit into one group of 31.

Output: 31
✅ Minimum of one group of 31 covers all 3 respondents.
*/

function minimumPeople(array) {
    const countMap = new Map()
    let total = 0

    for(const answer of array) {
        countMap.set(answer, (countMap.get(answer) || 0) + 1)
    }

    for(const [answer, count] of countMap.entries()) {
        let groupSize = answer + 1
        let groupsNeeded = Math.ceil(count / groupSize)
        total += groupsNeeded * groupSize
    }

    return total
}

console.log(minimumPeople([1,4,1]))