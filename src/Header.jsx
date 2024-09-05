//creating first function-based component

function Header(){
    return (
        //Note JSX functional component can hold only one HTML tag but accepts child elements via Nesting
        <header>
            <h1>My Static Page</h1>
            <nav>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </header>
    );
}

//don't forget to export the component at the end

export default Header