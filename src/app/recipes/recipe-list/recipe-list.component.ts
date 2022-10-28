import { Component, OnInit } from '@angular/core'
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is just a test, only a test.',
      'https://www.pexels.com/photo/french-macarons-in-bowl-239581/'
      ),
    new Recipe(
      'Test Recipe',
      'This is just a test, only a test.',
      'https://www.pexels.com/photo/french-macarons-in-bowl-239581/'
      ),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
