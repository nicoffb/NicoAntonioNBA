import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './componentes/menu/menu.component';
import { ListaJugadoresComponent } from './componentes/lista-jugadores/lista-jugadores.component';
import { ListaEquiposComponent } from './componentes/lista-equipos/lista-equipos.component';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EquiposDialogComponent } from './componentes/lista-equipos/equipos-dialog/equipos-dialog.component';
import { JugadoresDialogComponent } from './componentes/lista-jugadores/jugadores-dialog/jugadores-dialog.component';
import { PlayerstatsComponent } from './componentes/playerstats/playerstats.component';
import { JugadorComponent } from './componentes/jugador/jugador.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaJugadoresComponent,
    ListaEquiposComponent,
    EquiposDialogComponent,
    JugadoresDialogComponent,
    PlayerstatsComponent,
    JugadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialImportsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
