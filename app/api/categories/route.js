import { NextResponse } from 'next/server';
//___
import connectMongoDB from '@/backend/libs/mongodb';
import Category from '@/backend/models/categoryModel';
// const Category = require('@/backend/models/categoryModel');

//----------------------------------------------- C
export async function POST(request) {
    try {
        //___read request body - return promis - resolve to a JavaScript object.
        const { index, name, path, desc, image } = await request.json();
        await connectMongoDB();
        await Category.create({ name, desc });
        return new NextResponse.json({ message: 'Category created' }, { status: 201 });
    } catch (error) {
        return new NextResponse(`Error in fetching data / GET request failed / see details: ${error}`, { status: 500 });
    }
}

//----------------------------------------------- R (all)
export async function GET() {
    try {
        await connectMongoDB();
        const categories = await Category.find();
        return new NextResponse(JSON.stringify(categories), { categories });
    } catch (error) {
        return new NextResponse(`Error in fetching data / GET request failed / see details: ${error}`, { status: 500 });
    }
}

//----------------------------------------------- U

//----------------------------------------------- D
// export async function DELETE(request) {
//   const id = request.nextUrl.searchParams.get('id');
//   await connectMongoDB();
//   await Category.findByIdAndDelete(id);
//   return new NextResponse.json({ message: 'Topic deleted' }, { status: 200 });
// }

// export async function POST(request) {
//   //   const { index, name, path, desc, image } = await request.json();
//   const { index, name, path, desc, image } = await request.json();

//   await connectMongoDB();
//   await Category.create({ name, desc });

//   return new NextResponse.json(
//     { message: 'Category created' },
//     { status: 201 }
//   );
// }
