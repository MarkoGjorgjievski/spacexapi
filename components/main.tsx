interface Props {
    article: string;
    video: string;
    launch_site: string;
    rocket_name: string;
}

const Main = ({article, video, launch_site, rocket_name}: Props) => {
    const newVideo = video.slice(17)
    const ytEmbed = 'https://youtube.com/embed/'
    const videoLink = ytEmbed.concat(newVideo)
    console.log(article)
    return(
        <div>
            <iframe width="100%" height="500" src={videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {article && <p>Article: {article}</p>}
            <p>Location: {launch_site}</p>
            <p>Rocket: {rocket_name}</p>
        </div>
    )
}

export default Main