import { Item } from './item.component/item.component'; 
import { itemsData } from './items.data';
import './items.component.css';

export const Items = () => {
    return (
        <div className="items-container">
            <h3>Featured Products</h3>
            <div className="items-grid">
                {itemsData.map(element => (
                    <Item key={element.id} data={element} />
                ))}
            </div>
        </div>
    );
}