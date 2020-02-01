import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Email } from 'src/app/models/email.model';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styleUrls: ['./cmail-list-item.component.css']
})
export class CmailListItemComponent implements OnInit {

  @Input() dadosEmail: Email;
  @Output('eventoRemover') eventoRemover = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  removerEmail(click: Event){
    console.log(click)
    if(confirm('Tem certeza?')){
      this.eventoRemover.emit({status: 'removing'})
      console.log('Removendo')
    }
  }

}
