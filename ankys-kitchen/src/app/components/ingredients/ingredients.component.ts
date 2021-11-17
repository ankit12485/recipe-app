import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import {MatTableDataSource} from '@angular/material/table';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  constructor(
    private recipeService: RecipeService,
    private changeDetectorRef: ChangeDetectorRef,
    private commonService: CommonService
  ) { }

  ingredients:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  obs!: Observable<any>;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  ngOnInit(): void {
    this.getAllIngredients();
  }

  getAllIngredients(){
    this.recipeService.getAllIngredients().subscribe(
      data => {
        this.ingredients = data['meals'];
        this.dataSource = new MatTableDataSource(this.ingredients);
        this.changeDetectorRef.detectChanges();
        this.dataSource.paginator = this.paginator;
        this.obs = this.dataSource.connect();
      }
    );
  }

  shortenDescription(str:string){
    return this.commonService.shortenDescription(str);
  }

}
