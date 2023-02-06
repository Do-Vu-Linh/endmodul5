import { Injectable } from '@angular/core';
import {environment} from "../../enviroment/enviroment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Local} from "../model/Local";
const apiUrl = environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class LocalService {


  constructor(private httpClinet: HttpClient) {
  }

  public findAllLocal(): Observable<Local[]> {
    return this.httpClinet.get<Local[]>(`${apiUrl}/`).pipe(
      catchError(this.handleError)
    )

  }
  public save(local: Local): Observable<any> {
     return this.httpClinet.post(`${apiUrl}`, local)
  }

  public delete(id: number): Observable<any> {
    return this.httpClinet.delete(`${apiUrl}/${id}`)
  }
  public findLocal(id : number) :Observable<Local> {
    return this.httpClinet.get<Local>(`${apiUrl}/${id}`)

  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // Lỗi trả về từ client
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // Lỗi trả về từ máy chủ
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code (Xảy ra lỗi phía máy chủ) ${error.status}, body was (Dữ liệu trả về): `, error.error);
    }
    // Lỗi không rõ
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.(Lỗi không rõ)'));
  }
}
