"use client";

import Layout from "components/Layout";
import React, { memo } from "react";
// import gql from "graphql-tag"
// import client from "../lib/apollo-client"
import { PostProps } from "components/Post";
import { useQuery } from "@apollo/client";
import { graphql } from "generated/gql";
import { Button } from "antd";

const kkQueryDocument = graphql(/* GraphQL */ `
  query kkQuery($id: String!) {
    user: getUser(id: $id) {
      ...UserItem
    }
  }
`);

const Blog: React.FC<{ data: { feed: PostProps[] } }> = (props) => {
  const { data } = useQuery(kkQueryDocument, { variables: { id: "1" } });

  console.log(data);
  return (
    <Layout>
      <div className="page">
        <h1>My Blog</h1>
        <main>
          <Button type="primary">dddd</Button>
          <div className="h-10 w-10 border border-r-0 border-solid"></div>
          {/* {props.data.feed.map(post => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))} */}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export async function getServerSideProps() {
  // const { data } = await client.query({
  //   query: gql`
  //     query FeedQuery {
  //       feed {
  //         id
  //         title
  //         content
  //         published
  //         author {
  //           id
  //           name
  //         }
  //       }
  //     }
  //   `,
  // });

  return {
    props: {
      // data
    }
  };
}

export default memo(Blog);
