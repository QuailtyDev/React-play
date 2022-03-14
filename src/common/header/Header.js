import FilterPlays from 'common/search/FilterPlays';
import SearchPlays from 'common/search/SearchPlays';
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './header.css';
import { BsTwitter, BsGithub, BsShareFill } from 'react-icons/bs';

const Header = () => {
  const location = useLocation();
  const pathName = location.pathname;
  
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (pathName === '/') {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  }, [pathName]);

  return (
    <header className="app-header">
        <span><Link to="/" className="app-logo"><span className="sr-only">React Play</span></Link></span>
        <div className="app-header-search">
        {
              showSearch && (
                <>                
                  <SearchPlays />
                  <FilterPlays />
                </>
                )
            }
        </div>
        <nav>
          <ul className="header-links">
            <li>
              <a href="https://github.com/atapas/react-play" target="_blank" rel="noopener noreferrer">
                <BsGithub className="icon" size="24px" />
                <span className="sr-only">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/tapasadhikary" target="_blank" rel="noopener noreferrer">
                <BsTwitter className="icon" size="24px" />
                <span className="sr-only">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/atapas/react-play" target="_blank" rel="noopener noreferrer" className="app-header-btn">
                <BsShareFill className="icon" size="16px" />
                <span className="btn-label">Share</span>
              </a>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;