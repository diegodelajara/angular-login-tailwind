import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() username
  @Input() password
  @Output() handlerModal:EventEmitter<any> = new EventEmitter

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {}

  closeModal() {
    this.handlerModal.emit(false)
    this.router.navigate(['home'])
  }
}
