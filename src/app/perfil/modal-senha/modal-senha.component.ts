import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-modal-senha',
  templateUrl: './modal-senha.component.html',
  styleUrls: ['./modal-senha.component.css']
})
export class ModalSenhaComponent implements OnInit {
  @Output() alterandoModal = new EventEmitter();
  @Input() senha: string | undefined = ''

  constructor(private usuarioService: UsuariosService) { }
  fecharModal() {
    this.alterandoModal.emit()
  }
  AtualSenha = ""
  novaSenha = ""
  confirmaNovaSenha = ""
  mudarSenha() {
    print
    if (this.novaSenha == this.confirmaNovaSenha && this.novaSenha != "") {
      if (this.AtualSenha == this.senha) {
        this.usuarioService.mudarSenha(this.novaSenha)
          .subscribe({
            next: e => {
              console.log(e)
            },
            error: x => {
              console.log(x)
            }
          })
        this.fecharModal()
      } else {
        alert('senha atual incorreta!')
      }
    } else {
      alert('As novas senhas não batem!')
    }
  }
  ngOnInit(): void {
  }

}
