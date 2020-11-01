import React from "react"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  return (
    <>
      <div>Hello world!</div>
      {data.allMicrocmsQiita.edges.map(edge => <div><Link key={edge.node.slug} to={edge.node.slug}>{edge.node.title}</Link></div>)}
    </>
  )
}

export const query = graphql`
query allMicrocmsQiita {
  allMicrocmsQiita {
    edges {
      node {
        title
        slug
      }
    }
  }
}

`