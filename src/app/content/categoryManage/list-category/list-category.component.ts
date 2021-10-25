import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/Category";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
    selector: 'app-list-category',
    templateUrl: './list-category.component.html',
    styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
    displayedColumns: string[] = ['id', 'nameCategory', 'avatarCategory', 'edit', 'delete'];
    dataSource: any;
    deleteSuccess: any = {
        message: "delete_success"
    }
    // dataSource = new MatTableDataSource<Category>(this.categories);
    categories: Category[] = [];
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private categoryService: CategoryService,
                private dialog: MatDialog) {
    }

    // ngAfterViewInit(): void {
    //   this.dataSource.paginator = this.paginator;
    //   }

    ngOnInit(): void {
        this.getListCategory();
    }

    getListCategory() {
        this.categoryService.getListCategory().subscribe(listCTG => {
            this.categories = listCTG;
            console.log('listCTG --> ', this.categories)
            this.dataSource = new MatTableDataSource<Category>(this.categories);
            this.dataSource.paginator = this.paginator;
        })
    }

    deleteCategory(id: number) {
        this.categoryService.deleteCategory(id).subscribe(data => {
            if (JSON.stringify(data) == JSON.stringify(this.deleteSuccess)) {
                // window.location.reload();
                this.getListCategory();
            }
        })
    }

    openDialog(id: number) {
        console.log('goi openDialog');
        const dialogRef = this.dialog.open(DialogComponent);
        console.log('dialogRef === ', dialogRef);
        dialogRef.afterClosed().subscribe(result => {
            console.log('result === ', result);
            if (result) {
                console.log('id ==== ', id);
                this.deleteCategory(id);
            }
            console.log('Dialog result ==>', result);
        })
    }
}
