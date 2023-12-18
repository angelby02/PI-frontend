import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.BASE_URL}/users`);
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>(`${this.BASE_URL}/users/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/users/create`, user);
  }

  deleteUser(id: number): Observable<User> {
    console.log(id);
    return this.http.delete<User>(`${this.BASE_URL}/users/delete?id=${id}`);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.BASE_URL}/users/update?id=${id}`, user);
  }}
