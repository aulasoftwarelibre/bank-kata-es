import { Document, Schema } from 'mongoose';

export const AccountSchema = new Schema({
  _id: String,
  balance: Number,
  __v: { type: Number, select: false },
});

export interface AccountView extends Document {
  readonly _id: string;
  readonly balance: number;
}

export const ACCOUNT_MODEL = 'ACCOUNT_MODEL';
