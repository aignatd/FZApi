/**
 * Created by ignat on 05-Jan-17.
 */

var fixvalue = require('./fixvalue.json')
var strMsg = fixvalue.Msg;
var strRspID = fixvalue.Code;
var strJSON;

module.exports =
{
  SQLFailed	:	function()
  {
    strJSON =	{"CoreResponse" : {"Code"	:	strRspID.Fail, "Msg"	:	strMsg.strSQLFailed}};
    return strJSON;
  },
  LoginSuccess	:	function(results)
  {
    results["TimeTrackLocation"] = fixvalue.Utils.CountDownTimer;
    strJSON =	{"CoreResponse" : {"Code"	:	strRspID.Success, "Msg"	:	strMsg.strLoginSuccess}, "UserResponse" : results};
    return strJSON;
  },
  LoginFailed	:	function()
  {
    strJSON =	{"CoreResponse" : {"Code"	:	strRspID.Fail, "Msg"	:	strMsg.strLoginFailed}};
    return strJSON;
  },
  TaskListFailed	:	function()
  {
    strJSON =	{"CoreResponse" : {"Code"	:	strRspID.Fail, "Msg"	:	strMsg.strTaskListFailed}};
    return strJSON;
  },
  TaskListEmpty	:	function()
  {
    strJSON =	{"CoreResponse" : {"Code"	:	strRspID.Empty, "Msg"	:	strMsg.strTaskListEmpty}};
    return strJSON;
  },
  TaskListSuccess	:	function(results)
  {
    strJSON =	{"CoreResponse" : {"Code"	:	strRspID.Success, "Msg"	:	strMsg.strTaskListSuccess}, "TaskListResponse" : results};
    return strJSON;
  },
  LogoutFailed	:	function()
  {
    strJSON =	{"CoreResponse" : {"Code"	:	strRspID.Fail, "Msg"	:	strMsg.strLogoutFailed}};
    return strJSON;
  },
  LogoutSuccess	:	function()
  {
    strJSON =	{"CoreResponse" : {"Code"	:	strRspID.Success, "Msg"	:	strMsg.strLogoutSuccess}};
    return strJSON;
  },
  TaskListSyncFailed	:	function()
  {
    strJSON =	{"CoreResponse" : {"Code"	:	strRspID.Fail, "Msg"	:	strMsg.strTaskListSyncFailed}};
    return strJSON;
  },
  TaskListSyncSuccess	:	function()
  {
    strJSON =	{"CoreResponse" : {"Code"	:	strRspID.Success, "Msg"	:	strMsg.strTaskListSyncSuccess}};
    return strJSON;
  },
  TaskListUpdateFailed	:	function()
  {
    strJSON =	{"CoreResponse" : {"Code"	:	strRspID.Fail, "Msg"	:	strMsg.strTaskListUpdateFailed}};
    return strJSON;
  },
  TaskListUpdateSuccess	:	function()
  {
    strJSON =	{"CoreResponse" : {"Code"	:	strRspID.Success, "Msg"	:	strMsg.strTaskListUpdateSuccess}};
    return strJSON;
  },
  ChangePasswordFailed	:	function()
  {
    strJSON =	{"CoreResponse" : {"Code"	:	strRspID.Fail, "Msg"	:	strMsg.strChangePasswordFailed}};
    return strJSON;
  },
  ChangePasswordSuccess	:	function()
  {
    strJSON =	{"CoreResponse" : {"Code"	:	strRspID.Success, "Msg"	:	strMsg.strChangePasswordSuccess}};
    return strJSON;
  },
  RegistrationFailed	:	function()
  {
    strJSON =	{"CoreResponse" : {"Code"	:	strRspID.Fail, "Msg"	:	strMsg.strRegistrationFailed}};
    return strJSON;
  },
  RegistrationSuccess	:	function()
  {
    strJSON =	{"CoreResponse" : {"Code"	:	strRspID.Success, "Msg"	:	strMsg.strRegistrationSuccess}};
    return strJSON;
  },
  ReasonListFailed	:	function()
  {
    strJSON =	{"CoreResponse" : {"Code"	:	strRspID.Fail, "Msg"	:	strMsg.strReasonListFailed}};
    return strJSON;
  },
  ReasonListEmpty	:	function()
  {
    strJSON =	{"CoreResponse" : {"Code"	:	strRspID.Empty, "Msg"	:	strMsg.strReasonListEmpty}};
    return strJSON;
  },
  ReasonListSuccess	:	function(results)
  {
    strJSON = {"CoreResponse" : {"Code"	:	strRspID.Success, "Msg"	:	strMsg.strReasonListSuccess},
               "ReasonResponse" : results};
    return strJSON;
  }
}
