import './reset.css';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Events from './components/Events';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Insights />
            <Contact />
            <Events />
            <Footer />
        </div>
    );
}

export default App;
