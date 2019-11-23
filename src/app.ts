import express from "express"
import cors from "cors"
import helmet from "helmet"
import { createConnection, getConnection } from "typeorm"

import routes from "./routes"

class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middlewares()
        this.connection()
        this.routes()
    }

    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(helmet())
        this.express.use(cors())
    }

    private connection(): void {
        this.express.use(async (req, res, next) => {
            try {
                const connection = getConnection()
                res.locals.connection = connection
                next()
            } catch (error) {
                const connection = await createConnection()
                res.locals.connection = connection
                next()
            }
        })
    }

    private routes(): void {
        this.express.use(routes)
    }
}

export default new App().express
