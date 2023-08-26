import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./model/entity/User"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "admin",
  database: "test",
  entities: [User],
  synchronize: false,
  logging: false,
})
