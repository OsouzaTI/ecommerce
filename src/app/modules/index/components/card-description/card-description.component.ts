import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-description',
  templateUrl: './card-description.component.html',
  styleUrls: ['./card-description.component.css']
})
export class CardDescriptionComponent implements OnInit {

  @Input()
  public length : number = 200;

  @Input()
  public description: string = "";

  @Input()
  public title : string = "";

  public text : string = "";

  public overflow : boolean = false;

  ngOnInit(): void {
    this.text = this._text();
  }

  private _text() : string {
    
    let _description : string = "";
    
    if (this.description.length < this.length) {
      _description = this.description;
    } else {    
      this.overflow = true;  
      for (let i = 0; i < this.description.length; i++) {
        if(i > this.length) {
          _description += "...";
          break;
        }
        _description += this.description[i];      
      }
    }

    return _description;

  }

}

