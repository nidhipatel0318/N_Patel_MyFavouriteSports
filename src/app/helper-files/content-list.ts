// src/app/helper-files/content-list.ts
import { Content } from './content-interface';

export class ContentList {
  private contentArray: Content[] = [];

  constructor() {}

  get content(): Content[] {
    return this.contentArray;
  }

  add(item: Content): void {
    this.contentArray.push(item);
  }

  count(): number {
    return this.contentArray.length;
  }

  displayItem(index: number): string {
    const item = this.contentArray[index];
    return `
      <div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p>Creator: ${item.creator}</p>
        <img src="${item.imgURL}" alt="${item.title}" />
        <p>Type: ${item.type}</p>
      </div>
    `;
  }
}
