import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptorService implements HttpInterceptor {



  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(localStorage.getItem('token') != null){
      const token = 'Bearer ' + localStorage.getItem('token');

      const tokenRequest = req.clone({
        headers : req.headers.set('Authorization', token)
      });

      return next.handle(tokenRequest);

    }else{
      return next.handle(req);
    }

    throw new Error('Method not implemented.');
  }


}

@NgModule({
  providers : [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true,
  },
],
})

export class HttpInterceptorModule{

}
