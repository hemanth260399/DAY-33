import { timestampfile, readtimestampfile } from "./functioncode.js"
import express from "express"
let server = express()
server.use(express.json())
server.post("/", (req, res) => {
    let currentdate = new Date();
    let currentsec = currentdate.getTime().toString()
    let currentisodate = currentdate.toISOString().replaceAll(":", "-").split(".")[0]
    timestampfile("TimeStamp", `${currentisodate}.txt`, currentsec, () => { res.status(201).json({ file: "file created successfully" }) })
})
server.get("/", (req, res) => {
    readtimestampfile("TimeStamp", (data) => {
        res.json(data)
    }
        , () => res.status(500).json({ "Error": "Something Went wrong" }))
})
let port = 7777
server.listen(port, () => {
    console.log("server started")
})