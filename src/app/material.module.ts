import {NgModule} from '@angular/core';
import {BrowserAnimationsModule,NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatTooltipModule} from '@angular/material';


@NgModule({
  
  imports: [BrowserAnimationsModule,NoopAnimationsModule,MatButtonModule,MatCheckboxModule,MatTooltipModule],
  exports: [NoopAnimationsModule,BrowserAnimationsModule,MatButtonModule,MatCheckboxModule,MatTooltipModule]

})
export class MaterialModule { }