function add(a, b) {
    return a + b;
}

// To curry the function
function curriedAdd(a) {
    return function(b) {
        return a + b;
    };
}

const addFive = curriedAdd(5);
// console.log(addFive(3)); // Outputs: 8

function volume(length, width, height) {
    return length * width * height;
}

function curriedVolume(length) {
    return function(width) {
        return function(height) {
            return length * width * height;
        };
    };
}

// Using curriedVolume function
const volumeOfLength5 = curriedVolume(5);
const volumeOf5x4 = volumeOfLength5(4);
// console.log(volumeOf5x4(3)); // Outputs: 60

// Event handling
function handleEvent(eventType) {
    return function(event) {
        console.log(`Handling ${eventType} with event ${event.type}`);
    };
}

document.getElementById("myButton").addEventListener("click", handleEvent("click"));
document.getElementById("myInput").addEventListener("input", handleEvent("input"));

