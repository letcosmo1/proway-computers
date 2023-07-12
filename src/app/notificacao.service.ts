import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(private snack_bar: MatSnackBar) { }

  notificar(mensagem: string) {
    this.snack_bar.open(mensagem, "Ok", {
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
