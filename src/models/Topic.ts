import Tag from "./Tag";

export default class Topic {
  constructor(readonly id: number | undefined,
              readonly title: string,
              readonly tags: Array<Tag>) {

  }

}