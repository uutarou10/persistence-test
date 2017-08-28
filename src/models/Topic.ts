import Tag from "./Tag";

export default class Topic {
  constructor(readonly id: number | undefined,
              readonly titele: string,
              readonly tags: Array<Tag>) {

  }

}