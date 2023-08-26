import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./model/entity/User"
import { resolve } from "path"

const migrationsPath = resolve(__dirname, "model/migration")

export const AppDataSource2 = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "example",
  password: "example",
  database: "example2",
  entities: [User],
  synchronize: false,
  logging: false,
  migrations: [`${migrationsPath}/*{.js,.ts}`]
})
