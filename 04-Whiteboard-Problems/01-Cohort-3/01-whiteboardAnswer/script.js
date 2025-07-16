// Susie is now planning a party and wants to create a function to send personalized invitations. She wants the function to send out the right kind of invitation, depending on the information received about the guest: the guest's name and their age. If the guest is older than 21, the invitation should say, "You're invited, " + Name + "! Let's party!" If the guest is 21 or younger, the invitation should say, "Sorry, " + Name, + "you're too young to join the party."

// Additionally, Susie has a VIP guest named Johnny who should receive a special invitation regardless of his age. If Johnny is invited, the message should be, "Hey Johnny, you're the VIP! Let's have an amazing party!"

// Help Susie by writing the function according to her requirements.

function susiesParty(name, age) {
    if (name === "Johnny") {
        return "Hey Johnny, you're the VIP! Let's have an amazing party!"
    }
    if (age < 21) {
        return "Sorry " + name + "," + " you're too young to join the party."
    } else {
        return "You're invited, " + name + "! Let's party!"
    }
}

// Test Johnny
console.log(susiesParty("Johnny", 17))
// Test Dan
console.log(susiesParty("Dan", 21))
// Test young Dan
console.log(susiesParty("Dan", 20))
// Test old Johnny
console.log(susiesParty("Johnny", 45))