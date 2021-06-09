const express = require('express')
const app = express()
const router = express.Router()
const fs = require('fs');
const path = require('path')

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

if(!process.env.token) {
  throw new Error('No token in .env file')
}

var page = fs.readFileSync(__dirname + '/public/page.html', 'utf8');
page = page.replace('TOKEN_AUTO_REPLACEMENT', process.env.token);

router.get('/', function (_, res) {
  return res.send(page);
})

app.use(express.static('public'))
app.use('/', router)

app.listen(3000)

console.log('Express test server run at port 3000')
