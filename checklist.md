# Checklist

Before you submit the final version of your labs, make sure that your project fullfills all of the tasks mentioned above.

## 00 Introduction

- [X] Install an IDE on your system

## 01 Git

- [X] Fork and clone the 1md032_18_students repository


## 02 HTML

Create an index.html file which contains:
- [x] A headline
- [x] A section to select burgers that contains at least three items. Each item has:
	- [x] A name
	- [x] An image
	- [x] Information about allergies 
- [x] A section to collect customer information:
	- [x] First- and Last Name (in one field)
	- [x] E-Mail Address
	- [x] Street
	- [x] House Number (only allowing numbers in this field)
	- [x] Gender (male, female, do not wish to provide as radio buttons)
- [x] A button to place the order
- [x] Ensure the website loads when opening http://localhost:3000/

## 03 CSS

Create a style.css file which contains:
- [ ] A rule to make the allergy information bold
- [x] Different text and background color for the two different sections (burger selection and customer information)
- [x] Change the cursor when hovering over the order button
- [x] Adds margins to the sections and the order button
- [x] Add a border to the two sections
- [x] Create a header that palces an image behind the headline
- [x] Use a grid layout instead of tables for the burger selection section


## 04 JavaScript

Create a menu.js file which contains:
- [x] At least five different burgers with respective attributes

Create a js_script.js file which contains:
- [ ] A MenuItem constructor 
- [ ] A function that defines at least five different burgers using the MenuItem constructor and adds them to an array
- [ ] A function that loops through the array and inserts the information to the burger selection section of the index.html file
- [ ] A function that loads the information from the menu.js json object and inserts the information to the burger selection section of the index.html file
- [ ] Only displays allergy information if relevant (either only if it contains gluten or lactose, or only if it's gluten or lactose free)
- [ ] Add a checkbox to each menu item
- [ ] A functionality for the order button that writes the information from the text boxes, the gender and all items on the order (that have the checkbox checked) to the bottom of the html file when the button is clicked

Create a vue_script.js file which contains:
- [x] A function that loops through the array and inserts the information to the burger selection section of the index.html file
- [x] A function that loads the information from the menu.js json object and inserts the information to the burger selection section of the index.html file
- [x] Only displays allergy information if relevant (either only if it contains gluten or lactose, or only if it's gluten or lactose free)
- [x] Add a checkbox to each menu item
- [x] A functionality for the order button that writes the information from the text boxes, the gender and all items on the order (that have the checkbox checked) to the bottom of the html file when the button is clicked

## 05 Messaging

- [x] Exchange the field for the customer's address with the interactive map
- [x] Location information from the map should be send to the dispatcher view when pressing the "order" button
- [x] In the dispatcher view, you should see the following for every order:
    - [x] A location on the map
    - [x] The order information
    - [x] The customer information
    
## Optional
- [ ] Set the orderID on client side so one customer can make multiple orders
- [ ] Only allow the order to be sent if all necessary information are provided
- [ ] Display the order(s) on the customer page as well
- [ ] Allow the dispatcher to handle orders by providing buttons next to every order that can switch the order status to "in preparation" and "done"
- [ ] Display the order status to the customer and update it in the customer view if updated by the dispatcher
- [ ] Find a better visualization for what orders belong to which location on the map