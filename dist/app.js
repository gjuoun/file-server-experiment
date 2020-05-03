"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const app = express_1.default();
const HOST = "http://localhost:3000/";
const STATIC_PATH = path_1.default.join(__dirname, "../static");
app.use(express_1.default.static(STATIC_PATH));
// if we set destination or filename, 
// instead of passing the file to req.file, multer will save the file and return
const upload = multer_1.default({
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
        console.log(file);
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            callback(new Error('only jpg, jpeg, and png file are is accepted'));
        }
        callback(null, true);
    }
});
// accept form-data with field 'img'
app.post('/upload/img', upload.single('img'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // resize and convert to 250x250 png file
    const buffer = yield sharp_1.default(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer();
    // transfer file original name to a Parsed path
    const fileParsed = path_1.default.parse(req.file.originalname);
    const relativePath = path_1.default.join('images', fileParsed.name + '.png');
    const diskPath = path_1.default.join(STATIC_PATH, relativePath);
    const urlPath = new URL(relativePath, HOST).toString();
    // write to file system
    fs_1.default.writeFileSync(diskPath, buffer);
    res.status(201).send({
        success: true,
        message: "Image saved",
        data: { imgUrl: urlPath }
    });
}));
// error handler
app.use(function (error, req, res, next) {
    res.status(400).send({
        success: false,
        message: error.message
    });
});
app.listen(3000, () => {
    console.log("running on 3000");
});
//# sourceMappingURL=app.js.map