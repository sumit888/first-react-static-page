import reactLogo from './assets/react.svg'
import Header from './Header'
import Footer from './Footer';



function App() {
  //Since JSX only accepts one HTML tags so we've to use fragments or empty brackets to hold multiply components.
  return(
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App
