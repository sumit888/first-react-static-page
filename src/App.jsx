import Header from './components/Header'
import Footer from './components/Footer';
import Facts from './components/Facts';



function App() {
  //Since JSX only accepts one HTML tags so we've to use fragments or empty brackets to hold multiply components.
  return(
    <>
      <Header />
      <Facts />
      <Footer />
    </>
  );
}

export default App
