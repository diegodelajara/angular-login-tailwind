import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  constructor() { }
  username = 'hola'
  showModal = false;
  password = '123456';

  ngOnInit(): void {
  }

  setShowModal(e){
    e.preventDefault();
    this.showModal = !this.showModal;
  }
}

