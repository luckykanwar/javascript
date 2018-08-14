import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
            .online{
              color: white;
            }
          `]
})

export class AppComponent {
  displayParagraph = false;
  i = 0;
  logClicks = [];

  showOrNot(){
    this.i++;
    this.logClicks.push(this.i);
    if(this.i % 2 === 0) {
      this.displayParagraph = true;
    }else {
      this.displayParagraph = false;
    }
  }

  getColor(){
    return this.i > 5 ? 'blue' : 'white';
  }
}
