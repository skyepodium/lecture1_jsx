/* @jsx createElement */


function createElement(tagName, props, ...children) {
    console.log(tagName, props, ...children)
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value
  })

  children.flat().forEach((child) => {
    if (child instanceof Node) {
        element.appendChild(child)
        return;
    }
    element.appendChild(document.createTextNode(child))
  });

  return element;
}

let count = 0

function handleClick() {
    count += 1
    render()
}

function handleClickNumber(value) {
    count = value
    render()
}

function render() {
    const element = (
        <div id="Hello" className="greeting">
            <p>Hello, world!</p>
            <p>
                <button type="button" onclick={handleClick}>
                    click me (
                        {count}
                    )
                </button>
            </p>
            <p>
                {[1,2,3].map((i) => (
                    <button type="button" onClick={() => handleClickNumber(i)}>
                        {i}
                    </button>
                ))}
            </p>
        </div>
    )
    document.getElementById('app').textContent = ''
    document.getElementById('app').appendChild(element);
}

render()