import "reflect-metadata"
import { DataSource, Repository } from "typeorm"
import { User } from "./model/entity/User"
import { resolve } from "path"

const migrationsPath = resolve(__dirname, "model/migration")

export const AppDataSource1 = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "example",
  password: "example",
  database: "example",
  entities: [User],
  synchronize: false,
  logging: false,
  migrations: [`${migrationsPath}/*{.ts,.js}`]
})

interface CustomUserRepository extends Repository<User> {
  example(name: string) : Promise<User>
}

export const UserRepository = AppDataSource1.getRepository(User).extend({
  // thisのコンテキストがわかるように型を指定する
  async example(this: CustomUserRepository, name: string) {
    return this.createQueryBuilder().getOne()
  }
})
