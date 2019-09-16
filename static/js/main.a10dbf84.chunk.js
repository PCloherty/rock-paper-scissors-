(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,s){},24:function(e,t,s){e.exports=s(34)},29:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s.n(n),o=s(21),a=s.n(o),c=(s(29),s(8)),i=s(9),l=s(11),u=s(10),h=s(12),m=(s(19),s(13)),p=s(5),b=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={bScore:0,uScore:0,bChoice:"",uChoice:"",result:"",resultStyle:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"reset",value:function(e){this.setState({bScore:0,uScore:0,bChoice:"",uChoice:"",result:"",resultStyle:""})}},{key:"bChoice",value:function(e){var t=Math.random(),s=["Rock","Paper","Scissors"][Math.floor(3*t)];this.setState({bChoice:s})}},{key:"rock",value:function(e){var t=this;this.setState({uChoice:"Rock"},function(e){t.result(e)})}},{key:"paper",value:function(e){var t=this;this.setState({uChoice:"Paper"},function(e){t.result(e)})}},{key:"scissors",value:function(e){var t=this;this.setState({uChoice:"Scissors"},function(e){t.result(e)})}},{key:"win",value:function(e){var t=this;this.setState({resultStyle:"resultW"}),this.setState(function(e){return{uScore:t.state.uScore+1}},function(e){t.scoreCheck(e)})}},{key:"lose",value:function(e){var t=this;this.setState({resultStyle:"resultL"}),this.setState(function(e){return{bScore:t.state.bScore+1}},function(e){t.scoreCheck(e)})}},{key:"draw",value:function(e){var t=this;this.setState({resultStyle:"resultD"},function(e){t.scoreCheck(e)})}},{key:"result",value:function(e){var t=this;"Rock"===this.state.uChoice&&"Rock"===this.state.bChoice?this.setState({result:"Looks like you're stuck between a rock and a hard place. Its a draw."},function(e){t.draw(e)}):"Rock"===this.state.uChoice&&"Scissors"===this.state.bChoice?this.setState({result:"Generally speaking rock actually blunts scissors, unless its a really really big boulder, but back to the game. It's a win!"},function(e){t.win(e)}):"Rock"===this.state.uChoice&&"Paper"===this.state.bChoice?this.setState({result:"In the magical world of rock paper scissors, when paper covers rock, it nullifies rock completely. It's a loss."},function(e){t.lose(e)}):"Paper"===this.state.uChoice&&"Rock"===this.state.bChoice?this.setState({result:"Well pay checks are worth more than stones, am I right? It's a win!"},function(e){t.win(e)}):"Paper"===this.state.uChoice&&"Paper"===this.state.bChoice?this.setState({result:"Theres more paper here than an empty office printer, its a draw."},function(e){t.draw(e)}):"Paper"===this.state.uChoice&&"Scissors"===this.state.bChoice?this.setState({result:"Paper gets cut but scissors, it's a loss."},function(e){t.lose(e)}):"Scissors"===this.state.uChoice&&"Rock"===this.state.bChoice?this.setState({result:"Scissors just cant cut rock, it's a loss."},function(e){t.lose(e)}):"Scissors"===this.state.uChoice&&"Paper"===this.state.bChoice?this.setState({result:"Scissors cuts payslips, it's a win!"},function(e){t.win(e)}):"Scissors"===this.state.uChoice&&"Scissors"===this.state.bChoice&&this.setState({result:"En guarde! Tis a draw."},function(e){t.draw(e)})}},{key:"scoreCheck",value:function(e){(this.state.uScore>5||this.state.bScore>5)&&this.reset(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"content"},r.a.createElement("button",{type:"button",id:"startReset",onClick:function(t){e.reset(t)}},"Start/Reset"),r.a.createElement("button",{type:"button",id:"rock",className:"selection",onClick:function(t){e.rock(t),e.bChoice(t)}},"Rock "),r.a.createElement("button",{type:"button",id:"paper",className:"selection",onClick:function(t){e.paper(t),e.bChoice(t)}},"Paper "),r.a.createElement("button",{type:"button",id:"scissors",className:"selection",onClick:function(t){e.scissors(t),e.bChoice(t)}},"Scissors "),r.a.createElement("div",{className:"scoreBoard"},r.a.createElement("p",null,"Your Score "),r.a.createElement("p",{id:"yourScore"},this.state.uScore," "),r.a.createElement("p",null," : "),r.a.createElement("p",{id:"botScore"}," ",this.state.bScore),r.a.createElement("p",null," Bot Score")),r.a.createElement("p",null,"You chose: ",this.state.uChoice)," ",r.a.createElement("br",null),r.a.createElement("p",null,"The Machine chose: ",this.state.bChoice," ")," ",r.a.createElement("br",null),r.a.createElement("p",{id:"result",className:this.state.resultStyle},"The Result is: ",this.state.result),r.a.createElement("p",null,"The code behind the game is ",r.a.createElement("a",{href:"https://github.com/PCloherty/rock-paper-scissors",rel:"noopener noreferrer",target:"_blank"},"available here"),"."))}}]),t}(r.a.Component);function d(){var e=document.getElementById("yourScore"),t=document.getElementById("botScore");e.innerHTML=0,t.innerHTML=0}function k(){var e=document.getElementById("yourScore"),t=document.getElementById("botScore");(e.innerHTML>=5||t.innerHTML>=5)&&d()}function S(e){var t,s="",n=["rock","paper","scissors"],r=Math.random();t=n[Math.floor(3*r)],document.getElementById("machine").innerHTML=t,e.target===document.getElementById("rock")?s=n[0]:e.target===document.getElementById("paper")?s=n[1]:e.target===document.getElementById("scissors")&&(s=n[2]),document.getElementById("yourChoice").innerHTML=s;var o=document.getElementById("result");"rock"===s&&"rock"===t?o.innerHTML="Draw":"rock"===s&&"scissors"===t?(o.innerHTML="rock beats scissors",y()):"rock"===s&&"paper"===t?(o.innerHTML="rock loses to paper",f()):"paper"===s&&"rock"===t?(o.innerHTML="paper beats rock",y()):"paper"===s&&"paper"===t?o.innerHTML="Draw":"paper"===s&&"scissors"===t?(o.innerHTML="Paper loses to scissors",f()):"scissors"===s&&"rock"===t?(o.innerHTML="scissors loses to rock",f()):"scissors"===s&&"paper"===t?(o.innerHTML="scissors beats paper",y()):"scissors"===s&&"scissors"===t&&(o.innerHTML="Draw")}function y(){var e=Number(document.getElementById("yourScore").innerHTML);e++,document.getElementById("yourScore").innerHTML=e,k()}function f(){var e=Number(document.getElementById("botScore").innerHTML);e++,document.getElementById("botScore").innerHTML=e,k()}function E(){return r.a.createElement("div",{className:"content"},r.a.createElement("button",{type:"button",id:"startReset",onLoad:d,onClick:d},"Start/Reset"),r.a.createElement("button",{type:"button",id:"rock",className:"selection",onClick:S},"Rock "),r.a.createElement("button",{type:"button",id:"paper",className:"selection",onClick:S},"Paper "),r.a.createElement("button",{type:"button",id:"scissors",className:"selection",onClick:S},"Scissors "),r.a.createElement("div",{className:"scoreBoard"},r.a.createElement("p",{id:"yourScore"},"0"),r.a.createElement("p",null,":"),r.a.createElement("p",{id:"botScore"},"0")),r.a.createElement("p",null,"You chose: ",r.a.createElement("span",{id:"yourChoice"})),r.a.createElement("br",null),r.a.createElement("p",null,"Machine chose: ",r.a.createElement("span",{id:"machine"})," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{id:"result"},"Result: "),r.a.createElement("p",null,"The code behind the game is ",r.a.createElement("a",{href:"https://github.com/PCloherty/rock-paper-scissors",rel:"noopener noreferrer",target:"_blank"},"available here"),"."))}var v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={version:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"v1",value:function(e){this.setState({version:{RPSV1:E}})}},{key:"v2",value:function(e){this.setState({version:{RPSV2:b}})}},{key:"render",value:function(){var e=this;return r.a.createElement(m.a,null,r.a.createElement("button",{type:"button",className:"versionButton",onClick:function(t){e.v1(t)}},r.a.createElement(m.b,{to:"/v1"},"Version 1")),r.a.createElement("button",{type:"button",className:"versionButton",onClick:function(t){e.v2(t)}},r.a.createElement(m.b,{to:"/v2"},"Version 2")),r.a.createElement(p.a,{exact:!0,path:"/v1",component:E}),r.a.createElement(p.a,{exact:!0,path:"/v2",component:b}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.a10dbf84.chunk.js.map