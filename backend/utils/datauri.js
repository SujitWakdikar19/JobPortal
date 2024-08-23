import DataUriParser from "datauri/parser.js"

import path from "path";
export const parser = new DataUriParser();

const getDataUri = (file) => {
    // console.log("hi there is file",parser.format(path.extname(file.originalname).toString(), file.buffer))
    // console.log(file.originalname)
    const uri =parser.format(path.extname(file.originalname).toString(), file.buffer)
    
    return uri.content;
}

export default getDataUri;