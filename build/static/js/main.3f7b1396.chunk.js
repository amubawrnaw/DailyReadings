(this.webpackJsonpdailyreadings=this.webpackJsonpdailyreadings||[]).push([[0],{14:function(t,e,n){},8:function(t,e,n){t.exports=n(9)},9:function(t,e,n){"use strict";n.r(e);var a=n(3),i=n(4),r=n(1),l=n(7),s=n(6),h=n(0),o=n.n(h),c=n(5),u=n.n(c);n(14);function g(t){return o.a.createElement("button",{onClick:t.onClick},t.name)}function m(t){return o.a.createElement("label",null,o.a.createElement("input",{id:"input",onChange:t.onChange,value:t.value}),"words per minute.")}var b=function(t){Object(l.a)(n,t);var e=Object(s.a)(n);function n(t){var i;return Object(a.a)(this,n),(i=e.call(this,t)).state={bText:"Start",wpm:150,interval:null,text:t.text.split(" "),highlight:0},i.wpmChange=i.wpmChange.bind(Object(r.a)(i)),i.btnPress=i.btnPress.bind(Object(r.a)(i)),i.highlightWord=i.highlightWord.bind(Object(r.a)(i)),i.nextWord=i.nextWord.bind(Object(r.a)(i)),i}return Object(i.a)(n,[{key:"wpmChange",value:function(t){this.setState({wpm:t.target.value})}},{key:"nextWord",value:function(){this.state.highlight<this.state.text.length?this.setState({highlight:this.state.highlight+1}):(this.setState({highlight:0}),this.btnPress({target:{innerHTML:"End"}}))}},{key:"btnPress",value:function(t){if("Start"===t.target.innerHTML){var e=setInterval(this.nextWord,60/this.state.wpm*1e3);this.setState({bText:"End",interval:e})}else clearInterval(this.state.interval),this.setState({bText:"Start",interval:null});console.log(this.state)}},{key:"highlightWord",value:function(t,e){return e===this.state.highlight?o.a.createElement("span",{style:{color:"red"}},t+" "):t+" "}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m,{value:this.state.wpm,onChange:this.wpmChange}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(g,{name:this.state.bText,onClick:this.btnPress}),o.a.createElement("br",null),o.a.createElement("h1",null,this.state.text[this.state.highlight]),o.a.createElement("br",null),o.a.createElement("p",null,this.state.text.map(this.highlightWord)))}}]),n}(o.a.Component);u.a.render(o.a.createElement(b,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum nisi et sodales hendrerit. Etiam at fringilla tortor."}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.3f7b1396.chunk.js.map