import './header.component.css';

export const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="top-bar">
                <div className="top-bar-content">
                    <span>Log in</span>
                    <span>Create an account</span>
                    <span>Check out</span>
                </div>
            </div>

            <div className="main-header">
                <div className="logo">
                    <span>Furniture<span className="logo-light">Store</span></span>
                    <span className="logo-subtitle">The biggest choice on the web</span>
                </div>

                <div className="header-actions">
                    <div className="cart-btn">
                        
                        <div className="cart-icon-box">
                            <img 
                                src="imgs/cart.png" 
                                alt="Cart" 
                                className="icon-img" 
                            />
                        </div>

                        <div className="cart-text-box">
                            My cart: <span className="cart-count">0 item(s)</span> - <span className="cart-price">$0.00</span>
                        </div>
                        
                    </div>

                    <div className="search-bar">
                        <input type="text" placeholder="Search store..." />
                        <button className="search-btn">
                             <img 
                                src="imgs/search.png" 
                                alt="Search" 
                                className="icon-img-search" 
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}