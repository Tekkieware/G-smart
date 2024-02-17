import { Document } from "mongoose"

export interface IImage extends Document {
  url: string
  owner: string,
  public_id: string
}



export interface CreateImageRequest {
  url: string;
  owner: string;
  public_id: string

}

export interface CreateImageResponse {
  message: string;
}

