import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Category } from "./Category"
import { Password } from "./Password"
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @OneToMany(
        () => Category,
        category => category.user
    )
    categories: Category[]

    @OneToMany(
        () => Password,
        password => password.user
    )
    passwords: Password[]
}
