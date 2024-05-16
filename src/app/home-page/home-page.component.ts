import { Component, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { UserModel } from '../../models/user-model';
import { userData } from '../../models/user-list';
import { TablePipePipe } from '../table-pipe.pipe';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    TablePipePipe,
    MatMenuModule,
    MatIconButton
  ],
})
export class HomePageComponent {
  userData: UserModel[] = userData;
  displayedColumns: string[] = Object.keys(userData[0]);
  dataSource = new MatTableDataSource(userData);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.displayedColumns.push("actions");
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(row: UserModel) {
    this.dialog.open(UserDialogComponent, {
      data: row,
      disableClose: true,
      autoFocus: true
    }).afterClosed().subscribe(result => {
      console.log("result: ", result);
      this.dataSource.data[result.id-1] = result;
      this.dataSource._updateChangeSubscription();
    });
  }

  editUser(row: UserModel) {
    this.openDialog(row);
  }

  deleteUser(row: UserModel) {}
}
