const cloud = require('cloudinary').v2;

cloud.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});


export async function POST(request: Request) {
  const body = await request.json();
  const { paramsToSign } = body;
  try {
    const signature = cloud.utils.api_sign_request(
      paramsToSign,
      process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET!
    );
    return Response.json({ signature });
  } catch (error) {
    return Response.json(error);
  }
  
}



