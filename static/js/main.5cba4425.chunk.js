(this["webpackJsonphabit-tracker"]=this["webpackJsonphabit-tracker"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(12),r=n.n(s),o=(n(18),n(9)),i=n(6),l=n(2),u=n(3),b=n(5),h=n(4),j=(n(19),n(0)),d=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(){e.props.onIncrement(e.props.habit)},e.handleDecrement=function(){e.props.onDecrement(e.props.habit)},e.handleDelete=function(){e.props.onDelete(e.props.habit)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("habit: ".concat(this.props.habit.name," mounted"))}},{key:"componentWillUnmount",value:function(){console.log("habit: ".concat(this.props.habit.name," will unmount"))}},{key:"render",value:function(){var e=this.props.habit,t=e.name,n=e.count;return Object(j.jsxs)("li",{className:"habit",children:[Object(j.jsx)("span",{className:"habit-name",children:t}),Object(j.jsx)("span",{className:"habit-count",children:n}),Object(j.jsx)("button",{className:"habit-button habit-increase",onClick:this.handleIncrement,children:Object(j.jsx)("i",{className:"fas fa-plus-square"})}),Object(j.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement,children:Object(j.jsx)("i",{className:"fas fa-minus-square"})}),Object(j.jsx)("button",{className:"habit-button habit-delete",onClick:this.handleDelete,children:Object(j.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(a.PureComponent),p=Object(a.memo)((function(e){var t=c.a.createRef(),n=c.a.createRef();return Object(j.jsxs)("form",{className:"add-form",onSubmit:function(a){a.preventDefault();var c=n.current.value;c&&e.onAdd(c),t.current.reset()},ref:t,children:[Object(j.jsx)("input",{className:"add-input",placeHolder:"Input habit to add",type:"text",ref:n}),Object(j.jsx)("button",{className:"add-button",children:"Add"})]})})),m=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(t){e.props.onIncrement(t)},e.handleDecrement=function(t){e.props.onDecrement(t)},e.handleDelete=function(t){e.props.onDelete(t)},e.handleInputChange=function(t){console.log(t),e.setState({value:t.target.value})},e.handleSubmit=function(t){var n=e.props.value,a=Math.random().toString(36).substring(2),c=Object(o.a)(e.state.habits);c.push({name:n,count:0,id:a}),e.setState({habits:c}),t.preventDefault()},e.handleAdd=function(t){e.props.onAdd(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{value:this.props.value,onAdd:this.handleAdd}),Object(j.jsx)("ul",{children:this.props.habits.map((function(t){return Object(j.jsx)(d,{habit:t,onIncrement:e.handleIncrement,onDecrement:e.handleDecrement,onDelete:e.handleDelete},t.id)}))}),Object(j.jsx)("button",{className:"habits-reset",onClick:this.props.onReset,children:"Reset All"})]})}}]),n}(a.Component),f=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("header",{className:"navbar",children:[Object(j.jsx)("span",{className:"navbar-logo",children:Object(j.jsx)("i",{className:"fas fa-leaf"})}),Object(j.jsx)("span",{children:"Habit Tracker"}),Object(j.jsx)("span",{className:"navbar-count",children:this.props.totalCount})]})}}]),n}(a.PureComponent),O=(a.Component,n(13)),v=function(e){var t=Object(a.useState)(0),n=Object(O.a)(t,2),c=n[0],s=n[1];return Object(j.jsxs)("li",{className:"habit",children:[Object(j.jsx)("span",{className:"habit-name",children:"Reading"}),Object(j.jsx)("span",{className:"habit-count",children:c}),Object(j.jsx)("button",{className:"habit-button habit-increase",onClick:function(){s(c+1)},children:Object(j.jsx)("i",{className:"fas fa-plus-square"})})]})};n(21);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.5cba4425.chunk.js.map