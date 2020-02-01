import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cmail-inbox-view',
  templateUrl: './inbox-view.component.html',
  styles: []
})
export class InboxViewComponent implements OnInit {

  constructor(private emailService: EmailService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  findByEmailId(){
    const idEmail = this.route.parent.snapshot.params['id'];
    console.log(idEmail)
  }

}
