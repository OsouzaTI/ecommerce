import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
import { CardComponent } from './components/card/card.component';
import { CardModule } from 'primeng/card';
import { CardDescriptionComponent } from './components/card-description/card-description.component';
import { DialogModule } from 'primeng/dialog';
import { CardDialogComponent } from './components/card-dialog/card-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayComponent } from './components/overlay/overlay.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    CardDescriptionComponent,
    CardDialogComponent,
    OverlayComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    DialogModule
  ],
  exports: [
    NavbarComponent,
    CardComponent,
    OverlayComponent
  ]
})
export class IndexModule { }
