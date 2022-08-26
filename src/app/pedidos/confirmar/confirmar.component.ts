import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {

  @Output() fechaConfirmar = new EventEmitter<boolean>();

  FecharModal(){
    this.fechaConfirmar.emit(false)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
