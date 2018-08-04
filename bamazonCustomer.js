var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table2");

var displayTable = require("./tableConstructor.js");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

var displayForUser = function () {
  var display = new displayTable();
  connection.query('SELECT * FROM products', function (err, results) {
    display.displayInventoryTable(results);
    itemPurchase();
  });
}

var itemPurchase = function () {
  console.log("\n");
  inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "Please enter the ID of the item you would like to purchase from us."
    },
    {
      type: "input",
      name: "quantity",
      message: "Please enter the amount you would like to purchase."
    }
  ])
    .then(function (answer) {
      connection.query("SELECT product_name, department_name, price, stock_quantity FROM products WHERE ?", { item_id: answer.id }, function (err, res) {
        console.log('\n  So, you would like to buy ' + answer.quantity + ' ' + res[0].product_name + ' at $' + res[0].price + ' each.');

        if (answer.quantity <= res[0].stock_quantity) {
          var updateQuantity = res[0].stock_quantity - answer.quantity;
          connection.query("UPDATE products SET ? WHERE ?", [
            {
              stock_quantity: updateQuantity
            }
          ], function(err, res) {});
          var total = res[0].price * answer.quantity;
          console.log("Thank you for shopping at Bamazon! Your total is $" + total.toFixed(2));
        }
      })
    })
};
displayForUser();