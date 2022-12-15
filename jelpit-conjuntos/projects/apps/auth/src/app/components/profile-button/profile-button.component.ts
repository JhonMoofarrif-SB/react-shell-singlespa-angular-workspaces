import { Component, Input, OnInit } from '@angular/core';
import { AnaliticsServices } from '../../services/analytics/analytics.service';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.scss'],
})
export class ProfileButtonComponent implements OnInit {
  @Input() path: string = '/';
  @Input() firstIcon: string = '';
  @Input() label: string = '';
  @Input() secondIcon: string = '';

  onclick(evt: any) {
    //Tag de Analitica
    this._analiticsService.tagsAnalitics(
      'iniciar sesion',
      'JCW - crear cuenta usuario',
      evt.target.id
    );
    window.parent.location = this.path;
  }

  constructor(private _analiticsService: AnaliticsServices) {}

  ngOnInit(): void {}
}
