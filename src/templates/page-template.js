import React from "react"
import parse from "html-react-parser"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/@wordpress/block-library/build-style/wordpress.css"

export default ({ data }) => {
  const page = data.wpPage
  return (
    <Layout>
      <Header />
      <SEO title={page.title} />
      
      <div className=" font-montserrat text-tertiary" dangerouslySetInnerHTML={{ __html: page.content }}/>
            
           

      <Footer/>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PageById($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      content
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
