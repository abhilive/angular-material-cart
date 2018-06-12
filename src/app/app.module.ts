import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatListModule, MatChipsModule, MatBadgeModule, MatToolbarModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { TitleCasePipe } from './item.pipe';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    TitleCasePipe,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatBadgeModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
