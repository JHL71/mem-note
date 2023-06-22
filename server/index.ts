import express, { Express, Request, Response } from 'express';
import cors from 'cors';
// import bodyparser from 'body-parser';

const app: Express = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send({data: "typescript server"});
});

app.post('/post', (req: Request, res: Response) => {
    console.log(req.body);
    res.send({data: 'check'});
})

app.listen(port, () => {
    
})