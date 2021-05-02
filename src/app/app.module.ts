import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProviders, routing } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ConversorComponent } from './components/conversor/conversor.component';
import { DolarPipe } from './sahred/pipes/dolar.pipe';
import { YenPipe } from './sahred/pipes/yen.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConversorComponent,
    DolarPipe,
    YenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
