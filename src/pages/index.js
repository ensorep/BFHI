import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="home">
      <div class="home_logo"></div>
      <div class="home_hero">
        <h1 class="home-headline"> Home Inspections </h1>
        <h3 class="home-tagline"> Done The Right Way </h3>
        <button class="home_CTA"> Get in Touch </button>
      </div>  
    </div>
  </Layout>
)

export default IndexPage
