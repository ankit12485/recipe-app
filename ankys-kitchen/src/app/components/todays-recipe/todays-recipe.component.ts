import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-todays-recipe',
  templateUrl: './todays-recipe.component.html',
  styleUrls: ['./todays-recipe.component.scss']
})
export class TodaysRecipeComponent implements OnInit {

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
  ) { }

  recipe:any;

  ngOnInit(): void {
    const id: string = this.activatedRoute.snapshot.queryParamMap.get('id') || '';
    if(id){
      this.getMealById(id);
    }
    else{
      this.getMealOfTheDay();
    }
  }

  getMealOfTheDay(){
    this.recipeService.getMealOfTheDay().subscribe(
      data => {
        this.recipe = data?.meals?.[0];
      }
    );
  }

  getMealById(id:string){
    this.recipeService.getMealById(id).subscribe(
      data => {
        this.recipe = data?.meals?.[0];
      }
    );
  }

}
