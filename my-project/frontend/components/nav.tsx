import React from "react"
import Link from "next/link"

import { getAlgoliaResults } from "@algolia/autocomplete-js"
import algoliasearch from "algoliasearch"
import { Autocomplete } from "./autocomplete"
import SearchItem from "./searchItem"
import "@algolia/autocomplete-theme-classic"

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY as string
)

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>Strapi Blog</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-center">
          <Autocomplete
            openOnFocus={false}
            detachedMediaQuery=""
            placeholder="Search for articles"
            getSources={({ query }) => [
              {
                sourceId: "articles",
                getItemUrl({ item }) {
                  return `/article/${item.slug}`
                },
                getItems() {
                  return getAlgoliaResults({
                    searchClient,
                    queries: [
                      {
                        indexName: "development_api::article.article",
                        query,
                      },
                    ],
                  })
                },
                templates: {
                  item({ item, components }) {
                    return <SearchItem hit={item} components={components} />
                  },
                },
              },
            ]}
          />
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`}>
                    <a className="uk-link-reset">{category.attributes.name}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
