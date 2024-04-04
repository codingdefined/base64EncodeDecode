import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-base64encode',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './base64encode.component.html',
  styleUrl: './base64encode.component.scss'
})
export class Base64encodeComponent implements OnInit {
  textToEncode: string = '';
  resultInBase64: string = '';
  isChecked: boolean = true;

  ngOnInit() {
    
  }

  encode() {
    try {
      this.resultInBase64 = btoa(this.textToEncode)
    } catch (error) {
      this.resultInBase64 = "Could not create base64 from input"
    }
    
  }

  inputChange(event: any) {
    if(this.isChecked)
    {
      try {
        this.resultInBase64 = btoa(event.target.value)
      } catch (error) {
        this.resultInBase64 = "Could not create base64 from input"
      }
    }
      
  }
}
