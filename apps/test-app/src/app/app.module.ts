import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  ExternalRouteModule,
  ExternalRouteRelationship,
  ExternalRouteTarget
} from '@mhlabs/external-route';
import { AppComponent } from './app.component';
import { ExternalRouteComponent } from './external-route/external-route.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'external-route-lib',
    component: ExternalRouteComponent
  },
  {
    path: 'google',
    pathMatch: 'full',
    redirectTo:
      '/external-route?externalUrl=https://www.google.se&target=_blank'
  }
];

@NgModule({
  declarations: [AppComponent, ExternalRouteComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ExternalRouteModule.forRoot({
      documentRelationship: ExternalRouteRelationship.external,
      documentTarget: ExternalRouteTarget.blank,
      targetParamKey: 'target',
      urlParamKey: 'externalUrl'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
