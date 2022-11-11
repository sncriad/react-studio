// TODO: create a component that displays a single bakery item
export default function BakeryItem(item, index, img) {
	return (
		<div>
            <img src={item.image} style={{width:"100%"}}/>
            <h2>{item["name"]}</h2>
            <p>{item["description"]}</p>
            <p>{item["price"]}</p>
        </div>
	);
}
