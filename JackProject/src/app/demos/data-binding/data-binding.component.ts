import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {

  public clickCount: number = 0;
  public urlImage: string ="https://angular.io/assets/images/logos/angular/angular.svg";
  public name: string = "";

  addClick() {
    this.clickCount++;
  }

  resetCountClick(){
    this.clickCount = 0;
  }

  keyUp(event: any){
    this.name = event.target.value;
  }

 }
