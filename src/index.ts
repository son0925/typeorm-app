import express from 'express';
import morgan from 'morgan';
import { AppDataSource } from './data-source';

const app = express();

app.use(express.json());
app.use(morgan('dev'));


app.get('/', (req,res) => {
  res.send('Hello TypeScript');
})

AppDataSource.initialize()
  .then(() => {
    console.log('성공');
  })
  .catch((err) => {
    console.error(err);
  })


const port = 4000;
app.listen(port, () => {
  console.log(`Listinning on ${port}`)
})