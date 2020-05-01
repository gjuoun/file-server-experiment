import express, { NextFunction } from 'express'
import multer from 'multer'
import { db, User } from './db'
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const app = express()

const HOST = "http://localhost:3000/"
const STATIC_PATH = path.join(__dirname, "../static")

app.use(express.static(STATIC_PATH))

// if we set destination or filename, 
// instead of passing the file to req.file, multer will save the file and return
const upload = multer({
  // storage: multer.diskStorage({
  // destination(req, file, cb) {
  // cb(null, './src/images')
  // },
  // filename(req, file, callback) {
  // const filePath = path.parse(file.originalname)
  // callback(null, filePath.name + '-' + Date.now() + filePath.ext)
  // }
  // }),

  // limits file size to 1,000,000 bytes = 1m
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, callback) {
    console.log(file)
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      callback(new Error('only jpg, jpeg, and png file are is accepted'))
    }

    callback(null, true)
  }
})



// accept form-data with field 'img'
app.post('/upload/img', upload.single('img'), async (req, res) => {
  // convert to 250x250 png file
  const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()

  // transfer file original name to a Parsed path
  const fileParsed = path.parse(req.file.originalname)
  const relativePath = path.join('images', fileParsed.name + '.png')

  const diskPath = path.join(STATIC_PATH, relativePath)
  const urlPath = new URL(relativePath, HOST).toString()

  // write to file system
  fs.writeFileSync(diskPath, buffer)

  res.status(201).send({
    success: true,
    message: "Image saved",
    data: { imgUrl: urlPath }
  })
})


// error handler
app.use(function (error: Error, req: express.Request, res: express.Response, next: NextFunction) {
  res.status(400).send({
    success: false,
    message: error.message
  })
})

app.listen(3000, () => {
  console.log("running on 3000")
})