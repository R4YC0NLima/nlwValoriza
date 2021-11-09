import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "./../repositories/UserRepositories" 
interface IUserRequest {
  name: string,
  email: string,
  admin?: boolean
}

class CreateUserService
{
  async execute({ name, email, admin} : IUserRequest)
  {
    const usersRepository     = getCustomRepository(UsersRepositories);

    if (!email)
    {
      throw new Error("Email incorrect");
    }
    const userAllReadyExists  = await usersRepository.findOne({
      email
    });

    if(userAllReadyExists)
    {
      throw new Error("User allready exists");
    }

    const user = usersRepository.create({
      name, 
      email, 
      admin
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService }