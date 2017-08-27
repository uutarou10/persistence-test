export default class User {
  constructor(
    readonly id: number | undefined,
    readonly name: string,
    readonly lovedTopics: Array<number>,
    readonly myTopics:Array<number>,
    readonly tags:Array<number>) {

  }

  public getId (): number | undefined {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getLovedTopics(): Array<number> {
    return this.lovedTopics;
  }

  public getMyTopics(): Array<number> {
    return this.myTopics;
  }

  public getTags(): Array<number> {
    return this.tags;
  }
}