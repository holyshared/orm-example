import { Entity,  PrimaryColumn, Column } from "typeorm"

@Entity()
export class User {
  @PrimaryColumn()
  id: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  age: number
}
