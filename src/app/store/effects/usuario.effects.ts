import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as usuarioActions from '../actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects {
  constructor(private _actions$: Actions, private _usuarioService: UsuarioService) {}

  cargarUsuario$ = createEffect(() =>
    this._actions$.pipe(
      ofType(usuarioActions.cargarUsuario), // para que solo este atento de esta accion, cuando se dispara
      mergeMap((action) =>
        this._usuarioService.getUserById(action.id).pipe(
          map((users) => usuarioActions.cargarUsuarioSuccess({ usuario: users })),
          catchError((error) => of(usuarioActions.cargarUsuarioError({ payload: error })))
        )
      )
    )
  );
}
