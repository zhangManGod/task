import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

export const svgRegistry = (ir: MatIconRegistry, ds: DomSanitizer)=>{

  ir.addSvgIcon('icon1',ds.bypassSecurityTrustResourceUrl('assets/img/1.svg'));
  ir.addSvgIcon('icon2',ds.bypassSecurityTrustResourceUrl('assets/img/2.svg'));
}
