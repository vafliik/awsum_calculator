# QA Manual Test Calculator

## Sample web app with a lot of errors
This app is used during interview with candidates for QA position. The candidate should prove bug-finding skills as well as good comunication during the testing process (as questions, suggest improvements etc.)

### Description of the app (as presented to the candidate)
The application should sum two numbers together.  
There are no specific requirements (although there should be!) - the candidate is expected to ask questions like "Are negative numbers allowed? Decimal numbers? What is the **context** of the application? Who will use it? etc."

## How to start
* The app is running at https://awsum.herokuapp.com/
* Find as many bugs as you can! :)

## List of issues (spoiler warning)

<details>
  <summary>
    Show details
  </summary>

  ### The sum functionality
  * If the numbers are equal, the result is the same number
  * If the sum > 1000, it will become 1000
  * If one of the mubers is not a number, it will display "General error" (bad error handling, booo)
  * Space in second input field causes "Uncaught exception"
  
  ### Input fields
  * First input can accept only **positive** integers (no decimal point, no negative numbers)
  * First input is limited to 5 numbers
  * Second input can accept anything (text, special characters)
  * First input has 'autocomplete' dropdown list, the second one does not
  * There is a typo in the "Secnod" input field placeholder
  * Pressing enter in the second input field clears the form instead of submitting it. It is evil
  
  ### Buttons
  * "Clear" button is bigger and green. Should not be the "Sum" button more important and have "positive" color? Hm?
  * The "Sum" button remains 'clicked' (until "Clear" is pressed)
  * "Clear" button does not have 'clicked' effect
  * "Clear" button does not clear the result
  
  ### UX
  * The app is ugly as hell
  * The "Ready to SUM" text is written in red (same as error messages that appear in its place)
  * Why the result field is an input field? You should not actually write anything into it?
  * Tab order is wrong
  * The image is a pony, but it is called "everybody-loves-unicorns.png" :)

  ### The app
  * It writes message to the console that should not probably be there :)
  * It does not have favicon file
  * It contains secret code in the page source
  * It takes long for the result to show up
  * There are tow elements with the same 'id' attribute
  * Mixed english and czech names of elements

</details>
