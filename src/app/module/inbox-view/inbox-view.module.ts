import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxViewRoutingModule } from './inbox-view-routing.module';
import { InboxViewComponent } from './inbox-view.component';



@NgModule({
  declarations: [InboxViewComponent],
  imports: [
    CommonModule,
    InboxViewRoutingModule
  ]
})
export class InboxViewModule { }
