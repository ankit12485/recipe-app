import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-recipe-content',
  templateUrl: './recipe-content.component.html',
  styleUrls: ['./recipe-content.component.scss']
})
export class RecipeContentComponent implements OnInit {

  url:any;

  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  @Input() recipe:any;

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(this.recipe){
      this.recipe.strYoutube = this.getSanitizedURL(this.recipe.strYoutube);
      this.recipe['ingredientsArr'] = this.createIngredients(this.recipe);
      console.log(this.recipe['ingredientsArr']);
    }
  }

  /**
   * This method gets the single recipe object and creates an array of ingredients ({ingredient, measure})
   * @param recipe Single recipe object
   */
  createIngredients(recipe:any){
    let ingredientsArr:any = [];
    let stop = false;
    let counter = 1;
    while(stop == false){
      let obj:any = {};
      if(recipe['strIngredient'+counter] && recipe['strMeasure'+counter]){
        obj['ingredient'] = recipe['strIngredient'+counter];
        obj['measure'] = recipe['strMeasure'+counter];
        ingredientsArr.push(obj);
        counter++;
      }
      else{
        stop = true;
      }
    }
    return ingredientsArr;
  }

  getSanitizedURL(url:string) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      let id = (match && match[2].length === 11) ? match[2] : null;
      // this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(videoURL);
      return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+id);
  }

}
