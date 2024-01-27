// src/app/content-card/content-card.component.ts
import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList = new ContentList();

  constructor() {
    // Add at least 3 valid items to the ContentList
    this.contentList.add({
      id: 1,
      title: 'Sample 1',
      description: 'Description 1',
      creator: 'Creator 1',
      imgURL: 'path/to/image1.jpg',
      type: 'Type 1'
    });
    // Add 2 more items similarly
  }

  ngOnInit(): void {}
}
