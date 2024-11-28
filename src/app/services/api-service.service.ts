import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  api: string = "https://uasdapi.ia3x.com/"

  constructor(
    private http: HttpClient
  ) { }


  login(username: string, password: string) {
    return firstValueFrom(
      this.http.post<any>(`${this.api}/login`, {username, password})
    )
  }

  infoUsuario(){
    return firstValueFrom(
      this.http.get<any>(`${this.api}/info_usuario`)
    )
  }

  cambiarPassword(oldPassword: string, newPassword: string, confirmPassword: string) {
    return firstValueFrom(
      this.http.post<any>(`${this.api}/cambiar_password`, {oldPassword, newPassword, confirmPassword})
    )
  }

  resetPassword(usuario: string, email: string) {
    return firstValueFrom(
      this.http.post<any>(`${this.api}/reset_password`, {usuario, email})
    )
  }

  crearUsuario(usuario: any) {
    return firstValueFrom(
      this.http.post<any>(`${this.api}/crear_usuario`, usuario)
    )
  }

  noticias() {
    return firstValueFrom(
      this.http.get<any>(`${this.api}/noticias`)
    )
  }

  eventos() {
    return firstValueFrom(
      this.http.get<any>(`${this.api}/eventos`)
    )
  }

  mapaEventos() {
    return firstValueFrom(
      this.http.get<any>(`${this.api}/mapa_eventos`)
    )
  }

  videos() {
    return firstValueFrom(
      this.http.get<any>(`${this.api}/videos`)
    )
  }

  deudas() {
    return firstValueFrom(
      this.http.get<any>(`${this.api}/deudas`)
    )
  }

  horarios() {
    return firstValueFrom(
      this.http.get<any>(`${this.api}/horarios`)
    )
  }

  tareas() {
    return firstValueFrom(
      this.http.get<any>(`${this.api}/tareas`)
    )
  }
  
  materiasDisponibles() {
    return firstValueFrom(
      this.http.get<any>(`${this.api}/materias_disponibles`)
    )
  }

  preseleccionarMateria(codigo: string) {
    return firstValueFrom(
      this.http.post<any>(`${this.api}/preseleccionar_materia`, codigo)
    )
  }

  cancelarPreseleccionarMateria(codigo: string) {
    return firstValueFrom(
      this.http.post<any>(`${this.api}/cancelar_preseleccionar_materia`, codigo)
    )
  }

  verPreseleccion() {
    return firstValueFrom(
      this.http.get<any>(`${this.api}/ver_preseleccion`)
    )
  }

  tiposSolicitudes() {
    return firstValueFrom(
      this.http.get<any>(`${this.api}/tipos_solicitudes`)
    )
  }

  misSolicitudes() {
    return firstValueFrom(
      this.http.get<any>(`${this.api}/mis_solicitudes`)
    )
  }

  crearSolicitud(tipo: string, descripcion: string) {
    return firstValueFrom(
      this.http.post<any>(`${this.api}/crear_Solicitud`, {tipo, descripcion})
    )
  }

  cancelarSolicitud(id: number) {
    return firstValueFrom(
      this.http.post<any>(`${this.api}/crear_Solicitud`, id)
    )
  }

}
