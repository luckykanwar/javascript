import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';
  checkUserName = false;

  onUserNameUpdate(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
    if (this.userName === ''){
      // this.checkUserName = false;
      console.log('Testing')
    } else{
      // this.checkUserName = true;
      console.log('Not Testing')
    }
  }

  /*
  onUserNameCheck(){
    if (this.userName === ''){
      this.checkUserName = false;
    } else{
      this.checkUserName = true;
    }
  }
  */
}
