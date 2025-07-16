// Susie is now planning a party and wants to create a function to send personalized invitations. She wants the function to send out the right kind of invitation, depending on the information received about the guest: the guest's name and their age. If the guest is older than 21, the invitation should say, "You're invited, " + Name + "! Let's party!" If the guest is 21 or younger, the invitation should say, "Sorry, " + Name, + "you're too young to join the party."

// Additionally, Susie has a VIP guest named Johnny who should receive a special invitation regardless of his age. If Johnny is invited, the message should be, "Hey Johnny, you're the VIP! Let's have an amazing party!"

// Help Susie by writing the function according to her requirements.

// Output: An invitation
// Input: A number reprsenting age and a string representing a name

// Compare age to 21 use comparison operator
// If age is under 21 return concatenated string "Sorry, " + Name, + "you're too young to join the party."
// If age is over 21, return concatenates string "You're invited, " + Name + "! Let's party!"
// If it's Johnny return "Hey Johnny, you're the VIP! Let's have an amazing party!"

// Exampmles: ("Jordan", 13) => "Sorry, " + Jordan, + "you're too young to join the party."
// ("Miya", 22) => "You're invited, " + Miya + "! Let's party!"
// ("Johnny", 60) => "Hey Johnny, you're the VIP! Let's have an amazing party!" 
// ("Fred", 21) => "Sorry, " + Fred, + "you're too young to join the party."

function partyTime(num, str) {
  if (str === "Johnny") {
    return "Hey Johnny, you're the VIP! Let's have an amazing party!"
  } else if (num <= 21) {
    return "Sorry, " + str + " you're too young to join the party."
  } else if (num > 21) {
    return "You're invited, " + str + "! Let's party!"
  } 
}

console.log(partyTime(13, "Steve"))
console.log(partyTime(24, "Jordan"))
console.log(partyTime(27, "Johnny"))
console.log(partyTime(7, "Johnny"))
console.log(partyTime(21, "Lee"))