import { Column } from "typeorm"

export class Brand {
  constructor(name: string) {
    this.name = name
  }

  @Column()
  name: string
}
