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

  handleSubmit(event) {
    event.preventDefault();
    // TODO: This... better.
    const id = event.target.querySelector('select').value;
    const title = event.target.querySelector('input[name="title"]').value;

    this.pushService.sendNotification(id, title)
      .subscribe((response) => {
        console.log('__ LOGGING OUT `response`', response);
      });
  }
}
