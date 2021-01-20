import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  constructor() { }
  username: string = 'hola';
  showModal: boolean = false;
  password: string = '123456';

  ngOnInit(): void {}

  setShowModal(modal) {
    this.showModal = modal;
  }
}

