import {IImage} from './types'
import mongoose, { model, Schema } from "mongoose"

const imageSchema: Schema = new Schema(
  {
    url: {
      type: String,
    },  

    owner: {
      type: String,
    }
  }
)

export default mongoose.models['Image'] || mongoose.model<IImage>("Image", imageSchema)