import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  //ALERTA Metodo SUSCCESS

  success(title: string, message: string) {
    swal.fire({
      title: title,
      text: message,
      icon: 'success',
      confirmButtonColor: 'rgb(210,155,253)',
      width: 430
    })
  }

  warn(title: string, message: string) {
    swal.fire({
      title: title,
      text: message,
      icon: 'warning',
      confirmButtonColor: 'rgb(210,155,253)',
      width: 430
    })
  }

  error(title: string, message: string) {
    swal.fire({
      title: title,
      text: message,
      icon: 'error',
      confirmButtonColor: 'rgb(210,155,253)',
      width: 430
    })
  }

}
