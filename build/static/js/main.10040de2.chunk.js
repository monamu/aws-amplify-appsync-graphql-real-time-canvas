(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(a,e,n){a.exports=n(285)},107:function(a,e,n){},285:function(a,e,n){"use strict";n.r(e);var t=n(10),i=n.n(t),o=n(97),s=n.n(o),r=(n(107),n(15)),c=n(27),l=n(28),d=n(30),h=n(29),u=n(31),p=n(101),v=n(98),g=n(99),f=n(100);function m(a,e){return{x:a.x+(e.x-a.x)/2,y:a.y+(e.y-a.y)/2}}var w={display:"block",position:"absolute"},y=[{name:"interface",zIndex:15},{name:"drawing",zIndex:11},{name:"temp",zIndex:12},{name:"grid",zIndex:10}],b=function(a){function e(a){var n;return Object(c.a)(this,e),(n=Object(d.a)(this,Object(h.a)(e).call(this,a))).componentWillUnmount=function(){n.canvasObserver.unobserve(n.canvasContainer)},n.drawImage=function(){n.props.imgSrc&&(n.image=new Image,n.image.src=n.props.imgSrc,n.image.onload=function(){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=a.ctx,n=a.img,t=a.x,i=a.y,o=a.w,s=a.h,r=a.offsetX,c=a.offsetY;"number"!==typeof t&&(t=0),"number"!==typeof i&&(i=0),"number"!==typeof o&&(o=e.canvas.width),"number"!==typeof s&&(s=e.canvas.height),"number"!==typeof r&&(r=.5),"number"!==typeof c&&(c=.5),r<0&&(r=0),c<0&&(c=0),r>1&&(r=1),c>1&&(c=1);var l,d,h,u,p=n.width,v=n.height,g=Math.min(o/p,s/v),f=p*g,m=v*g,w=1;f<o&&(w=o/f),Math.abs(w-1)<1e-14&&m<s&&(w=s/m),(l=(p-(h=p/((f*=w)/o)))*r)<0&&(l=0),(d=(v-(u=v/((m*=w)/s)))*c)<0&&(d=0),h>p&&(h=p),u>v&&(u=v),e.drawImage(n,l,d,h,u,t,i,o,s)}({ctx:n.ctx.grid,img:n.image})})},n.undo=function(){var a=n.lines.slice(0,-1);n.clear(),n.simulateDrawingLines({lines:a,immediate:!0})},n.getSaveData=function(){return JSON.stringify({lines:n.lines,width:n.props.canvasWidth,height:n.props.canvasHeight})},n.loadSaveData=function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.props.immediateLoading;if("string"!==typeof a)throw new Error("saveData needs to be of type string!");var t=JSON.parse(a),i=t.lines,o=t.width,s=t.height;if(!i||"function"!==typeof i.push)throw new Error("saveData.lines needs to be an array!");if(n.clear(),o===n.props.canvasWidth&&s===n.props.canvasHeight)n.simulateDrawingLines({lines:i,immediate:e});else{var c=n.props.canvasWidth/o,l=n.props.canvasHeight/s,d=(c+l)/2;n.simulateDrawingLines({lines:i.map(function(a){return Object(r.a)({},a,{points:a.points.map(function(a){return{x:a.x*c,y:a.y*l}}),brushRadius:a.brushRadius*d})}),immediate:e})}},n.simulateDrawingLines=function(a){var e=a.lines,t=a.immediate,i=0,o=t?0:n.props.loadTimeOffset;e.forEach(function(a){for(var e=a.points,t=a.brushColor,s=a.brushRadius,r=function(a){i+=o,window.setTimeout(function(){n.drawPoints({points:e.slice(0,a+1),brushColor:t,brushRadius:s})},i)},c=1;c<e.length;c++)r(c);i+=o,window.setTimeout(function(){n.points=e,n.saveLine({brushColor:t,brushRadius:s})},i)})},n.handleTouchStart=function(a){var e=n.getPointerPos(a),t=e.x,i=e.y;n.lazy.update({x:t,y:i},{both:!0}),n.handleMouseDown(a),n.mouseHasMoved=!0},n.handleTouchMove=function(a){a.preventDefault();var e=n.getPointerPos(a),t=e.x,i=e.y;n.handlePointerMove(t,i)},n.handleTouchEnd=function(a){n.handleMouseUp(a);var e=n.lazy.getBrushCoordinates();n.lazy.update({x:e.x,y:e.y},{both:!0}),n.mouseHasMoved=!0},n.handleMouseDown=function(a){a.preventDefault(),n.isPressing=!0},n.handleMouseMove=function(a){var e=n.getPointerPos(a),t=e.x,i=e.y;n.handlePointerMove(t,i)},n.handleMouseUp=function(a){a.preventDefault(),n.isDrawing=!1,n.isPressing=!1,n.saveLine()},n.handleCanvasResize=function(a,e){var t=n.getSaveData(),i=!0,o=!1,s=void 0;try{for(var r,c=a[Symbol.iterator]();!(i=(r=c.next()).done);i=!0){var l=r.value.contentRect,d=l.width,h=l.height;n.setCanvasSize(n.canvas.interface,d,h),n.setCanvasSize(n.canvas.drawing,d,h),n.setCanvasSize(n.canvas.temp,d,h),n.setCanvasSize(n.canvas.grid,d,h),n.drawGrid(n.ctx.grid),n.loop({once:!0})}}catch(u){o=!0,s=u}finally{try{i||null==c.return||c.return()}finally{if(o)throw s}}n.loadSaveData(t,!0)},n.setCanvasSize=function(a,e,n){a.width=e,a.height=n,a.style.width=e,a.style.height=n},n.getPointerPos=function(a){var e=n.canvas.interface.getBoundingClientRect(),t=a.clientX,i=a.clientY;return a.changedTouches&&a.changedTouches.length>0&&(t=a.changedTouches[0].clientX,i=a.changedTouches[0].clientY),{x:t-e.left,y:i-e.top}},n.handlePointerMove=function(a,e){if(!n.props.disabled){var t=n.lazy.update({x:a,y:e}),i=!n.lazy.isEnabled();(n.isPressing&&t&&!n.isDrawing||i&&n.isPressing)&&(n.isDrawing=!0,n.points.push(n.lazy.brush.toObject())),n.isDrawing&&(n.lazy.brushHasMoved()||i)&&(n.points.push(n.lazy.brush.toObject()),n.drawPoints({points:n.points,brushColor:n.props.brushColor,brushRadius:n.props.brushRadius})),n.mouseHasMoved=!0}},n.drawPoints=function(a){var e=a.points,t=a.brushColor,i=a.brushRadius;n.ctx.temp.lineJoin="round",n.ctx.temp.lineCap="round",n.ctx.temp.strokeStyle=t,n.ctx.temp.clearRect(0,0,n.ctx.temp.canvas.width,n.ctx.temp.canvas.height),n.ctx.temp.lineWidth=2*i;var o=e[0],s=e[1];n.ctx.temp.moveTo(s.x,s.y),n.ctx.temp.beginPath();for(var r=1,c=e.length;r<c;r++){var l=m(o,s);n.ctx.temp.quadraticCurveTo(o.x,o.y,l.x,l.y),o=e[r],s=e[r+1]}n.ctx.temp.lineTo(o.x,o.y),n.ctx.temp.stroke()},n.saveLine2=function(a){n.isDrawing=!1,n.isPressing=!1,console.log("data from saveline: ",a),console.log("saveLine2 called"),n.lines.push(a),console.log("lines: ",n.lines),n.points.length=0;var e=n.canvas.temp.width,t=n.canvas.temp.height;n.ctx.drawing.drawImage(n.canvas.temp,0,0,e,t),n.ctx.temp.clearRect(0,0,e,t)},n.saveLine=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=a.brushColor,t=a.brushRadius;if(!(n.points.length<2)){n.lines.push({points:Object(p.a)(n.points),brushColor:e||n.props.brushColor,brushRadius:t||n.props.brushRadius}),n.points.length=0;var i=n.canvas.temp.width,o=n.canvas.temp.height;n.ctx.drawing.drawImage(n.canvas.temp,0,0,i,o),n.ctx.temp.clearRect(0,0,i,o)}},n.clear=function(){n.lines=[],n.valuesChanged=!0,n.ctx.drawing.clearRect(0,0,n.canvas.drawing.width,n.canvas.drawing.height),n.ctx.temp.clearRect(0,0,n.canvas.temp.width,n.canvas.temp.height)},n.loop=function(){var a=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).once,e=void 0!==a&&a;if(n.mouseHasMoved||n.valuesChanged){var t=n.lazy.getPointerCoordinates(),i=n.lazy.getBrushCoordinates();n.drawInterface(n.ctx.interface,t,i),n.mouseHasMoved=!1,n.valuesChanged=!1}e||window.requestAnimationFrame(function(){n.loop()})},n.drawGrid=function(a){if(!n.props.hideGrid){a.clearRect(0,0,a.canvas.width,a.canvas.height),a.beginPath(),a.setLineDash([5,1]),a.setLineDash([]),a.strokeStyle=n.props.gridColor,a.lineWidth=.5;for(var e=0;e<a.canvas.width;)e+=25,a.moveTo(e,0),a.lineTo(e,a.canvas.height);a.stroke();for(var t=0;t<a.canvas.height;)t+=25,a.moveTo(0,t),a.lineTo(a.canvas.width,t);a.stroke()}},n.drawInterface=function(a,e,t){a.clearRect(0,0,a.canvas.width,a.canvas.height),a.beginPath(),a.fillStyle=n.props.brushColor,a.arc(t.x,t.y,n.props.brushRadius,0,2*Math.PI,!0),a.fill(),a.beginPath(),a.fillStyle=n.props.catenaryColor,a.arc(e.x,e.y,4,0,2*Math.PI,!0),a.fill(),n.lazy.isEnabled()&&(a.beginPath(),a.lineWidth=2,a.lineCap="round",a.setLineDash([2,4]),a.strokeStyle=n.props.catenaryColor,n.catenary.drawToCanvas(n.ctx.interface,t,e,n.chainLength),a.stroke()),a.beginPath(),a.fillStyle=n.props.catenaryColor,a.arc(t.x,t.y,2,0,2*Math.PI,!0),a.fill()},n.canvas={},n.ctx={},n.catenary=new g.Catenary,n.points=[],n.lines=[],n.mouseHasMoved=!0,n.valuesChanged=!0,n.isDrawing=!1,n.isPressing=!1,n}return Object(u.a)(e,a),Object(l.a)(e,[{key:"componentDidMount",value:function(){var a=this;this.lazy=new v.LazyBrush({radius:this.props.lazyRadius*window.devicePixelRatio,enabled:!0,initialPoint:{x:window.innerWidth/2,y:window.innerHeight/2}}),this.chainLength=this.props.lazyRadius*window.devicePixelRatio,this.canvasObserver=new f.a(function(e,n){return a.handleCanvasResize(e,n)}),this.canvasObserver.observe(this.canvasContainer),this.drawImage(),this.loop(),window.setTimeout(function(){var e=window.innerWidth/2,n=window.innerHeight/2;a.lazy.update({x:e-a.chainLength/4,y:n},{both:!0}),a.lazy.update({x:e+a.chainLength/4,y:n},{both:!1}),a.mouseHasMoved=!0,a.valuesChanged=!0,a.clear(),a.props.saveData&&a.loadSaveData(a.props.saveData)},100)}},{key:"componentDidUpdate",value:function(a){a.lazyRadius!==this.props.lazyRadius&&(this.chainLength=this.props.lazyRadius*window.devicePixelRatio,this.lazy.setRadius(this.props.lazyRadius*window.devicePixelRatio)),a.saveData!==this.props.saveData&&this.loadSaveData(this.props.saveData),JSON.stringify(a)!==JSON.stringify(this.props)&&(this.valuesChanged=!0)}},{key:"render",value:function(){var a=this;return i.a.createElement("div",{className:this.props.className,style:Object(r.a)({display:"block",background:"#fff",touchAction:"none",width:this.props.canvasWidth,height:this.props.canvasHeight},this.props.style),ref:function(e){e&&(a.canvasContainer=e)}},y.map(function(e){var n=e.name,t=e.zIndex,o="interface"===n;return i.a.createElement("canvas",{key:n,ref:function(e){e&&(a.canvas[n]=e,a.ctx[n]=e.getContext("2d"))},style:Object(r.a)({},w,{zIndex:t}),onMouseDown:o?a.handleMouseDown:void 0,onMouseMove:o?a.handleMouseMove:void 0,onMouseUp:o?a.handleMouseUp:void 0,onMouseOut:o?a.handleMouseUp:void 0,onTouchStart:o?a.handleTouchStart:void 0,onTouchMove:o?a.handleTouchMove:void 0,onTouchEnd:o?a.handleTouchEnd:void 0,onTouchCancel:o?a.handleTouchEnd:void 0})}))}}]),e}(t.PureComponent);b.defaultProps={loadTimeOffset:5,lazyRadius:12,brushRadius:10,brushColor:"#444",catenaryColor:"#0a0302",gridColor:"rgba(150,150,150,0.17)",hideGrid:!1,canvasWidth:400,canvasHeight:400,disabled:!1,imgSrc:"",saveData:"",immediateLoading:!1};var x=n(46),C=n.n(x),D=n(11),O=n.n(D),P="mutation UpdateCanvas($input: UpdateCanvasInput!) {\n  updateCanvas(input: $input) {\n    id\n    clientId\n    data\n  }\n}\n",S=["#D50000","#AA00FF","#2962FF","#18FFFF","#00C853","#FFD600","#FF6D00","#000000"];function z(){return S[~~(S.length*Math.random())]}var M=function(a){function e(){var a,n;Object(c.a)(this,e);for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return(n=Object(d.a)(this,(a=Object(h.a)(e)).call.apply(a,[this].concat(i)))).state={brushColor:z(),canvasHeight:350,canvasWidth:380,brushRadius:4,lazyRadius:8},n.lineLength=0,n.id="123",n.clientId=C()(),n.canvasInfo="tempcanvas",n.clear=function(){var a=n.canvas.getSaveData(),e=JSON.parse(a),t=Object(r.a)({},e,{lines:[]}),i=JSON.stringify(t);n.canvas.loadSaveData(i);var o={id:n.id,clientId:n.clientId,data:i};D.API.graphql(Object(D.graphqlOperation)(P,{input:o})).then(function(a){console.log("canvas cleared!")}).catch(function(a){return console.log("error creating: ",a)})},n}return Object(u.a)(e,a),Object(l.a)(e,[{key:"componentDidMount",value:function(){var a=this,e={id:this.id,clientId:this.clientId,data:Object(r.a)({},this.state,{lines:[]})};D.API.graphql(Object(D.graphqlOperation)("mutation CreateCanvas($input: CreateCanvasInput!) {\n  createCanvas(input: $input) {\n    id\n    clientId\n    data\n  }\n}\n",{input:e})).then(function(a){return console.log("canvas created :",a)}).catch(function(e){if(e.errors[0].data.id===a.id){var n=e.errors[0].data.data;a.canvas.loadSaveData(n)}}),window.addEventListener("mouseup",function(e){if("clearbutton"!==e.target.name){a.setState({brushColor:z()});var n=a.canvas.getSaveData(),t=JSON.parse(n).lines.length;a.lineLength=t;var i={id:a.id,clientId:a.clientId,data:n};D.API.graphql(Object(D.graphqlOperation)(P,{input:i})).then(function(a){console.log("canvas updated!")}).catch(function(a){return console.log("error creating: ",a)})}}),D.API.graphql(Object(D.graphqlOperation)("subscription OnUpdateCanvas {\n  onUpdateCanvas {\n    id\n    clientId\n    data\n  }\n}\n")).subscribe({next:function(e){var n=JSON.parse(e.value.data.onUpdateCanvas.data);console.log(n);var t=n.lines.length;if(0!==t){if(a.lineLength!==t&&t!==Number(0)){var i=n.lines[t-1];a.canvas.simulateDrawingLines({lines:[i]})}}else{var o=a.canvas.getSaveData(),s=JSON.parse(o),c=Object(r.a)({},s,{lines:[]}),l=JSON.stringify(c);a.canvas.loadSaveData(l)}}})}},{key:"render",value:function(){var a=this;return i.a.createElement("div",null,i.a.createElement("button",{name:"clearbutton",onClick:this.clear},"Clear"),i.a.createElement(b,Object.assign({},this.state,{ref:function(e){return a.canvas=e}})))}}]),e}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R={aws_project_region:"ap-northeast-1",aws_appsync_graphqlEndpoint:"https://k75vqhktsfayva5hcffm6omcfm.appsync-api.ap-northeast-1.amazonaws.com/graphql",aws_appsync_region:"ap-northeast-1",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-ws6gnvutgvgnxibl2uone3yfbu"};O.a.configure(R),s.a.render(i.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(a){a.unregister()})},36:function(a,e){}},[[102,1,2]]]);
//# sourceMappingURL=main.10040de2.chunk.js.map