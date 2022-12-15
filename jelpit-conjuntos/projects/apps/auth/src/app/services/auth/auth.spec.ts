/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { LocalStorageService } from '../local-storage/local.storage.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginMutations } from '../../graphql/mutations/login.mutation';
// import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';


describe('Service: AuthService', () => {

  jest.mock('rxjs', () => {
    return { from: jest.fn() };
  });
  let service: AuthService;
  // let controller: ApolloTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [AuthService, LocalStorageService],
    });
    // controller = TestBed.inject(ApolloTestingController);
    service = new AuthService();
  });

  // afterEach(() => {
  //   controller.verify();
  // });
  test('should exist', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  // test('should doLogin()', () => {

  //   service.doLogin({ email: "email@yopmail.com", password: "passsowrd213*" }).then((value) => {
  //     console.log(value);
  //   })

  //   const op = controller.expectOne(LoginMutations);

  //   // Assert that one of variables is Mr Apollo.
  //   // expect(op.operation.variables).toEqual('Mr Apollo');

  //   // Respond with mock data, causing Observable to resolve.
  //   op.flush({
  //     data: {
  //       transversalLoginUserV2: { accessToken: "tokensito" }
  //     },
  //   });

  // })
});
