import { get } from 'lodash'
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from '../../lib/withApollo';
import { useLaunchesPastQuery } from "../../generated.index";
import DenseAppBar from '../../components/app-bar';
import Main from '../../components/main';

function SingleLaunchPage({ query }) {
    const id = get(query, "id")
    const { data, loading } = useLaunchesPastQuery({
      variables: {
         limit: 10
      }
    });

    if(loading) {
      return <p>loading</p>
    }

    const filtered = data.launchesPast.filter(launch => launch.id === id)

    return <div>
      {filtered.map(launch => (
        <>
          <DenseAppBar name={launch.mission_name} />
          <Main 
            article={launch.links.article_link}
            video={launch.links.video_link}
            launch_site={launch.launch_site.site_name_long}
            rocket_name={launch.rocket.rocket_name}
          />
        </>
      ))}
    </div>    
}

export default withApollo(SingleLaunchPage, { getDataFromTree })