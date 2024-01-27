// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContentCardComponent } from './content-card/content-card.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    // ... other components
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
