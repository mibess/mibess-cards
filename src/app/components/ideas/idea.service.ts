import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idea } from './idea';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IdeaService {
  private readonly apiBaseUrl = environment.API_BASE_URL + '/cards';
  //private readonly apiBaseUrl = 'http://192.168.15.18:8080' + '/cards';

  constructor(private http: HttpClient) {}

  listAllCards(): Observable<Idea[]> {
    return this.http.get<Idea[]>(this.apiBaseUrl);
  }

  createCard(idea: Idea): Observable<Idea> {
    return this.http.post<Idea>(this.apiBaseUrl, idea);
  }

  editCard(idea: Idea): Observable<Idea> {
    const url = `${this.apiBaseUrl}/${idea.code}`;
    return this.http.put<Idea>(url, idea);
  }

  deleteCard(code: string): Observable<Idea> {
    const url = `${this.apiBaseUrl}/${code}`;
    return this.http.delete<Idea>(url);
  }

  findByCode(code: string): Observable<Idea> {
    const url = `${this.apiBaseUrl}/${code}`;
    return this.http.get<Idea>(url);
  }
}
