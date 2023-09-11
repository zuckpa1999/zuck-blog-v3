import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const AllPosts = ({ posts }) => (
  <div style={{ margin: "20px 0 40px" }}>
    {posts?.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <div class="max-w-full rounded overflow-hidden shadow hover:shadow-lg mt-10 ">
          <Link to={node.fields.slug}>
            <Img fluid={node.frontmatter.featuredImage?.childImageSharp.fluid} />
            <div class="px-6 py-4">
              <div class="font-medium text-2xl font-serif">{title}</div>
              <small className="font-sans font-thin">{node.frontmatter.date}</small>
              <p className="text-gray-700 text-base font-sans mt-3"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
            <div class="px-6 pt-4 pb-2">
              <span className="inline-block border border-gray-400 hover:border-gray-900 rounded-full px-3 py-1 text-sm font-normal text-gray-700 mr-2 mb-2 font-sans">{node.frontmatter.tag}
              </span>
            </div>
          </Link>
        </div>
      )
    })}
  </div>
)


export default AllPosts


// - implement tag?
// - add color / wow factor
// - buy domain
