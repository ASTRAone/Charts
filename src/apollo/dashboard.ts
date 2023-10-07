import { gql } from "@apollo/client";

export const GET_DASHBOARD = gql`
  query GetData {
    dashboard {
      scenarios {
        completed
        active
        inactive
      }
      lists {
        completed
        active
        inactive
      }
      dialogs {
        completed
        active
        inactive
      }
    }
  }
`;
