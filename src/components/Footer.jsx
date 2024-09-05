function Footer(){
    return(
        //we can use insert Javascript codes using {}
        <p className="footer">&copy; All Rights Reserved {new Date().getFullYear()}</p>
    );
}

export default Footer