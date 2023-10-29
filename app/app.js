const express = require('express')
const app = express()
const router = express.Router()
const port = 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api', router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/air',(req,res) => {
  console.log('/api/air 왔음')
  res.send('air')
})

app.listen(port);


