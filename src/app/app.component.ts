import { Component } from '@angular/core';
import { SharedService } from './shared.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  agreed = 0;

  constructor(sharedService: SharedService) {
    this.agreed = sharedService.itemCount;
  }

  ngOninit() {
    
  }

  printSum(agreed :boolean) {
    console.log('asdasd');
  }
}
