// An object representing a fantasy character's inventory
const inventory = {
  gold: 150,
  potions: ["healing", "mana", "strength"],
  weapons: ["sword", "bow", "dagger"],
};

// 1. FOR LOOP: Print each weapon in the inventory
console.log("Weapons in inventory:");
for (let i = 0; i < inventory.weapons.length; i++) {
  console.log("- " + inventory.weapons[i]);
}
// This loop uses a counter (i) and continues while i < weapons.length

// 2. WHILE LOOP: Count down gold in 25-coin increments
let remainingGold = inventory.gold;
console.log("\nSpending gold in 25-coin chunks:");
while (remainingGold >= 25) {
  console.log("Spent 25 gold, remaining: " + remainingGold);
  remainingGold -= 25;
}
// The condition is checked before each loop. If not updated, this could loop forever.

// 3. DO...WHILE LOOP: Try a potion at least once
let potionIndex = 0;
console.log("\nTrying potions:");
do {
  console.log("Used a " + inventory.potions[potionIndex] + " potion.");
  potionIndex++;
} while (potionIndex < inventory.potions.length);
// This guarantees the loop runs at least once, even if the array is empty.

// 4. FOR...OF LOOP: Iterate through potion names
console.log("\nPotion list using for...of:");
for (let potion of inventory.potions) {
  console.log("* " + potion.toUpperCase());
}
// for...of works directly with iterable elements like arrays and strings

// 5. FOR...IN LOOP: Display object keys and values
console.log("\nInventory contents:");
for (let key in inventory) {
  if (inventory.hasOwnProperty(key)) {
    let value = inventory[key];
    console.log(`${key}: ${Array.isArray(value) ? value.join(", ") : value}`);
  }
}
// for...in is used to loop through the keys of an object
// hasOwnProperty() ensures we only get properties that belong directly to the object

// 6. NESTED LOOPS: Display combinations of weapons and potions
console.log("\nWeapon and potion combos:");
for (let weapon of inventory.weapons) {
  for (let potion of inventory.potions) {
    console.log(`- Equip ${weapon}, drink ${potion}`);
  }
}
// Nested loops allow us to generate combinations or explore multi-dimensional data
