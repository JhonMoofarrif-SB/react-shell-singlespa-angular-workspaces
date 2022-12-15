/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AnaliticsServices } from './analytics.service';

describe('Service: AnaliticsServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnaliticsServices],
      imports: [HttpClientTestingModule],
    });
    const mockDataLayer = () => {
      return { push: () => null };
    };
    Object.defineProperty(window, 'dataLayer', { value: mockDataLayer() });
  });
  test('should exist', inject(
    [AnaliticsServices],
    (service: AnaliticsServices) => {
      expect(service).toBeTruthy();
    }
  ));
  test('should datalayer', inject(
    [AnaliticsServices],
    (service: AnaliticsServices) => {
      service.tagsAnalitics('iniciar sesion', 'JCW-login-google', 'fallido');
    }
  ));
});
