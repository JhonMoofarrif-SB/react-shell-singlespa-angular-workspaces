import { gql } from "@apollo/client";

export const PublicGetUser = gql`query PublicGetUser($email: String!,$social_media: String!) {
    publicGetUser (
        email : $email
        social_media: $social_media
    ) {
        email
    }
}`;