/**
 * Created by ignat on 03-Jan-17.
 */

var strQuery;
var data;
var mysql = require('mysql');

module.exports.UserTaskList =
  function (req, conn, callback)
  {
    data = req.body["TaskListData"];
    strQuery = 'SELECT b.TaskID, b.EstimateDate, b.Description, b.DisplayName, b.EstimateTime FROM user as a, tasklist as b, ' +
               'statustasklist as c WHERE a.UserID="' + data["UserID"] + '" AND b.lnkRoleID=' + data["RoleID"] +
               ' AND a.lnkRoleID=b.lnkRoleID AND b.lnkStatusID=c.StatusID AND b.EstimateDate > "' +
               data["SyncDate"] + '" AND b.EstimateTime > "' + data["SyncTime"] + '" ORDER BY EstimateDate, EstimateTime ASC';
    conn.query(strQuery, callback);
  };

module.exports.TaskListSave =
  function (req, conn, callback)
  {
    var DataSet;
    data = req.body["TableName"];

    if(data === "tracking")
      DataSet = req.body["TrackingTrxData"];
    else
    if(data === "trxtasklist")
      DataSet = req.body["TaskListTrxData"];

    if(DataSet["Status"] === 0)
    {
      DataSet["Status"] = 1;
      strQuery = 'INSERT INTO ' + data + ' SET ? ON DUPLICATE KEY UPDATE Status=' + DataSet["Status"];
    }

    conn.query(strQuery, DataSet, callback);
  };
