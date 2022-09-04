import { gql, GraphQLClient } from 'graphql-request';
import Image from 'next/image';
import Link from 'next/link';

export const getStaticProps = async () => {
  const queryVideos = gql`
    query Videos {
      videos {
        createdAt
        id
        title
        description
        seen
        slug
        tags
        thumbnail {
          url
        }
        mp4 {
          url
        }
      }
    }
  `;
  const graphQLClient = new GraphQLClient(process.env.GRAPHCMS_URL, {
    headers: {
      "Authorization": `Bearer ${process.env.GRAPHCMS_TOKEN}`
    }
  });

  const videos = await graphQLClient.request(queryVideos);
  return {
    props: {
      data: videos
    }
  }
}

const Videos = ({data}) => {
  return (
    <>
      <h2>This is Videos page</h2>
      <Link href="/">Back to Home</Link>
      <br />
      <br />
      {data.videos && data.videos.length > 0 && (
        data.videos.map(v => (
          <div key={v.id}>
            <h3>{v.title}</h3>
            <p>{v.description}</p>
            <Image src={v.thumbnail.url} alt={v.title} width='200' height='200' />
          </div>
        ))
      )}
    </>
  )
}

export default Videos;