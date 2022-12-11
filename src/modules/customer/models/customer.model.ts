import { Schema } from 'mongoose';
export const CustomerSChema = new Schema({
  name: String,
  email: String,
  password: String,
  refreshToken: String,
});
