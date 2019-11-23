import { getRepository } from "typeorm"
import { Router } from "express"
import { User } from "./entity/User"
import { Category } from "./entity/Category"
import { Password } from "./entity/Password"

const routes = Router()

routes.get("/users", async (req, res) => {
    /*
    const userRepository = getRepository(User)
    userRepository.save({ fistName: "Ax", lastName: "Sousa", age: 31 })
    const usuario = await userRepository.findOne(1)
   
    /*
    const category = new Category()
    category.description = "Bancos"
    category.user = usuario
    await res.locals.connection.manager.save(category)

    const category2 = new Category()
    category2.description = "Serviços"
    category2.user = usuario
    await res.locals.connection.manager.save(category2)

    res.json(usuario)
    */
    const categoryRepository = getRepository(Category)
    const userRepository = getRepository(User)

    const usuario = await userRepository.findOne(1, { relations: ["categories", "passwords"] })
    const category = await categoryRepository.findOne(3)

    const password = new Password()
    password.hash = "123"
    password.user = usuario
    password.category = category
    await res.locals.connection.manager.save(password)

    const password2 = new Password()
    password2.hash = "546"
    password2.user = usuario
    password2.category = category
    await res.locals.connection.manager.save(password2)
    res.json(usuario)
})

export default routes
