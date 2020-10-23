import * as JSON5 from 'json5';
import * as fs from "fs";
import path from 'path';

export default function oneHandler({ query: { urlpath } }, res) {

    const dir = path.resolve('./');
    console.log(`pages/api/one.js : dir: ${dir}`)
    console.log(`pages/api/one.js : urlpath: ${urlpath}`)

    // urlpath is in the format /data/static/...
    const subPath = decodeURI(urlpath)

    const filePath = dir + subPath;
    console.log(`/api/one.js: filePath: ${filePath}`)

    const raw = fs.readFileSync(filePath, "utf8");
    const metadata = JSON5.parse(raw);


    res.StatusCode = 200
    res.setHeader('Content-Type', 'application/json5')
    res.end(JSON.stringify(metadata))
}