import { Component } from '@angular/core';
import { PushService } from './services/push/push.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test.js.angular.push-dashboard';
  subscriptions$ = this.pushService.getSubscriptions();

  constructor(
    private pushService: PushService
  ) {}
}
