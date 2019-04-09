import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ExternalRouteModule } from '@mhlabs/external-route';
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
    redirectTo: '/external-route?externalUrl=https://www.google.se'
  }
];

@NgModule({
  declarations: [AppComponent, ExternalRouteComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ExternalRouteModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
