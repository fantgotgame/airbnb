import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../../../../icons/icons.module';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, RouterModule, IconsModule, MatButtonModule, HttpClientModule],
  exports: [FooterComponent]
})
export class FooterModule { }
