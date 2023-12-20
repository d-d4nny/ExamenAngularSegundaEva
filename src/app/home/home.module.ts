import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPrincipalComponent } from './header-principal/header-principal.component';
import { RouterLinkWithHref } from '@angular/router';



@NgModule({
  declarations: [
    HeaderPrincipalComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref
  ],

  exports: [
    HeaderPrincipalComponent
  ]
})
export class homeModule { }
