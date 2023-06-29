import express, { Express, Request, Response } from 'express';
import cors from 'cors';
// import bodyparser from 'body-parser';

const app: Express = express();
const port = 3001;

app.use(cors());
app.use(express.json());

interface memI {
    title: string,
    text: string
}

const mem: { [key: number]: memI  } = {
    1 : {title: 'dummy', text: 'dummy'},
    2 : {title: 'test', text: 'testdummy'}
};

let top = 3;


app.get('/', (req: Request, res: Response) => {
    console.log(mem);
    res.send({data: mem});
});

app.post('/post', (req: Request, res: Response) => {
    const [title, text] = [req.body.title, req.body.text];
    mem[top] = {title, text};
    top++;
    console.log(mem);
    res.send({data: 'check'});
})

app.delete('/delete', (req: Request, res: Response) => {
    const num = req.body.num;
    delete mem[num];
})

app.listen(port, () => {
    
})