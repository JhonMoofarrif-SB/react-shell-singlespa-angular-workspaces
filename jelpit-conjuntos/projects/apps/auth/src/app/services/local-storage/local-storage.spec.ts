/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { LocalStorageService } from './local.storage.service';

describe('Service: AnaliticsServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService],
    });

  });
  test('should exist', inject(
    [LocalStorageService],
    (service: LocalStorageService) => {
      expect(service).toBeTruthy();
    }
  ));
  test('should setItem()', inject(
    [LocalStorageService],
    (service: LocalStorageService) => {
      service.setItem('id', 'abc123')
      const localData = localStorage.getItem('id');
      expect(localData).toEqual('abc123');

    }
  ));

  test('should get()', inject(
    [LocalStorageService],
    (service: LocalStorageService) => {
      localStorage.setItem('key', 'value')
      const getData = service.get('key')
      expect(getData).toEqual('value')
    }
  ));
  test('should getToken()', inject(
    [LocalStorageService],
    (service: LocalStorageService) => {
      localStorage.setItem('token', 'value');
      const getToken = service.getToken();
      expect(getToken).toEqual('value');
    }
  ));

    test('should setToken()', inject(
      [LocalStorageService],
      (service: LocalStorageService) => {
        service.setToken('abc123');
        const localData = localStorage.getItem('token') ;
        expect(localData).toEqual('abc123');
      }
    ));
    test('should removeItem()', inject(
      [LocalStorageService],
      (service: LocalStorageService) => {
        service.removeItem('token');
        const localData = localStorage.getItem('token') ;
        expect(localData).toEqual(null);
      }
    ));
    test('should removeAll()', inject(
      [LocalStorageService],
      (service: LocalStorageService) => {
        service.removeAll();
        const localData = localStorage.getItem('token');
        expect(localData).toEqual(null);

      }
    ));
});
