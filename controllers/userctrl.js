/**
 * Created by ignat on 03-Jan-17.
 */

var UserModel = require('./../models/usermodel');
var AllFunction = require('./../utils/allfunction');
var FixValue = require('./../utils/fixvalue.json')

var ctrlUserLogin = function(req, res, next)
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
      UserModel.UserLogin(req, conn, function (err, results)
      {
      	if (err)
        {
          res.status(FixValue.Code.NotSuccess);
          res.json(AllFunction.LoginFailed());
        }
        else
        {
          if(results.length > 0)
          {
              req.body["results"] = results;
              req.body["UserData"]["StatusID"] = 2;
              req.body["UserData"]["UserID"] = results[0]["UserID"];
              return next();
          }
          else
          {
            res.status(FixValue.Code.NotSuccess);
            res.json(AllFunction.LoginFailed());
          }
        }
      });
    }
  });
};

var ctrlUserStatus = function(req, res)
{
  req.getConnection(function (err, conn)
  {
    if (err)
    {
      res.status(FixValue.Code.Error);
      res.json(AllFunction.SQLFailed());
    }
    else
    {
      UserModel.updateUserStatus(req, conn, function (err, results)
      {
        var Status = req.body["UserData"]["StatusID"];

        if (err)
        {
          res.status(FixValue.Code.NotSuccess);
          if(Status === 2)
            res.json(AllFunction.LoginFailed());
          else
            res.json(AllFunction.LogoutFailed());
        }
        else
        {
          res.status(FixValue.Code.OK);
          if(Status === 2)
            res.json(AllFunction.LoginSuccess(req.body["results"][0]));
          else
            res.json(AllFunction.LogoutSuccess());
        }
      });
    }
  });
};

var ctrlUserLogout = function(req, res, next)
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
      UserModel.UserLogout(req, conn, function (err, results)
      {
        if (err)
        {
          res.status(FixValue.Code.NotSuccess);
          res.json(AllFunction.LogoutFailed());
        }
        else
        {
          if(results.length > 0)
          {
            req.body["UserData"]["StatusID"] = 1;
            return next();
          }
          else
          {
            res.status(FixValue.Code.NotSuccess);
            res.json(AllFunction.LogoutFailed());
          }
        }
      });
    }
  });
};

var ctrlChangePassword = function(req, res)
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
      UserModel.ChangePassword(req, conn, function (err, results)
      {
        if (err)
        {
          res.status(FixValue.Code.NotSuccess);
          res.json(AllFunction.ChangePasswordFailed());
        }
        else
        {
          if(results["affectedRows"] === 0)
          {
            res.status(FixValue.Code.NotSuccess);
            res.json(AllFunction.ChangePasswordFailed());
          }
          else
          {
            res.status(FixValue.Code.OK);
            res.json(AllFunction.ChangePasswordSuccess());
          }
        }
      });
    }
  });
};

var ctrlRegistration = function(req, res)
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
      UserModel.UserRegistration(req, conn, function (err, results)
      {
        if (err)
        {
          res.status(FixValue.Code.NotSuccess);
          res.json(AllFunction.RegistrationFailed());
        }
        else
        {
          if(results["affectedRows"] === 0)
          {
            res.status(FixValue.Code.NotSuccess);
            res.json(AllFunction.RegistrationFailed());
          }
          else
          {
            res.status(FixValue.Code.OK);
            res.json(AllFunction.RegistrationSuccess());
          }
        }
      });
    }
  });
};

module.exports = {postUserLogin : ctrlUserLogin, postUpdateUserStatus : ctrlUserStatus,
                  postUserLogout : ctrlUserLogout, postChangePassword : ctrlChangePassword,
                  postRegistration : ctrlRegistration};
