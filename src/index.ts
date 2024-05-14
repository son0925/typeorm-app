import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('short'));

app.get('/', (req,res) => {
  res.send('Hello TypeScript')
})


const port = 4000;
app.listen(port, () => {
  console.log(`Server Running at http://localhost${port}`)
})