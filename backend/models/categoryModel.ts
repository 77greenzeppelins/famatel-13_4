import mongoose, { Schema } from 'mongoose';

/*
___1. Schema is a class so lets instantiate it via "new"
*/
const categorySchema = new Schema(
  {
    index: { type: Number, require: true, default: 0 },
    path: { type: String, require: true, default: '/' },
    name: { type: String, require: [true, 'please enter the product name'] },
    desc: {
      type: String,
      require: true,
      default: 'advanced and profesional solutions for electric industry',
    },
    image: {
      type: String,
      require: false,
    },
  },
  //__detects date of creation / update
  { timestamps: true }
);

const Category =
  mongoose.models.Category || mongoose.model('Category', categorySchema);

module.exports = Category;
