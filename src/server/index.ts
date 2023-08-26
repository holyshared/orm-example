import { AppDataSource, userRepository } from "./data-source"

AppDataSource.initialize().then(async () => {
  const s = await userRepository.find()

}).catch(err => {
  console.log(err)
})
