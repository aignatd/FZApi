/**
 * Created by ignat on 03-Jan-17.
 */

var strQuery;
var data;
var mysql = require('mysql');

module.exports.UserLogin =
  function (req, conn, callback)
  {
    data = req.body["UserData"];
    strQuery = 'SELECT a.UserID, a.Name, a.Phone, a.lnkRoleID, b.Brand, b.Type FROM User as a, Device as b WHERE Username="' +
                data["Username"] + '" AND Password="' + data["Password"] + '" AND a.lnkDevice=b.DeviceID';
    conn.query(strQuery, callback);
  };

module.exports.updateUserStatus =
    function (req, conn, callback)
    {
        data = req.body["UserData"];
        strQuery = 'UPDATE user as a SET a.lnkStatusID=' + data["StatusID"] + ' WHERE a.UserID=' + data["UserID"];
        conn.query(strQuery, callback);
    };

module.exports.UserLogout =
    function (req, conn, callback)
    {
        data = req.body["UserData"];
        strQuery = 'SELECT UserID FROM User WHERE UserID="' + data["UserID"] + '"';
        conn.query(strQuery, callback);
    };

module.exports.ChangePassword =
  function (req, conn, callback)
  {
    data = req.body["UserData"];
    console.log(data);
    strQuery = 'UPDATE user as a SET a.Password="' + data["NewPassword"] + '" WHERE a.UserID=' + data["UserID"] +
               ' AND a.Password="' + data["Password"] + '"';
    console.log(strQuery);
    conn.query(strQuery, callback);
  };

module.exports.ChangePassword =
  function (req, conn, callback)
  {
    data = req.body["UserData"];
    strQuery = 'UPDATE user as a SET a.Password="' + data["NewPassword"] + '" WHERE a.UserID=' + data["UserID"] +
      ' AND a.Password="' + data["Password"] + '"';
    conn.query(strQuery, callback);
  };

module.exports.UserRegistration =
  function (req, conn, callback)
  {
    data = req.body["UserData"];
    delete data["UserID"];
    strQuery = 'INSERT INTO user SET ?';
    conn.query(strQuery, data, callback);
  };
