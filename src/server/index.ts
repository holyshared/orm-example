import { AppDataSource } from "./data-source"

AppDataSource.initialize().then((conn) => {

}).catch(err => {
  console.log(err)
})
