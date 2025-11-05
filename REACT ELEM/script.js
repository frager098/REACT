const firstBasket = React.createElement("div",{ key: "basket1"},
    [
    React.createElement("h2",{key:'1'},"Basket 1"),
    React.createElement("p",{key:'2'},"10 Apples"),
    React.createElement("button",{key:'3',id:'basket__button--1'},"->"),
    ]
);
const secondBasket = React.createElement("div",{ key: "basket2" },
    [
    React.createElement("h2",{key:'1'},"Basket 2"),
    React.createElement("p",{key:'2'},"0 Apples"),
    React.createElement("button",{key:'3',id:'basket__button--2'},"<-"),
    ]
);
const root = ReactDOM.createRoot(document.querySelector('.root'))
root.render([firstBasket,secondBasket]);