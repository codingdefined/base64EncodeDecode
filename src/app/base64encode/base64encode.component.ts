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
  dataInBase64: string = '';
  resultInString: string = '';

  ngOnInit() {
    
  }

  encode() {
    this.resultInString = btoa(this.dataInBase64)
  }
}
