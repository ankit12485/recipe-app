// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { HttpClient } from '@angular/common/http';
// import { TestBed } from '@angular/core/testing';
// import { of } from 'rxjs';

import { of } from 'rxjs';
import { RecipeService } from './recipe.service';

describe('RecipeService', () => {
  // let httpClientSpy: { get: jasmine.Spy };
  let service: RecipeService;
  let mockHttpClient:any;
  // let httpTestingController: HttpTestingController;

  beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports: [ HttpClientTestingModule ]
  //   });
  //   service = TestBed.inject(RecipeService);
  //   httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new RecipeService(mockHttpClient);
  //   httpClient = TestBed.inject(HttpClient);
  //   httpTestingController = TestBed.inject(HttpTestingController);
  });

  // afterEach(() => {
  //   // After every test, assert that there are no more pending requests.
  //   httpTestingController.verify();
  // });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return recipe categories', () => {
    let mockResponse = {
      "meals": [
        {"strCategory": "Beef"}, 
        {"strCategory": "Breakfast"}, 
        {"strCategory": "Vegetarian"}
      ]
    };
    let response:any;

    spyOn(service, 'getRecipeCategories').and.returnValue(of(mockResponse));
    service.getRecipeCategories().subscribe(
      res => {
        response = res;
      }
    );

    expect(response).toEqual(mockResponse);
  });

  it('should return meal of the day', () => {
    let mockResponse = {
      "meals": [{
        "idMeal": "52910",
        "strMeal": "Chinon Apple Tarts",
        "strDrinkAlternate": null,
        "strCategory": "Dessert",
        "strArea": "French",
        "strInstructions": "To make the red wine jelly, put the red wine, jam sugar, star anise, clove, cinnamon stick, allspice, split vanilla pod and seeds in a medium saucepan. Stir together, then heat gently to dissolve the sugar. Turn up the heat and boil for 20 mins until reduced and syrupy. Strain into a small, sterilised jam jar and leave to cool completely. Will keep in the fridge for up to 1 month.\r\n\r\nTake the pastry out of the fridge and leave at room temperature for 10 mins, then unroll. Heat the grill to high and heat the oven to 180C\/160C fan\/gas 4. Cut out 2 x 13cm circles of pastry, using a plate as a guide, and place on a non-stick baking sheet. Sprinkle each circle with 1 tbsp sugar and grill for 5 mins to caramelise, watching carefully so that the sugar doesn\u2019t burn. Remove from the grill. Can be done a few hours ahead, and left, covered, out of the fridge.\r\n\r\nPeel, quarter and core the apples, cut into 2mm-thin slices and arrange on top of the pastry. Sprinkle over the remaining sugar and pop in the oven for 20-25 mins until the pastry is cooked through and golden, and the apples are softened. Remove and allow to cool slightly. Warm 3 tbsp of the red wine jelly in a small pan over a low heat with 1 tsp water to make it a little more runny, then brush over the top of the tarts.\r\n\r\nTip the cr\u00e8me fra\u00eeche into a bowl, sift over the icing sugar and cardamom, and mix together. Carefully lift the warm tarts onto serving plates and serve with the cardamom cr\u00e8me fra\u00eeche.",
        "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/qtqwwu1511792650.jpg",
        "strTags": "Tart,Baking",
        "strYoutube": "https:\/\/www.youtube.com\/watch?v=5dAW9HQgtCk",
        "strIngredient1": "Puff Pastry",
        "strIngredient2": "Dark Brown Soft Sugar",
        "strMeasure1": "320g",
        "strMeasure2": "4 tbs",
        "strSource": "https:\/\/www.bbcgoodfood.com\/recipes\/chinon-apple-tarts",
        "strImageSource": null,
        "strCreativeCommonsConfirmed": null,
        "dateModified": null
      }]
    };
    let response:any;

    spyOn(service, 'getMealOfTheDay').and.returnValue(of(mockResponse));
    service.getMealOfTheDay().subscribe(
      res => {
        response = res;
      }
    );

    expect(response).toEqual(mockResponse);
  });

  it('should return all ingredients', () => {
    let mockResponse = {
      "meals": [{
        "idIngredient": "1",
        "strIngredient": "Chicken",
        "strDescription": "The chicken is a type of domesticated fowl.",
        "strType": null
      }, {
        "idIngredient": "2",
        "strIngredient": "Salmon",
        "strDescription": "Salmon is the common name for several species of ray-finned fish in the family Salmonidae.",
        "strType": null
      }]
    };
    let response:any;

    spyOn(service, 'getAllIngredients').and.returnValue(of(mockResponse));
    service.getAllIngredients().subscribe(
      res => {
        response = res;
      }
    );

    expect(response).toEqual(mockResponse);
  });

});
