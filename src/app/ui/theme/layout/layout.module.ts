import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent, FooterComponent, MainComponent],
  imports: [CommonModule, RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule],
  providers: [],
})
export class LayoutModule {}
