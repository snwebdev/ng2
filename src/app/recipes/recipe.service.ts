import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {


  private recipes: Recipe[] = [
    new Recipe(
      'A Burger',
      'This is simply a burger', '' +
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
    [
      new Ingredient('Burger', 1),
      new Ingredient('Bun', 1)
    ]),
    new Recipe(
      'Shnitzel',
      'Whatever this is',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    [
      new Ingredient('Scnitzel', 1),
      new Ingredient('chips', 37)
    ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.adIngredients(ingredients);
  }
}
