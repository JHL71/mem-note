import express, { Express, Request, Response } from 'express';
import cors from 'cors';
// import bodyparser from 'body-parser';

const app: Express = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const mem = [{title: 'dummy', text: 'dummy'}, {title: 'test', text: 'testdummy'}];


app.get('/', (req: Request, res: Response) => {
    console.log(mem);
    res.send({data: mem});
});

app.post('/post', (req: Request, res: Response) => {
    const [title, text] = [req.body.title, req.body.text];
    mem.push({title, text});
    console.log(mem);
    res.send({data: 'check'});
})

app.listen(port, () => {
    
})