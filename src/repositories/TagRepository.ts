import Tag from "../models/Tag";

interface TagRepository {
  getTag(id: number): Promise<Tag>;
  setTag(tag: Tag): Promise<void>;
}

export default TagRepository;