# bamazon
This project emulates an Amazon storefront utilizing mySQL and Node.js, with special considerations given towards the `cli-table2` npm package for making it look good (as good as a CLI can at least). This app utilizes three of the four CRUD operations in the SQL queries, as well as an external JavaScript file holding the table constructor.

### The BamazonCustomer.js file:
* Displays a database inventory using a table
* Allows users to select which item they'd like to purchase and how many they would like
* Perform computations to see whether the store has the desired amount of the item and informs the user appropriately
* Updates and shows the remaining stock after each purchase

![Image of mySQL schema used](/images/mysql.png "The creation and skeleton of the bamazon database table")
