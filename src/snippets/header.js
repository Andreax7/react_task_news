import { useState } from 'react';
import '../styles/header.scss';

function Header() {
  const [showHeader, setHeader] = useState(true);
  const hideHeader = () => setHeader(false);
  const setHomepage = () => console.log('homepage ', showHeader);

  return (
    <>{
      showHeader ?<header className="App-header">
                      <p className="headerText1"> Make MyNews your homepage</p>
                      <p className="headerText2"> Every day discover what’s trending on the internet! </p>
                      <button className="headerBtn" onClick={setHomepage} >GET</button>
                      <p className="headerText3" onClick={hideHeader} >No, thanks!</p>
                  </header>
      : null
}
    </>
  );
}

export default Header;