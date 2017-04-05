import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { ClubeService } from './clube.service'

import { Clube } from './clube'

@Component({
  selector: 'app-clube',
  templateUrl: './clube.component.html',
  styleUrls: ['./clube.component.css']
})
export class ClubeComponent implements OnInit {

  public clube:Clube = {
    codigo: "",
    nome: "",
    presidente: ""
  }

  private mensagem: String;

  private clubes: Array<Clube>;

  constructor(private clubeService: ClubeService) {

  }

  ngOnInit() {
    this.reload()
  }

  private reload() {
    return this.clubeService.getClubes()
      .subscribe(clubes => this.clubes = clubes);
  }

  limpa() {
    this.clube = {
      codigo:"",
      nome: "",
      presidente: ""
    }
  }

  salvar(clube:Clube) {
    if (clube.codigo) {
      this.clubeService.pathClube(clube)
        .subscribe(result => {
          this.reload();
          this.mensagem = "Alterou!!!!";
          this.limpa();
        }, error => {
          this.mensagem = "Problema ao alterar: " + error
        })
    }
    else {
      this.clubeService.postClube(clube)
        .subscribe(result => {
          this.reload()
          this.mensagem = "Salvou!!!!";
          this.limpa();
        }, error => {
          this.mensagem = "Problema ao salvar: " + error
        })
    }
  }

  deletaClube(clube:Clube) {
    this.clubeService.deleteClube(clube.codigo)
      .subscribe(() => {
        this.reload()
        this.mensagem = "Deletado com Sucesso!!!"
      })
  }

  selecionaClube(clube:any) {
    this.clube = Object.assign({}, clube);
  }

}
