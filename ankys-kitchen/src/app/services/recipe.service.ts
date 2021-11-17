import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * List all recipe categories
   * @returns 
   */
  getRecipeCategories(): Observable<any> {
    return this.httpClient.get<any>('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  }

  getMealOfTheDay(){
    return this.httpClient.get<any>('https://www.themealdb.com/api/json/v1/1/random.php');
  }

  getAllIngredients(){
    return this.httpClient.get<any>('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  }

  getRecipes(type:string, value:string){
    return this.httpClient.get<any>(`https://www.themealdb.com/api/json/v1/1/filter.php?${type}=${value}`);
  }

  getMealById(id:string){
    return this.httpClient.get<any>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }
}
