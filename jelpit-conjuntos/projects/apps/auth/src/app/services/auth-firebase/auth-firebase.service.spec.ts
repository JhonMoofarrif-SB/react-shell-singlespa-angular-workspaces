import { getTestBed, TestBed } from '@angular/core/testing';

import { AuthFirebaseService } from './auth-firebase.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment.dev';

describe('AuthFirebaseService', () => {
  let service: AuthFirebaseService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(AuthFirebaseService);
    injector = getTestBed();
    httpMock = injector.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getConfig data', () => {

    const expectedResult = {
      result: "textoEnBase64",
    };
    service.getConfig().subscribe((data) => {
      expect(data).toEqual(expectedResult);
    });

    const req = httpMock.expectOne(environment.JELPIT_URL_FIREBASE);
    req.flush(expectedResult);
    expect(req.request.method).toBe("POST");
    expect(req.request.url).toBe(environment.JELPIT_URL_FIREBASE);
  });
});
