const container = React.createElement('div',{className:"row container", key:"container"},
    [
    React.createElement("div",{key:"one"},
        [
        React.createElement("h2",{key:"heading__1"},"Basket 1"),
        React.createElement("p",{key:"paragraph__1"},"10 Apples"),
        React.createElement("button",{key:"button__1"},"->")
        ]
    ),
    React.createElement("div",{key:"two"},
        [
            React.createElement("h2",{key:'heading__2'},"Basket 2"),
            React.createElement("p",{key:'paragraph__2'},"0 Apples"),
            React.createElement("button",{key:'button__2',id:'basket__button--2'},"<-"),
        ]),
    React.createElement("div",{key:"three", className:"react__logo"},
        React.createElement('img',{key:"k", src:"./Images/React-icon.svg.png",
            alt:"React-logo"
        })
    ),
    React.createElement("div",{key:"four"},
       React.createElement('form',{action:"#"},
        "Name ",
        React.createElement('input',{type:"text",placeholder:"Enter Name..."},)
       )
    )
    //,React.createElement("div",{key:"five"},
    //     [
    //         React.createElement("h2",{key:'heading__2'},"Basket 2"),
    //         React.createElement("p",{key:'paragraph__2'},"0 Apples"),
    //         React.createElement("button",{key:'button__2',id:'basket__button--2'},"<-"),
    //     ]),
    // React.createElement("div",{key:"six", className:"react__logo"},
    //     React.createElement('img',{key:"k", src:"./Images/React-icon.svg.png",
    //         alt:"React-logo"
    //     })
    // )
    ]
)
// const firstBasket = React.createElement("div",{ key: "basket1"},
//     [
//     React.createElement("h2",{key:'1'},"Basket 1"),
//     React.createElement("p",{key:'2'},"10 Apples"),
//     React.createElement("button",{key:'3',id:'basket__button--1'},"->"),
//     ]
// );
// const secondBasket = React.createElement("div",{ key: "basket2" },
//     [
//     React.createElement("h2",{key:'1'},"Basket 2"),
//     React.createElement("p",{key:'2'},"0 Apples"),
//     React.createElement("button",{key:'3',id:'basket__button--2'},"<-"),
//     ]
// );
const root = ReactDOM.createRoot(document.querySelector('.root'))
root.render(container);