import './item.component.css'

export const Item = (props) => {
    const { image, title, price, salePrice, currency } = props.data;

    return (
        <div className="item">
            <div className="image-container">
                <img src={image} alt={title} />
        
                {salePrice && <div className="sale-badge">SALE</div>}
            </div>

            <div className="title">{title}</div>
            
            <div className="price-container">
                {salePrice ? (
                    <>
                        <span className="current-price red">{currency}{salePrice}</span>
                        <span className="old-price">{currency}{price}</span>
                    </>
                ) : (
                    <span className="current-price">{currency}{price}</span>
                )}
            </div>
        </div>
    );
}