function handleClick(event) {
    console.log("You clicked me");
    console.log(event);
}

function handleMouseOver() {
    console.log("Mouse is Hover");
    
}

function handleDblClick() {
    console.log("You Double Clicked");
    
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet saepe esse ducimus maiores rem aspernatur voluptates? Et atque temporibus illo sed assumenda, fugit a saepe dolorem molestias modi sit voluptatibus, sapiente error eos, quo impedit consequuntur facere repudiandae! Perspiciatis, odio?</p>
            <button onDoubleClick={handleDblClick}>Double Click me!</button>
        </div>
    );
}