import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private _usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this._usuarioService.getUsers().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }
}
