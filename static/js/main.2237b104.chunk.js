(this["webpackJsonpsecond-react"]=this["webpackJsonpsecond-react"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),s=(n(8),n(6)),l=n.n(s),i=n(1),u=n(2),h=n(4),m=n(3),b=n(5),d=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{overflowY:"scroll",height:"680px"}},this.props.children)}}]),t}(a.Component),p=function(e){return r.a.createElement("div",{className:"bg-gold dib ma2 pa2 br3 tc bw1 shadow-3 grow"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(e.robot.username,"?set=set5&bgset=bg1&size=250x250")}),r.a.createElement("div",null,r.a.createElement("h2",null,e.robot.name),r.a.createElement("p",null,e.robot.email)))},g=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card-list"},this.props.robots.map((function(e){return r.a.createElement(p,{robot:e,key:e.id})})))}}]),t}(a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{className:"db",style:{margin:"0 auto 1em auto",fontSize:"1.2em",padding:"1em",backgroundColor:"lightblue",border:"3px solid blue"},type:"search",placeholder:"Search Scary Friends",onChange:this.props.searchChange}))}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={date:new Date},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWilUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return r.a.createElement("div",{className:"clock"},r.a.createElement("h2",{style:{padding:0,margin:0}},this.state.date.toLocaleTimeString()))}}]),t}(a.Component),j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={hasError:!1},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(){console.log("componentDidCatch()"),this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",null,console.log("something went wrong"),r.a.createElement("h1",{className:"tc"},"Opps! Something went wrong..."),";"):(console.log("hasError is false. Rendering Children"),this.props.children)}}]),t}(a.Component),O=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(h.a)(this,Object(m.a)(t).call(this))).onSearchChange=function(t){e.setState({searchField:t.target.value}),console.log("onSearchChange")},e.state={robots:[],searchField:""},console.log("constructor"),e}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e,t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.a.awrap(fetch("https://jsonplaceholder.typicode.com/users"));case 3:if(e=n.sent,console.log("response = ".concat(e.status)),e.ok){n.next=7;break}throw Error(e.statusText);case 7:return n.next=9,l.a.awrap(e.json());case 9:t=n.sent,this.setState({robots:t}),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0);case 16:console.log("componentDidMount");case 17:case"end":return n.stop()}}),null,this,[[0,13]])}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return console.log("render"),console.log("Search for: ".concat(n)),0===t.length?r.a.createElement("h1",{className:"tc",style:{color:"yellow",margin:"0 auto"}},"Loading..."):r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("h1",{className:"tc",style:{margin:"10px"}},"Scary Friends"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(d,null,r.a.createElement(j,null,r.a.createElement(g,{robots:a}))))}}]),t}(a.Component);n(16);c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.2237b104.chunk.js.map