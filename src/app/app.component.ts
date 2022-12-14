// https://github.com/jkubisiowski/udemy-angular-shopping-list
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'shopping-list-and-recipe-book';
  
  loadedFeature = 'recipe'

  onNavigate(feature: string) {
    this.loadedFeature = feature
  }
}
