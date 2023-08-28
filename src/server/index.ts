import { AppDataSource1, UserRepository } from "./data-source1"
import { User } from "./model/entity/User"
import ObjectId from "bson-objectid"

AppDataSource1.initialize().then(async () => {
  const user = new User()
  user.id = ObjectId().toHexString()
  user.lastName = 'a'
  user.firstName = 'a'
  user.age = 1

  await UserRepository.save(user)

  console.info('ok')
}).catch(err => {
  console.error(err)
})
