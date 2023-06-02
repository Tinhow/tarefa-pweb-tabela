import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemUsuariosComponent } from './listagem-usuarios/listagem-usuarios.component';
import { MantemUsuarioComponent } from './mantem-usuario/mantem-usuario.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {PipesModule} from '../pipes/pipes.module';
import {FlexModule} from '@angular/flex-layout';
import {RouterLink} from '@angular/router';
import { ListagemUsuarioTabelaComponent } from './listagem-usuario-tabela/listagem-usuario-tabela.component';



@NgModule({
  declarations: [
    ListagemUsuariosComponent,
    MantemUsuarioComponent,
    ListagemUsuarioTabelaComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    PipesModule,
    FlexModule,
    RouterLink,
    MatTableModule
  ],
  exports: [
    ListagemUsuariosComponent,
    MantemUsuarioComponent
  ]
})
export class UsuarioModule { }