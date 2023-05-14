import Mailchimp from "./mailchimp"
import Nav from "./nav"

const Layout = ({ children, categories, seo }) => (
  <>
    <Nav categories={categories} />
    {children}
    <footer>
      <div className="uk-section uk-section-secondary uk-light">
        <div className="uk-container">
          <Mailchimp />
        </div>
      </div>
    </footer>
  </>
)

export default Layout
