import { ClubeService } from './../clube/clube.service';
import { Clube } from './../clube/clube';
import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { JogadorService } from './jogador.service'

import { Jogador } from './jogador'

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.css']
})
export class JogadorComponent implements OnInit {

  private clube:Clube = {
    codigo:"",
    nome:"",
    presidente:""
  }

  private clubes: Array<Clube>;

  private clubeDoJogadorAtual:any;
  
  private jogador:Jogador = {
    nome: "",
    idade: "",
    clube: ""
  }
  
  private mensagem: String;

  private jogadores: Array<Jogador>;

  constructor(private service: JogadorService, 
              private clubeService: ClubeService) {

  }

  ngOnInit() {
    this.reloadJogadorComClube()
  }

  private reloadJogador() {
    return this.service.getJogadores()
      .subscribe(jogadores => this.jogadores = jogadores);
  }


  private reloadJogadorComClube() {
    return this.service.getJogadores()
      .subscribe(jogadores => {
        this.jogadores = jogadores
        this.clubeService.getClubes()
          .subscribe(clubes => {
            this.clubes = clubes; 
            for (let i = 0; i < this.jogadores.length; i++) {
              for (let j = 0; j < this.clubes.length; j++) {
                if (this.jogadores[i].clube == (<any>this.clubes[j]).codigo) {
                  (<any>this.jogadores[i]).objClube = <any>this.clubes[j]
                }
              }
            }
          });
        });
  }

  private reloadClube(){
    return this.clubeService.getClubes()
      .subscribe(clubes => {this.clubes = clubes});
  }

  limpa() {
    this.jogador = {
      nome: "",
      idade: "",
      clube: ""
    }
  }

  salvar(jogador:any) {
    if (jogador.codigo) {
      this.service.pathJogador(jogador)
        .subscribe(result => {
          this.reloadJogadorComClube()
          this.mensagem = "Alterou!!!!";
          this.limpa();
        }, error => {
          this.mensagem = "Problema ao alterar: " + error
        })
    }
    else {
      this.service.postJogador(jogador)
        .subscribe(result => {
          this.reloadJogadorComClube()
          this.mensagem = "Salvou!!!!";
          this.limpa();
        }, error => {
          this.mensagem = "Problema ao salvar: " + error
        })
    }
  }

  deletaJogador(jogador:any) {
    this.service.deleteJogador(jogador.codigo)
      .subscribe(() => {
        this.reloadJogadorComClube()
        this.mensagem = "Deletado com Sucesso!!!"
      })
  }

  selecionaJogador(jogador:Jogador) {
    this.jogador = Object.assign({}, jogador);
  }

}
