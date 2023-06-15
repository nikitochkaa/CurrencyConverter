import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'

const NavBar = () => {
  const [newUAPath, setNewUAPath] = React.useState('')
  const [newENPath, setNewENPath] = React.useState('')
  const location = useLocation()
  const path = location.pathname
  const lang = path.split('/')[1]

  React.useEffect(() => {
    setNewUAPath(path.replace(`/${lang}`, `/ua`))
    setNewENPath(path.replace(`/${lang}`, `/en`))
  }, [lang, path])

  return (
    <div className="NavBar">
      <div className="NavBar__Left">
        <div className="NavBar__Left__Logo">
          <a href="/">
            <img src="https://cdn.reverso.net/context/v63200/images/reverso-context.ico" alt="Logo"/>
          </a>
        </div>
        <div className="NavBar__Left__Language">
          <NavLink replace to={newUAPath}>UA</NavLink>
          <span> | </span>
          <NavLink replace to={newENPath}>EN</NavLink>
        </div>
      </div>
      <div className="NavBar__Middle">
        <div className="NavBar__Middle__Item">
          <NavLink end to={`/${lang}/menu`}>Menu</NavLink>
        </div>
        <div className="NavBar__Middle__Item">
          <NavLink end to={`/${lang}/contacts`}>Contacts</NavLink>
        </div>
        <div className="NavBar__Middle__Item">
          <NavLink end to={`/${lang}/about`}>About</NavLink>
        </div>
        <div className="NavBar__Middle__Item">
          <NavLink end to={`/${lang}/faq`}>FAQ</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;