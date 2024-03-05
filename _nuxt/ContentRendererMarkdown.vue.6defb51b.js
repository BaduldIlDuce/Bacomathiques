import{d as z,Q as J,a7 as G,C as x,a4 as E,a2 as Q,a8 as w,D as nn,a9 as ln,o as en,A as on,u as tn}from"./entry.adf4248a.js";import{p as I,k as rn}from"./index.b0fe9fac.js";import{a as an}from"./preview.8945f1e8.js";class S{constructor(l,o,t){this.property=l,this.normal=o,t&&(this.space=t)}}S.prototype.property={};S.prototype.normal={};S.prototype.space=null;function j(n,l){const o={},t={};let r=-1;for(;++r<n.length;)Object.assign(o,n[r].property),Object.assign(t,n[r].normal);return new S(o,t,l)}function D(n){return n.toLowerCase()}class f{constructor(l,o){this.property=l,this.attribute=o}}f.prototype.space=null;f.prototype.boolean=!1;f.prototype.booleanish=!1;f.prototype.overloadedBoolean=!1;f.prototype.number=!1;f.prototype.commaSeparated=!1;f.prototype.spaceSeparated=!1;f.prototype.commaOrSpaceSeparated=!1;f.prototype.mustUseProperty=!1;f.prototype.defined=!1;let un=0;const u=v(),g=v(),_=v(),e=v(),p=v(),k=v(),m=v();function v(){return 2**++un}const L=Object.freeze(Object.defineProperty({__proto__:null,boolean:u,booleanish:g,commaOrSpaceSeparated:m,commaSeparated:k,number:e,overloadedBoolean:_,spaceSeparated:p},Symbol.toStringTag,{value:"Module"})),O=Object.keys(L);class R extends f{constructor(l,o,t,r){let a=-1;if(super(l,o),B(this,"space",r),typeof t=="number")for(;++a<O.length;){const i=O[a];B(this,O[a],(t&L[i])===L[i])}}}R.prototype.defined=!0;function B(n,l,o){o&&(n[l]=o)}const sn={}.hasOwnProperty;function C(n){const l={},o={};let t;for(t in n.properties)if(sn.call(n.properties,t)){const r=n.properties[t],a=new R(t,n.transform(n.attributes||{},t),r,n.space);n.mustUseProperty&&n.mustUseProperty.includes(t)&&(a.mustUseProperty=!0),l[t]=a,o[D(t)]=t,o[D(a.attribute)]=t}return new S(l,o,n.space)}const F=C({space:"xlink",transform(n,l){return"xlink:"+l.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),H=C({space:"xml",transform(n,l){return"xml:"+l.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function V(n,l){return l in n?n[l]:l}function N(n,l){return V(n,l.toLowerCase())}const q=C({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:N,properties:{xmlns:null,xmlnsXLink:null}}),W=C({transform(n,l){return l==="role"?l:"aria-"+l.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:g,ariaAutoComplete:null,ariaBusy:g,ariaChecked:g,ariaColCount:e,ariaColIndex:e,ariaColSpan:e,ariaControls:p,ariaCurrent:null,ariaDescribedBy:p,ariaDetails:null,ariaDisabled:g,ariaDropEffect:p,ariaErrorMessage:null,ariaExpanded:g,ariaFlowTo:p,ariaGrabbed:g,ariaHasPopup:null,ariaHidden:g,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:p,ariaLevel:e,ariaLive:null,ariaModal:g,ariaMultiLine:g,ariaMultiSelectable:g,ariaOrientation:null,ariaOwns:p,ariaPlaceholder:null,ariaPosInSet:e,ariaPressed:g,ariaReadOnly:g,ariaRelevant:null,ariaRequired:g,ariaRoleDescription:p,ariaRowCount:e,ariaRowIndex:e,ariaRowSpan:e,ariaSelected:g,ariaSetSize:e,ariaSort:null,ariaValueMax:e,ariaValueMin:e,ariaValueNow:e,ariaValueText:null,role:null}}),cn=C({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:N,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:k,acceptCharset:p,accessKey:p,action:null,allow:null,allowFullScreen:u,allowPaymentRequest:u,allowUserMedia:u,alt:null,as:null,async:u,autoCapitalize:null,autoComplete:p,autoFocus:u,autoPlay:u,blocking:p,capture:u,charSet:null,checked:u,cite:null,className:p,cols:e,colSpan:null,content:null,contentEditable:g,controls:u,controlsList:p,coords:e|k,crossOrigin:null,data:null,dateTime:null,decoding:null,default:u,defer:u,dir:null,dirName:null,disabled:u,download:_,draggable:g,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:u,formTarget:null,headers:p,height:e,hidden:u,high:e,href:null,hrefLang:null,htmlFor:p,httpEquiv:p,id:null,imageSizes:null,imageSrcSet:null,inert:u,inputMode:null,integrity:null,is:null,isMap:u,itemId:null,itemProp:p,itemRef:p,itemScope:u,itemType:p,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:u,low:e,manifest:null,max:null,maxLength:e,media:null,method:null,min:null,minLength:e,multiple:u,muted:u,name:null,nonce:null,noModule:u,noValidate:u,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:u,optimum:e,pattern:null,ping:p,placeholder:null,playsInline:u,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:u,referrerPolicy:null,rel:p,required:u,reversed:u,rows:e,rowSpan:e,sandbox:p,scope:null,scoped:u,seamless:u,selected:u,shadowRootDelegatesFocus:u,shadowRootMode:null,shape:null,size:e,sizes:null,slot:null,span:e,spellCheck:g,src:null,srcDoc:null,srcLang:null,srcSet:null,start:e,step:null,style:null,tabIndex:e,target:null,title:null,translate:null,type:null,typeMustMatch:u,useMap:null,value:g,width:e,wrap:null,align:null,aLink:null,archive:p,axis:null,background:null,bgColor:null,border:e,borderColor:null,bottomMargin:e,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:u,declare:u,event:null,face:null,frame:null,frameBorder:null,hSpace:e,leftMargin:e,link:null,longDesc:null,lowSrc:null,marginHeight:e,marginWidth:e,noResize:u,noHref:u,noShade:u,noWrap:u,object:null,profile:null,prompt:null,rev:null,rightMargin:e,rules:null,scheme:null,scrolling:g,standby:null,summary:null,text:null,topMargin:e,valueType:null,version:null,vAlign:null,vLink:null,vSpace:e,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:u,disableRemotePlayback:u,prefix:null,property:null,results:e,security:null,unselectable:null}}),pn=C({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:V,properties:{about:m,accentHeight:e,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:e,amplitude:e,arabicForm:null,ascent:e,attributeName:null,attributeType:null,azimuth:e,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:e,by:null,calcMode:null,capHeight:e,className:p,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:e,diffuseConstant:e,direction:null,display:null,dur:null,divisor:e,dominantBaseline:null,download:u,dx:null,dy:null,edgeMode:null,editable:null,elevation:e,enableBackground:null,end:null,event:null,exponent:e,externalResourcesRequired:null,fill:null,fillOpacity:e,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:k,g2:k,glyphName:k,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:e,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:e,horizOriginX:e,horizOriginY:e,id:null,ideographic:e,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:e,k:e,k1:e,k2:e,k3:e,k4:e,kernelMatrix:m,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:e,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:e,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:e,overlineThickness:e,paintOrder:null,panose1:null,path:null,pathLength:e,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:p,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:e,pointsAtY:e,pointsAtZ:e,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:m,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:m,rev:m,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:m,requiredFeatures:m,requiredFonts:m,requiredFormats:m,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:e,specularExponent:e,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:e,strikethroughThickness:e,string:null,stroke:null,strokeDashArray:m,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:e,strokeOpacity:e,strokeWidth:null,style:null,surfaceScale:e,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:m,tabIndex:e,tableValues:null,target:null,targetX:e,targetY:e,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:m,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:e,underlineThickness:e,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:e,values:null,vAlphabetic:e,vMathematical:e,vectorEffect:null,vHanging:e,vIdeographic:e,version:null,vertAdvY:e,vertOriginX:e,vertOriginY:e,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:e,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),dn=/^data[-\w.:]+$/i,U=/-[a-z]/g,gn=/[A-Z]/g;function hn(n,l){const o=D(l);let t=l,r=f;if(o in n.normal)return n.property[n.normal[o]];if(o.length>4&&o.slice(0,4)==="data"&&dn.test(l)){if(l.charAt(4)==="-"){const a=l.slice(5).replace(U,fn);t="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=l.slice(4);if(!U.test(a)){let i=a.replace(gn,mn);i.charAt(0)!=="-"&&(i="-"+i),l="data"+i}}r=R}return new r(t,l)}function mn(n){return"-"+n.toLowerCase()}function fn(n){return n.charAt(1).toUpperCase()}const yn=j([H,F,q,W,cn],"html");j([H,F,q,W,pn],"svg");const T=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],M="default",K=/^@|^v-on:/,X=/^:|^v-bind:/,Y=/^v-model/,vn=["select","textarea","input"],bn=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(n=>[n,`prose-${n}`])),kn=z({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})}},async setup(n){var r,a;const{mdc:l}=J().public,o={...l.components.prose&&n.prose!==!1?bn:{},...l.components.map,...G(((a=(r=n.data)==null?void 0:r.mdc)==null?void 0:a.components)||{}),...n.components},t=x(()=>{var s;const i=(((s=n.body)==null?void 0:s.children)||[]).map(c=>c.tag||c.type).filter(c=>!T.includes(c));return Array.from(new Set(i)).sort().join(".")});return await Tn(n.body,{tags:o}),{tags:o,contentKey:t}},render(n){var h,y,d;const{tags:l,tag:o,body:t,data:r,contentKey:a}=n;if(!t)return null;const i={...r,tags:l},s=o!==!1?A(o||((h=i.component)==null?void 0:h.name)||i.component||"div"):void 0,c=$(t,E,i,i);return s?E(s,{...(y=i.component)==null?void 0:y.props,...this.$attrs,key:a},c):(d=c.default)==null?void 0:d.call(c)}});function Cn(n,l,o,t={}){if(n.type==="text")return l(w,n.value);const r=n.tag,a=Z(n,o.tags);if(n.tag==="binding")return Sn(n,l,o,t);const i=A(a);typeof i=="object"&&(i.tag=r);const s=xn(n,o);return l(i,s,$(n,l,o,{...t,...s}))}function Sn(n,l,o,t={}){var h,y;const r={...t,$route:()=>nn(),$document:o,$doc:o},a=/\.|\[(\d+)\]/,s=((h=n.props)==null?void 0:h.value.trim().split(a).filter(Boolean)).reduce((d,b)=>b in d?typeof d[b]=="function"?d[b]():d[b]:{},r),c=(y=n.props)==null?void 0:y.defaultValue;return l(w,s??c??"")}function $(n,l,o,t){const a=(n.children||[]).reduce((s,c)=>{if(!Mn(c))return s[M].push(c),s;const h=Ln(c);return s[h]=s[h]||[],c.type==="element"&&s[h].push(...c.children||[]),s},{[M]:[]});return Object.entries(a).reduce((s,[c,h])=>(h.length&&(s[c]=()=>{const y=h.map(d=>Cn(d,l,o,t));return Rn(y)}),s),{})}function xn(n,l){const{tag:o="",props:t={}}=n;return Object.keys(t).reduce(function(r,a){if(a==="__ignoreMap")return r;const i=t[a];if(Y.test(a)&&!vn.includes(o))return wn(a,i,r,l);if(a==="v-bind")return Pn(a,i,r,l);if(K.test(a))return On(a,i,r,l);if(X.test(a))return Dn(a,i,r,l);const{attribute:s}=hn(yn,a);return Array.isArray(i)&&i.every(c=>typeof c=="string")?(r[s]=i.join(" "),r):(r[s]=i,r)},{})}function wn(n,l,o,t){const r=d=>+d,a=d=>d.trim(),i=d=>d,s=n.replace(Y,"").split(".").filter(d=>d).reduce((d,b)=>(d[b]=!0,d),{}),c="value",h=s.lazy?"change":"input",y=s.number?r:s.trim?a:i;return o[c]=P(l,t),o.on=o.on||{},o.on[h]=d=>t[l]=y(d),o}function Pn(n,l,o,t){const r=P(l,t);return o=Object.assign(o,r),o}function On(n,l,o,t){return n=n.replace(K,""),o.on=o.on||{},o.on[n]=()=>P(l,t),o}function Dn(n,l,o,t){return n=n.replace(X,""),o[n]=P(l,t),o}const A=n=>{if(!T.includes(n)&&!(n!=null&&n.render)){const l=Q(I(n),!1);if(typeof l=="object")return l}return n};function P(n,l){const o=n.split(".").reduce((t,r)=>typeof t=="object"?t[r]:void 0,l);return typeof o>"u"?ln(n):o}function Ln(n){let l="";for(const o of Object.keys(n.props||{}))if(!(!o.startsWith("#")&&!o.startsWith("v-slot:"))){l=o.split(/[:#]/,2)[1];break}return l||M}function Mn(n){return n.tag==="template"}function Rn(n){const l=[];for(const o of n){const t=l[l.length-1];o.type===w&&(t==null?void 0:t.type)===w?t.children=t.children+o.children:l.push(o)}return l}async function Tn(n,l){if(!n)return;const o=Array.from(new Set(t(n,l)));await Promise.all(o.map(async r=>{if(r!=null&&r.render||r!=null&&r.ssrRender||r!=null&&r.__ssrInlineRender)return;const a=A(r);a!=null&&a.__asyncLoader&&!a.__asyncResolved&&await a.__asyncLoader()}));function t(r,a){const i=r.tag;if(r.type==="text"||i==="binding")return[];const s=Z(r,a.tags),c=[];r.type!=="root"&&!T.includes(s)&&c.push(s);for(const h of r.children||[])c.push(...t(h,a));return c}}function Z(n,l){var t;const o=n.tag;return!o||typeof((t=n.props)==null?void 0:t.__ignoreMap)<"u"?o:l[o]||l[I(o)]||l[rn(n.tag)]||o}const Un=z({__name:"ContentRendererMarkdown",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})}},setup(n){const l=n,o=an().isEnabled(),t=x(()=>{let i=l.value.body||l.value;return l.excerpt&&l.value.excerpt&&(i=l.value.excerpt),i}),r=x(()=>{const{body:i,excerpt:s,...c}=l.value;return{...c,...l.data}}),a=x(()=>({...l.components,...r.value._components||{}}));return(i,s)=>{const c=kn;return en(),on(c,{body:t.value,data:r.value,tag:n.tag,components:a.value,"data-content-id":tn(o)?n.value._id:void 0},null,8,["body","data","tag","components","data-content-id"])}}});export{Un as _};
