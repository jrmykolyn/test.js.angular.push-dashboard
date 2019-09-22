import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(
    private http: HttpClient
  ) {}

  getSubscriptions() {
    // TODO: Move API URL into config.
    return this.http.get('http://localhost:4600/subscriptions');
  }
}
