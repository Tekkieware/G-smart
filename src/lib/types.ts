import { Document } from "mongoose"

export interface IImage extends Document {
  url: string
  owner: string,
}



export interface CreateImageRequest {
  url: string;
  owner: string;
}

export interface CreateImageResponse {
  message: string;
}

