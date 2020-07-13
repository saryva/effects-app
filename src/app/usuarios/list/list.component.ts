import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import { cargarUsuarios } from 'src/app/store/actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  usuarios: Usuario[] = [];
  loading = false;
  error: any;

  // constructor(private _usuarioService: UsuarioService) {}

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this._store.select('usuarios').subscribe(({ users, loading, error }) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    });

    this._store.dispatch(cargarUsuarios());

    // this._usuarioService.getUsers().subscribe((usuarios) => {
    //   this.usuarios = usuarios;
    // });
  }
}
