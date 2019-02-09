import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

export const svgRegistry = (ir: MatIconRegistry, ds: DomSanitizer) => {

  const imgDir = `assets/img`;
  ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${imgDir}/day.svg`));
  ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${imgDir}/month.svg`));
  ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${imgDir}/week.svg`));
  ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(`${imgDir}/project.svg`));
  ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${imgDir}/projects.svg`));
  ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${imgDir}/avatars.svg`));

  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ];
  days.forEach(day => {
    ir.addSvgIcon(`DAYS${day}`, ds.bypassSecurityTrustResourceUrl(`${imgDir}/DAYS${day}.svg`));
  });

};
