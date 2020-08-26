import { Client } from './../../interface/client';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientListService {

  clientsUrl = 'https://eagle-backend-staging.somosagility.com.br/getTeste';

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getAllClientList(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl);
  }
}


