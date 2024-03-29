import { Request } from "express";
import { Document, ObjectId, Schema } from "mongoose";

// export enum UserRole {
//   ADMIN_ROLE = "admin",
//   USER_ROLE = "user",
// }

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  // imgUrl: string;
  // role: string;
  // active: boolean;
  // googleCreated: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// export interface IRole extends Document {
//   role: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

// export interface ICategory extends Document {
//   name: string;
//   active: Boolean;
//   createdBy: ObjectId;
//   updatedBy: ObjectId;
//   createdAt: Date;
//   updatedAt: Date;
// }

// export interface IProduct extends Document {
//   name: string;
//   price: number;
//   imgUrl: string;
//   active: Boolean;
//   category: ObjectId;
//   createdBy: ObjectId;
//   updatedBy: ObjectId;
//   createdAt: Date;
//   updatedAt: Date;
// }

export interface JwtPayload {
  uid: string;
  iat: number;
  exp: number;
}

export interface ICalendarEvent extends Document {
  id: string;
  title: string;
  notes: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  createdBy: Schema.Types.ObjectId | string; // Assuming the User model is using ObjectId
  updatedAt: Date;
}
export interface RequestWithUid extends Request {
  user?: IUser;
}

// export interface GooglePayload {
//   iss: string;
//   nbf: number;
//   aud: string;
//   sub: string;
//   email: string;
//   email_verified: boolean;
//   azp: string;
//   name: string;
//   picture: string;
//   given_name: string;
//   family_name: string;
//   iat: number;
//   exp: number;
//   jti: string;
// }

// export enum ErrorCode {
//   "er01",
//   "er02",
//   "er03",
//   "er04",
//   "er05",
//   "er06",
//   "er07",
//   "er08",
//   "er09",
//   "er10",
// }

// export interface ErrorDetail {
//   errorCode: ErrorCode;
//   typeName?: string;
//   message: string;
//   detail?: string;
//   help?: string;
// }

// export interface ApiError {
//   timestamp: Date;
//   statusCode: number;
//   errors: ErrorDetail[];
// }
