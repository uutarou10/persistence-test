export default class Tag {
  constructor(readonly id:number | undefined,
              readonly title: string,
              readonly loveLevel: number) {

  }

  getId(): number | undefined {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getLoveLevel(): number {
    return this.loveLevel;
  }
}
