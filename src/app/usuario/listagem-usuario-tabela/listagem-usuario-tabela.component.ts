import { UsuarioService } from './../../shared/services/usuario.service';
import { Usuario } from './../../shared/modelo/usuario';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listagem-usuario-tabela',
  templateUrl: './listagem-usuario-tabela.component.html',
  styleUrls: ['./listagem-usuario-tabela.component.css']
})
export class ListagemUsuarioTabelaComponent {

  usuarios: MatTableDataSource<Usuario> = new MatTableDataSource<Usuario>();
  colunas = [
    'id',
    'nome',
    'idade',
    'cpf',
    'acoes'
  ];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = new MatTableDataSource<Usuario>(usuarios)
    );
  }

  filtrar(value: string): void {
    this.usuarios.filter = value.trim().toLowerCase();
  }

  apagar(id: number): void {
    this.usuarioService.apagar(id).subscribe(
      () => {
        const indx = this.usuarios.data.findIndex(usuario => usuario.id === id);
        if (indx > -1) {
          this.usuarios.data.splice(indx, 1);
          this.usuarios._updateChangeSubscription();
        }
      }
    );
  }
}
