import { Entity,  PrimaryColumn, Column, OneToOne } from "typeorm"
import { Profile } from "./Profile"

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

  @OneToOne(() => Profile, (profile) => profile.user, { nullable: true, cascade: true })
  profile?: Profile
}
