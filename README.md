# Object_String_Project
1. Write a function named `truncate` to truncate a string to a certain number of words.
→Here we go
The truncate function takes two parameters: the string to truncate (str) and the desired number of words (num).

First, we split the string into an array of words using the split method with a space as the separator. We then check if num in the string is less than or equal to the desired number of words. If it is, we return the original string unchanged.

If the num is greater than the desired number, we use the slice method to extract the first numWords words from the words array, join them together with a space using the join method to the end of the resulting string.

Finally, we return the truncated string.

 2. Write a JavaScript function to alphabetize a given string. 
 //Here we go
 This alphabetize_string method takes one parameter 'str'.First, we convert string into lowercase by using toLowerCase() method and then split it into Array by using split method without space.

 Second, we use sort method on 'newStr'.By the default sort order is ascending and Last, we use join method without space to get resulting string.

 Finally, we returned the sorted String.

 3. Write a JavaScript function to convert ASCII to Hexadecimal format.
 →Here we go
 This function takes a string as input and returns a hexadecimal representation of the ASCII codes of the characters in the string. It uses a for loop to iterate over the characters in the input string, and the charCodeAt() method to get the ASCII code for each character. The toString() method is used to convert the ASCII code to a hexadecimal string, and the resulting hexadecimal strings are concatenated to form the final result.

 4. Write a function named `humanize` to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.
 → Here we go
 This function takes in a number as its argument and returns the humanized version of that number with the correct suffix (e.g. "1st", "2nd", "3rd", "4th", etc.)

 The function first checks if the number is between 11 and 13, since in those cases the suffix is always "th". If not, it uses a switch statement to determine the correct suffix based on the last digit of the number.

6. Write a function named `compare_to_sort` to sort the following array of objects by title value.
→Here We go
This function 'compare_to_sort' takes as array of objects arguments and return the sorted array of Objects.
The comparison function takes two objects, a and b, and compares their title values using the toLowerCase method to make the comparison case-insensitive.
The comparison function returns -1 if a should come before b, 1 if a should come after b, and 0 if they are equal. The sort method uses this comparison function to sort the array in ascending order.

7. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.
→Here We go
This function takes 3 arguments:
1)'start'-a string representing the start of the range.
2)'end'-a string representing the end of the range.
3)'step'-step between values in the range.

First, create two variables 'result' with empty value and second 'current'.Function works by converting the 'start' & 'end' strings to their ASCII character codes using the charCodeAt method.
By using push method add character to result and by using String.fromCharCode() method convert these characters
to string.
Last return result. The resulting string has more than one character.

8. Write a JavaScript program to create a Clock.
→Here We go
Create a class my_Clock which have two properties:
1)template
2)intervalId
and two methods:render(), run()
In render method create let date = new Date(); It creates a new instance of the Date object and assigns it to the variable date. This will set date to the current date and time at the moment the code is executed.

You can then use the date variable to access various properties and methods of the Date object to manipulate and display the date and time in various formats.

To show output every second use setInterval method.
In this case, the setInterval() method is called with an arrow function as its first argument. The arrow function contains a call to another function called render() that is presumably defined elsewhere in the code.

The second argument to setInterval() is a number representing the interval (in milliseconds) at which to execute the function. In this case, the function will be executed every 1000 milliseconds, or 1 second.


9. Write a JavaScript function to print all the methods in an JavaScript object.
→Here We go
This function all_properties returns properties which are also works as methods.To get all properties use 'Object.getOwnPropertyNames' and after use filter method to get properties which are function also.

10. Write a JavaScript function to print all the properties in an JavaScript object.
→Here We go
This function takes arguments like object returns all properties regarding passing objects.Use Object.getOwnPropertyNames()to get all properties.  