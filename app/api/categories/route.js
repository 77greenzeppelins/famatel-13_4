import { NextResponse } from 'next/server';
//___
import connectMongoDB from '@/backend/libs/mongodb';
import Category from '@/backend/models/categoryModel';

export async function POST(request) {
  //   const { index, name, path, desc, image } = await request.json();
  const { name, desc } = await request.json();

  await connectMongoDB();
  await Category.create({ name, desc });

  return new NextResponse.json(
    { message: 'Category created' },
    { status: 201 }
  );
}

export async function GET() {
  try {
    await connectMongoDB();
    const categories = await Category.find();
    return new NextResponse(JSON.stringify(categories), { categories });
    // return new NextResponse('hello on GET route...', { status: 200 });
  } catch (error) {
    return new NextResponse(
      `Error in fetching data / GET request failed / see details: ${error}`,
      { status: 500 }
    );
  }

  //   const topics = await Category.find();
}

export async function DELATE(request) {
  const id = request.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Category.findByIdAndDelete(id);
  return new NextResponse.json({ message: 'Topic delated' }, { status: 200 });
}
