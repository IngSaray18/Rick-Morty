const  Header = () =>{
    const view = `
    <div class="Header-main">
        <div class="Header-logo">
            
                <a href="/">
                    <img class="logo-img" src="../../assets/Rick-and-Morty.png" alt="logo rick y morty">
                </a>
            
            </div>
            <div class="Header-nav">
                <a href="#/about/">
                    About
                </a>
            </div>
        
    </div>
    `;
    return view;
}

export default Header;
