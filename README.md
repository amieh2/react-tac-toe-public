# React-Tac-Toe

This module is a Tic-Tac-Toe game played in the browser, completed as part of a [course](http://arch-joelross.rhcloud.com/) at the UW ISchool. 

The below questions should be answered (in detail!) regarding your submission!


##### 1. Does using a Model-View-Controller architecture make it easier to change your game in the future? How many places would you need to make changes to your code to make this a 5x5 game of Tic-Tac-Toe?

>Model-View-Controller makes the application more maintainable by isolating each component with their own logic and implementation.  Having all the specific UI code in the view if we wanted to change the UI framework it wouldn't require any modifications to the model or controller.  If we wanted to change specific rules in the game it would only require changes in the Controller.  As far as making a board size of a 5x5 matrix the only place that would require code changes is in the file constants.js by changing the variable exports.MATRIX_SIZE = 5.


##### 2. Why did I say that an `Array` is the best data structure to represent the game's grid of cells? Why not a 2D-array (Array of Arrays), or an Object, or a Linked-List, or a Tree? 

> I used a 2D array which gave a better visualization for a 2D board since it contains both rows and columns and made it clearer when assigning a value to the board such as board[row][col] = val; since I already had the row and column based on the table's click event for a specific cell.  My implementation could have been done using an Array by simply adding the row and column to get the index of the array position.  From a performance point of view an array would have been better since it would not require nested for loops but the logic would be changed for the winner and traverse a board using an array is not as legible as a 2D array.  Other data structures such as a Linked-List or a tree implementation would make it more complicated as you probably won't find much documentation of implementing Tic Tac Toe using those data structures hence taking more time to implement it.



##### 3. What online resources did you find to help you learn React? How do you search for resources, and how did you determine whether they were helpful or not? Think back to the "learning an API" paper! 
> I googled React.js to find resources on how to learn React. I mainly used stack overflow as a resource because it has example of code written which is easier for me to learn and follow from. Having these written examples were helpful when working on the assignment.


##### 4. Approximately how many hours did it take you to complete this assignment? #####
> This assignment took me over 24 hours to complete.


##### 5. Did you receive help from any other sources (classmates, etc)? If so, please list who (be specific!). #####
> I didnt recieve any help from classmates but I received help from a javascript tutor on this assignment because I was having difficulties getting started. 


##### 6. Did you encounter any problems in this assignment we should warn students about in the future? How can we make the assignment better? #####
> I found the React library difficult to learn, I would recommend more time reveiwing the library in class before giving out the assignmnet. 
