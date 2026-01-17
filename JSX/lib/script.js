// const h2 = <h2>Hello</h2>
// const h2 = "Hello"
const arrowFunc = () => "Hi";
const container = /*#__PURE__*/React.createElement("div", null, 
    /*#__PURE__*/React.createElement("h2", null, "Container"), 
    /*#__PURE__*/React.createElement("p", null, "That's how we write html like code in JS through Bable Toolchain"), 
    /*#__PURE__*/React.createElement("p", null, arrowFunc()));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);