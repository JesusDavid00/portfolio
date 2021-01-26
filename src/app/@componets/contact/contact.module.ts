import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { ContactComponent } from './contact.component';
import { TitleModule } from '@widgets/title/title.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    TitleModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[ContactComponent]
})
export class ContactModule { }
