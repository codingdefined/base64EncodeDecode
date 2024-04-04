import { Component, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { JsonFormatterDirective } from '../json-formatter.directive';

@Component({
  selector: 'app-base64decode',
  standalone: true,
  imports: [FormsModule, NgIf, CommonModule, JsonFormatterDirective],
  templateUrl: './base64decode.component.html',
  styleUrl: './base64decode.component.scss'
})
export class Base64decodeComponent {
  textToDecode: string = '';
  resultInString: string = '';
  isChecked: boolean = true;
  resultedString: string = '0';
  formattedString: string = '';

  ngOnInit() {
    
  }

  decode() {
    try {
      this.resultInString = atob(this.textToDecode)
    } catch (error) {
      this.resultInString = "There is error in your input"
    }
    
    this.getInputType();
  }

  inputChange(event: any) {
    if(this.isChecked) {
      try {
        this.resultInString = atob(event.target.value)
      } catch (error) {
        this.resultInString = "There is error in your input"
      }
      
      this.getInputType();
    }
  }

  getInputType() {
    this.resultedString = '0';
    try {
      let a = JSON.parse(this.resultInString);
      this.resultedString = '1';
    } catch(e) {
     let parser = new DOMParser;
     var xmlDoc = parser.parseFromString(this.resultInString,"application/xml");
        if(xmlDoc.documentElement.nodeName == "parsererror")
          this.resultedString = '0';
        else 
          this.resultedString = '2';
    } 
  }

  formatJSON() {
    if(this.resultedString === '1'){
      this.formattedString = JSON.stringify(JSON.parse(this.resultInString), null, 4);
    }
  }
}