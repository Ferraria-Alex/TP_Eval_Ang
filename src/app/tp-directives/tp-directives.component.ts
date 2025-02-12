import { Component } from '@angular/core';
import { NgIf,NgFor,NgStyle,NgClass } from '@angular/common';

@Component({
  selector: 'app-tp-directives',
  imports: [NgIf,NgFor,NgStyle,NgClass],
  templateUrl: './tp-directives.component.html',
  styleUrl: './tp-directives.component.css'
})
export class TPDirectivesComponent {
  btnText: string = 'Afficher Détails'; 
  toggle: boolean = false;
  arr: number[] = [1];

  toggleDetails(){
    this.toggle = !this.toggle;

    this.arr.push(this.arr[this.arr.length-1]+1);

    if(this.toggle){
      this.btnText = 'Masquer Détails';
    } else {
      this.btnText = 'Afficher Détails';
    }
  }

  toggleColor(num:number):string{
    if(num>4){
      return 'aquamarine';
    }
    return '';
  }
}
