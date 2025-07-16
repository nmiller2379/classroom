# Temperature Converter

**Objective:** Write a function `convert_temperature(temp, scale)` that converts temperatures between Celsius and Fahrenheit.

- If scale is "C", convert temp to Fahrenheit.
- If scale is "F", convert temp to Celsius.
- Otherwise, return "Invalid scale".

**Examples:**
```python
convert_temperature(100, "C")  # Output: 212.0
convert_temperature(32, "F")   # Output: 0.0
convert_temperature(100, "X")  # Output: Invalid scale
```
### Mathematics Behind Temperature Conversion:
To convert between Celsius (**C**) and Fahrenheit (**F**), use the following formulas:

1. **Celsius to Fahrenheit:**  
   F = (C * 9/5) + 32
2. **Fahrenheit to Celsius:**  
   C = (F - 32) * 5/9

​
 
