import { Repository } from "typeorm"
import { AppDataSource1 } from "./data-source1"
import { User } from "./model/entity/User"

type CustomUserRepository = Repository<User> & {
  example(name: string) : Promise<User>
}

export const UserRepository = AppDataSource1.getRepository(User).extend({
  // thisのコンテキストがわかるように型を指定する
  async example(this: CustomUserRepository, name: string) {
    return this.createQueryBuilder().getOne()
  }
})
