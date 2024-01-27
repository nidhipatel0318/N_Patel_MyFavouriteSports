// src/app/helper-files/content-interface.ts
export interface Content {
    id: number;
    title: string;
    description: string;
    creator: string;
    imgURL?: string;
    type?: string;
    tags?: string[];
  }
  