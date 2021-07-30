//import s
const express = require('express')
const app = express()
const port = 8080

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/image', express.static(__dirname + 'public/image'))




app.get('', (req,res) => {
    res.sendFile(__dirname + '/views/index.html')
})
//listen on port 8080

app.listen(port, () => console.info(`Server is running on port ${port}`))