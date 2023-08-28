import { Entity, PrimaryColumn, Column } from "typeorm"
import { Brand } from "./Brand"

@Entity()
export class Footwear {
  @PrimaryColumn()
  id: string

  @Column(() => Brand)
  brand: Brand
}
