import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "./../repositories/TagRepositories" 

class CreateTagService
{
  async execute(name:string)
  {
    const tagsRepositories    = getCustomRepository(TagsRepositories);

    if (!name)
    {
      throw new Error("Incorrect Name!");
    }

    const tagAllReadyExists = await tagsRepositories.findOne({name})

    if(tagAllReadyExists)
    {
      throw new Error("Tag allready exists!");
    }

    const tag = tagsRepositories.create({
      name
    });

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService }