import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { User } from "./User"
import { Password } from "./Password"

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @ManyToOne(
        () => User,
        user => user.categories
    )
    user: User

    @OneToMany(
        () => Password,
        password => password.category
    )
    passwords: Password[]
}
