import DataUriParser from "datauri/parser.js"

import path from "path";
export const parser = new DataUriParser();

const getDataUri = (file) => {
  
    const uri =parser.format(path.extname(file.originalname).toString(), file.buffer)
    return uri.content;
}

export default getDataUri;