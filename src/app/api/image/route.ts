import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/db'    
import Image from '../../../lib/models'
import {NextRequest, NextResponse} from 'next/server'

export async function GET(req: NextRequest){
  await dbConnect();
  const owner = req.nextUrl.searchParams.get('owner') as string;
    try {
      const data = await Image.find({owner: owner}); 
      return Response.json(data)
    } catch (error) {
      return NextResponse.json({ error: error }, { status: 500 });
    }
};


export async function POST(req: Request){
  await dbConnect();
  const {url, owner, public_id} = await req.json()
  const newImage = new Image({
      url: url,
      owner: owner,
      public_id: public_id
    }); 
  
    try {
      await newImage.save();
      return new Response('Image created successfully', { status: 201 })
    } catch (error) {
      return new Response('Error creating image:' + error, { status: 500 })
    }
}

/*
export async function DELETE(req: NextApiRequest, res: NextApiResponse){
  await dbConnect();
  if (req.method === 'DELETE'){
    const { imageId } = req.body;

  try {
    await Image.findByIdAndDelete(imageId);
    res.status(200).json({ message: 'image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
        res.status(500).json({ message: 'Error creating image' });
  }
  }
}

*/