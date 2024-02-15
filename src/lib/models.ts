import {IImage} from './types'
import { model, Schema } from "mongoose"

const imageSchema: Schema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },

    owner: {
      type: String,
      required: true,
    },

   
  },
  { timestamps: true }
)

export default model<IImage>("Image", imageSchema)