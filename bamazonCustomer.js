var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table2");

var showTable = require("./tableConstructor.js");

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

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

var displayForUser = function() {
  var display = new showTable();
  connection.query("SELECT * FROM products", function(err, results) {
    display.displayInventoryTable(results);
  })
};

displayForUser();