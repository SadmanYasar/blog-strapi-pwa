import Mailchimp from "./mailchimp"
import Nav from "./nav"

//convert the Layout component to typescript
interface ILayoutProps {
  children: React.ReactNode
  categories: any
  seo?: any
}

const Layout = ({ children, categories, seo } : ILayoutProps) => (
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
