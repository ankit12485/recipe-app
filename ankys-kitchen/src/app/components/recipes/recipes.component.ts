import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeSercice: RecipeService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  obs!: Observable<any>;
  recipes:any;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    const type: string = this.activatedRoute.snapshot.queryParamMap.get('type') || '';
    const value: string = this.activatedRoute.snapshot.queryParamMap.get('value') || '';

    this.getRecipes(type, value);
  }

  getRecipes(type:string, value:string){
    this.recipeSercice.getRecipes(type, value).subscribe(
      data => {
        this.recipes = data['meals'];
        this.dataSource = new MatTableDataSource(this.recipes);
        this.changeDetectorRef.detectChanges();
        this.dataSource.paginator = this.paginator;
        this.obs = this.dataSource.connect();
      }
    );
  }

}
