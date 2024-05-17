import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';


@Component({
  selector: 'app-upnavbar',
  templateUrl: './upnavbar.component.html',
  styleUrls: ['./upnavbar.component.scss'],
  animations: [
    trigger('rotateArrow', [
      transition('collapsed => expanded',[
        animate('500ms',
          keyframes([
            style({transform: 'rotate(180deg)'}),
            style({transform: 'rotate(90deg)'}),
            style({transform: 'rotate(0deg)'})
          ])
        ),
      ]),
      transition('expanded => collapsed',[
        animate('500ms',
          keyframes([
            style({transform: 'rotate(0deg)'}),
            style({transform: 'rotate(90deg)'}),
            style({transform: 'rotate(180deg)'})
          ])
        )
      ])
    ])
  ]
})
export class UpnavbarComponent {
  collapsed : boolean= false;
}
