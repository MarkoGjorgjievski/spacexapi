import gql from 'graphql-tag';

export const LAUNCHES_QUERY = gql`
{
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
      ships {
        name
        home_port
        image
      }
      id
    }
  }
       
`;

export const LAUNCH_QUERY = gql`
  query launchesPast($limit: Int, $find: LaunchFind) {
    launchesPast(limit: $limit, find: $find) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
      id
    }
  }
`;