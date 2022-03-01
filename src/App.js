// import logo from './logo.svg';
import './App.css';
import NavBar  from './Component/nav-bar/js/NavBar';
import EmailContact from './Component/email-contact/js/EmailContact';
import SocialContact from './Component/social-contact/js/SocialContact';
import MainContetnt from './Component/main-profile/js/MainContent';

function App() {
  return (
    <div className="App" id="home" >
      <NavBar/>
      <EmailContact/>
      <SocialContact/>
      <MainContetnt/>
    </div>
  );
}

export default App;
