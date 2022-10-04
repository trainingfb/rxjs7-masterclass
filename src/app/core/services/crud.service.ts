import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private http: HttpClient) { }
}
