import { AppDataSource1, UserRepository, FootwearRepository } from "./data-source1"
import { User } from "./model/entity/User"
import { Footwear } from "./model/entity/Footwear"
import ObjectId from "bson-objectid"
import { Brand } from "./model/entity/Brand"

AppDataSource1.initialize().then(async () => {
  const user = new User()
  user.id = ObjectId().toHexString()
  user.lastName = 'a'
  user.firstName = 'a'
  user.age = 1

  await UserRepository.save(user)

  const footwear = new Footwear()
  footwear.id = ObjectId().toHexString()
  footwear.brand = new Brand('nike')

  await FootwearRepository.save(footwear)

  console.info('ok')
}).catch(err => {
  console.error(err)
})
