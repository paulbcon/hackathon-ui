import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    headerPrefix: 'JWT',
    noJwtError: false,
    //tokenGetter: (() => localStorage.getItem('token')),
    //globalHeaders: [{'Content-Type':'application/json'}],
    }), http, options);
}

@NgModule({
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class AuthJwtModule { }
