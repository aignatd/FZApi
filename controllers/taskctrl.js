/**
 * Created by ignat on 03-Jan-17.
 */

var TaskModel = require('./../models/taskmodel');
var AllFunction = require('./../utils/allfunction');
var FixValue = require('./../utils/fixvalue.json')

var ctrlUserTask = function(req, res)
{
  req.getConnection(function (err, conn)
  {
    if(err)
    {
      res.status(FixValue.Code.Error);
      res.json(AllFunction.SQLFailed());
    }
    else
    {
      TaskModel.UserTaskList(req, conn, function (err, results)
      {
        if (err)
        {
          res.status(FixValue.Code.NotSuccess);
          res.json(AllFunction.TaskListFailed());
        }
        else
        {
          if(results.length > 0)
          {
            res.status(FixValue.Code.OK);
            res.json(AllFunction.TaskListSuccess(results));
          }
          else
          {
            res.status(FixValue.Code.NotSuccess);
            res.json(AllFunction.TaskListEmpty());
          }
        }
      });
    }
  });

};

var ctrlSaveTask = function(req, res)
{
  req.getConnection(function (err, conn)
  {
    if(err)
    {
      res.status(FixValue.Code.Error);
      res.json(AllFunction.SQLFailed());
    }
    else
    {
      TaskModel.TaskListSave(req, conn, function (err)
      {
        if (err)
        {
          res.status(FixValue.Code.NotSuccess);
          res.json(AllFunction.TaskListSyncFailed());
        }
        else
        {
          res.status(FixValue.Code.OK);
          res.json(AllFunction.TaskListSyncSuccess());
        }
      });
    }
  });
}

module.exports = {postUserTask : ctrlUserTask, postSaveTask : ctrlSaveTask};
