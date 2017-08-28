import Topic from "./Topic";
import Tag from "./Tag";

export default class User {
  constructor(
    readonly id: number | undefined,
    readonly name: string,
    readonly lovedTopics: Array<Topic>,
    readonly myTopics:Array<Topic>,
    readonly tags:Array<Tag>) {

  }

  public getId (): number | undefined {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getLovedTopics(): Array<Topic> {
    return this.lovedTopics;
  }

  public getMyTopics(): Array<Topic> {
    return this.myTopics;
  }

  public getTags(): Array<Tag> {
    return this.tags;
  }
}