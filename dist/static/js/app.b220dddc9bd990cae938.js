webpackJsonp([1],{"++vR":function(t,i,e){"use strict";var n={name:"FulfillingSquareSpinner",props:{animationDuration:{type:Number,default:4e3},size:{type:Number,default:50},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px",borderColor:this.color}},spinnerInnerStyle:function(){return{backgroundColor:this.color}}}},r={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"fulfilling-square-spinner",style:this.spinnerStyle},[i("div",{staticClass:"spinner-inner",style:this.spinnerInnerStyle})])},staticRenderFns:[]};e("VU/8")(n,r,!1,function(t){e("3mkf")},"data-v-96d5104c",null).exports},"+C3w":function(t,i){},"/849":function(t,i){},"1/oy":function(t,i){},"3mkf":function(t,i){},"4bUk":function(t,i,e){"use strict";var n={name:"FulfillingBouncingCircleSpinner",props:{animationDuration:{type:Number,default:4e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px",animationDuration:this.animationDuration+"ms"}},orbitStyle:function(){return{height:this.size+"px",width:this.size+"px",borderColor:this.color,borderWidth:.03*this.size+"px",animationDuration:this.animationDuration+"ms"}},circleStyle:function(){return{height:this.size+"px",width:this.size+"px",borderColor:this.color,color:this.color,borderWidth:.1*this.size+"px",animationDuration:this.animationDuration+"ms"}}}},r={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"fulfilling-bouncing-circle-spinner",style:this.spinnerStyle},[i("div",{staticClass:"circle",style:this.circleStyle}),this._v(" "),i("div",{staticClass:"orbit",style:this.orbitStyle})])},staticRenderFns:[]};e("VU/8")(n,r,!1,function(t){e("bGmX")},"data-v-44939cec",null).exports},"9M+g":function(t,i){},AO3m:function(t,i,e){"use strict";var n={name:"OrbitSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:50},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px"}},orbitStyle:function(){return{borderColor:this.color,animationDuration:this.animationDuration+"ms"}}}},r={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"orbit-spinner",style:this.spinnerStyle},[i("div",{staticClass:"orbit one",style:this.orbitStyle}),this._v(" "),i("div",{staticClass:"orbit two",style:this.orbitStyle}),this._v(" "),i("div",{staticClass:"orbit three",style:this.orbitStyle})])},staticRenderFns:[]};e("VU/8")(n,r,!1,function(t){e("gJdE")},"data-v-325a6afe",null).exports},AZ81:function(t,i){},AyHC:function(t,i,e){"use strict";var n=e("woOf"),r=e.n(n),s={name:"FingerprintSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:60},color:{type:String,default:"#fff"}},data:function(){return{ringsNum:9,containerPadding:2}},computed:{outerRingSize:function(){return this.size-2*this.containerPadding},spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px",padding:this.containerPadding+"px"}},ringStyle:function(){return{borderTopColor:this.color,animationDuration:this.animationDuration+"ms"}},ringsStyles:function(){for(var t=[],i=this.outerRingSize/this.ringsNum,e=i,n=1;n<=this.ringsNum;n++){var s=r()({animationDelay:50*n+"ms",height:i+(n-1)*e+"px",width:i+(n-1)*e+"px"},this.ringStyle);t.push(s)}return t}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"fingerprint-spinner",style:this.spinnerStyle},this._l(this.ringsStyles,function(t,e){return i("div",{key:e,staticClass:"spinner-ring",style:t})}))},staticRenderFns:[]};e("VU/8")(s,a,!1,function(t){e("n9/I")},"data-v-f115833a",null).exports},"B+eG":function(t,i){},"BKK/":function(t,i,e){"use strict";var n=e("woOf"),r=e.n(n),s={name:"SelfBuildingSquareSpinner",props:{animationDuration:{type:Number,default:6e3},size:{type:Number,default:40},color:{type:String,default:"#fff"}},data:function(){return{squaresNum:9}},computed:{squareSize:function(){return this.size/4},initialTopPosition:function(){return 2*-this.squareSize/3},spinnerStyle:function(){return{top:-this.initialTopPosition+"px",height:this.size+"px",width:this.size+"px"}},squareStyle:function(){return{height:this.squareSize+"px",width:this.squareSize+"px",top:this.initialTopPosition+"px",marginRight:this.squareSize/3+"px",marginTop:this.squareSize/3+"px",animationDuration:this.animationDuration+"ms",background:this.color}},squaresStyles:function(){for(var t=[],i=[6,7,8,3,4,5,0,1,2],e=.05*this.animationDuration,n=0;n<this.squaresNum;n++)t.push(r()({animationDelay:e*i[n]+"ms"},this.squareStyle));return t}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"self-building-square-spinner",style:this.spinnerStyle},this._l(this.squaresStyles,function(t,e){return i("div",{key:e,staticClass:"square",class:{clear:e&&e%3==0},style:t})}))},staticRenderFns:[]};e("VU/8")(s,a,!1,function(t){e("fkE1")},"data-v-2543d096",null).exports},BiGw:function(t,i){},GfHa:function(t,i){},HRM0:function(t,i){},"Hp/t":function(t,i){},Id91:function(t,i){},JT6S:function(t,i,e){"use strict";var n=e("woOf"),r=e.n(n),s={name:"CirclesToRhombusesSpinner",props:{animationDuration:{type:Number,default:1200},circleSize:{type:Number,default:15},color:{type:String,default:"#fff"},circlesNum:{type:Number,default:3}},computed:{circleMarginLeft:function(){return 1.125*this.circleSize},spinnertStyle:function(){return{height:this.circleSize+"px",width:(this.circleSize+this.circleMarginLeft)*this.circlesNum+"px"}},circleStyle:function(){return{borderColor:this.color,animationDuration:this.animationDuration+"ms",height:this.circleSize+"px",width:this.circleSize+"px",marginLeft:this.circleMarginLeft+"px"}},circlesStyles:function(){for(var t=[],i=1;i<=this.circlesNum;i++){var e=r()({animationDelay:150*i+"ms"},this.circleStyle);1===i&&(e.marginLeft=0),t.push(e)}return t}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"circles-to-rhombuses-spinner",style:this.spinnertStyle},this._l(this.circlesStyles,function(t,e){return i("div",{key:e,staticClass:"circle",style:t})}))},staticRenderFns:[]};e("VU/8")(s,a,!1,function(t){e("B+eG")},"data-v-91571d3e",null).exports},Jmt5:function(t,i){},KbxY:function(t,i){},Kf76:function(t,i){},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("7+uW"),r={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};var s=e("VU/8")({name:"App"},r,!1,function(t){e("/849")},null,null).exports,a=e("/ocq"),o=e("//Fk"),l=e.n(o),c=e("Xxa5"),u=e.n(c),h=e("exGp"),p=e.n(h),d=e("mtWM"),f=e.n(d),m=e("Rzur"),y=e.n(m),S=e("nrd6"),g=e.n(S),x={data:function(){return{coords:{lat:null,lng:null,state:null,cityState:null},map:{map:null,centerMarker:null,tileLayer:null,layers:[]},markerIcons:{center:new g.a.Icon({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]})},fetching:!1,fetchMore:!1,flcArray:[],flceArray:null,offset:0,disabled:!1,waitingMessage:null,resultsMessage:null,showResultsMessage:!1}},components:{RadarSpinner:e("pyJd").a},created:function(){var t=this;return p()(u.a.mark(function i(){var e;return u.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.getCoords();case 2:e=i.sent,t.coords.lat=e.coords.latitude,t.coords.lng=e.coords.longitude,t.geoCodeUserPos(),t.initMap(),t.initLayers(),t.map.centerMarker.on("dragend",t.userPosUpdate);case 9:case"end":return i.stop()}},i,t)}))()},methods:{getCoords:function(){return new l.a(function(t,i){navigator.geolocation.getCurrentPosition(function(i){t(i)})})},getFLCs:function(){var t=this;return p()(u.a.mark(function i(){var e,n;return u.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t.waiting(),t.fetching=!0,i.prev=2,i.next=5,f.a.get("https://data.dol.gov/get/flc_cert/limit/200/offset/"+t.offset+"/columns/flc_cert_num:flc_name:flc_address:flc_city:flc_state:flc_zip:driving_auth:housing_auth:transportation_auth:flc_cert_start_date:flc_cert_end_date/filter_column/flc_state="+t.coords.state,{headers:{"Content-Type":"application/json","X-API-KEY":"ad69a25c-4a4f-403f-ac10-c484c5430b56"}});case 5:for(0===(e=i.sent).data.length&&(t.fetching=!1),n=0;n<e.data.length;n++)t.flcArray.push(e.data[n]);200===e.data.length?(t.offset+=200,t.fetchMore=!0):t.offset>=200&&e.data.length<200&&(t.fetchMore=!1),t.geoCodeFLCs(),i.next=16;break;case 12:i.prev=12,i.t0=i.catch(2),t.fetching=!1,t.$swal({type:"error",title:"Oops...",text:"The DOL API broke...again."});case 16:case"end":return i.stop()}},i,t,[[2,12]])}))()},geoCodeFLCs:function(){var t=this;return p()(u.a.mark(function i(){var e,n,r;return u.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:e=0;case 1:if(!(e<t.flcArray.length)){i.next=17;break}return n=t.flcArray[e].FLC_ADDRESS+t.flcArray[e].FLC_CITY+t.flcArray[e].FLC_ZIP.replace(/ /g,"+"),i.prev=3,i.next=6,f.a.get("https://maps.googleapis.com/maps/api/geocode/json?address="+n+"&key="+y.a.API);case 6:"OK"===(r=i.sent).data.status?(t.fetching=!1,t.disabled=!0,g.a.marker([r.data.results[0].geometry.location.lat,r.data.results[0].geometry.location.lng]).addTo(t.map.map).bindPopup("\n                "+t.flcArray[e].FLC_NAME+"\n                <br />\n                "+t.flcArray[e].FLC_ADDRESS+"\n                <br />\n                "+t.flcArray[e].FLC_CITY+", "+t.flcArray[e].FLC_STATE+" "+t.flcArray[e].FLC_ZIP+"\n                <br />\n                Cert #: "+t.flcArray[e].FLC_CERT_NUM+"\n                <br />\n                Housing: "+t.flcArray[e].HOUSING_AUTH+" Driving: "+t.flcArray[e].DRIVING_AUTH+" Transport: "+t.flcArray[e].TRANSPORTATION_AUTH+"\n                <br />\n                Cert Period: "+t.flcArray[e].FLC_CERT_START_DATE+" to "+t.flcArray[e].FLC_CERT_END_DATE+"\n                ")):console.log("Error geocoding record with index "+e),i.next=14;break;case 10:i.prev=10,i.t0=i.catch(3),t.fetching=!1,t.$swal({type:"error",title:"Oops...",text:"An error occurred during the geocoding process."});case 14:e++,i.next=1;break;case 17:t.flcArray.length>=t.offset&&!0===t.fetchMore?t.getFLCs():(t.resultsMessage="Showing "+t.flcArray.length+" results",t.showResultsMessage=!0);case 18:case"end":return i.stop()}},i,t,[[3,10]])}))()},geoCodeUserPos:function(){var t=this;return p()(u.a.mark(function i(){var e,n;return u.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t.disabled=!1,t.showResultsMessage=!1,i.next=4,f.a.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+t.coords.lat+","+t.coords.lng+"&key="+y.a.API);case 4:for(e=i.sent,console.log(e.data),t.coords.cityState=e.data.results[1].formatted_address,n=0;n<e.data.results.length;n++)"administrative_area_level_2"===e.data.results[n].types[0]&&(t.coords.state=e.data.results[n].address_components[1].short_name);case 8:case"end":return i.stop()}},i,t)}))()},initMap:function(){this.map.map=g.a.map("map").setView([this.coords.lat,this.coords.lng],8),this.map.centerMarker=g.a.marker([this.coords.lat,this.coords.lng],{icon:this.markerIcons.center,draggable:!0,autoPan:!0}).addTo(this.map.map).bindPopup("You are here."),this.map.tileLayer=g.a.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'}),this.map.tileLayer.addTo(this.map.map)},initLayers:function(){},userPosUpdate:function(){var t=this.map.centerMarker.getLatLng();this.coords.lat=t.lat,this.coords.lng=t.lng,this.geoCodeUserPos()},waiting:function(){var t=this,i=["Fetching data...","This is so cool...","Time for coffee...","Greasing the DOL API...","I &hearts; WHD...","Thinking really hard...","Cue the Jeopardy theme song...","I wish this was faster...","Sorry about the wait...","What's an FLC again?","Fasten your seatbelt...","Calling for backup..."];setTimeout(function(){t.waitingMessage=i[Math.floor(Math.random()*i.length)]},600),setInterval(function(){t.waitingMessage=i[Math.floor(Math.random()*i.length)]},4e3)}}},z={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container"},[e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-6"},[e("span",[e("strong",[t._v("Your Location:")]),t._v(" "+t._s(t.coords.cityState))])]),t._v(" "),e("div",{staticClass:"col-6 d-flex justify-content-end"},[t.fetching?e("span",{staticClass:"mt-1"},[e("small",{staticClass:"mr-3"},[e("span",{domProps:{innerHTML:t._s(t.waitingMessage)}})])]):t._e(),t._v(" "),t.showResultsMessage?e("span",{staticClass:"mt-1"},[e("small",{staticClass:"mr-3"},[t._v(t._s(t.resultsMessage))])]):t._e(),t._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[t.fetching?e("radar-spinner",{staticClass:"mr-4",attrs:{"animation-duration":2e3,size:38,color:"#ff1d5e"}}):e("button",{staticClass:"btn btn-primary",attrs:{disabled:t.disabled},on:{click:function(i){t.getFLCs(0)}}},[t._v("Get FLCs")])],1)],1)]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"row mt-3"},[i("div",{staticClass:"col-12"},[i("div",{attrs:{id:"map"}})])])}]};var b=e("VU/8")(x,z,!1,function(t){e("AZ81")},null,null).exports;n.a.use(a.a);var v=new a.a({routes:[{path:"/",name:"Map",component:b}]}),C=e("e6fC"),w=e("oYt9");e("Jmt5"),e("9M+g");n.a.use(C.a),n.a.use(w.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:v,components:{App:s},template:"<App/>"})},NPbT:function(t,i,e){"use strict";var n=e("woOf"),r=e.n(n),s={name:"ScalingSquaresSpinner",props:{animationDuration:{type:Number,default:1250},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data:function(){return{squaresNum:4}},computed:{spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px",animationDuration:this.animationDuration+"ms"}},squareStyle:function(){return{height:.25*this.size/1.3+"px",width:.25*this.size/1.3+"px",animationDuration:this.animationDuration+"ms",borderWidth:.04*this.size/1.3+"px",borderColor:this.color}},squaresStyles:function(){for(var t=[],i=1;i<=this.squaresNum;i++)t.push(r()({},this.squareStyle));return t}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"scaling-squares-spinner",style:this.spinnerStyle},this._l(this.squaresStyles,function(t,e){return i("div",{key:e,staticClass:"square",class:"square-"+(e+1),style:t})}))},staticRenderFns:[]};e("VU/8")(s,a,!1,function(t){e("zwmd")},"data-v-43f67b6f",null).exports},Oti5:function(t,i){},RLg3:function(t,i,e){"use strict";var n={name:"AtomSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:60},color:{type:String,default:"red"}},computed:{spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px"}},circleStyle:function(){return{color:this.color,fontSize:.24*this.size+"px"}},lineStyle:function(){return{animationDuration:this.animationDuration+"ms",borderLeftWidth:this.size/25+"px",borderTopWidth:this.size/25+"px",borderLeftColor:this.color}}}},r={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"atom-spinner",style:t.spinnerStyle},[e("div",{staticClass:"spinner-inner"},[e("div",{staticClass:"spinner-line",style:t.lineStyle}),t._v(" "),e("div",{staticClass:"spinner-line",style:t.lineStyle}),t._v(" "),e("div",{staticClass:"spinner-line",style:t.lineStyle}),t._v(" "),e("div",{staticClass:"spinner-circle",style:t.circleStyle},[t._v("\n      ●\n    ")])])])},staticRenderFns:[]};e("VU/8")(n,r,!1,function(t){e("dj1o")},"data-v-59f49670",null).exports},Rzur:function(t,i){t.exports={API:"AIzaSyADvjrQS1WEJIw7NSd7-9Wvdfo0ylybi3U"}},T1Pv:function(t,i){},T7Ne:function(t,i,e){"use strict";var n=e("woOf"),r=e.n(n),s={name:"BreedingRhombusSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:150},color:{type:String,default:"#fff"}},data:function(){return{animationBaseName:"breeding-rhombus-spinner-animation-child",rhombusesNum:8}},computed:{spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px"}},rhombusStyle:function(){return{height:this.size/7.5+"px",width:this.size/7.5+"px",animationDuration:this.animationDuration+"ms",top:this.size/2.3077+"px",left:this.size/2.3077+"px",backgroundColor:this.color}},rhombusesStyles:function(){for(var t=[],i=.05*this.animationDuration,e=1;e<=this.rhombusesNum;e++)t.push(r()({animationDelay:i*(e+1)+"ms"},this.rhombusStyle));return t},bigRhombusStyle:function(){return{height:this.size/3+"px",width:this.size/3+"px",animationDuration:""+this.animationDuration,top:this.size/3+"px",left:this.size/3+"px",backgroundColor:this.color}}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"breeding-rhombus-spinner",style:this.spinnerStyle},[this._l(this.rhombusesStyles,function(t,e){return i("div",{key:e,staticClass:"rhombus",class:"child-"+(e+1),style:t})}),this._v(" "),i("div",{staticClass:"rhombus big",style:this.bigRhombusStyle})],2)},staticRenderFns:[]};e("VU/8")(s,a,!1,function(t){e("HRM0")},"data-v-7c827517",null).exports},UW5G:function(t,i,e){"use strict";var n=e("woOf"),r=e.n(n),s={name:"RadarSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:110},color:{type:String,default:"#fff"}},data:function(){return{circlesNum:4}},computed:{borderWidth:function(){return 5*this.size/110},spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px"}},circleStyle:function(){return{animationDuration:this.animationDuration+"ms"}},circleInnerContainerStyle:function(){return{borderWidth:this.borderWidth+"px"}},circleInnerStyle:function(){return{borderLeftColor:this.color,borderRightColor:this.color,borderWidth:this.borderWidth+"px"}},circlesStyles:function(){for(var t=[],i=.15*this.animationDuration,e=0;e<this.circlesNum;e++)t.push(r()({padding:2*this.borderWidth*e+"px",animationDelay:(e===this.circlesNum-1?0:i)+"ms"},this.circleStyle));return t}}},a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"radar-spinner",style:t.spinnerStyle},t._l(t.circlesStyles,function(i,n){return e("div",{key:n,staticClass:"circle",style:i},[e("div",{staticClass:"circle-inner-container",style:t.circleInnerContainerStyle},[e("div",{staticClass:"circle-inner",style:t.circleInnerStyle})])])}))},staticRenderFns:[]};var o=e("VU/8")(s,a,!1,function(t){e("xmE8")},"data-v-7ca7cfc9",null);i.a=o.exports},UdIB:function(t,i){},W5Az:function(t,i){},Wzot:function(t,i,e){"use strict";var n=e("Ht5Q"),r={name:"FlowerSpinner",props:{animationDuration:{type:Number,default:2500},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:function(){return{smallerDotAnimationBaseName:"flower-spinner-smaller-dot-animation",biggerDotAnimationBaseName:"flower-spinner-bigger-dot-animation",currentSmallerDotAnimationBaseName:"",currentBiggerDotAnimationBaseName:""}},computed:{dotSize:function(){return this.size/7},spinnerStyle:function(){return{width:this.size+"px",height:this.size+"px"}},dotsContainerStyle:function(){return{width:this.dotSize+"px",height:this.dotSize+"px"}},smallerDotStyle:function(){return{background:this.color,animationDuration:this.animationDuration+"ms",animationName:this.currentSmallerDotAnimationBaseName}},biggerDotStyle:function(){return{background:this.color,animationDuration:this.animationDuration+"ms",animationName:this.currentBiggerDotAnimationBaseName}}},watch:{$props:{handler:function(){this.updateAnimation()},deep:!0}},mounted:function(){this.updateAnimation()},methods:{updateAnimation:function(){this.updateAnimationName(),n.a.appendKeyframes(this.currentSmallerDotAnimationBaseName,this.generateSmallerDotKeyframes()),n.a.appendKeyframes(this.currentBiggerDotAnimationBaseName,this.generateBiggerDotKeyframes())},updateAnimationName:function(){this.currentSmallerDotAnimationBaseName=this.smallerDotAnimationBaseName+"-"+Date.now(),this.currentBiggerDotAnimationBaseName=this.biggerDotAnimationBaseName+"-"+Date.now()},generateSmallerDotKeyframes:function(){return"0%, 100% {\n                  box-shadow: 0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+";\n                }\n                25%, 75% {\n                  box-shadow: "+1.4*this.dotSize+"px 0 0 "+this.color+",\n                              -"+1.4*this.dotSize+"px 0 0 "+this.color+",\n                              0 "+1.4*this.dotSize+"px 0 "+this.color+",\n                              0 -"+1.4*this.dotSize+"px 0 "+this.color+",\n                              "+this.dotSize+"px -"+this.dotSize+"px 0 "+this.color+",\n                              "+this.dotSize+"px "+this.dotSize+"px 0 "+this.color+",\n                              -"+this.dotSize+"px -"+this.dotSize+"px 0 "+this.color+",\n                              -"+this.dotSize+"px "+this.dotSize+"px 0 "+this.color+";\n\n                }\n                100% {\n                  box-shadow: 0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+";\n                }"},generateBiggerDotKeyframes:function(){return"0%, 100% {\n                  box-shadow: 0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+";\n                }\n                50% {\n                  transform: rotate(180deg);\n                }\n                25%, 75% {\n                  box-shadow: "+2.6*this.dotSize+"px 0 0 "+this.color+",\n                              -"+2.6*this.dotSize+"px 0 0 "+this.color+",\n                              0 "+2.6*this.dotSize+"px 0 "+this.color+",\n                              0 -"+2.6*this.dotSize+"px 0 "+this.color+",\n                              "+1.9*this.dotSize+"px -"+1.9*this.dotSize+"px 0 "+this.color+",\n                              "+1.9*this.dotSize+"px "+1.9*this.dotSize+"px 0 "+this.color+",\n                              -"+1.9*this.dotSize+"px -"+1.9*this.dotSize+"px 0 "+this.color+",\n                              -"+1.9*this.dotSize+"px "+1.9*this.dotSize+"px 0 "+this.color+";\n\n                }\n                100% {\n                  transform: rotate(360deg);\n                  box-shadow: 0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+";\n                }"}}},s={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"flower-spinner",style:this.spinnerStyle},[i("div",{staticClass:"dots-container",style:this.dotsContainerStyle},[i("div",{staticClass:"bigger-dot",style:this.biggerDotStyle},[i("div",{staticClass:"smaller-dot",style:this.smallerDotStyle})])])])},staticRenderFns:[]};e("VU/8")(r,s,!1,function(t){e("Kf76")},"data-v-7b1ad6b5",null).exports},YHML:function(t,i,e){"use strict";var n=e("woOf"),r=e.n(n),s={name:"HalfCircleSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px"}},circleStyle:function(){return{borderWidth:this.size/10+"px",animationDuration:this.animationDuration+"ms"}},circle1Style:function(){return r()({borderTopColor:this.color},this.circleStyle)},circle2Style:function(){return r()({borderBottomColor:this.color},this.circleStyle)}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"half-circle-spinner",style:this.spinnerStyle},[i("div",{staticClass:"circle circle-1",style:this.circle1Style}),this._v(" "),i("div",{staticClass:"circle circle-2",style:this.circle2Style})])},staticRenderFns:[]};e("VU/8")(s,a,!1,function(t){e("Hp/t")},"data-v-31ad46aa",null).exports},YUx5:function(t,i,e){"use strict";var n=e("woOf"),r=e.n(n),s={name:"LoopingRhombusesSpinner",props:{animationDuration:{type:Number,default:2500},rhombusSize:{type:Number,default:15},color:{type:String,default:"#fff"}},data:function(){return{rhombusesNum:3}},computed:{spinnerStyle:function(){return{height:this.rhombusSize+"px",width:4*this.rhombusSize+"px"}},rhombusStyle:function(){return{height:this.rhombusSize+"px",width:this.rhombusSize+"px",backgroundColor:this.color,animationDuration:this.animationDuration+"ms",left:4*this.rhombusSize+"px"}},rhombusesStyles:function(){for(var t=[],i=-this.animationDuration/1.5,e=1;e<=this.rhombusesNum;e++){var n=r()({animationDelay:e*i+"ms"},this.rhombusStyle);t.push(n)}return t}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"looping-rhombuses-spinner",style:this.spinnerStyle},this._l(this.rhombusesStyles,function(t,e){return i("div",{staticClass:"rhombus",style:t,attrs:{ikey:e}})}))},staticRenderFns:[]};e("VU/8")(s,a,!1,function(t){e("+C3w")},"data-v-0458ce94",null).exports},YeH7:function(t,i,e){"use strict";var n={name:"TrinityRingsSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:60},color:{type:String,default:"#fff"}},data:function(){return{containerPadding:3}},computed:{outerRingSize:function(){return this.size-2*this.containerPadding},spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px",padding:this.containerPadding+"px"}},ring1Style:function(){return{height:this.outerRingSize+"px",width:this.outerRingSize+"px",borderColor:this.color,animationDuration:this.animationDuration+"ms"}},ring2Style:function(){return{height:.65*this.outerRingSize+"px",width:.65*this.outerRingSize+"px",borderColor:this.color,animationDuration:this.animationDuration+"ms"}},ring3Style:function(){return{height:.1*this.outerRingSize+"px",width:.1*this.outerRingSize+"px",borderColor:this.color,animationDuration:this.animationDuration+"ms"}}}},r={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"trinity-rings-spinner",style:this.spinnerStyle},[i("div",{staticClass:"circle circle1",style:this.ring1Style}),this._v(" "),i("div",{staticClass:"circle circle2",style:this.ring2Style}),this._v(" "),i("div",{staticClass:"circle circle3",style:this.ring3Style})])},staticRenderFns:[]};e("VU/8")(n,r,!1,function(t){e("KbxY")},"data-v-65918846",null).exports},bDSB:function(t,i){},bGmX:function(t,i){},dj1o:function(t,i){},eBYp:function(t,i,e){"use strict";var n=e("woOf"),r=e.n(n),s={name:"HollowDotsSpinner",props:{animationDuration:{type:Number,default:1e3},dotSize:{type:Number,default:15},dotsNum:{type:Number,default:3},color:{type:String,default:"#fff"}},computed:{horizontalMargin:function(){return this.dotSize/2},spinnerStyle:function(){return{height:this.dotSize+"px",width:(this.dotSize+2*this.horizontalMargin)*this.dotsNum+"px"}},dotStyle:function(){return{animationDuration:this.animationDuration+"ms",width:this.dotSize+"px",height:this.dotSize+"px",margin:"0 "+this.horizontalMargin+"px",borderWidth:this.dotSize/5+"px",borderColor:this.color}},dotsStyles:function(){for(var t=[],i=1;i<=this.dotsNum;i++){var e=r()({animationDelay:1e3*i*.3+"ms"},this.dotStyle);t.push(e)}return t}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"hollow-dots-spinner",style:this.spinnerStyle},this._l(this.dotsStyles,function(t,e){return i("div",{key:e,staticClass:"dot",style:t})}))},staticRenderFns:[]};e("VU/8")(s,a,!1,function(t){e("T1Pv")},"data-v-6a541738",null).exports},fkE1:function(t,i){},gJdE:function(t,i){},kH5s:function(t,i,e){"use strict";var n=e("woOf"),r=e.n(n),s={name:"SemipolarSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data:function(){return{ringsNum:5}},computed:{spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px"}},ringStyle:function(){return{animationDuration:this.animationDuration+"ms",borderTopColor:this.color,borderLeftColor:this.color}},ringsStyles:function(){for(var t=[],i=.05*this.size,e=2*i,n=.2*this.size,s=0;s<this.ringsNum;s++){var a=this.size-n*s+"px",o=e*s+"px",l=r()({animationDelay:.1*this.animationDuration*(this.ringsNum-s-1)+"ms",height:a,width:a,left:o,top:o,borderWidth:i+"px"},this.ringStyle);t.push(l)}return t}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"semipolar-spinner",style:this.spinnerStyle},this._l(this.ringsStyles,function(t,e){return i("div",{key:e,staticClass:"ring",style:t})}))},staticRenderFns:[]};e("VU/8")(s,a,!1,function(t){e("BiGw")},"data-v-0f568b7c",null).exports},lhlx:function(t,i,e){"use strict";var n=e("Ht5Q"),r={name:"SpringSpinner",props:{animationDuration:{type:Number,default:3e3},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:function(){return{animationBaseName:"spring-spinner-animation",currentAnimationName:""}},computed:{spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px"}},spinnerPartStyle:function(){return{height:this.size/2+"px",width:this.size+"px"}},rotatorStyle:function(){return{height:this.size+"px",width:this.size+"px",borderRightColor:this.color,borderTopColor:this.color,borderWidth:this.size/7+"px",animationDuration:this.animationDuration+"ms",animationName:this.currentAnimationName}}},watch:{$props:{handler:function(){this.updateAnimation()},deep:!0}},mounted:function(){this.updateAnimation()},methods:{updateAnimation:function(){this.updateAnimationName(),n.a.appendKeyframes(this.currentAnimationName,this.generateKeyframes())},updateAnimationName:function(){this.currentAnimationName=this.animationBaseName+"-"+Date.now()},generateKeyframes:function(){return"\n        0% {\n          border-width: "+this.size/7+"px;\n        }\n        25% {\n          border-width: "+this.size/23.33+"px;\n        }\n        50% {\n          transform: rotate(115deg);\n          border-width: "+this.size/7+"px;\n        }\n        75% {\n          border-width: "+this.size/23.33+"px;\n         }\n        100% {\n         border-width: "+this.size/7+"px;\n        }"}}},s={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"spring-spinner",style:this.spinnerStyle},[i("div",{staticClass:"spring-spinner-part top",style:this.spinnerPartStyle},[i("div",{staticClass:"spring-spinner-rotator",style:this.rotatorStyle})]),this._v(" "),i("div",{staticClass:"spring-spinner-part bottom",style:this.spinnerPartStyle},[i("div",{staticClass:"spring-spinner-rotator",style:this.rotatorStyle})])])},staticRenderFns:[]};e("VU/8")(r,s,!1,function(t){e("qe+E")},"data-v-10ac9285",null).exports},"n9/I":function(t,i){},qHzf:function(t,i,e){"use strict";var n=e("woOf"),r=e.n(n),s={name:"SwappingSquaresSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data:function(){return{animationBaseName:"swapping-squares-animation-child",squaresNum:4}},computed:{spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px"}},squareStyle:function(){return{height:.25*this.size/1.3+"px",width:.25*this.size/1.3+"px",animationDuration:this.animationDuration+"ms",borderWidth:.04*this.size/1.3+"px",borderColor:this.color}},squaresStyles:function(){for(var t=[],i=.5*this.animationDuration,e=1;e<=this.squaresNum;e++)t.push(r()({animationDelay:(e%2==0?i:0)+"ms"},this.squareStyle));return t}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"swapping-squares-spinner",style:this.spinnerStyle},this._l(this.squaresStyles,function(t,e){return i("div",{key:e,staticClass:"square",class:"square-"+(e+1),style:t})}))},staticRenderFns:[]};e("VU/8")(s,a,!1,function(t){e("Oti5")},"data-v-b85b25de",null).exports},"qe+E":function(t,i){},vW50:function(t,i,e){"use strict";var n=e("woOf"),r=e.n(n),s={name:"IntersectingCirclesSpinner",props:{animationDuration:{type:Number,default:1200},size:{type:Number,default:70},color:{type:String,default:"#fff"}},computed:{circleSize:function(){return this.size/2},spinnerStyle:function(){return{width:this.size+"px",height:this.size+"px"}},spinnerBlockStyle:function(){return{animationDuration:this.animationDuration+"ms",width:this.circleSize+"px",height:this.circleSize+"px"}},circleStyle:function(){return{borderColor:this.color}},circleStyles:function(){var t=this;return[{top:0,left:0},{left:-.36*this.circleSize+"px",top:.2*this.circleSize+"px"},{left:-.36*this.circleSize+"px",top:-.2*this.circleSize+"px"},{left:0,top:-.36*this.circleSize+"px"},{left:.36*this.circleSize+"px",top:-.2*this.circleSize+"px"},{left:.36*this.circleSize+"px",top:.2*this.circleSize+"px"},{left:0,top:.36*this.circleSize+"px"}].map(function(i){return r()(i,t.circleStyle)})}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"intersecting-circles-spinner",style:this.spinnerStyle},[i("div",{staticClass:"spinnerBlock",style:this.spinnerBlockStyle},this._l(this.circleStyles,function(t,e){return i("span",{key:e,staticClass:"circle",style:t})}))])},staticRenderFns:[]};e("VU/8")(s,a,!1,function(t){e("bDSB")},"data-v-72b5f8a9",null).exports},xmE8:function(t,i){},xrBC:function(t,i,e){"use strict";var n=e("Ht5Q"),r={name:"PixelSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:function(){return{animationBaseName:"pixel-spinner-animation",currentAnimationName:""}},computed:{pixelSize:function(){return this.size/7},spinnerStyle:function(){return{width:this.size+"px",height:this.size+"px"}},spinnerInnerStyle:function(){return{animationDuration:this.animationDuration+"ms",animationName:this.currentAnimationName,width:this.pixelSize+"px",height:this.pixelSize+"px",backgroundColor:this.color,color:this.color,boxShadow:"\n                      "+1.5*this.pixelSize+"px "+1.5*this.pixelSize+"px 0 0,\n                      "+-1.5*this.pixelSize+"px "+-1.5*this.pixelSize+"px 0 0,\n                      "+1.5*this.pixelSize+"px "+-1.5*this.pixelSize+"px 0 0,\n                      "+-1.5*this.pixelSize+"px "+1.5*this.pixelSize+"px 0 0,\n                      0 "+1.5*this.pixelSize+"px 0 0,\n                      "+1.5*this.pixelSize+"px 0 0 0,\n                      "+-1.5*this.pixelSize+"px 0 0 0,\n                      0 "+-1.5*this.pixelSize+"px 0 0\n                    "}}},watch:{$props:{handler:function(){this.updateAnimation()},deep:!0}},mounted:function(){this.updateAnimation()},methods:{updateAnimation:function(){this.updateAnimationName(),n.a.appendKeyframes(this.currentAnimationName,this.generateKeyframes())},updateAnimationName:function(){this.currentAnimationName=this.animationBaseName+"-"+Date.now()},generateKeyframes:function(){return"\n      50% {\n        box-shadow:  "+2*this.pixelSize+"px "+2*this.pixelSize+"px 0 0,\n                     "+-2*this.pixelSize+"px "+-2*this.pixelSize+"px 0 0,\n                     "+2*this.pixelSize+"px "+-2*this.pixelSize+"px 0 0,\n                     "+-2*this.pixelSize+"px "+2*this.pixelSize+"px 0 0,\n                     0 "+this.pixelSize+"px 0 0,\n                     "+this.pixelSize+"px 0 0 0,\n                     "+-1*this.pixelSize+"px 0 0 0,\n                     0 "+-1*this.pixelSize+"px 0 0;\n      }\n\n\n      75% {\n        box-shadow:  "+2*this.pixelSize+"px "+2*this.pixelSize+"px 0 0,\n                     "+-2*this.pixelSize+"px "+-2*this.pixelSize+"px 0 0,\n                     "+2*this.pixelSize+"px "+-2*this.pixelSize+"px 0 0,\n                     "+-2*this.pixelSize+"px "+2*this.pixelSize+"px 0 0,\n                     0 "+this.pixelSize+"px 0 0,\n                     "+this.pixelSize+"px 0 0 0,\n                     "+-1*this.pixelSize+"px 0 0 0,\n                     0 "+-1*this.pixelSize+"px 0 0;\n      }\n\n      100% {\n        transform: rotate(360deg);\n      }"}}},s={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"pixel-spinner",style:this.spinnerStyle},[i("div",{staticClass:"pixel-spinner-inner",style:this.spinnerInnerStyle})])},staticRenderFns:[]};e("VU/8")(r,s,!1,function(t){e("W5Az")},"data-v-eeed2fb8",null).exports},zj2Q:function(t,i){},zwmd:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.b220dddc9bd990cae938.js.map