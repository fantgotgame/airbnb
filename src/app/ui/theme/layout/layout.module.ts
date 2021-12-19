import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './components/header/header.module';
import { CommonModule } from '@angular/common';
import { FooterModule } from './components/footer/footer.module';

@NgModule({
  declarations: [LayoutComponent, MainComponent],
  imports: [CommonModule, RouterModule, HeaderModule, FooterModule],
  providers: [],
})
export class LayoutModule {}
