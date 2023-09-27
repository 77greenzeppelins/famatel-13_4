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
__2. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection 
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

/*
___1. A model is a class with which we construct documents.
___2. Some use case: 
      const favCat = new Category({name: 'gniazda bocianie'})
*/
const Category = mongoose.models.Category || mongoose.model<I_Category>('Category', categorySchema);
module.exports = Category;
