import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';

import { TodaysRecipeComponent } from './todays-recipe.component';

describe('TodaysRecipeComponent', () => {
  let component: TodaysRecipeComponent;
  let fixture: ComponentFixture<TodaysRecipeComponent>;
  const mockData = {
    "meals": [{
      "idMeal": "52940",
      "strMeal": "Brown Stew Chicken",
      "strDrinkAlternate": null,
      "strCategory": "Chicken",
      "strArea": "Jamaican",
      "strInstructions": "Squeeze lime over chicken and rub well. Drain off excess lime juice.\r\nCombine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces. Cover and marinate at least one hour.\r\nHeat oil in a dutch pot or large saucepan. Shake off the seasonings as you remove each piece of chicken from the marinade. Reserve the marinade for sauce.\r\nLightly brown the chicken a few pieces at a time in very hot oil. Place browned chicken pieces on a plate to rest while you brown the remaining pieces.\r\nDrain off excess oil and return the chicken to the pan. Pour the marinade over the chicken and add the carrots. Stir and cook over medium heat for 10 minutes.\r\nMix flour and coconut milk and add to stew, stirring constantly. Turn heat down to minimum and cook another 20 minutes or until tender.",
      "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/sypxpx1515365095.jpg",
      "strTags": "Stew",
      "strYoutube": "https:\/\/www.youtube.com\/watch?v=_gFB1fkNhXs",
      "strIngredient1": "Chicken",
      "strMeasure1": "1 whole",
      "strMeasure2": "1 chopped",
      "strSource": "http:\/\/www.geniuskitchen.com\/recipe\/authentic-jamaican-brown-stew-chicken-347996",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": null
    }]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ],
      declarations: [ TodaysRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getMealOfTheDay and get response', fakeAsync(() => {
    const service = fixture.debugElement.injector.get(RecipeService);
    spyOn(service, 'getMealOfTheDay').and.callFake(() => {
      return of(mockData);
    });
    component.getMealOfTheDay();
    expect(component.recipe).toEqual(mockData['meals'][0]);
  }));

  it('should call getMealById and get response', fakeAsync(() => {
    const service = fixture.debugElement.injector.get(RecipeService);
    spyOn(service, 'getMealById').and.callFake(() => {
      return of(mockData);
    });
    component.getMealById('52940');
    expect(component.recipe).toEqual(mockData['meals'][0]);
  }));
});
