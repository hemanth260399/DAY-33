import fs from "fs"
export let timestampfile = (folder, filename, content, callfunc = () => { }) => {
    if (!fs.existsSync(folder)) {
        fs.mkdir(folder, () => {
            console.log("folder created successfully")
        })
    }
    fs.writeFile(`${folder}/${filename}`, content, callfunc)
}

export let readtimestampfile = (folder, successcallback, errorcallback) => {
    fs.readdir(`./${folder}`, (err, data) => {
        if (err) {
            errorcallback()
        } else {
            successcallback(data)
        }
    })
}