# More Regex Activities
These activities will help you practice the concepts discussed in today's lecture.

## Match Specific Letters/Characters

**Activity:** Write a regex pattern to match words that start with the letter "s" and end with the letter "t" in a given string.
**Sample string:** "The sunset was beautiful."
**Expected output:** Match "sunset".
**HINT:** Explore the word boundary `\b` for help with this.

## Explore Lazy Matching

**Activity:** Explore lazy matching by comparing it with greedy matching in regex.
**Task:** Write two regex patterns to extract HTML tags from an HTML string—one using greedy matching and the other using lazy matching.
**Sample string:** "<div><p>Hello</p></div>"
**Expected output:** For greedy matching, match "<div><p>Hello</p>". For lazy matching, match each individual tag ("<div>", "<p>", "</p>", "</div>").

## Master Quantifier Usage:

**Activity:** Practice using quantifiers to match specific patterns.
**Task:** Write a regex pattern to match a valid email address.
**Sample string:** "Email me at john@example.com or jane.doe@test.co.uk."
**Expected output:** Match "john@example.com" and "jane.doe@test.co.uk".
**HINT:** Explore matching a specific number of occurrences `{n}` for help wih this.