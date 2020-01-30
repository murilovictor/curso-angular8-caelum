import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styleUrls: ['./cmail-list-item.component.css']
})
export class CmailListItemComponent implements OnInit {

  @Input() dadosEmail = {};
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
