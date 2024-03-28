import { Routes } from '@angular/router';
import { Base64encodeComponent } from './base64encode/base64encode.component';
import { Base64decodeComponent } from './base64decode/base64decode.component';

export const routes: Routes = [
    { path: '', component: Base64encodeComponent },
    { path: 'base64encode', component: Base64encodeComponent },
    { path: 'base64decode', component: Base64decodeComponent }
];
