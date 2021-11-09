import {Request, Response, NextFunction} from "express";

export function ensureAdmin(err: Error, request: Request, response: Response, next: NextFunction)
{
  const admin = false;
  if(admin)
  {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized"
  })
}