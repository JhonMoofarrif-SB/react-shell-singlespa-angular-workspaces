/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ValidationsServices } from './validation.service';

describe('Service: ValidationsServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidationsServices],
    });
  });
  test('should exist', inject(
    [ValidationsServices],
    (service: ValidationsServices) => {
      expect(service).toBeTruthy();
    }
  ));

  test('should return true validate email', inject(
    [ValidationsServices], (service: ValidationsServices) => {
      const email = "email@email.com"
      const validateEmail = service.validateEmail(email);

      expect(validateEmail).toEqual(true);
    })
  );

  test('should return false validate email', inject(
    [ValidationsServices], (service: ValidationsServices) => {
      const email = "emailemail.com"
      const validateEmail = service.validateEmail(email);

      expect(validateEmail).toEqual(false);
    })
  );

  test('should return true validate  password', inject(
    [ValidationsServices], (service: ValidationsServices) => {

      const password = "Jelpit2022*"
      const validatePassword = service.validatePassword(password);

      expect(validatePassword).toEqual(true);
    })
  );

  test('should return false validate password', inject(
    [ValidationsServices], (service: ValidationsServices) => {
      const password = "jelpit2022"
      const validatePassword = service.validatePassword(password);

      expect(validatePassword).toEqual(false);
    })
  );
});
