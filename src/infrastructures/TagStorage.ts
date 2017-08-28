import TagRepository from "../repositories/TagRepository";
import Tag from "../models/Tag";
import {AsyncStorage} from "react-native";

class TagStorage implements TagRepository {
  public getTag(id: number): Promise<Tag> {
    return this.getAllTagDaoArray().then<Tag>((daoArray) => {
      const selectedTag = daoArray.find((tagDao) => tagDao.id === id);
      if (selectedTag) {
        return TagStorage.convertDaoToObject(selectedTag);
      } else {
        throw new Error('Invalid value.');
      }
    })
  }

  public setTag(tag: Tag): Promise<void> {
    return this.getAllTagDaoArray().then<void>((daoArray) => {
      const newDaoArray = [
        ...daoArray,
        TagStorage.convertObjectToDao(tag)
      ];
      return AsyncStorage.setItem('tags', JSON.stringify(newDaoArray))
    })
  }

  private getAllTagDaoArray(): Promise<Array<TagDao>> {
    return AsyncStorage.getItem('tags').then<Array<TagDao>>((daoArrayString) => {
      return JSON.parse(daoArrayString);
    })
  }

  private static convertDaoToObject(dao: TagDao): Tag {
    return new Tag(dao.id, dao.title, dao.loveLevel);
  }

  private static convertObjectToDao(tag: Tag): TagDao {
    return {
      id: tag.id,
      title: tag.title,
      loveLevel: tag.loveLevel
    }
  }
}

export interface TagDao {
  id: number | undefined,
  title: string,
  loveLevel: number
}