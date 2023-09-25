import mongoose, { Schema } from 'mongoose';

interface I_Category {
    index: number;
    path: string;
    name: string;
    desc: string;
    image?: string;
}
/*
___1. Schema is a class so lets instantiate it via "new"
*/
const categorySchema: Schema = new Schema(
    {
        index: { type: Number, require: true, default: 0 },
        path: { type: String, require: true, default: '/' },
        name: { type: String, require: [true, 'please enter the product name'] },
        desc: {
            type: String,
            require: true,
            default: 'advanced and profesional solutions for electric industry'
        },
        image: {
            type: String,
            require: false
        }
    },
    //__detects date of creation / update
    { timestamps: true, versionKey: false }
);

const Category = mongoose.models.Category || mongoose.model<I_Category>('Category', categorySchema);
module.exports = Category;
