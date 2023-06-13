import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OverlayService } from 'src/app/services/overlay.service';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.css']
})
export class CardDialogComponent implements OnInit {

  @Input()
  public title : string = "";

  @Input() 
  public content ?: string;

  public visible : boolean = false;

  constructor(private overlayService : OverlayService) { }

  ngOnInit(): void {
    
  }

  show() {
    this.visible = true;
  }

  onShow() {
    this.overlayService.show();
  }

  onHide() {
    this.overlayService.hide();
  }

}
