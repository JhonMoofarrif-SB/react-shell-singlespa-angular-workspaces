import { gql } from "@apollo/client";


export const LoginMutations = gql`mutation transversalLoginUserV2($email: String!, $password: String!) {
    transversalLoginUserV2(email: $email, password: $password) {
      accessToken
      email
      refreshToken
      status
      uid
    }
  }`