import express from 'express';
import * as bodyParser from 'body-parser';

//Create and configures an ExpressJS web server

export class ExprApp {
    public express!: express.Application;

    /**
     * Configure Express Middleware
    */

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();

        // here we can have initialization code
    }

    private middleware(): void {
        console.log("All middle ware options will be loaded here");

        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));

    }

    private routes():void{
        let router = express.Router();

        router.get('/',(req,res,next)=>{
            res.json({
                message: 'Hello from typescript express Node js Server'
            })
        });

        this.express.use('/', router);
    }
}