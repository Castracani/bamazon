# bamazon
This project emulates an Amazon storefront utilizing mySQL and Node.js, with special considerations given towards the `cli-table2` npm package for making it look good (as good as a CLI can at least). This app utilizes three of the four CRUD operations in the SQL queries, as well as an external JavaScript file holding the table constructor.

### The BamazonCustomer.js file:
* Displays a database inventory using a table
* Allows users to select which item they'd like to purchase and how many they would like
* Perform computations to see whether the store has the desired amount of the item and informs the user appropriately
* Updates and shows the remaining stock after each purchase

![Image of mySQL schema used](/images/mysql.png "The creation and skeleton of the bamazon database table")

After installing the required packages via `npm install`, the user is greeted with the contents of the mySQL database, as well as a prompt to enter item ID of whichever item they'd like to purchase. The item ID is the left-most column.

![Image of first interaction with bamazonCustomer.js](/images/bamazon1.png "Image of first interaction with bamazonCustomer.js")

After entering the item ID of whichever is in the store, you're prompted for the quantity of what you'd like to get. If Bamazon has the quantity which you want, the application confirms the what you just purchased, and computes the total amount of money you've spent. You're then asked if you would like to shop again for another item.

![Image of successful purchase with bamazon](/images/bamazon2.png "Image of successful purchase with bamazon")

If the user would like to shop again, then a new table is generated with the updated quantities of all items in the store. Notice how the last item in the table, the Speakers, have only 5 remaining, while the initial table had 9 remaining in stock.

![Image of updated inventory](/images/bamazon3.png "Image of updated inventory")

When the user wishes to buy an item that Bamazon doesn't have enough quantity in, the application informs the user that the purchase can't be had due to insufficient supply and prompts the user whether they'd like to purchase another item.

![Image of failed transaction](/images/bamazon4.png "Image of failed transaction")

If the user decides that they're all done with shopping at Bamazon, then the user is given a nice good-bye and the application shuts down.

![Image of user declining to shop further](/images/bamazon5.png "Image of user declining to shop further")

## Technologies used
##### mySQL via mySQL Workbench
##### node.js
##### JavaScript

## Packages used
##### inquirer
##### mysql
##### cli-table2
