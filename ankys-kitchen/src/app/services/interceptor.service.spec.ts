import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs/operators';

import { InterceptorService } from './interceptor.service';
import { RecipeService } from './recipe.service';

describe('InterceptorService', () => {
  let service: InterceptorService;
  let recipeService: RecipeService;
  const loaderServiceSpy = jasmine.createSpyObj('LoaderService', ['show', 'hide']);
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorService);
    recipeService = TestBed.inject(RecipeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should hide loader once API call is succeeded', async (done) => {
  //   await recipeService.getMealOfTheDay().pipe(
  //     take(1), 
  //   ).toPromise()
  //    .then(res => {
  //       expect(loaderServiceSpy.show).toHaveBeenCalledTimes(1);
  //       done();
  //       expect(loaderServiceSpy.hide).toHaveBeenCalledTimes(1);
  //   });
  //   httpMock.expectOne('https://www.themealdb.com/api/json/v1/1/random.php').flush({});
  // });
});
