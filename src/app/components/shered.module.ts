import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormFieldDirective } from './form-group/form-field.directive';
import { RouterModule } from '@angular/router';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';
import { InboxViewComponent } from '../module/inbox-view/inbox-view.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FormGroupComponent,
    FormFieldDirective,
    CmailListItemComponent,
    CmailListItemComponent,
    InboxViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports: [
    HeaderComponent,
    FormGroupComponent,
    FormFieldDirective,
    CmailListItemComponent
  ]
})
export class SheredModule { }
