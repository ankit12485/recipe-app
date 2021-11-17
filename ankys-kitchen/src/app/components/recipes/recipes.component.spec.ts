import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { RecipesComponent } from './recipes.component';

describe('RecipesComponent', () => {
  let component: RecipesComponent;
  let fixture: ComponentFixture<RecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ],
      declarations: [ RecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getRecipes and get response', fakeAsync(() => {
    const mockData = {
      "meals": [{
        "strMeal": "Brown Stew Chicken",
        "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/sypxpx1515365095.jpg",
        "idMeal": "52940"
      }, {
        "strMeal": "Chicken & mushroom Hotpot",
        "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/uuuspp1511297945.jpg",
        "idMeal": "52846"
      }]
    };
    const service = fixture.debugElement.injector.get(RecipeService);
    spyOn(service, 'getRecipes').and.callFake(() => {
      return of(mockData);
    });
    component.getRecipes('i', 'chicken');
    expect(component.recipes).toEqual(mockData['meals']);
  }));
});
