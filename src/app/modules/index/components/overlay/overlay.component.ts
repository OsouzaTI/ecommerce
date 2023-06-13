import { Component, Input, OnInit } from '@angular/core';
import { OverlayService } from 'src/app/services/overlay.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  @Input()
  public classOverlay : string = "hidden";

  constructor(private overlayService : OverlayService) {}

  ngOnInit(): void {
    this.overlayService.classOverlay().subscribe(enable => {
      this.show(enable)
    })
  }

  private show(enable : boolean) {
    this.classOverlay = enable ? "block" : "hidden";
  }


}
