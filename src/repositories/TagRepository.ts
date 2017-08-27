import Tag from "../models/Tag";

interface TagRepository {
  getTag(id: number): Tag;
  setTag(tag: Tag): boolean;
}

export default TagRepository;