import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { ClubeService } from './clube.service'

import { Clube } from './clube'

@Component({
  selector: 'app-clube',
  templateUrl: './clube.component.html',
  styleUrls: ['./clube.component.css'],
  providers: [ClubeService]
})
export class ClubeComponent implements OnInit {

  private clube:Clube = {
    nome: "",
    presidente: ""
  }

  private mensagem: String;

  private clubes: Array<Clube>;

  constructor(private service: ClubeService) {

  }

  ngOnInit() {
    this.reload()
  }

  private reload() {
    return this.service.getClubes()
      .then(clubes => this.clubes = clubes);
  }

  limpa() {
    this.clube = {
      nome: "",
      presidente: ""
    }
  }

  salvar(clube:any) {
    if (clube.codigo) {
      this.service.pathClube(clube)
        .then(result => {
          this.reload()
          this.mensagem = "Alterou!!!!";
          this.limpa();
        }).catch(error => {
          this.mensagem = "Problema ao alterar: " + error
        })
    }
    else {
      this.service.postClube(clube)
        .then(result => {
          this.reload()
          this.mensagem = "Salvou!!!!";
          this.limpa();
        }).catch(error => {
          this.mensagem = "Problema ao salvar: " + error
        })
    }
  }

  deletaClube(clube:any) {
    this.service.deleteClube(clube.codigo)
      .then(() => {
        this.reload()
        this.mensagem = "Deletado com Sucesso!!!"
      })
  }

  selecionaClube(clube:any) {
    this.clube = Object.assign({}, clube);
  }

}
