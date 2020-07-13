import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private _http: HttpClient) {}

  private url = 'https://reqres.in/api';

  getUsers() {
    return this._http.get(`${this.url}/users?per_page=6&delay=3`).pipe(
      map((respuesta: any) => {
        return respuesta.data;
        // return respuesta['data'];
      })
    );
  }

  getUserById(id: string) {
    return this._http.get(`${this.url}/users/${id}`).pipe(
      map((respuesta: any) => {
        return respuesta.data;
        // return respuesta['data'];
      })
    );
  }
}
