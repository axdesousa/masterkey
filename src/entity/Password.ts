import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Category } from "./Category"
import { User } from "./User"

@Entity()
export class Password {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    hash: string

    @ManyToOne(
        () => Category,
        category => category.passwords
    )
    category: Category

    @ManyToOne(
        () => User,
        user => user.passwords
    )
    user: User
}
