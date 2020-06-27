import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"

const IndexPage = ({ data: { allContentfulLesson } }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Lessons</h1>
    </div>
    <div>
    {allContentfulLesson.edges.map(({ node }) => (
      <Card
        node={{ ...node, slug: `/lessons/${node.slug}` }}
        key={node.id}
      />
    ))}
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allContentfulLesson {
      edges {
        node {
          title
          slug
          instructor {
          fullName
        }
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`
