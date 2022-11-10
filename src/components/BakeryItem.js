// TODO: create a component that displays a single bakery item
export default function BakeryItem(item, index, img) {
    console.log(index);
    console.log(item);
    console.log(item["image"]);
	return (
		<div>
            <img src={require(img)} className="App-logo" alt="logo" />
            <h2>{item["name"]}</h2>
            <p>{item["description"]}</p>
            <p>{item["price"]}</p>
        </div>
	);
}
