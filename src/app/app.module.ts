import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';

const routers: Route[] = [
  {path: '', component: HolaMundoComponent}, 
  {path: 'about', component: AboutComponent},
  {path: 'main', component: MainComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    UserComponent,
    AboutComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routers)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
