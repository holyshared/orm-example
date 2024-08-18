import { AppDataSource1, UserRepository, FootwearRepository } from "./data-source1"
import { User } from "./model/entity/User"
import { Footwear } from "./model/entity/Footwear"
import { Profile } from "./model/entity/Profile"
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
  
  const profile = new Profile()
  profile.id = ObjectId().toHexString()
  profile.name = "a"
  user.profile = profile

  await UserRepository.save(user)


  const loadedUser = await UserRepository.findOneOrFail({
    where: {
      id: user.id
    },
    relations: ["profile"]
  })
  console.info(loadedUser)
  loadedUser.profile.deletedAt = new Date()
  await UserRepository.save(loadedUser)


  const profileDeletedUser = await UserRepository.findOneOrFail({
    where: {
      id: user.id
    },
    relations: ["profile"]
  })
  console.info(profileDeletedUser)

  await AppDataSource1.destroy()
  console.info('ok')
}).catch(err => {
  console.error(err)
})
