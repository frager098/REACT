// const h2 = <h2>Hello</h2>
// const h2 = "Hello"
    const arrowFunc = () => "Hi"
const container = <div>
    <h2>Container</h2>
    <p>That's how we write html like code in JS through Bable Toolchain</p>
    <p>{arrowFunc()}</p>
</div>


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(container)