import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  submitContactForm(data: any) {
    return this.http.post(`${this.apiUrl}/contact`, data);
  }

  subscribeToNewsletter(email: string) {
    return this.http.post(`${this.apiUrl}/newsletter`, { email });
  }
}
