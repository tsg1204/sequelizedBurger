var connection = require('../config/connection.js');

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
}

function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    if (ob.hasOwnProperty(key)) {
      arr.push(key + '=' + ob[key]);
    }
  }

  return arr.toString();
}

var orm = {
     all: function(table, cb) {
        var queryString = 'SELECT * FROM ' + table + ';';
        connection.query(queryString, function(err, result) {

         // console.log(result);
            if (err) throw err;

            cb(result);
            //connection.end();
        });
    },

     create: function(table, cols, vals, cb) {
      var queryString = 'INSERT INTO ' + table;

      queryString = queryString + ' (';
      queryString = queryString + cols.toString();
      queryString = queryString + ') ';
      queryString = queryString + 'VALUES (';
      queryString = queryString + printQuestionMarks(vals.length);
      queryString = queryString + ') ';
      
      //console.log('\n Create queryString: ', queryString);
      //console.log(vals);
      connection.query(queryString, vals, function(err, result) {
        if (err) throw err;
        cb(result);
        //connection.end();
      });
    },

    update: function(table, objColVals, condition, cb) {
     var queryString = 'UPDATE ' + table;

     queryString = queryString + ' SET ';
     queryString = queryString + objToSql(objColVals);
     queryString = queryString + ' WHERE ';
     queryString = queryString + condition + ';';

     //console.log(queryString);
     connection.query(queryString, function(err, result) {
       if (err) throw err;
       cb(result);
       //connection.end();
     });
   }
};

module.exports = orm;
