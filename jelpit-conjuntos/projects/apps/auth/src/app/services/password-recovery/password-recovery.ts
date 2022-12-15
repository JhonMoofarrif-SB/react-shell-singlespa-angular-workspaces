import { gql } from '@apollo/client';

export const recoveryService = gql`
    mutation recoveryService($email: String!) {
        transversalForgotPasswordEmail(email: $email) {
        accessToken
        email
        refreshToken
        status
        uid
    }
  }
`