import mongoose from 'mongoose';
const { Schema } = mongoose;
import multer from 'multer'

const addSchema = new Schema({
  title: {
    type: String,
    required:  true,
  }, // String is shorthand for {type: String}
  desc: {
    type: String,
    required:  true,
  },
  
  price: {
    type: Number,
    required:  true,
  },
  userId :{
    type:String,
    required:true
  
  },
  images:{
    type:String
  }
  
})
const Ads = mongoose.model('ads', addSchema);
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null,  uniqueSuffix+file.originalname)
    }
  })
  
  export const upload = multer({ storage: storage })
export  default Ads;