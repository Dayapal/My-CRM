import {
  Request,
  Response,
  NextFunction,
} from "express";

import { ApiError }
from "../utils/ApiError.js";

import {
  ROLE_PERMISSIONS,
} from "../constants/role-permissions.js";

import type {
  Permission,
} from "../constants/permissions.js";

export const checkPermission =
(
  permission: Permission
)=>
{

return(

req:Request,

res:Response,

next:NextFunction

)=>{

const role = req.user.role as keyof typeof ROLE_PERMISSIONS;

const permissions = ROLE_PERMISSIONS[role] as Permission[];

if(

!permissions.includes(
permission
)

){

return next(

new ApiError(

403,

"You don't have permission"

)

);

}

next();

};

};