import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('myForm') myForm! : NgForm; 

  constructor() { }

  ngOnInit(): void {
  
  }

  validacion(): boolean{
      return this.myForm?.controls['products']?.invalid && this.myForm?.controls['products']?.touched
  }


  guardar(){

    console.log(this.myForm.value);
    
  }
}
