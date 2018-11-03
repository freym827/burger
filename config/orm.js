var connection = require("./connection")

var orm = {
    selectAll: function() {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(newBurger, ifDevoured) {
      var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (? ?)";
      console.log(queryString);
      connection.query(queryString, [newBurger, ifDevoured], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(burgerToChange) {
      var queryString = "UPDATE burgers SET devoured = TRUE WHERE burger_name = ?";
  
      connection.query(queryString, [burgerToChange],
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;
  
  
