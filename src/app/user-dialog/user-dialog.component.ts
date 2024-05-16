import { Component, Inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { UserModel } from '../../models/user-model';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-dialog',
  standalone: true,
  imports: [MatDialogModule, MatInputModule, MatButtonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss'
})
export class UserDialogComponent {
  dialogForm: any;
  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserModel
  ) {}

  ngOnInit() {
    this.dialogForm = new FormGroup({
      id: new FormControl(this.data.id),
      firstName: new FormControl(this.data.firstName),
      lastName: new FormControl(this.data.lastName),
      email: new FormControl(this.data.email),
      age: new FormControl(this.data.age),
      gender: new FormControl(this.data.gender),
      phone: new FormControl(this.data.phone),
      company: new FormControl(this.data.company.companyName)
    });
  }

  getUser(row: UserModel) {}

  save() {
    this.dialogRef.close(this.dialogForm.value);
  }
  close(){
    this.dialogRef.close();
  }
}
