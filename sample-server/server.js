let fs = require('fs')
const { execFile } = require('child_process');
const express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false , limit:'50mb'}))

// parse application/json
app.use(bodyParser.json({limit: '50mb'}))

app.post('/b64', (req, res) => {

  console.log('reading file...')

  let file = './pdf/pdf-' + Date.now() + '.pdf'  
  fs.writeFile(file, Buffer.from(req.body.pdf, 'base64'), (err) =>{ 
      if(err) console.log('error ->', err)

    console.log('open =>', file)
    execFile('open', [file], (error, stdout, stderr)=> { console.log(error) } )
      
      res.status(200).send('File saved: ' + file)
  })

})

app.listen(3000, () => console.log('Example app listening on port 3000!'))



