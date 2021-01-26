import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsComponent } from './modals.component';
import { TitleModule } from '@widgets/title/title.module';



@NgModule({
  declarations: [ModalsComponent],
  imports: [
    CommonModule,
    TitleModule
  ],
  exports:[ModalsComponent]
})
export class ModalsModule { }
