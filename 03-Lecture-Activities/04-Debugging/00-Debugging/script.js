const calculate = () => {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operation = document.getElementById('operation').value;
    let result;
    
    const convertedNum1 = Number(num1)
    const convertedNum2 = Number(num2)

    console.log(typeof convertedNum1)

    switch (operation) {
      case "add":
        result = convertedNum1 + convertedNum2;
        break;
      case "subtract":
        result = convertedNum1 - convertedNum2;
        break;
      case "multiply":
        result = convertedNum1 * convertedNum2;
        break;
      case "divide":
        if (convertedNum2 === 0) {
          result = "You can't divide by 0.";
        } else {
          result = convertedNum1 / convertedNum2;
        }
        break;
      default:
        result = "Invalid operation";
    }

    document.getElementById('result').innerText =`Result: ${result}` ;
}
