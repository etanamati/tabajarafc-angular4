import { Component, OnInit } from '@angular/core';
import { ClubeService } from './../modules/clube/clube.service'
import { Clube } from "../modules/clube/clube";


@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  private clube:Clube = {
    nome:"",
    presidente:""
  }

  private clubes: Array<Clube>;

  constructor(
    private clubeService: ClubeService
  ){}

  ngOnInit() {
    this.reload()
  }

  private reload() {
    return this.clubeService.getClubes()
      .then(clubes => this.clubes = clubes);
  }
}