import { Component, OnInit } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/Category";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.scss']
})
export class PageCategoryComponent implements OnInit {
  totalElements: number = 0;
  categorys: Category[]= [];
  deleteSuccess: any = {
    message: "delete_success"
  }
  constructor(private categoryService: CategoryService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.pageCategory({page:0, size: 9})
  }
  pageCategory(request){
    this.categoryService.pageCategory(request).subscribe(data =>{
      this.categorys = data['content']
      this.totalElements = data['totalElements']
    })
  }
  nextPage($event: PageEvent){
    const request = {};
    request['page'] = $event.pageIndex.toString();
    request['size'] = $event.pageSize.toString();
    this.pageCategory(request);
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(data =>{
      if(JSON.stringify(data)==JSON.stringify(this.deleteSuccess)){
        // window.location.reload();
        console.log('totalElement --> ', this.totalElements)
        this.pageCategory({page:0, size: this.totalElements})
      }
    })
  }
  openDialog(id){
    console.log('goi openDialog');
    const dialogRef = this.dialog.open(DialogComponent);
    console.log('dialogRef === ', dialogRef);
    dialogRef.afterClosed().subscribe(result =>{
      console.log('result === ', result);
      if(result){
        console.log('id ==== ', id);
        this.deleteCategory(id);
      }
      console.log('Dialog result ==>',result);
    })
  }
}
