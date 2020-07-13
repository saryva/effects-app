import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as usuariosActions from '../actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {
  constructor(private _actions$: Actions, private _usuarioService: UsuarioService) {}

  cargarUsuarios$ = createEffect(() =>
    this._actions$.pipe(
      ofType(usuariosActions.cargarUsuarios), // para que solo este atento de esta accion, cuando se dispara
      mergeMap(() =>
        this._usuarioService.getUsers().pipe(
          map((users) => usuariosActions.cargarUsuariosSuccess({ usuarios: users })),
          catchError((error) => of(usuariosActions.cargarUsuariosError({ payload: error })))
        )
      )
    )
  );
}
