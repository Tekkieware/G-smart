import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/db'    
import IImage from '../../../lib/models'


export default async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const data = await IImage.find(); 

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } 
  if (req.method === 'POST'){
    const newImage = new IImage({
        url: req.body.url,
        owner: req.body.owner
      });
    
      try {
        await newImage.save();
        res.status(201).json({ message: 'Image created successfully' });
      } catch (error) {
        console.error('Error creating image:', error);
        res.status(500).json({ message: 'Error creating image' });
      }
  }

  if (req.method === 'DELETE'){
    const { imageId } = req.body;

  try {
    await IImage.findByIdAndDelete(imageId);
    res.status(200).json({ message: 'image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
        res.status(500).json({ message: 'Error creating image' });
  }
  }
};
