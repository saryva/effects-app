import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuario = createAction('[Usuarios] Carga Usuarios', props<{ id: string }>());
export const cargarUsuarioSuccess = createAction('[Usuarios] Cargar Usuario Success', props<{ usuario: Usuario }>());
export const cargarUsuarioError = createAction('[Usuarios] Cargar Usuario Error', props<{ payload: any }>());
