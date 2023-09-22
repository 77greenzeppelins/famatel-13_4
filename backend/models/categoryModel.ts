import mongoose, { Schema } from 'mongoose';

const categorySchema = new Schema(
  {
    index: { type: Number, require: true, default: 0 },
    name: { type: String, require: [true, 'please enter the product name'] },
    path: { type: String, require: true, default: '/' },
    image: {
      type: String,
      require: false,
    },
  },
  //__detects date of creation / update
  { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);
