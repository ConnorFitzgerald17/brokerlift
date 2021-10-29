import * as mongoose from 'mongoose';

export const LoginSchema = new mongoose.Schema({
  answer: String,
});
