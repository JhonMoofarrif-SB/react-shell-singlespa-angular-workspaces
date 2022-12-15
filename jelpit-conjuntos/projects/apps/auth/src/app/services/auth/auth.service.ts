import { Injectable } from '@angular/core';
import * as cryptoJS from 'crypto-js';
import { apiConfigInit } from '../api-config'
import { loginModel } from '../../interfaces/login-models';
import { LoginMutations } from '../../graphql/mutations/login.mutation';
import { ApolloClient } from '@apollo/client';
import { recoveryService } from '../password-recovery/password-recovery';
import { GetPublicJelpitParams } from '../../graphql/querys/login/Login';
import { PublicGetUser } from '../../graphql/querys/getUser/getUser';

@Injectable()
export class AuthService {

  public logger: any;
  public access_token: string = '';
  public token_type: string = '';

  async doLogin(data: loginModel) {
    const client = new ApolloClient(apiConfigInit);

    const request = await client.mutate({
      mutation: LoginMutations,
      variables: data
    }).then((result) => result)
      .catch((error) => error.graphQLErrors[0].message);

    return request;
  }

  async socialMedia(parameter: string, value: string) {
    const client = new ApolloClient(apiConfigInit);

    const request = await client.query({
      query: GetPublicJelpitParams,
      variables: { parameter }
    }).then(({ data }) => data.getPublicJelpitParam[value])
      .catch(({ graphQLErrors }) => graphQLErrors[0].message);

    return request;
  }

  async getUser(parameter: {email: string, social_media: string}) {
    const client = new ApolloClient(apiConfigInit);
    const request = await client.query({
      query: PublicGetUser,
      variables: parameter
    }).then(({ data }) => data)
      .catch(({ graphQLErrors }) => graphQLErrors[0].message);

    return request;
  }

  async getEncryptedObject(object: any, key: string, iv_const: string): Promise<string> {
    /****************** /VARIABLES *******************/
    const keyEncr = cryptoJS.enc.Hex.parse(key);
    const iv = cryptoJS.enc.Hex.parse(iv_const);
    return cryptoJS.AES.encrypt(JSON.stringify(object),
      keyEncr, {
      mode: cryptoJS.mode.CTR,
      iv,
      padding: cryptoJS.pad.NoPadding
    }).toString();//valor encriptado
  }

  async doForgotPassword(email: string) {
    const client = new ApolloClient(apiConfigInit);
    // const client = ...
    await client
      .mutate({
        mutation: recoveryService,
        variables: { email }
      })
  }

}
