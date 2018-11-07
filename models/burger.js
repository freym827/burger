var orm = require("../config/orm")

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function(newBurger, ifDevoured, cb) {
      orm.insertOne("burgers", newBurger, ifDevoured, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
  };
  
module.exports = burger;
  