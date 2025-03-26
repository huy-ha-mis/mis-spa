import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { BaseComponent } from '../base/base.component';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  doGet(srcComponent: BaseComponent, url: string, params?: HttpParams) {
    const headers: HttpHeaders = this.getHeaders();
    this.http
      .get(url, {
        headers,
        params,
      })
      .pipe(
        retry(3),
        catchError((error) => this.handleError(error, srcComponent))
      )
      .subscribe((data) => {
        srcComponent.closeAllDialog();
        srcComponent.updateData(data);
      });
    srcComponent.openSpinnerDialog();
  }

  doPost(
    srcComponent: BaseComponent,
    url: string,
    body: unknown,
    params?: HttpParams
  ) {
    // Notice 'any' for body
    const headers: HttpHeaders = this.getHeaders();

    this.http
      .post(url, body, {
        // Changed to .post
        headers,
        params,
      })
      .pipe(
        retry(3),
        catchError((error) => this.handleError(error, srcComponent))
      )
      .subscribe((data) => {
        srcComponent.closeAllDialog();
        console.log(data);
        //srcComponent.updateState(data);
        this.handleSuccess(srcComponent);
      });
    srcComponent.openSpinnerDialog();
  }

  public getHeaders(): HttpHeaders {
    return new HttpHeaders({
      // todo: avoid using generic name 'token'
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    });
  }

  private handleError(error: HttpErrorResponse, srcComponent: BaseComponent) {
    srcComponent.closeAllDialog();
    if (error.status === 0) {
      const message: Message = {
        title: 'Network Error',
        body: 'Cannot contact server, please try again later',
      };
      srcComponent.openErrorDialog(message);
    } else {
      const message: Message = {
        title: `Server Error ${error.status}`,
        body: 'Something unexpected happened, please try again later',
      };
      srcComponent.openErrorDialog(message);
    }

    return throwError(
      () => new Error('Something unexpected happened, please try again later')
    );
  }

  private handleSuccess(srcComponent: BaseComponent) {
    const message: Message = {
      title: 'Success',
      body: 'Success message here',
    };
    srcComponent.openSuccessDialog(message);
  }

  private postEventMessage<T>(event: HttpEvent<T>, file: File) {
    switch (event.type) {
      case HttpEventType.Sent:
        return `Uploading file "${file.name}" of size ${file.size}.`;

      case HttpEventType.UploadProgress: {
        const percentDone = event.total
          ? Math.round((100 * event.loaded) / event.total)
          : 0;
        return `File "${file.name}" is ${percentDone}% uploaded.`;
      }

      case HttpEventType.Response:
        return `File "${file.name}" was completely uploaded!`;

      default:
        return `File "${file.name}" surprising upload event: ${event.type}.`;
    }
  }
}
