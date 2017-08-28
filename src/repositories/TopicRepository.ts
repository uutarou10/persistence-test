import Topic from "../models/Topic";

interface TopicRepository {
  getTopic(id: number): Promise<Topic>;
  setTopic(topic: Topic): Promise<void>;

  // トピックを全件取得する
  getAllTopics(): Promise<Array<Topic>>;
}

export default TopicRepository;