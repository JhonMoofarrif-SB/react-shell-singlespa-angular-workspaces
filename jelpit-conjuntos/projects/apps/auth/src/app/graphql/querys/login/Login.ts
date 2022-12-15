import { gql } from "@apollo/client";

export const GetPublicJelpitParams = gql`query getPublicJelpitParam($parameter: String!) {
    getPublicJelpitParam(parameter: $parameter) {
          key
          value
          valueInt
          valueFloat
          valueBoolean
    }
  }`