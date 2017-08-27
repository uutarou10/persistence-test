import Topic from "../models/Topic";

interface TopicRepository {
  getTopic(id: number): Topic;
  setTopic(topic: Topic): boolean;

  // トピックを全件取得する
  getAllTopics(): Topic[];
}

export default TopicRepository;