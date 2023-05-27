export type UserRole = 'NORMAL' | 'ADMIN'

export type UserDB = {
  id: string
  name: string
  email: string
  password: string
  role: UserRole
  created_at: string
}

export type UserModel = {
  id: string,
  name: string,
  email: string,
  role: UserRole,
  createdAt: string
}

export type UserMinimal = {
  id: string
  name: string
  email: string
  password: string
  role: UserRole
}

export class User {
  constructor(private user: {
     id: string,
     name: string,
     email: string,
     password: string,
     role: UserRole,
     createdAt: string
  }) {}

  public getName() {
    return this.user.name
  }

  public toDBModel(): UserDB {
    return {
      id: this.user.id,
      name: this.user.name,
      email: this.user.email,
      password: this.user.password,
      role: this.user.role,
      created_at: this.user.createdAt
    }
  }
  
  public toBusinessModel(): UserModel {
    return {
      id: this.user.id,
      name: this.user.name,
      email: this.user.email,
      role: this.user.role,
      createdAt: this.user.createdAt
    }
  }
}