(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(6),l=n.n(r),s=n(7),i=n(1),c=n(2),u=n(4),d=n(3),p=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(i.a)(this,n),e.call(this)}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"inp"}," Todolist "),a.a.createElement("input",{value:this.props.inpValue,type:"text",onChange:function(e){return t.props.handleChange(e)}}),a.a.createElement("button",{onClick:function(){return t.props.addIndo()}}," add "))}}]),n}(o.Component),h=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(i.a)(this,n),e.call(this)}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props.todos.filter((function(t){return!t.done})),e=this.props.todos.filter((function(t){return t.done}));return a.a.createElement("div",null,a.a.createElement("h2",null,"\u6b63\u5728\u8fdb\u884c",t.length),a.a.createElement("ul",null,this.props.renderTodos(!1)),a.a.createElement("h2",null,"\u5df2\u7ecf\u5b8c\u6210",e.length),a.a.createElement("ul",null,this.props.renderTodos(!0)))}}]),n}(o.Component),f=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).handleChange=function(e){t.setState({inpValue:e.target.value})},t.addIndo=function(){" "!=t.state.inpValue.slice(0,1)?(t.setState({todos:[{title:t.state.inpValue,done:!1}].concat(Object(s.a)(t.state.todos))}),t.state.inpValue=" "):alert("\u8f93\u5165\u4e3a\u7a7a")},t.delIndo=function(e){t.setState({todos:t.state.todos.filter((function(t,n){return n!=e}))},(function(){localStorage.setItem("todos",JSON.stringify(t.state.todos))}))},t.toggle=function(e){var n=JSON.parse(JSON.stringify(t.state.todos));n[e].done=!n[e].done,t.setState({todos:n})},t.renderTodos=function(e){return t.state.todos.map((function(n,o){if(e==n.done)return a.a.createElement("li",null,a.a.createElement("input",{onClick:function(){return t.toggle(o)},checked:e,type:"checkbox"}),a.a.createElement("span",{dangerouslySetInnerHTML:{__html:n.title}}),a.a.createElement("button",{onClick:function(){return t.delIndo(o)}}," \u5220\u9664 "))}))},t.state={inpValue:"",todos:[{title:"1",done:!1},{title:"2",done:!0},{title:"3",done:!0},{title:"4",done:!1}]},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("todos");t&&this.setState({todos:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(){return localStorage.setItem("todos",JSON.stringify(this.state.todos)),!0}},{key:"render",value:function(){return a.a.createElement("div",{className:"tdl1"},a.a.createElement(p,{addIndo:this.addIndo,handleChange:this.handleChange}),a.a.createElement(h,{todos:this.state.todos,renderTodos:this.renderTodos}))}}]),n}(o.Component);l.a.render(a.a.createElement(f,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.03518917.chunk.js.map