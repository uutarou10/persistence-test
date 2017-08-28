import TopicRepository from "../repositories/TopicRepository";
import Topic from "../models/Topic";
import {AsyncStorage} from "react-native";
import Tag from "../models/Tag";
import {TagDao} from "./TagStorage";

class TopicStorage implements TopicRepository {

  getTopic(id: number): Promise<Topic> {
    return this.getAllTopicDaoArray().then<Topic>((daoArray) => {
      const selectedTopic = daoArray.find((dao) => dao.id === id);
      if (selectedTopic) {
        return this.convertDaoToObject(selectedTopic);
      } else {
        throw new Error('Invalid value.');
      }
    });
  }

  setTopic(topic: Topic): Promise<void> {
    return this.getAllTopicDaoArray().then<void>((daoArray) => {
      const newTopicArray = [
        ...daoArray,
        this.convertObjectToDao(topic)
      ]
    })
  }

  getAllTopics(): Promise<Array<Topic>> {
    return this.getAllTopicDaoArray().then<Array<Topic>>((daoArray) => {
      return daoArray.map<Topic>((dao) => {
        return this.convertDaoToObject(dao);
      })
    })
  }

  private getAllTopicDaoArray(): Promise<Array<TopicDao>> {
    return AsyncStorage.getItem('topics').then<Array<TopicDao>>((daoArrayString) => {
      return JSON.parse(daoArrayString);
    })
  }

  private convertDaoToObject(dao: TopicDao): Topic {
    return new Topic(dao.id, dao.title, dao.tags);
  }

  private convertObjectToDao(topic: Topic): TopicDao {
    return {
      id: topic.id,
      title: topic.title,
      tags: topic.tags
    }
  }
}

export interface TopicDao {
  id: number | undefined,
  title: string,
  tags: Array<Tag>
}