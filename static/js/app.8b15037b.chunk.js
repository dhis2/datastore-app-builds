(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[135],{237:function(e,t,a){e.exports={display:"Display_display__119IV",displayArea:"Display_displayArea__3kcYB"}},378:function(e,t,a){e.exports={sidebar:"Sidebar_sidebar__1vg0s",sidebarList:"Sidebar_sidebarList__2_zox"}},675:function(e,t,a){e.exports={toolbarTitle:"DisplayToolbarTitle_toolbarTitle__1WT8S"}},690:function(e,t,a){e.exports={layoutContainer:"Layout_layoutContainer__2zB8O",wrapper:"Layout_wrapper__19VFS",pageContainer:"Layout_pageContainer__2OkiQ"}},692:function(e){e.exports=JSON.parse('{"An error has occurred.":"","Invalid JSON. Please fix all remaining issues and try again.":""}')},694:function(e,t,a){"use strict";a.r(t);var n=a(693),r=a(0),s=a.n(r),o=a(381),c=a.n(o),l=a(205),i=a(246),p=a(250),u=a(326),h=a.n(u),d=a(226),m=h()({palette:{primary1Color:p.blue700,primary2Color:p.blue900,primary3Color:p.grey200,accent1Color:p.blue700,accent2Color:p.grey100,accent3Color:p.grey500,textColor:p.darkBlack,alternateTextColor:p.white,canvasColor:p.white,borderColor:p.grey300,disabledColor:Object(d.fade)(p.darkBlack,.3),pickerHeaderColor:p.blue500,clockCircleColor:Object(d.fade)(p.darkBlack,.07),shadowColor:p.fullBlack}}),E=a(213),y=a.n(E);const g="SELECT_KEY",f="TOGGLE_NAMESPACE",b="VALUE_CHANGE",v="OPEN_DIALOG",C="CLOSE_DIALOG",N="SEARCH_VALUE_CHANGE",k="SNACKBAR_EMPTY",x="FETCH_NAMESPACES_FULFILLED",O="FETCH_NAMESPACES_PENDING",j="FETCH_NAMESPACES_REJECTED",w="FETCH_KEYS_FULFILLED",S="FETCH_KEYS_PENDING",_="FETCH_KEYS_REJECTED",T="FETCH_VALUE_FULFILLED",D="FETCH_VALUE_PENDING",L="FETCH_VALUE_REJECTED",A="UPDATE_VALUE_FULFILLED",V="UPDATE_VALUE_PENDING",I="UPDATE_VALUE_REJECTED",P="CREATE_VALUE_FULFILLED",M="CREATE_VALUE_REJECTED",K="DELETE_KEY_FULFILLED",F="DELETE_NAMESPACE_FULFILLED",U="SET_IGNORE_NEXT_CONFIRM_NAVIGATION";var R=a(339);function J(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class B{constructor(){this.cache=new Map}clearNamespace(e){this.cache.has(e)&&this.cache.get(e).clear()}contains(e,t){return this.cache.has(e)&&this.cache.get(e).has(t)}get(e,t){if(this.contains(e,t))return this.cache.get(e).get(t)}set(e,t,a){this.cache.has(e)||this.cache.set(e,new Map),this.cache.get(e).set(t,a)}delete(e,t){this.contains(e,t)&&this.cache.get(e).delete(t)}}var G=new class{constructor(){J(this,"getNamespaces",(async()=>(await Object(R.getInstance)()).dataStore.getAll())),J(this,"deleteNamespace",(async e=>{const t=await Object(R.getInstance)(),a=await t.dataStore.delete(e);return this.cache.clearNamespace(e),a})),J(this,"getKeys",(async e=>{const t=await Object(R.getInstance)();return(await t.dataStore.get(e)).getKeys()})),J(this,"getValue",(async(e,t)=>{if(this.cache.contains(e,t))return this.cache.get(e,t);const a=await this.getMetaData(e,t),n={length:a.value.length,value:JSON.parse(a.value)};return this.cache.set(e,t,n),n})),J(this,"getMetaData",(async(e,t)=>{const a=await Object(R.getInstance)();return(await a.dataStore.get(e,!1)).getMetaData(t)})),J(this,"createValue",(async(e,t,a)=>{const n=await Object(R.getInstance)(),r=await n.dataStore.get(e),s=await r.set(t,a,!0);return this.cache.set(e,t,{length:0,value:a}),s})),J(this,"updateValue",(async(e,t,a)=>{const n=await Object(R.getInstance)(),r=await n.dataStore.get(e),s=await r.update(t,a);return this.cache.set(e,t,{value:a}),s})),J(this,"deleteValue",(async(e,t)=>{const a=await Object(R.getInstance)(),n=await a.dataStore.get(e),r=await n.delete(t);return this.cache.delete(e,t),r})),this.cache=new B}}("https://debug.dhis2.org/dev/api");function W(){return{type:U,ignoreNextConfirm:!0}}function H(e,t){return{type:w,namespace:e,keys:t}}function z(e){return{type:S,namespace:e}}function Y(e,t,a,n){return{type:I,namespace:e,key:t,value:a,error:n}}function q(e){return{type:F,namespace:e}}function X(e,t){return{type:f,namespace:e,override:t}}function Q(e,t=!1){return a=>(a(z(e)),G.getKeys(e).then((t=>{a(H(e,t))})).then((()=>a(X(e,t)))).catch((t=>{if(404===t.status)return a(q(e));if(t)throw t;return null})).catch((t=>{a(function(e,t){return{type:_,namespace:e,error:t}}(e,t))})))}function Z(e,t){return a=>(a(function(e,t){return{type:D,namespace:e,key:t}}(e,t)),G.getValue(e,t).then((n=>{a(function(e,t,a){return{type:T,namespace:e,key:t,value:a}}(e,t,n)),a(function(e,t,a){return{type:g,namespace:e,key:t,value:a}}(e,t,n.value))})).catch((n=>a(function(e,t,a){return{type:L,namespace:e,key:t,error:a}}(e,t,n)))))}function $(){return e=>(e({type:O}),G.getNamespaces().then((t=>{e(function(e){return{type:x,namespaces:e}}(t))})).catch((t=>e(function(e){return{type:j,error:e}}(t)))))}function ee(e,t,a){return n=>(n(function(e,t,a){return{type:"CREATE_VALUE_PENDING",namespace:e,key:t,value:a}}(e,t,a)),G.createValue(e,t,a).then((()=>n(function(e,t,a){return{type:P,namespace:e,key:t,value:a}}(e,t,a)))))}function te(e,t){return a=>{a(ee(e,t,{})).then((()=>i.d.push("/edit/".concat(e,"/").concat(t)))).then((()=>a(Q(e,!0)))).catch((n=>a({type:M,namespace:e,key:t,value:{},error:n})))}}function ae(e,t,a){return n=>(n(function(e,t,a){return{type:V,namespace:e,key:t,value:a}}(e,t,a)),G.updateValue(e,t,a).then((()=>n(function(e,t,a){return{type:A,namespace:e,key:t,value:a}}(e,t,a)))).catch((()=>n(Y(e,t,a)))))}function ne(e,t){return(a,n)=>(a(function(e,t){return{type:"DELETE_KEY_PENDING",namespace:e,key:t}}(e,t)),G.deleteValue(e,t).then((()=>a(function(e,t){return{type:K,namespace:e,key:t}}(e,t)))).then((e=>(n().display.key==t&&(a(W()),i.d.push("/")),e))).then((()=>a(function(e){return t=>(t(z(e)),G.getKeys(e).then((a=>{if(a.length<1)return Promise.reject({status:404});t(H(e,a))})))}(e)))).catch((t=>{if(404===t.status)a(q(e));else{if(t)throw t;a(X(e,!0))}})).catch((n=>{a(function(e,t,a){return{type:"DELETE_KEY_REJECTED",namespace:e,key:t,error:a}}(e,t,n))})))}var re=a(366),se=a.n(re),oe=a(302),ce=a.n(oe);function le(e,t={}){return{type:v,dialogprops:t,dialogType:e}}class ie extends r.Component{static buildButton(e,t,a=!1){return s.a.createElement(ce.a,{label:t,primary:a,onClick:e})}render(){const{title:e,cancelAction:t,cancelLabel:a,approveAction:n,approveLabel:r,contentStyle:o,defaultCloseDialog:c}=this.props,l=[];return l.push(ie.buildButton(t||c,a||"Cancel")),n&&l.push(ie.buildButton((()=>{Promise.resolve(n()).then((()=>c())).catch((()=>{}))}),r||"Create",!0)),s.a.createElement(se.a,{open:!0,title:e,actions:l,modal:!1,contentStyle:o||{},onRequestClose:c},this.props.children)}}var pe=Object(l.b)(null,(e=>({defaultCloseDialog(){e({type:C})}})))(ie);function ue(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class he extends r.Component{constructor(){super(),ue(this,"handleCancel",(()=>{this.setState({...this.state,confirmed:!1,show:!1,blockNext:!0})})),ue(this,"handleConfirm",(()=>{this.setState({...this.state,confirmed:!0,show:!1,blockNext:!1},(()=>this.props.router.push(this.state.nextLocation)))})),ue(this,"routerWillLeave",(e=>this.state.confirmed?(this.setState({...this.state,confirmed:!1,blockNext:!1}),!0):!(this.state.blockNext&&!this.props.ignoreNext)||(this.setState({...this.state,show:!0,blockNext:!1,nextLocation:e}),!1))),this.state={show:!1,blockNext:!1,confirmed:!1,nextLocation:null}}componentDidMount(){this.props.router.setRouteLeaveHook(this.props.route,this.routerWillLeave)}UNSAFE_componentWillReceiveProps(e){const t=e;if(this.props.ignoreNext)return this.setState({...this.state,blockNext:!1}),void this.props.setIgnoreNext(!1);t.value!==t.editedValue?this.setState({...this.state,blockNext:!0}):this.setState({...this.state,blockNext:!1,confirmed:!1})}render(){const e=pe.buildButton(this.handleCancel,"Stay",!1),t=pe.buildButton(this.handleConfirm,"Discard",!0);return s.a.createElement(se.a,{open:this.state.show,title:"Unsaved changes",actions:[e,t],modal:!0,onRequestClose:this.props.cancelNavigation},"You have unsaved changes! Are you sure you want to discard them?")}}var de=Object(l.b)((e=>({ignoreNext:e.navigation.ignoreNextConfirm})),(e=>({setIgnoreNext(t){e(W())}})))(he),me=a(237),Ee=a.n(me),ye=a(6),ge=a.n(ye),fe=a(371),be=a.n(fe),ve=a(639),Ce=a.n(ve);const Ne={alignItems:"center",justifyContent:"center",backgroundColor:"#fff"},ke={fill:"rgb(117, 117, 117)",display:"block",margin:"0 auto 0 auto",width:"100px",height:"auto"};class xe extends r.Component{render(){const{text:e}=this.props;return s.a.createElement("div",{className:Ee.a.displayArea,style:Ne},s.a.createElement("div",null,s.a.createElement(Ce.a,{style:ke}),s.a.createElement("p",null,e)))}}class Oe extends r.Component{render(){const{text:e}=this.props;return s.a.createElement("div",{className:Ee.a.displayArea,style:Ne},s.a.createElement("div",null,s.a.createElement(be.a,{style:ke}),s.a.createElement("p",null,e)))}}class je extends r.Component{render(){return s.a.createElement(Oe,{text:this.props.error||ge.a.t("An error has occurred.")})}}var we=je,Se=a(8);const _e=({size:e="small"})=>{switch(e){case"small":return s.a.createElement(Se.e,{small:!0});case"medium":return s.a.createElement(Se.e,null);case"large":return s.a.createElement(Se.e,{large:!0})}return null},Te={alignItems:"center",justifyContent:"center"};class De extends r.Component{render(){return s.a.createElement(y.a,{zDepth:0,className:Ee.a.displayArea,style:Te},s.a.createElement(_e,{size:"large"}))}}var Le=De;function Ae(){return(Ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Ve(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var Ie=e=>{class t extends r.Component{constructor(...e){super(...e),Ve(this,"renderLoading",(()=>s.a.createElement(Le,null))),Ve(this,"renderError",(()=>s.a.createElement(we,{error:this.props.errorMessage})))}render(){const{loading:t,error:a,...n}=this.props;return t?this.renderLoading():a?this.renderError():s.a.createElement(e,Ae({},n,this.state))}}return Object(l.b)((e=>({loading:e.display.fetching,error:e.display.error,errorMessage:e.display.errorMessage})))(t)},Pe=a(640),Me=a.n(Pe);const Ke="SEARCH_JSON",Fe="EXPAND_JSON",Ue="COLLAPSE_JSON",Re="REDO_JSON",Je="UNDO_JSON",Be="CHANGE_JSON_MODE",Ge="FORMAT_JSON",We="COMPACT_JSON";function He(e){return{type:Be,mode:e}}const ze="NEW_NAMESPACE",Ye="NEW_KEY",qe="CONFIRM_DELETE_NAMESPACE",Xe="CONFIRM_DELETE_KEY",Qe="ERROR_DIALOG";a(641);const Ze=e=>e&&"object"===typeof e?Array.isArray(e)?e.map(Ze):Object.keys(e).sort().reduce(((t,a)=>(t[a]=Ze(e[a]),t)),{}):e;function $e(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const et={backgroundColor:"white",height:"100%"};class tt extends r.Component{constructor(e){super(e),$e(this,"changedEvent",(()=>{this.props.dataChanged(this.editor)})),$e(this,"jsonEditorIsValid",(()=>{try{return this.editor.get(),!0}catch(e){return!1}})),$e(this,"handleJsonEditor",(e=>{const{jsonSearchValue:t,collapse:a,expand:n,undo:r,redo:s,mode:o,compact:c,format:l}=e.jsonEditor;"code"!==this.editor.getMode()&&(this.editor.search(t||""),a&&this.editor.collapseAll(),n&&this.editor.expandAll(),r&&this.editor._onUndo(),s&&this.editor._onRedo()),"tree"!==this.editor.getMode()&&(c&&this.editor.compact(),l&&this.editor.format()),this.editor.getMode()!==o&&("code"===this.editor.options.mode&&(this.jsonEditorIsValid()?this.editor.setMode(o):(this.props.openErrorMessage(ge.a.t("Invalid JSON. Please fix all remaining issues and try again.")),this.props.jsonChangeMode(this.editor.getMode()))),"code"!==this.editor.options.mode&&this.editor.setMode(o)),this.removeBuiltInMenu()})),this.editor=null}componentDidMount(){this.initEditor()}componentWillUnmount(){this.editor&&this.editor.destroy()}shouldComponentUpdate(e){const{namespace:t,selectedKey:a}=this.props;return t!==e.namespace||a!==e.selectedKey}UNSAFE_componentWillReceiveProps(e){for(const[t,a]of Object.entries(this.props.jsonEditor))if(e.jsonEditor[t]!==a){this.handleJsonEditor(e);break}}updateValue(e){this.editor.set(Ze(e))}UNSAFE_componentWillUpdate(e){this.updateValue(e.value),this.handleJsonEditor(e)}removeBuiltInMenu(){this.editor&&this.editor.frame&&this.editor.frame.contains(this.editor.menu)&&this.editor.frame.removeChild(this.editor.menu)}initEditor(){if(!this.editor&&this.editorContainer){const e={modes:["tree","view","text","form"],onChange:this.changedEvent};this.editor=new Me.a(this.editorContainer,e),this.removeBuiltInMenu(),this.updateValue(this.props.value)}}render(){return s.a.createElement("div",{id:"jsoneditor",style:et,ref:e=>this.editorContainer=e})}}var at=Object(l.b)((e=>({jsonEditor:e.jsonEditor})),(e=>({jsonChangeMode(t){e(He(t))},openErrorMessage(t){e(le(Qe,{message:t}))}})))(tt);class nt extends r.Component{constructor(...e){var t,a,n;super(...e),n=e=>{try{const t=e.get();this.props.valueChange(t)}catch(t){this.props.valueChange(t,!0)}},(a="handleDataChange")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n}render(){const{value:e,namespace:t,selectedKey:a}=this.props;return s.a.createElement("div",{className:Ee.a.displayArea},s.a.createElement(at,{value:e,namespace:t,selectedKey:a,dataChanged:this.handleDataChange}))}}var rt=Ie(nt),st=a(642),ot=a.n(st),ct=a(245),lt=a.n(ct),it=a(308),pt=a.n(it),ut=a(660),ht=a.n(ut),dt=a(661),mt=a.n(dt),Et=a(662),yt=a.n(Et),gt=a(663),ft=a.n(gt),bt=a(664),vt=a.n(bt),Ct=a(376),Nt=a.n(Ct),kt=a(377),xt=a.n(kt),Ot=a(309),jt=a(266),wt=a.n(jt);function St(){return(St=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}class _t extends s.a.Component{constructor(e){super(e),this.changeEvent=this.changeEvent.bind(this),this.handleKeys=this.handleKeys.bind(this)}handleKeys(e){27===e.keyCode&&this.searchField.blur()}changeEvent(e){const t=e.target.value;this.props.changeAction(t)}render(){const{jsonLength:e}=this.props,t={disabled:!1};return e&&e>5e5&&(t.disabled=!0,t.title="Object is too big to search"),s.a.createElement(wt.a,St({name:"searchbar",floatingLabelText:"Search Object",floatingLabelStyle:{top:"42px"},inputStyle:{marginTop:"13px"},onChange:this.changeEvent,style:this.props.style,onKeyUp:this.handleKeys,underlineStyle:{maxWidth:"150px"},ref:e=>{this.searchField=e}},t))}}var Tt=_t,Dt=a(674),Lt=a.n(Dt);const At={button:{cursor:"default",maxWidth:"200px",textOverflow:"ellipsis"},label:{paddingLeft:0}};class Vt extends r.Component{render(){const{label:e}=this.props;return s.a.createElement(ce.a,{primary:!0,style:At.button,labelStyle:At.label,label:e,labelPosition:"before",disableTouchRipple:!0,hoverColor:"rgba(0,0,0,0)"})}}var It=Vt,Pt=a(675),Mt=a.n(Pt);class Kt extends r.Component{renderPath(e){const t={fill:m.palette.primary1Color,padding:"0 16px 0 16px",verticalAlign:"middle"},a=e.split("/"),n=a.length-1;return s.a.createElement("span",{className:Mt.a.toolbarTitle},a.map(((e,a)=>s.a.createElement("span",{key:a},s.a.createElement(It,{label:e,key:a}),a===n?null:s.a.createElement(Lt.a,{style:t})))))}renderDefault(){return s.a.createElement("span",{className:Mt.a.toolbarTitle},"Value")}render(){const{path:e}=this.props;return e?this.renderPath(e):this.renderDefault()}}var Ft=Kt;const Ut={dropDownMenuIcon:{fill:"black"},dropDownMenu:{marginBottom:"6px"},searchBar:{marginBottom:"25px",maxWidth:"150px",padding:"0 16px 0 16px"}};class Rt extends s.a.Component{constructor(e){var t,a,n;super(e),n=e=>{if(this.state.debounced)this.state.debounced(e);else{const t=function(e,t,a){var n;return function(){var r=this,s=arguments,o=function(){n=null,a||e.apply(r,s)},c=a&&!n;clearTimeout(n),n=setTimeout(o,t),c&&e.apply(r,s)}}((e=>{this.props.jsonSearchAction(e)}),250);this.setState({...this.state,debounced:t}),t(e)}},(a="handleJsonSearch")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,this.renderTreeEdit=this.renderTreeEdit.bind(this),this.renderCodeEdit=this.renderCodeEdit.bind(this),this.handleDropDownMenuChange=this.handleDropDownMenuChange.bind(this),this.state={debounced:null}}handleDropDownMenuChange(e,t,a){this.props.jsonChangeMode(a)}static renderSavingSpinner(){return s.a.createElement(_e,{style:{position:"relative"}})}renderTreeEdit(){const{path:e,saving:t}=this.props;return s.a.createElement(y.a,{style:{zIndex:5}},s.a.createElement(Ot.Toolbar,null,s.a.createElement(Ot.ToolbarGroup,null,s.a.createElement(lt.a,{onClick:this.props.handleSave,tooltip:"Save",disabled:t},t?Rt.renderSavingSpinner():s.a.createElement(mt.a,null)),s.a.createElement(ot.a,{value:this.props.mode,style:Ut.dropDownMenu,onChange:this.handleDropDownMenuChange,iconStyle:Ut.dropDownMenuIcon},s.a.createElement(pt.a,{value:"tree",primaryText:"Tree"}),s.a.createElement(pt.a,{value:"code",primaryText:"Code"})),s.a.createElement(lt.a,{onClick:this.props.jsonCollapse,tooltip:"Collapse"},s.a.createElement(Nt.a,null)),s.a.createElement(lt.a,{onClick:this.props.jsonExpand,tooltip:"Expand"},s.a.createElement(xt.a,null)),s.a.createElement(lt.a,{onClick:this.props.jsonUndo,tooltip:"Undo"},s.a.createElement(yt.a,null)),s.a.createElement(lt.a,{onClick:this.props.jsonRedo,tooltip:"Redo"},s.a.createElement(ht.a,null)),s.a.createElement(Tt,{style:Ut.searchBar,jsonLength:this.props.jsonEditor.jsonLength,changeAction:this.handleJsonSearch})),s.a.createElement(Ot.ToolbarGroup,null,s.a.createElement(Ft,{path:e}))))}renderCodeEdit(){const{path:e}=this.props;return s.a.createElement(y.a,{style:{zIndex:5}},s.a.createElement(Ot.Toolbar,null,s.a.createElement(Ot.ToolbarGroup,null,s.a.createElement(lt.a,{onClick:this.props.handleSave,tooltip:"Save"},s.a.createElement(mt.a,null)),s.a.createElement(ot.a,{value:this.props.mode,style:Ut.dropDownMenu,onChange:this.handleDropDownMenuChange,iconStyle:Ut.dropDownMenuIcon},s.a.createElement(pt.a,{value:"tree",primaryText:"Tree"}),s.a.createElement(pt.a,{value:"code",primaryText:"Code"})),s.a.createElement(lt.a,{onClick:this.props.jsonFormat,tooltip:"Format"},s.a.createElement(vt.a,null)),s.a.createElement(lt.a,{onClick:this.props.jsonCompact,tooltip:"Format Compact"},s.a.createElement(ft.a,null))),s.a.createElement(Ot.ToolbarGroup,null,s.a.createElement(Ft,{path:e}))))}render(){const{mode:e}=this.props;return"tree"===e?this.renderTreeEdit():this.renderCodeEdit()}}var Jt=Object(l.b)((e=>({mode:e.jsonEditor.mode,jsonEditor:e.jsonEditor,saving:e.jsonEditor.saving})),(e=>({jsonSearchAction(t){e(function(e){return{type:Ke,searchValue:e}}(t))},jsonCollapse(){e({type:Ue})},jsonExpand(){e({type:Fe})},jsonCompact(){e({type:We})},jsonFormat(){e({type:Ge})},jsonUndo(){e({type:Je})},jsonRedo(){e({type:Re})},jsonChangeMode(t){e(He(t))}})))(Rt);class Bt extends r.Component{constructor(){super(),this.state={valueError:null}}componentDidMount(){const{getValue:e,params:{namespace:t,key:a}}=this.props;"undefined"!==typeof t&&"undefined"!==typeof a&&e(t,a)}UNSAFE_componentWillReceiveProps(e){const{fetchedNamespaces:t,params:a}=e,{fetchKeysForNamespace:n,getValue:r,params:s}=this.props;(!this.props.fetchedNamespaces&&t||!t)&&n(a.namespace,!0),s.namespace===a.namespace&&s.key===a.key||r(a.namespace,a.key)}handleSaveValue(){const{editedValue:e}=this.props,{namespace:t,key:a}=this.props.params;this.state.valueError?this.props.rejectUpdateValue(t,a,e,"Failed to update value: Not valid JSON"):e&&this.props.updateValue(t,a,e)}handleChangeValue(e,t){const{valueChange:a}=this.props,{namespace:n,key:r}=this.props.params;t?this.setState({...this.state,valueError:t}):(this.setState({...this.state,valueError:!1}),a(n,r,e))}render(){const{namespace:e,selectedKey:t}=this.props;let a="";return"undefined"!==typeof e&&(a+=e),"undefined"!==typeof t&&(a+="/".concat(t)),s.a.createElement(y.a,{zDepth:0,className:Ee.a.display},s.a.createElement(de,{route:this.props.route,router:this.props.router,value:this.props.value,editedValue:this.props.editedValue}),s.a.createElement(Jt,{path:a,handleSave:this.handleSaveValue.bind(this)}),s.a.createElement(rt,{namespace:e,selectedKey:t,value:this.props.value,valueChange:this.handleChangeValue.bind(this)}))}}var Gt=Object(i.e)(Object(l.b)((e=>({value:e.display.value,selectedKey:e.display.key,namespace:e.display.namespace,editedValue:e.display.editedValue,fetchedNamespaces:e.sidebar.fetched})),(e=>({getValue(t,a){e(Z(t,a))},fetchKeysForNamespace(t,a){e(Q(t,a))},updateValue(t,a,n){e(ae(t,a,n))},valueChange(t,a,n){e(function(e,t,a){return{type:b,namespace:e,key:t,value:a}}(t,a,n))},rejectUpdateValue(t,a,n,r){e(Y(t,a,n,r))}})))(Bt));class Wt extends r.Component{render(){return s.a.createElement("div",{className:Ee.a.display},s.a.createElement(xe,{text:"Select a namespace and a key to edit."}))}}var Ht=Ie(Wt);var zt=()=>s.a.createElement(y.a,{style:{zIndex:5}},s.a.createElement(Ot.Toolbar,null));class Yt extends r.Component{render(){return s.a.createElement(y.a,{zDepth:0,className:Ee.a.display},s.a.createElement(zt,null),s.a.createElement(Ht,null))}}var qt=Yt;class Xt extends r.Component{constructor(...e){var t,a,n;super(...e),n=()=>{const{namespace:e,keyValue:t}=this.props;this.props.deleteKeyInNamespace(e,t)},(a="handleConfirmed")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n}render(){const{namespace:e,keyValue:t,namespaceStore:a}=this.props;let n=0;a&&a[e]&&(n=Object.keys(this.props.namespaceStore[e].keys).length);const r=s.a.createElement("p",null,"This will also delete the namespace ",e,".");return s.a.createElement(pe,{approveAction:this.handleConfirmed,approveLabel:"Delete",contentStyle:{maxWidth:"400px"}},s.a.createElement("p",null,"Are you sure you want to delete ","'".concat(t,"'")," in"," ",e,"?"),n<2?r:"")}}var Qt=Object(l.b)((e=>({namespace:e.dialog.namespace,keyValue:e.dialog.key,namespaceStore:e.sidebar.namespaces})),(e=>({deleteKeyInNamespace(t,a){e(ne(t,a))}})))(Xt);class Zt extends r.Component{constructor(...e){var t,a,n;super(...e),n=()=>{this.props.deleteNamespace(this.props.namespace)},(a="handleConfirmed")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n}render(){return s.a.createElement(pe,{approveAction:this.handleConfirmed,approveLabel:"Delete",contentStyle:{maxWidth:"400px"}},s.a.createElement("p",null,"Are you sure you want to delete"," ","'".concat(this.props.namespace,"'"),"?"),s.a.createElement("p",null,"This will delete ",s.a.createElement("u",null,"all")," keys in this namespace."))}}var $t=Object(l.b)((e=>({namespace:e.dialog.namespace})),(e=>({deleteNamespace(t){e(function(e){return(t,a)=>(t(function(e){return{type:"DELETE_NAMESPACE_PENDING",namespace:e}}(e)),G.deleteNamespace(e).then((n=>(t(q(e)),a().display.namespace===e&&(t(W()),i.d.push("/")),n))).catch((a=>{console.log(a),t(function(e,t){return{type:"DELETE_NAMESPACE_REJECTED",namespace:e,error:void 0}}(e))})))}(t))}})))(Zt);class ea extends r.Component{render(){const e=this.props.component;return s.a.createElement(e,null)}}var ta=ea;class aa extends r.Component{constructor(...e){var t,a,n;super(...e),n=e=>e.props.name===this.props.dialogType,(a="matchDialog")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n}render(){const e=this.props.children.find(this.matchDialog);if(!e)return null;const t=e.props.component;return s.a.createElement(t,null)}}var na=Object(l.b)((e=>({dialogType:e.dialog.dialogType})))(aa);class ra extends r.Component{render(){return s.a.createElement(pe,{cancelAction:this.props.closeDialog,contentStyle:{maxWidth:"400px"}},this.props.message)}}var sa=Object(l.b)((e=>({message:e.dialog.message})))(ra);function oa(e){const t={valid:!1,message:"Required Field."};if(!e)return t;let a="";["#"].forEach((t=>{e.includes(t)&&(a=t)}));const n="You cannot use this character: ".concat(a," in namespaces or keys");return t.message=n,a?t:{valid:!0,message:""}}class ca extends r.Component{constructor(e){super(e),this.state={keyValue:"",keyError:""},this.handleCreate=this.handleCreate.bind(this),this.keyRef=s.a.createRef()}componentDidMount(){setTimeout((()=>{this.keyRef.current.focus()}),1)}handleKeyInput(e){const t=e.target.value;this.setState({keyError:oa(t).message,keyValue:t})}handleCreate(){const{keyValue:e}=this.state,{namespace:t}=this.props;return new Promise(((a,n)=>{const r=oa(e);t&&r.valid?(this.props.createNamespace(t,e),a()):(this.setState({keyError:r.message}),n())}))}render(){return s.a.createElement(pe,{title:"New key for "+this.props.namespace,approveAction:this.handleCreate,contentStyle:{maxWidth:"500px"}},s.a.createElement(wt.a,{hintText:"Key name",autoFocus:!0,ref:this.keyRef,errorText:this.state.keyError,style:{display:"block",width:"100%"},onChange:this.handleKeyInput.bind(this)}))}}var la=Object(l.b)((e=>({namespace:e.dialog.namespace})),(e=>({createNamespace(t,a){e(te(t,a))}})))(ca);function ia(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class pa extends r.Component{constructor(e){super(e),ia(this,"handleNamespaceInput",(e=>{const t=e.target.value;this.setState({namespaceError:oa(t).message,namespaceValue:e.target.value})})),ia(this,"handleKeyInput",(e=>{const t=e.target.value;this.setState({keyError:oa(t).message,keyValue:e.target.value})})),ia(this,"handleCreate",(()=>{const{namespaceValue:e,keyValue:t}=this.state;return new Promise(((a,n)=>{const r=oa(e),s=oa(t);s.valid&&r.valid?(this.props.createNamespace(e,t),a()):(this.setState({keyError:s.message,namespaceError:r.message}),n())}))})),this.state={namespaceValue:"",keyValue:"",namespaceError:"",keyError:""}}handleClose(){this.props.closeDialog()}render(){const e={display:"block",width:"100%"};return s.a.createElement(pe,{title:"New namespace",approveAction:this.handleCreate,cancelAction:this.props.closeDialog,contentStyle:{maxWidth:"500px"}},s.a.createElement(wt.a,{autoFocus:!0,hintText:"Namespace",style:e,errorText:this.state.namespaceError,onChange:this.handleNamespaceInput}),s.a.createElement(wt.a,{fullWidth:!0,hintText:"Key name",style:{fieldStyle:e},errorText:this.state.keyError,onChange:this.handleKeyInput}))}}var ua=Object(l.b)(null,(e=>({createNamespace(t,a){e(te(t,a))}})))(pa),ha=a(676),da=a.n(ha),ma=a(678),Ea=a.n(ma),ya=a(378),ga=a.n(ya);function fa(){return(fa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ba(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const va={alignItems:"center",justifyContent:"center"};var Ca=(e,t)=>{class a extends r.Component{constructor(...e){super(...e),ba(this,"renderLoading",(()=>s.a.createElement("div",{className:ga.a.sidebarList,style:va},s.a.createElement(_e,{size:"medium"})))),ba(this,"renderError",(()=>s.a.createElement("div",{className:ga.a.sidebarList,style:va},s.a.createElement(lt.a,{onClick:t},s.a.createElement(Ea.a,null)),s.a.createElement("p",null,"Try again"))))}render(){const{loading:t,error:a,items:n}=this.props;return t||0===n.length?this.renderLoading():a?this.renderError():s.a.createElement(e,fa({},this.props,this.state))}}return Object(l.b)((e=>({loading:e.sidebar.fetching,error:e.sidebar.error})))(a)},Na=a(310),ka=a(680),xa=a.n(ka),Oa=a(681),ja=a.n(Oa),wa=a(682),Sa=a.n(wa),_a=a(379),Ta=a.n(_a),Da=a(380),La=a.n(Da),Aa=a(684),Va=a.n(Aa);function Ia(){return(Ia=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}class Pa extends r.Component{render(){return s.a.createElement(lt.a,Ia({},this.props,{touch:!0,tooltipPosition:"bottom-left"}),s.a.createElement(Va.a,{color:m.palette.accent3Color}))}}var Ma=Pa;function Ka(){return(Ka=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const Fa={vertical:"bottom",horizontal:"left"},Ua={vertical:"top",horizontal:"left"};class Ra extends r.Component{deleteKey(e,t){this.props.deleteKeyInNamespace(e,t)}render(){const{namespace:e,keyName:t,deleteKeyInNamespace:a,...n}=this.props;return s.a.createElement(Ta.a,Ka({disableAutoFocus:!0,anchorOrigin:Fa,targetOrigin:Ua,iconButtonElement:s.a.createElement(Ma,null)},n),s.a.createElement(pt.a,{leftIcon:s.a.createElement(La.a,null),onClick:this.deleteKey.bind(this,e,t)},"Delete"))}}var Ja=Object(l.b)(null,(e=>({deleteKeyInNamespace(t,a){e(le(Xe,{namespace:t,key:a}))}})))(Ra);function Ba(){return(Ba=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const Ga={primaryText:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",height:"18px"},selectedKey:{backgroundColor:"rgba(0, 0, 0, 0.2)"}};class Wa extends r.Component{render(){const{index:e,namespace:t,keyName:a,router:n,params:r,routes:o,location:c,...l}=this.props,p=r.namespace===t&&r.key===a;return s.a.createElement(Na.ListItem,Ba({primaryText:s.a.createElement("div",{style:Ga.primaryText},a),key:e,rightIconButton:s.a.createElement(Ja,{namespace:t,keyName:a}),leftIcon:s.a.createElement(Sa.a,null),onClick:()=>i.d.push("/edit/".concat(t,"/").concat(a)),style:p?Ga.selectedKey:{}},l))}}var Ha=Object(i.e)(Wa),za=a(685),Ya=a.n(za);function qa(){return(qa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const Xa={vertical:"bottom",horizontal:"left"},Qa={vertical:"top",horizontal:"left"};class Za extends r.Component{createKey(e){this.props.newKey(e)}deleteNamespace(e){this.props.deleteNamespace(e)}render(){const{name:e,deleteNamespace:t,newKey:a,...n}=this.props;return s.a.createElement(Ta.a,qa({disableAutoFocus:!0,iconButtonElement:s.a.createElement(Ma,null),anchorOrigin:Xa,targetOrigin:Qa},n),s.a.createElement(pt.a,{leftIcon:s.a.createElement(Ya.a,null),onClick:this.createKey.bind(this,e)},"New key"),s.a.createElement(pt.a,{leftIcon:s.a.createElement(La.a,null),onClick:this.deleteNamespace.bind(this,e)},"Delete"))}}var $a=Object(l.b)(null,(e=>({deleteNamespace(t){e(le(qe,{namespace:t}))},newKey(t){e(le(Ye,{namespace:t}))}})))(Za);const en={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",height:"18px"};class tn extends r.Component{constructor(...e){var t,a,n;super(...e),n=(e,t)=>{e?this.props.closeNamespace(t):this.props.openNamespace(t)},(a="handleToggleNamespace")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n}render(){const{search:e,namespace:{error:t,name:a,fetching:n,open:r}}=this.props;if(t)return s.a.createElement(Na.ListItem,{primaryText:a,leftIcon:s.a.createElement(xa.a,null)},s.a.createElement(be.a,null));const o=Object.keys(this.props.namespace.keys).filter((t=>!e||t.toLowerCase().includes(e))).map((e=>s.a.createElement(Ha,{namespace:a,keyName:e,key:e})));let c=s.a.createElement(_e,null);return n||(c=r?s.a.createElement(ja.a,null):s.a.createElement(xa.a,null)),s.a.createElement(Na.ListItem,{primaryText:s.a.createElement("div",{style:en},a),open:r,leftIcon:c,rightIconButton:s.a.createElement($a,{name:a}),nestedItems:o,onClick:()=>this.handleToggleNamespace(r,a)})}}var an=Object(l.b)(null,(e=>({openNamespace(t){e(Q(t))},closeNamespace(t){e(X(t))}})))(tn);function nn(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const rn={overflowY:"auto",overflowX:"hidden",height:"calc(100% - 72px)",paddingTop:0,margin:"8px 5px",backgroundColor:m.palette.primary3Color};class sn extends r.Component{constructor(...e){super(...e),nn(this,"filterNamespaces",(e=>{const t=this.props.search.toLowerCase()||"";if(!t)return!0;let a=t.indexOf("#");a<0&&(a=t.length);const n=t.substring(0,a);return e.toLowerCase().includes(n)})),nn(this,"filterKeys",(()=>{const e=this.props.search.toLowerCase(),t=e.indexOf("#")+1,a=e.substring(t,e.length);return t>0?a:""}))}render(){const{items:e}=this.props;return s.a.createElement(Na.List,{style:rn},Object.keys(e).filter((e=>this.filterNamespaces(e))).sort().map((t=>s.a.createElement(an,{namespace:e[t],search:this.filterKeys(),key:t}))))}}var on=Object(l.b)((e=>({search:e.sidebar.searchValue})))(sn);class cn extends r.Component{constructor(...e){var t,a,n;super(...e),n=e=>{"Enter"===e.key&&this.searchField.blur()},(a="handleKeys")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n}render(){const{searchChanged:e,searchValue:t}=this.props;return s.a.createElement(wt.a,{name:"searchbar",hintText:"Namespace#Key",floatingLabelStyle:{top:"25px"},style:{height:"auto"},inputStyle:{marginTop:"6px"},floatingLabelText:"Search",value:t,onChange:({target:{value:t}})=>e(t),onFocus:()=>e(""),onKeyUp:this.handleKeys,ref:e=>{this.searchField=e}})}}var ln=Object(l.b)((e=>({searchValue:e.sidebar.searchValue})),(e=>({searchChanged(t){e(function(e){return{type:N,searchValue:e}}(t))}})))(cn);class pn extends r.Component{render(){return s.a.createElement(y.a,{style:{zIndex:5}},s.a.createElement(Ot.Toolbar,null,s.a.createElement(ln,null),s.a.createElement(Ot.ToolbarGroup,{lastChild:!0},this.props.children)))}}var un=pn;class hn extends r.Component{constructor(e){super(e),this.state={showDialog:!1,namespaceListImproved:Ca(on,e.getNamespaces)}}componentDidMount(){this.props.getNamespaces()}showDialog(){this.props.openNamespaceDialog()}render(){const{items:e}=this.props,t=this.state.namespaceListImproved;return s.a.createElement("div",{className:ga.a.sidebar},s.a.createElement(un,null,s.a.createElement(da.a,{label:"New",onClick:this.showDialog.bind(this),primary:!0})),s.a.createElement(t,{items:e}))}}var dn=Object(l.b)((e=>({items:e.sidebar.namespaces})),(e=>({openNamespaceDialog(){e(le(ze))},getNamespaces(){e($())}})))(hn),mn=a(686),En=a.n(mn);class yn extends r.Component{render(){return s.a.createElement(En.a,{open:"string"===typeof this.props.message,message:s.a.createElement("span",null,this.props.message),autoHideDuration:5e3,onRequestClose:this.props.emptySnackbar})}}var gn=Object(l.b)((e=>({message:e.snackbar.message})),(e=>({emptySnackbar(){e({type:k})}})))(yn),fn=a(690),bn=a.n(fn);class vn extends r.Component{render(){return s.a.createElement("div",{className:bn.a.wrapper},s.a.createElement("div",{className:bn.a.layoutContainer},s.a.createElement("div",{className:bn.a.pageContainer},s.a.createElement(dn,null),this.props.children,s.a.createElement(na,null,s.a.createElement(ta,{name:Ye,component:la}),s.a.createElement(ta,{name:ze,component:ua}),s.a.createElement(ta,{name:Qe,component:sa}),s.a.createElement(ta,{name:Xe,component:Qt}),s.a.createElement(ta,{name:qe,component:$t})))),s.a.createElement(gn,null))}}var Cn=vn;class Nn extends r.Component{shouldComponentUpdate(){return!1}render(){const{store:e}=this.props;return s.a.createElement(c.a,{muiTheme:m},s.a.createElement(l.a,{store:e},s.a.createElement(i.c,{history:i.d},s.a.createElement(i.b,{path:"/",component:Cn},s.a.createElement(i.a,{component:qt}),s.a.createElement(i.b,{path:"edit/:namespace/:key",component:Gt})))))}}var kn=Nn,xn=a(283),On=a(691);const jn={dialogType:null},wn={...jn};var Sn=(e=wn,t)=>{switch(t.type){case v:{const{dialogType:a,dialogprops:n}=t;return{...e,dialogType:a,...n}}case C:return{...e,...jn};default:return e}};const _n={fetching:!1,fetched:!0,error:!1},Tn={fetching:!0,fetched:!1,error:!1},Dn={fetching:!1,fetched:!1,error:!0},Ln={fetching:!1,fetched:!1};var An=(e=Ln,t)=>{switch(t.type){case Ke:return{...e,jsonSearchValue:t.searchValue};case O:case D:case"LOAD_VALUE":return{...e,...Tn};case j:case L:return{...e,...Dn};case T:case x:return{...e,..._n};case g:{const{namespace:a,key:n,value:r}=t;return{...e,..._n,namespace:a,key:n,value:r,editedValue:r}}case b:{const{namespace:a,key:n,value:r}=t;return{...e,..._n,namespace:a,key:n,editedValue:r}}case A:return{...e,..._n,value:t.value};default:return e}};const Vn={mode:"tree",undo:!1,redo:!1,jsonSearchValue:"",saving:!1};var In=(e=Vn,t)=>{switch(t.type){case Ke:return{...e,jsonSearchValue:t.searchValue};case Ue:return{...e,expand:!1,collapse:!0};case Fe:return{...e,expand:!0,collapse:!1};case We:return{...e,compact:!0,format:!1};case Ge:return{...e,compact:!1,format:!0};case Re:return{...e,redo:!0};case Je:return{...e,undo:!0};case Be:return{...e,mode:t.mode};case"VALUE_CHANGE":return{...e,undo:!1,redo:!1};case g:return{...e,...Vn};case T:{const{length:a}=t.value;return{...e,jsonLength:a}}case V:return{...e,saving:!0};case I:case A:return{...e,saving:!1};default:return{...e}}};const Pn={ignoreNextConfirm:!1};var Mn=(e=Pn,t)=>{switch(t.type){case U:return{...e,ignoreNextConfirm:t.ignoreNextConfirm}}return e};const Kn={fetching:!1,fetched:!0,error:!1},Fn={fetching:!0,fetched:!1,error:!1},Un={fetching:!1,fetched:!1,error:!0},Rn={searchValue:"",history:[],fetching:!1,fetched:!1,namespaces:{}},Jn=(e,t)=>{const a={};return e.filter((e=>"undefined"===typeof t[e])).forEach((e=>{a[e]={name:e,open:!1,keys:{}}})),a},Bn=e=>{const t={};return e.forEach((e=>{t[e]={key:e}})),t};var Gn=(e=Rn,t)=>{switch(t.type){case N:return{...e,searchValue:t.searchValue};case f:{const{namespace:a}=t,n=t.override||!e.namespaces[a].open;return{...e,namespaces:{...e.namespaces,[a]:{...e.namespaces[a],open:n}}}}case x:return{...e,...Kn,namespaces:{...e.namespaces,...Jn(t.namespaces,e.namespaces)}};case O:return{...e,...Fn};case j:return{...e,...Un};case w:{const{namespace:a}=t;return{...e,namespaces:{...e.namespaces,[a]:{...e.namespaces[a],...Kn,keys:Bn(t.keys)}}}}case S:{const{namespace:a}=t;return{...e,namespaces:{...e.namespaces,[a]:{...e.namespaces[a],...Fn}}}}case _:{const{namespace:a,error:n}=t;return{...e,namespaces:{...e.namespaces,[a]:{...e.namespaces[a],...Un,errorMessage:n}}}}case T:case P:{const{namespace:a,key:n}=t,r=t.value.value,s={};return"undefined"!==typeof e.namespaces[a]?s[a]={...e.namespaces[a],keys:{...e.namespaces[a].keys,[n]:{key:n,value:r}}}:s[a]={name:a,open:!1,keys:{[n]:{key:n,value:{}}}},{...e,...Kn,namespaces:{...e.namespaces,...s}}}case g:{const{namespace:a,key:n,value:r}=t;return{...e,namespace:a,key:n,value:r}}case F:{const a=e.namespaces;return delete a[t.namespace],{...e,namespaces:{...a}}}case K:{const{namespace:a,key:n}=t,r=e.namespaces[a];return delete r.keys[n],{...e,namespaces:{...e.namespaces,[r.name]:r}}}default:return{...e}}};const Wn={snackbarMessage:{message:""}},Hn={};var zn=(e=Hn,t)=>{switch(t.type){case g:return{...Wn};case A:return{...e,message:"Value saved."};case I:{let a="Failed to save.";const{error:n}=t;return n&&"string"===typeof n&&(a=t.error),{...e,message:a}}case _:return{...e,message:t.error};case K:return{...e,message:"Key deleted."};case F:return{...e,message:"Namespace deleted."};case M:{let a="Failed to create. ";return t.error&&t.error.message&&(a+=t.error.message),{...e,message:a}}case k:return{...Wn};default:return{...e}}},Yn=Object(xn.c)({display:An,sidebar:Gn,snackbar:zn,dialog:Sn,jsonEditor:In,navigation:Mn}),qn=Object(xn.d)(Yn,Object(xn.a)(On.a)),Xn=a(692);ge.a.addResources("en","default",Xn);ge.a;t.default=()=>{const{d2:e}=Object(n.a)();return e?s.a.createElement(kn,{store:qn}):null}}}]);
//# sourceMappingURL=app.8b15037b.chunk.js.map