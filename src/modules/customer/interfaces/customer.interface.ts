import { Document } from 'mongoose';

export interface Customer extends Document {
  name: string;
  email: string;
  password: string;
  refreshToken: string;
}
