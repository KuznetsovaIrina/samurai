"use strict";(self.webpackChunksamurai=self.webpackChunksamurai||[]).push([[102],{102:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r=t(5671),o=t(3144),s=t(136),u=t(5716),i=t(2791),a=t(8687),l="Users_list__2rn0A",c="Users_selectedPage__xB5Qh",f="Users_status__+Zoo2",p="Users_item__HvY6N",h="Users_avatar__VN7wB",g="Users_name__QhF4b",d="Users_button__q85hw",v=t(184),m=function(e){var n=e.currentPage,t=e.onPageChanged,r=e.totalItemsCount,o=e.pageSize,s=Math.ceil(r/o);return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"text-center",children:[n>1&&(0,v.jsx)("button",{onClick:function(){t(n-1)},children:"Prev Page"}),n>1&&(0,v.jsx)("button",{onClick:function(){t(1)},children:"First Page"}),(0,v.jsx)("span",{className:c,children:n}),n<s&&(0,v.jsx)("button",{onClick:function(){t(s)},children:"Last Page"}),n<s&&(0,v.jsx)("button",{onClick:function(){t(n+1)},children:"Next Page"})]})})},w=t(3504),P=function(e){var n=e.followingInProgress,t=e.isAuth,r=e.user,o=e.unfollow,s=e.follow,u="https://loremflickr.com/180/180/?random="+r.id;return(0,v.jsxs)("li",{className:p,children:[(0,v.jsx)("div",{className:h,children:(0,v.jsx)("img",{width:"90",height:"90",src:r.photos.small?r.photos.small:u,alt:r.name})}),(0,v.jsxs)("div",{children:[(0,v.jsx)(w.OL,{to:"/profile/".concat(r.id),className:g,children:r.name}),(0,v.jsx)("p",{className:f,children:r.status})]}),t?r.followed?(0,v.jsx)("button",{className:"button ".concat(d),disabled:n.some((function(e){return e===r.id})),onClick:function(){o(r.id)},children:"Unfollow"}):(0,v.jsx)("button",{className:"button ".concat(d),disabled:n.some((function(e){return e===r.id})),onClick:function(){s(r.id)},children:"Follow"}):""]})},y=function(e){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("ul",{className:l,children:e.users.map((function(n){return(0,v.jsx)(P,{isAuth:e.isAuth,followingInProgress:e.followingInProgress,user:n,follow:e.follow,unfollow:e.unfollow},n.id)}))}),(0,v.jsx)(m,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize})]})},x=t(2338),j=t(9039),C="NOT_FOUND";var _=function(e,n){return e===n};function b(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,o=void 0===r?_:r,s=t.maxSize,u=void 0===s?1:s,i=t.resultEqualityCheck,a=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}}(o),l=1===u?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:C},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(a):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return C}return{get:r,put:function(n,o){r(n)===C&&(t.unshift({key:n,value:o}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,a);function c(){var n=l.get(arguments);if(n===C){if(n=e.apply(null,arguments),i){var t=l.getEntries(),r=t.find((function(e){return i(e.value,n)}));r&&(n=r.value)}l.put(arguments,n)}return n}return c.clearCache=function(){return l.clear()},c}function k(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function U(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var s,u=0,i={memoizeOptions:void 0},a=r.pop();if("object"===typeof a&&(i=a,a=r.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var l=i,c=l.memoizeOptions,f=void 0===c?t:c,p=Array.isArray(f)?f:[f],h=k(r),g=e.apply(void 0,[function(){return u++,a.apply(null,arguments)}].concat(p)),d=e((function(){for(var e=[],n=h.length,t=0;t<n;t++)e.push(h[t].apply(null,arguments));return s=g.apply(null,e)}));return Object.assign(d,{resultFunc:a,memoizedResultFunc:g,dependencies:h,lastResult:function(){return s},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),d};return o}var A=U(b),F=function(e){return e.usersPage.users},N=(A(F,(function(e){return e.filter((function(e){return e.status&&e.photos.large}))})),function(e){return e.usersPage.pageSize}),z=function(e){return e.usersPage.totalUsersCount},S=function(e){return e.usersPage.currentPage},I=function(e){return e.usersPage.isFetching},q=function(e){return e.auth.isAuth},E=function(e){return e.usersPage.followingInProgress},O=function(e){(0,s.Z)(t,e);var n=(0,u.Z)(t);function t(){var e;(0,r.Z)(this,t);for(var o=arguments.length,s=new Array(o),u=0;u<o;u++)s[u]=arguments[u];return(e=n.call.apply(n,[this].concat(s))).onPageChanged=function(n){e.props.requestUsers(n,e.props.pageSize)},e.follow=function(n){e.props.isAuth&&e.props.createFollow(n)},e.unfollow=function(n){e.props.isAuth&&e.props.deleteFollow(n)},e}return(0,o.Z)(t,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,v.jsxs)("div",{className:"content-paddings",children:[(0,v.jsx)("h1",{children:"Users"}),this.props.isFetching?(0,v.jsx)(j.Z,{}):(0,v.jsx)(y,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,isFetching:this.props.isFetching,followingInProgress:this.props.followingInProgress,isAuth:this.props.isAuth,users:this.props.users,follow:this.follow,unfollow:this.unfollow,onPageChanged:this.onPageChanged})]})}}]),t}(i.Component),Z=(0,a.$j)((function(e){return{users:F(e),pageSize:N(e),totalUsersCount:z(e),currentPage:S(e),isFetching:I(e),isAuth:q(e),followingInProgress:E(e)}}),{requestUsers:x.D7,createFollow:x.PX,deleteFollow:x.VR})(O)}}]);
//# sourceMappingURL=102.f0a8c293.chunk.js.map