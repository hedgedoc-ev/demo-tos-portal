import express from "express"
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express()
const port = process.env.PORT || 3000

const COOKIE_NAME = "demoTosAccepted"

app.get('/', (req, res) => {
    if (req.headers.cookie && req.headers.cookie.includes(COOKIE_NAME)) {
        res.sendStatus(204)
    } else {
        res.status(401).header("Content-Type", "text/html; charset=utf-8").sendFile(__dirname + "/tos.html")
    }
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
