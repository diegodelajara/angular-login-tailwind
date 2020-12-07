import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() username
  @Input() password
  @Output() handlerModal:EventEmitter<any> = new EventEmitter

  constructor() { }

  ngOnInit(): void {}

  setShowModal() {
    this.handlerModal.emit(event)
  }

}
