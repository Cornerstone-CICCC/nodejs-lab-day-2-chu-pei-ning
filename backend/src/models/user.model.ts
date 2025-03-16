import { v4 as uuidv4 } from "uuid"
import { User } from "../types/user"
import bcrypt from "bcrypt"

class UserModel {
  private users: User[] = [
    { id: uuidv4(), username: 'john', password: '12345', firstname: 'John', lastname: 'Smith' },
    { id: uuidv4(), username: 'amy', password: '23456', firstname: 'Amy', lastname: 'Liu' }
  ]
  findAll() {
    return this.users
  }

  async findByUsername(username: string) {
    const user = this.users.find(u => u.username === username)
    if (!user) return null
    return user
  }

  async login(username: string, password: string) {
    const user = this.users.find(u => u.username === username)
    if (!user) return false
    const isMatch: boolean = await bcrypt.compare(password, user.password)
    if (!isMatch) return false
    return user
  }

  async createUser(newuser: Omit<User, 'id'>) {
    const { username, password, firstname, lastname } = newuser
    const foundIndex = this.users.findIndex(u => u.username === username)
    if (foundIndex !== -1) return false
    const hashedPassword = await bcrypt.hash(password, 12)
    const user = {
      id: uuidv4(),
      username,
      password: hashedPassword,
      firstname,
      lastname
    }
  }
}

export default new UserModel

// findByUsername(username)
// login(username, password)
// create(newUser)