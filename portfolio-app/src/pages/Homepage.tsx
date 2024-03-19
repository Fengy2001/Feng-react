import './Homepage.css';
import Navbar from '../components/navbar';

export default function Homepage(){
  return (
    <div className="Homepage">
      <header className="header">
        <Navbar className="navbar" buttons={["About Me","Projects","Resume","Contact Me"]}/>
      </header>
        <section className="featureSection">
          <div className="welcomeMsg">Welcome</div>
        </section>
      <footer className="footer"></footer>
    </div>
  );
}

