import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { TitleModule } from 'src/app/@widgets/title/title.module';
import { ModalsModule } from '@widgets/modals/modals.module';



@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    TitleModule,
    ModalsModule
  ],
  exports:[PortfolioComponent]
})
export class PortfolioModule { }
