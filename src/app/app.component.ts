import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyCmuDxYsR3tFAyMyoB9cSPB6KIi4vLqkH8",
      authDomain: "mapetitefee-a498f.firebaseapp.com",
      databaseURL: "https://mapetitefee-a498f.firebaseio.com",
      projectId: "mapetitefee-a498f",
      storageBucket: "mapetitefee-a498f.appspot.com",
      messagingSenderId: "1080544141771"
    };
    firebase.initializeApp(config);
  }
}
