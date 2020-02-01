import { UserInfoModel } from './../../models/user-info.model';
import { Component, OnInit } from '@angular/core';
import { PageService } from './../../services/page.service';
import { HeaderService } from 'src/app/services/header.service';
import { Router } from '@angular/router';


@Component({
    selector: 'cmail-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css', 'header.search.css']
})
export class HeaderComponent implements OnInit {

    isMenuOpen: boolean = false
    tituloDaPagina = 'mvictor'
    userInfo: UserInfoModel

    ngOnInit() {
        this.userInfo = JSON.parse(localStorage.getItem('user-info'))
    }

    constructor(private pageService: PageService,
        private headerService: HeaderService,
        private router: Router) {
        this.pageService.titulo.subscribe(novoTitulo => this.tituloDaPagina = novoTitulo)
    }

    atribuirValorAoSubjectComponent({ target }) {
        this.headerService.atribuirValorAoSubjectService(target.value)
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        console.log(this.isMenuOpen)
    }

    logout() {
        localStorage.clear()
        this.router.navigate(['/login'])
      }

} 