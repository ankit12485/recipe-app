import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeContentComponent } from './recipe-content.component';

describe('RecipeContentComponent', () => {
  let component: RecipeContentComponent;
  let fixture: ComponentFixture<RecipeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the ingredients array', () => {
    let input = {
      strIngredient1: "Chicken",
      strIngredient2: "Tomato",
      strIngredient3: "Onions",
      strIngredient4: "",
      strMeasure1: "1 whole",
      strMeasure2: "1 chopped",
      strMeasure3: "2 chopped",
      strMeasure4: ""
    };
    let output = [
      {ingredient: "Chicken", measure: "1 whole"},
      {ingredient: "Tomato", measure: "1 chopped"},
      {ingredient: "Onions", measure: "2 chopped"}
    ];
    let result = component.createIngredients(input);
    expect(JSON.stringify(result)).toEqual(JSON.stringify(output));
  });

  it('should sanitize the youtube url', () => {
    let input = 'https:\/\/www.youtube.com\/watch?v=_gFB1fkNhXs';
    let output = 'https://www.youtube.com/embed/_gFB1fkNhXs';
    let result:any = component.getSanitizedURL(input);
    expect(result['changingThisBreaksApplicationSecurity']).toEqual(output);
  });
});
