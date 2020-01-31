import { Component } from '@angular/core';
import { PageService } from './../../services/page.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
    selector: 'cmail-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css', 'header.search.css']
})
export class HeaderComponent {
    isMenuOpen: boolean = false
    tituloDaPagina = 'mvictor'

    constructor(private pageService: PageService, 
                private headerService: HeaderService) {
        this.pageService.titulo.subscribe(novoTitulo => this.tituloDaPagina = novoTitulo)
    }

    atribuirValorAoSubjectComponent({target}) {
        this.headerService.atribuirValorAoSubjectService(target.value)
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        console.log(this.isMenuOpen)
    }

}