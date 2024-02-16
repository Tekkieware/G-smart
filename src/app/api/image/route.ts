import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/db'    
import Image from '../../../lib/models'
import {NextRequest} from 'next/server'

export async function GET(req: NextApiRequest, res: NextApiResponse){
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const data = await Image.find(); 

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } 
};


export async function POST(req: Request){
  await dbConnect();
  const {url, owner} = await req.json()
  const newImage = new Image({
      url: url,
      owner: owner
    }); 
  
    try {
      await newImage.save();
      return new Response('Image created successfully', { status: 201 })
    } catch (error) {
      console.error('Error creating image:', error);
      return new Response('Error creating image:' + error, { status: 500 })
    }
}


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