import { useState, useEffect } from 'react';

const ItemDetail = ({ match }) => {
    useEffect(() => {
        fetchItem();
    }, []);
    const [item, setItem] = useState({
        images: {}
    });
    const fetchItem = async () => {
        const data = await fetch(
            `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
        );
        const item = await data.json();
        console.log(item.data.item.name);
        setItem(item.data.item);
    }

    return (
        <div>
            <h2 className='itemName'>Name: {item.name} </h2>
            <p>Description: {item.description}</p>
            <p>Type: {item.type}</p>
            <p>Series: {item.series}</p>
            <img src={item.images.background} alt="" />
        </div>
    )

}

export default ItemDetail;