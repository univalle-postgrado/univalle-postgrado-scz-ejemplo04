import "reflect-metadata"
import { DataSource } from "typeorm"
// import { User } from "./entity/User"
import { Category } from "./entity/Category"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "univalle",
    password: "123456",
    database: "univalle_dbmovies",
    synchronize: true,
    logging: true,
    entities: [Category],
    migrations: [],
    subscribers: [],
})
