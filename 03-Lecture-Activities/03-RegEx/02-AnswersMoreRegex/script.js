// 1. Match Specific Letters/Characters =============================
const string1 = "The sunset was beautiful but the forest was dark.";
const regex1 = /\bs[a-z]*t\b | \bf[a-z]*t\b/g
console.log(string1.match(regex1));

// 2. Explore Lazy Matching =======================================
const htmlString = "<div><p>Hello</p></div>";

// Greedy Matching
const greedyRegex = /<.*>/;
const greedyMatch = htmlString.match(greedyRegex);
console.log("Greedy Match:", greedyMatch[0]);

// Lazy Matching
const lazyRegex = /<.+?>/;
const lazyMatch = htmlString.match(lazyRegex);
console.log("Lazy Match:", lazyMatch[0]);
console.log("Lazy Match array:", lazyMatch)

// 3. Master Quantifier Usage
const string = "Email me at john@example.com or jane.doe@test.co.uk.";
const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
console.log(string.match(regex));