(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(9),c=a.n(l),r=(a(15),a(16),a(7)),i=a(2),s=a(3),d=a(4),u=a(6),m=a(5),p=a(1),f=a.n(p),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={onEdit:!1,onEditTodoId:""},e.onEdit=function(t){e.setState({onEdit:!0,onEditTodoId:+t})},e.saveChangeBlur=function(t){var a=e.state.onEditTodoId,n=t.target.value;e.setState({onEdit:!1}),e.props.changeTitle(a,n)},e.onKeyPress=function(t){var a=e.state.onEditTodoId,n=t.target.value;13===t.keyCode&&(e.setState({onEdit:!1}),e.props.changeTitle(a,n)),27===t.keyCode&&e.setState({onEdit:!1})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.deleteTodo,n=t.todo,l=t.changeStatus,c=this.state.onEdit;return o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{key:n.id,className:f()({view:!0,editing:c,completed:n.completed})},o.a.createElement("div",{className:"view"},o.a.createElement("input",{type:"checkbox",className:"toggle",id:n.id,checked:n.completed,onChange:function(){return l(n.id)}}),o.a.createElement("label",{htmlFor:"todo",onDoubleClick:function(){return e.onEdit(n.id)}},n.title),o.a.createElement("button",{type:"button",className:"destroy",id:n.id,onClick:a})),o.a.createElement("input",{type:"text",className:"edit",defaultValue:n.title,onBlur:this.saveChangeBlur,onKeyDown:this.onKeyPress})))}}]),a}(o.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e,t=this.props,a=t.todos,n=t.changeStatus,l=t.deleteTodo,c=t.selectAllTodo,r=t.changeTitle;return e=0!==a.length&&a.every((function(e){return!0===e.completed})),o.a.createElement("section",{className:"main"},o.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:c,checked:e}),o.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),o.a.createElement("ul",{className:"todo-list"},a.map((function(e){return o.a.createElement(h,{changeTitle:r,todo:e,key:e.id,changeStatus:n,deleteTodo:l})}))))}}]),a}(o.a.PureComponent),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={title:"",id:e.props.length,inputError:!1},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.title,o=a.id,l=e.props.addTodo;""===n.trim()?e.setState({inputError:!0}):(l({id:o+100*Math.random(),title:n.trim(),completed:!1}),e.setState((function(e){return{title:"",id:e.id+1,inputError:!1}})))},e.onTitleChange=function(t){""!==t.target.value.trim()?e.setState({title:t.target.value,inputError:!1}):e.setState({title:""})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.inputError,a=e.title;return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{value:a,onChange:this.onTitleChange,className:f()("new-todo",{inputError:t}),placeholder:"What needs to be done?"}))}}]),a}(o.a.Component),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={todos:[],filter:"all",onSelectAllTodos:!0},e.addTodo=function(t){e.setState((function(e){return{todos:[].concat(Object(i.a)(e.todos),[t])}}))},e.changeStatus=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed}):e}))}}))},e.changeTitle=function(t,a){if(""!==a.trim())e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{title:a}):e}))}}));else{var n=e.state.todos.findIndex((function(e){return e.id===t}));e.setState((function(e){var t=Object(i.a)(e.todos);return t.splice(n,1),{todos:Object(i.a)(t)}}))}},e.selectAllTodo=function(){e.setState((function(e){return{onSelectAllTodos:!e.onSelectAllTodos,todos:e.todos.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{completed:e.onSelectAllTodos})}))}}))},e.clearCompleted=function(){e.setState((function(e){return{todos:e.todos.filter((function(e){return!1===e.completed}))}}))},e.filterViewAll=function(){e.setState({filter:"all"})},e.filterActive=function(){e.setState({filter:"active"})},e.filterCompleted=function(){e.setState({filter:"completed"})},e.deleteTodo=function(t){var a=e.state.todos.findIndex((function(e){return e.id===+t.target.id}));e.setState((function(e){var t=Object(i.a)(e.todos);return t.splice(a,1),{todos:Object(i.a)(t)}}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("TODOs"));this.setState(Object(r.a)({},e))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("TODOs",JSON.stringify(this.state))}},{key:"render",value:function(){var e,t=this.state,a=t.todos,n=t.filter,l=a.filter((function(e){return!1===e.completed}));return"all"===n&&(e=Object(i.a)(a)),"active"===n&&(e=Object(i.a)(a).filter((function(e){return!1===e.completed}))),"completed"===n&&(e=Object(i.a)(a).filter((function(e){return!0===e.completed}))),o.a.createElement("section",{className:"todoapp"},o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"todos")),o.a.createElement(v,{addTodo:this.addTodo,length:a.length}),o.a.createElement(g,{todos:e,changeStatus:this.changeStatus,deleteTodo:this.deleteTodo,selectAllTodo:this.selectAllTodo,changeTitle:this.changeTitle}),o.a.createElement("footer",{className:f()("footer",{activeClear:0===a.length})},o.a.createElement("span",{className:"todo-count"},l.length," ","items left"),o.a.createElement("ul",{className:"filters"},o.a.createElement("li",null,o.a.createElement("a",{href:"#/",className:f()({selected:"all"===n}),onClick:this.filterViewAll},"All")),o.a.createElement("li",null,o.a.createElement("a",{href:"#/active",onClick:this.filterActive,className:f()({selected:"active"===n})},"Active")),o.a.createElement("li",null,o.a.createElement("a",{href:"#/completed",onClick:this.filterCompleted,className:f()({selected:"completed"===n})},"Completed"))),o.a.createElement("button",{type:"button",className:f()("clear-completed",{activeClear:a.length===l.length}),onClick:this.clearCompleted},"Clear completed")))}}]),a}(o.a.Component);c.a.render(o.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.39c1aa33.chunk.js.map