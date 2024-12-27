var MediaChrome=(()=>{var gr=Object.defineProperty;var za=Object.getOwnPropertyDescriptor;var Xa=Object.getOwnPropertyNames;var Za=Object.prototype.hasOwnProperty;var fr=(i,t)=>{for(var e in t)gr(i,e,{get:t[e],enumerable:!0})},Ja=(i,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Xa(t))!Za.call(i,n)&&n!==e&&gr(i,n,{get:()=>t[n],enumerable:!(r=za(t,n))||r.enumerable});return i};var es=i=>Ja(gr({},"__esModule",{value:!0}),i);var vr=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var s=(i,t,e)=>(vr(i,t,"read from private field"),e?e.call(i):t.get(i)),u=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},p=(i,t,e,r)=>(vr(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e);var _n=(i,t,e,r)=>({set _(n){p(i,t,n,e)},get _(){return s(i,t,r)}}),f=(i,t,e)=>(vr(i,t,"access private method"),e);var Ll={};fr(Ll,{MediaAirplayButton:()=>Io,MediaCaptionsButton:()=>Lo,MediaCastButton:()=>Co,MediaChromeButton:()=>fo,MediaChromeDialog:()=>No,MediaChromeRange:()=>Ko,MediaControlBar:()=>Wo,MediaController:()=>Eo,MediaDurationDisplay:()=>Yo,MediaErrorDialog:()=>zo,MediaFullscreenButton:()=>Jo,MediaGestureReceiver:()=>Kn,MediaLiveButton:()=>ia,MediaLoadingIndicator:()=>aa,MediaMuteButton:()=>ma,MediaPipButton:()=>ha,MediaPlayButton:()=>va,MediaPlaybackRateButton:()=>ba,MediaPosterImage:()=>Ta,MediaPreviewChapterDisplay:()=>Ia,MediaPreviewThumbnail:()=>Ma,MediaPreviewTimeDisplay:()=>ya,MediaSeekBackwardButton:()=>La,MediaSeekForwardButton:()=>ka,MediaTimeDisplay:()=>wa,MediaTimeRange:()=>Fa,MediaTooltip:()=>$a,MediaVolumeRange:()=>Va,constants:()=>si,labels:()=>Rn,timeUtils:()=>di});var si={};fr(si,{AttributeToStateChangeEventMap:()=>Ar,AvailabilityStates:()=>Y,MediaStateChangeEvents:()=>ge,MediaStateReceiverAttributes:()=>S,MediaUIAttributes:()=>a,MediaUIEvents:()=>E,MediaUIProps:()=>oi,PointerTypes:()=>ai,ReadyStates:()=>rs,StateChangeEventToAttributeMap:()=>is,StreamTypes:()=>z,TextTrackKinds:()=>W,TextTrackModes:()=>pe,VolumeLevels:()=>ns,WebkitPresentationModes:()=>Tr});var E={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},S={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},oi={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_WIDTH:"mediaWidth"},Ln=Object.entries(oi),a=Ln.reduce((i,[t,e])=>(i[t]=e.toLowerCase(),i),{}),ts={USER_INACTIVE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},ge=Ln.reduce((i,[t,e])=>(i[t]=e.toLowerCase(),i),{...ts}),is=Object.entries(ge).reduce((i,[t,e])=>{let r=a[t];return r&&(i[e]=r),i},{userinactivechange:"userinactive"}),Ar=Object.entries(a).reduce((i,[t,e])=>{let r=ge[t];return r&&(i[e]=r),i},{userinactive:"userinactivechange"}),W={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},pe={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},rs={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},ai={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},Y={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},z={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},ns={HIGH:"high",MEDIUM:"medium",LOW:"low",OFF:"off"},Tr={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};var os={2:"Network Error",3:"Decode Error",4:"Source Not Supported",5:"Encryption Error"},as={2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."},Ir=i=>{var t,e;return i.code===1?null:{title:(t=os[i.code])!=null?t:`Error ${i.code}`,message:(e=as[i.code])!=null?e:i.message}},U={ENTER_AIRPLAY:"Start airplay",EXIT_AIRPLAY:"Stop airplay",AUDIO_TRACK_MENU:"Audio",CAPTIONS:"Captions",ENABLE_CAPTIONS:"Enable captions",DISABLE_CAPTIONS:"Disable captions",START_CAST:"Start casting",STOP_CAST:"Stop casting",ENTER_FULLSCREEN:"Enter fullscreen mode",EXIT_FULLSCREEN:"Exit fullscreen mode",MUTE:"Mute",UNMUTE:"Unmute",ENTER_PIP:"Enter picture in picture mode",EXIT_PIP:"Enter picture in picture mode",PLAY:"Play",PAUSE:"Pause",PLAYBACK_RATE:"Playback rate",RENDITIONS:"Quality",SEEK_BACKWARD:"Seek backward",SEEK_FORWARD:"Seek forward",SETTINGS:"Settings"},G={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:i=1}={})=>`current playback rate ${i}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading",SETTINGS:()=>"settings",AUDIO_TRACKS:()=>"audio tracks",QUALITY:()=>"quality"},N={PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",ENTER_AIRPLAY:()=>"start airplay",EXIT_AIRPLAY:()=>"stop airplay",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:i=30}={})=>`seek forward ${i} seconds`,SEEK_BACK_N_SECS:({seekOffset:i=30}={})=>`seek back ${i} seconds`,SEEK_LIVE:()=>"seek to live",PLAYING_LIVE:()=>"playing live"},Rn={...G,...N};var di={};fr(di,{emptyTimeRanges:()=>Dn,formatAsTimePhrase:()=>fe,formatTime:()=>J,serializeTimeRanges:()=>ms});function kn(i){return i==null?void 0:i.map(ss).join(" ")}function ss(i){if(i){let{id:t,width:e,height:r}=i;return[t,e,r].filter(n=>n!=null).join(":")}}function Cn(i){return i==null?void 0:i.map(ls).join(" ")}function ls(i){if(i){let{id:t,kind:e,language:r,label:n}=i;return[t,e,r,n].filter(o=>o!=null).join(":")}}function je(i){return typeof i=="number"&&!Number.isNaN(i)&&Number.isFinite(i)}var li=i=>new Promise(t=>setTimeout(t,i));var xn=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],ds=(i,t)=>{let e=i===1?xn[t].singular:xn[t].plural;return`${i} ${e}`},fe=i=>{if(!je(i))return"";let t=Math.abs(i),e=t!==i,r=new Date(0,0,0,0,0,t,0);return`${[r.getHours(),r.getMinutes(),r.getSeconds()].map((m,c)=>m&&ds(m,c)).filter(m=>m).join(", ")}${e?" remaining":""}`};function J(i,t){let e=!1;i<0&&(e=!0,i=0-i),i=i<0?0:i;let r=Math.floor(i%60),n=Math.floor(i/60%60),o=Math.floor(i/3600),l=Math.floor(t/60%60),m=Math.floor(t/3600);return(isNaN(i)||i===1/0)&&(o=n=r="0"),o=o>0||m>0?o+":":"",n=((o||l>=10)&&n<10?"0"+n:n)+":",r=r<10?"0"+r:r,(e?"-":"")+o+n+r}var Dn=Object.freeze({length:0,start(i){let t=i>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(i){let t=i>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});function ms(i=Dn){return Array.from(i).map((t,e)=>[Number(i.start(e).toFixed(3)),Number(i.end(e).toFixed(3))].join(":")).join(" ")}var mi=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},ci=class extends mi{},ui=class extends ci{constructor(){super(...arguments);this.role=null}},Sr=class{observe(){}unobserve(){}disconnect(){}},wn={createElement:function(){return new bt.HTMLElement},createElementNS:function(){return new bt.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(i){return!1}},bt={ResizeObserver:Sr,document:wn,Node:ci,Element:ui,HTMLElement:class extends ui{constructor(){super(...arguments);this.innerHTML=""}get content(){return new bt.DocumentFragment}},DocumentFragment:class extends mi{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(i){return null},setItem(i,t){},removeItem(i){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(i){return{matches:!1,media:i}}},Pn=typeof window=="undefined"||typeof window.customElements=="undefined",Un=Object.keys(bt).every(i=>i in globalThis),d=Pn&&!Un?bt:globalThis,b=Pn&&!Un?wn:globalThis.document;var Nn=new WeakMap,Mr=i=>{let t=Nn.get(i);return t||Nn.set(i,t=new Set),t},On=new d.ResizeObserver(i=>{for(let t of i)for(let e of Mr(t.target))e(t)});function pi(i,t){Mr(i).add(t),On.observe(i)}function Hn(i,t){let e=Mr(i);e.delete(t),e.size||On.unobserve(i)}function Fn(i){let t={};for(let e of i)t[e.name]=e.value;return t}function Bn(i){var t;return(t=cs(i))!=null?t:ve(i,"media-controller")}function cs(i){var r;let{MEDIA_CONTROLLER:t}=S,e=i.getAttribute(t);if(e)return(r=ps(i))==null?void 0:r.getElementById(e)}var hi=(i,t,e=".value")=>{let r=i.querySelector(e);r&&(r.textContent=t)},us=(i,t)=>{let e=`slot[name="${t}"]`,r=i.shadowRoot.querySelector(e);return r?r.children:[]},Ei=(i,t)=>us(i,t)[0],de=(i,t)=>!i||!t?!1:i!=null&&i.contains(t)?!0:de(i,t.getRootNode().host),ve=(i,t)=>{if(!i)return null;let e=i.closest(t);return e||ve(i.getRootNode().host,t)};function _r(i=document){var e;let t=i==null?void 0:i.activeElement;return t?(e=_r(t.shadowRoot))!=null?e:t:null}function ps(i){var e;let t=(e=i==null?void 0:i.getRootNode)==null?void 0:e.call(i);return t instanceof ShadowRoot||t instanceof Document?t:null}function bi(i,{depth:t=3,checkOpacity:e=!0,checkVisibilityCSS:r=!0}={}){if(i.checkVisibility)return i.checkVisibility({checkOpacity:e,checkVisibilityCSS:r});let n=i;for(;n&&t>0;){let o=getComputedStyle(n);if(e&&o.opacity==="0"||r&&o.visibility==="hidden"||o.display==="none")return!1;n=n.parentElement,t--}return!0}function $n(i,t,e,r){let n=yr(e,r),o=yr(e,{x:i,y:t}),l=yr(r,{x:i,y:t});return o>n||l>n?o>l?1:0:o/n}function yr(i,t){return Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2))}function O(i,t){let e=hs(i,r=>r===t);return e||Es(i,t)}function hs(i,t){var r,n;let e;for(e of(r=i.querySelectorAll("style:not([media])"))!=null?r:[]){let o;try{o=(n=e.sheet)==null?void 0:n.cssRules}catch{continue}for(let l of o!=null?o:[])if(t(l.selectorText))return l}}function Es(i,t){var n,o;let e=(n=i.querySelectorAll("style:not([media])"))!=null?n:[],r=e==null?void 0:e[e.length-1];return r!=null&&r.sheet?(r==null||r.sheet.insertRule(`${t}{}`,r.sheet.cssRules.length),(o=r.sheet.cssRules)==null?void 0:o[r.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",i),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function D(i,t,e=Number.NaN){let r=i.getAttribute(t);return r!=null?+r:e}function H(i,t,e){let r=+e;if(e==null||Number.isNaN(r)){i.hasAttribute(t)&&i.removeAttribute(t);return}D(i,t,void 0)!==r&&i.setAttribute(t,`${r}`)}function k(i,t){return i.hasAttribute(t)}function _(i,t,e){if(e==null){i.hasAttribute(t)&&i.removeAttribute(t);return}k(i,t)!=e&&i.toggleAttribute(t,e)}function w(i,t,e=null){var r;return(r=i.getAttribute(t))!=null?r:e}function x(i,t,e){if(e==null){i.hasAttribute(t)&&i.removeAttribute(t);return}let r=`${e}`;w(i,t,void 0)!==r&&i.setAttribute(t,r)}var Vn=b.createElement("template");Vn.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;var q,gi=class extends d.HTMLElement{constructor(e={}){super();u(this,q,void 0);if(!this.shadowRoot){let r=this.attachShadow({mode:"open"}),n=Vn.content.cloneNode(!0);this.nativeEl=n;let o=e.slotTemplate;o||(o=b.createElement("template"),o.innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(o.content.cloneNode(!0)),r.appendChild(n)}}static get observedAttributes(){return[S.MEDIA_CONTROLLER,a.MEDIA_PAUSED]}attributeChangedCallback(e,r,n){var o,l,m,c,h;e===S.MEDIA_CONTROLLER&&(r&&((l=(o=s(this,q))==null?void 0:o.unassociateElement)==null||l.call(o,this),p(this,q,null)),n&&this.isConnected&&(p(this,q,(m=this.getRootNode())==null?void 0:m.getElementById(n)),(h=(c=s(this,q))==null?void 0:c.associateElement)==null||h.call(c,this)))}connectedCallback(){var e,r,n,o;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),p(this,q,bs(this)),this.getAttribute(S.MEDIA_CONTROLLER)&&((r=(e=s(this,q))==null?void 0:e.associateElement)==null||r.call(e,this)),(n=s(this,q))==null||n.addEventListener("pointerdown",this),(o=s(this,q))==null||o.addEventListener("click",this)}disconnectedCallback(){var e,r,n,o;this.getAttribute(S.MEDIA_CONTROLLER)&&((r=(e=s(this,q))==null?void 0:e.unassociateElement)==null||r.call(e,this)),(n=s(this,q))==null||n.removeEventListener("pointerdown",this),(o=s(this,q))==null||o.removeEventListener("click",this),p(this,q,null)}handleEvent(e){var o;let r=(o=e.composedPath())==null?void 0:o[0];if(["video","media-controller"].includes(r==null?void 0:r.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){let{clientX:l,clientY:m}=e,{left:c,top:h,width:A,height:T}=this.getBoundingClientRect(),v=l-c,g=m-h;if(v<0||g<0||v>A||g>T||A===0&&T===0)return;let{pointerType:L=this._pointerType}=e;if(this._pointerType=void 0,L===ai.TOUCH){this.handleTap(e);return}else if(L===ai.MOUSE){this.handleMouseClick(e);return}}}}get mediaPaused(){return k(this,a.MEDIA_PAUSED)}set mediaPaused(e){_(this,a.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let r=this.mediaPaused?E.MEDIA_PLAY_REQUEST:E.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new d.CustomEvent(r,{composed:!0,bubbles:!0}))}};q=new WeakMap;function bs(i){var e;let t=i.getAttribute(S.MEDIA_CONTROLLER);return t?(e=i.getRootNode())==null?void 0:e.getElementById(t):ve(i,"media-controller")}d.customElements.get("media-gesture-receiver")||d.customElements.define("media-gesture-receiver",gi);var Kn=gi;var C={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive"},Gn=b.createElement("template");Gn.innerHTML=`
  <style>
    
    :host([${a.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${C.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    
    :host([${C.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    
    :host([${C.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${C.AUDIO}])[${C.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${C.AUDIO}])[${C.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
      pointer-events: auto;
    }

    :host(:not([${C.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${C.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${C.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${C.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not([${C.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    
    :host([${C.USER_INACTIVE}]:not([${a.MEDIA_PAUSED}]):not([${a.MEDIA_IS_AIRPLAYING}]):not([${a.MEDIA_IS_CASTING}]):not([${C.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${C.NO_AUTOHIDE}]):not([role=dialog])) {
      opacity: 0;
      transition: opacity 1s;
    }

    :host([${C.USER_INACTIVE}]:not([${a.MEDIA_PAUSED}]):not([${a.MEDIA_IS_CASTING}]):not([${C.AUDIO}])) ::slotted([slot=media]) {
      cursor: none;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    
    :host(:not([${C.AUDIO}])[${a.MEDIA_HAS_PLAYED}]) slot[name=poster] {
      display: none;
    }

    ::slotted([role=dialog]) {
      width: 100%;
      height: 100%;
      align-self: center;
    }

    ::slotted([role=menu]) {
      align-self: end;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
  <slot name="dialog" part="layer dialog-layer"></slot>
`;var gs=Object.values(a),fs="sm:384 md:576 lg:768 xl:960";function vs(i){As(i.target,i.contentRect.width)}function As(i,t){var l;if(!i.isConnected)return;let e=(l=i.getAttribute(C.BREAKPOINTS))!=null?l:fs,r=Ts(e),n=Is(r,t),o=!1;if(Object.keys(r).forEach(m=>{if(n.includes(m)){i.hasAttribute(`breakpoint${m}`)||(i.setAttribute(`breakpoint${m}`,""),o=!0);return}i.hasAttribute(`breakpoint${m}`)&&(i.removeAttribute(`breakpoint${m}`),o=!0)}),o){let m=new CustomEvent(ge.BREAKPOINTS_CHANGE,{detail:n});i.dispatchEvent(m)}}function Ts(i){let t=i.split(/\s+/);return Object.fromEntries(t.map(e=>e.split(":")))}function Is(i,t){return Object.keys(i).filter(e=>t>=parseInt(i[e]))}var vt,Le,ze,Re,vi,Wn,Ai,qn,Xe,fi,At,Lr,ke,gt,ft=class extends d.HTMLElement{constructor(){super();u(this,vi);u(this,Ai);u(this,Xe);u(this,At);u(this,ke);u(this,vt,0);u(this,Le,null);u(this,ze,null);u(this,Re,void 0);this.breakpointsComputed=!1;this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Gn.content.cloneNode(!0)));let e=m=>{let c=this.media;for(let h of m)h.type==="childList"&&(h.removedNodes.forEach(A=>{if(A.slot=="media"&&h.target==this){let T=h.previousSibling&&h.previousSibling.previousElementSibling;if(!T||!c)this.mediaUnsetCallback(A);else{let v=T.slot!=="media";for(;(T=T.previousSibling)!==null;)T.slot=="media"&&(v=!1);v&&this.mediaUnsetCallback(A)}}}),c&&h.addedNodes.forEach(A=>{A===c&&this.handleMediaUpdated(c)}))};new MutationObserver(e).observe(this,{childList:!0,subtree:!0});let n=!1;pi(this,m=>{n||(setTimeout(()=>{vs(m),n=!1,this.breakpointsComputed||(this.breakpointsComputed=!0,this.dispatchEvent(new CustomEvent(ge.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))},0),n=!0)});let l=this.querySelector(":scope > slot[slot=media]");l&&l.addEventListener("slotchange",()=>{if(!l.assignedElements({flatten:!0}).length){s(this,Le)&&this.mediaUnsetCallback(s(this,Le));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[C.AUTOHIDE,C.GESTURES_DISABLED].concat(gs).filter(e=>![a.MEDIA_RENDITION_LIST,a.MEDIA_AUDIO_TRACK_LIST,a.MEDIA_CHAPTERS_CUES,a.MEDIA_WIDTH,a.MEDIA_HEIGHT,a.MEDIA_ERROR,a.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,r,n){e.toLowerCase()==C.AUTOHIDE&&(this.autohide=n)}get media(){let e=this.querySelector(":scope > [slot=media]");return(e==null?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(p(this,Le,e),e.localName.includes("-")&&await d.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var n;let r=this.getAttribute(C.AUDIO)!=null?G.AUDIO_PLAYER():G.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",r),this.handleMediaUpdated(this.media),this.setAttribute(C.USER_INACTIVE,""),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(n=d.window)==null||n.addEventListener("mouseup",this)}disconnectedCallback(){var e;this.media&&this.mediaUnsetCallback(this.media),(e=d.window)==null||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){p(this,Le,null)}handleEvent(e){switch(e.type){case"pointerdown":p(this,vt,e.timeStamp);break;case"pointermove":f(this,vi,Wn).call(this,e);break;case"pointerup":f(this,Ai,qn).call(this,e);break;case"mouseleave":f(this,Xe,fi).call(this);break;case"mouseup":this.removeAttribute(C.KEYBOARD_CONTROL);break;case"keyup":f(this,ke,gt).call(this),this.setAttribute(C.KEYBOARD_CONTROL,"");break}}set autohide(e){let r=Number(e);p(this,Re,isNaN(r)?0:r)}get autohide(){return(s(this,Re)===void 0?2:s(this,Re)).toString()}};vt=new WeakMap,Le=new WeakMap,ze=new WeakMap,Re=new WeakMap,vi=new WeakSet,Wn=function(e){e.pointerType!=="mouse"&&e.timeStamp-s(this,vt)<250||(f(this,At,Lr).call(this),clearTimeout(s(this,ze)),[this,this.media].includes(e.target)&&f(this,ke,gt).call(this))},Ai=new WeakSet,qn=function(e){if(e.pointerType==="touch"){let r=!this.hasAttribute(C.USER_INACTIVE);[this,this.media].includes(e.target)&&r?f(this,Xe,fi).call(this):f(this,ke,gt).call(this)}else e.composedPath().some(r=>["media-play-button","media-fullscreen-button"].includes(r==null?void 0:r.localName))&&f(this,ke,gt).call(this)},Xe=new WeakSet,fi=function(){if(s(this,Re)<0||this.hasAttribute(C.USER_INACTIVE))return;this.setAttribute(C.USER_INACTIVE,"");let e=new d.CustomEvent(ge.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},At=new WeakSet,Lr=function(){if(!this.hasAttribute(C.USER_INACTIVE))return;this.removeAttribute(C.USER_INACTIVE);let e=new d.CustomEvent(ge.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},ke=new WeakSet,gt=function(){f(this,At,Lr).call(this),clearTimeout(s(this,ze));let e=parseInt(this.autohide);e<0||p(this,ze,setTimeout(()=>{f(this,Xe,fi).call(this)},e*1e3))};d.customElements.get("media-container")||d.customElements.define("media-container",ft);var Ce,xe,Tt,Te,me,Ae,Ze=class{constructor(t,e,{defaultValue:r}={defaultValue:void 0}){u(this,me);u(this,Ce,void 0);u(this,xe,void 0);u(this,Tt,void 0);u(this,Te,new Set);p(this,Ce,t),p(this,xe,e),p(this,Tt,new Set(r))}[Symbol.iterator](){return s(this,me,Ae).values()}get length(){return s(this,me,Ae).size}get value(){var t;return(t=[...s(this,me,Ae)].join(" "))!=null?t:""}set value(t){var e;t!==this.value&&(p(this,Te,new Set),this.add(...(e=t==null?void 0:t.split(" "))!=null?e:[]))}toString(){return this.value}item(t){return[...s(this,me,Ae)][t]}values(){return s(this,me,Ae).values()}forEach(t,e){s(this,me,Ae).forEach(t,e)}add(...t){var e,r;t.forEach(n=>s(this,Te).add(n)),!(this.value===""&&!((e=s(this,Ce))!=null&&e.hasAttribute(`${s(this,xe)}`)))&&((r=s(this,Ce))==null||r.setAttribute(`${s(this,xe)}`,`${this.value}`))}remove(...t){var e;t.forEach(r=>s(this,Te).delete(r)),(e=s(this,Ce))==null||e.setAttribute(`${s(this,xe)}`,`${this.value}`)}contains(t){return s(this,me,Ae).has(t)}toggle(t,e){return typeof e!="undefined"?e?(this.add(t),!0):(this.remove(t),!1):this.contains(t)?(this.remove(t),!1):(this.add(t),!0)}replace(t,e){return this.remove(t),this.add(e),t===e}};Ce=new WeakMap,xe=new WeakMap,Tt=new WeakMap,Te=new WeakMap,me=new WeakSet,Ae=function(){return s(this,Te).size?s(this,Te):s(this,Tt)};var Ss=(i="")=>i.split(/\s+/),Yn=(i="")=>{let[t,e,r]=i.split(":"),n=r?decodeURIComponent(r):void 0;return{kind:t==="cc"?W.CAPTIONS:W.SUBTITLES,language:e,label:n}},Rr=(i="",t={})=>Ss(i).map(e=>{let r=Yn(e);return{...t,...r}}),kr=i=>i?Array.isArray(i)?i.map(t=>typeof t=="string"?Yn(t):t):typeof i=="string"?Rr(i):[i]:[],Ms=({kind:i,label:t,language:e}={kind:"subtitles"})=>t?`${i==="captions"?"cc":"sb"}:${e}:${encodeURIComponent(t)}`:e,It=(i=[])=>Array.prototype.map.call(i,Ms).join(" "),ys=(i,t)=>e=>e[i]===t,Qn=i=>{let t=Object.entries(i).map(([e,r])=>ys(e,r));return e=>t.every(r=>r(e))},De=(i,t=[],e=[])=>{let r=kr(e).map(Qn),n=o=>r.some(l=>l(o));Array.from(t).filter(n).forEach(o=>{o.mode=i})},we=(i,t=()=>!0)=>{if(!(i!=null&&i.textTracks))return[];let e=typeof t=="function"?t:Qn(t);return Array.from(i.textTracks).filter(e)},jn=i=>{var e;return!!((e=i.mediaSubtitlesShowing)!=null&&e.length)||i.hasAttribute(a.MEDIA_SUBTITLES_SHOWING)};var Xn=i=>{var n;let{media:t,fullscreenElement:e}=i,r=e&&"requestFullscreen"in e?"requestFullscreen":e&&"webkitRequestFullScreen"in e?"webkitRequestFullScreen":void 0;if(r){let o=(n=e[r])==null?void 0:n.call(e);if(o instanceof Promise)return o.catch(()=>{})}else t!=null&&t.webkitEnterFullscreen?t.webkitEnterFullscreen():t!=null&&t.requestFullscreen&&t.requestFullscreen()},zn="exitFullscreen"in b?"exitFullscreen":"webkitExitFullscreen"in b?"webkitExitFullscreen":"webkitCancelFullScreen"in b?"webkitCancelFullScreen":void 0,Zn=i=>{var e;let{documentElement:t}=i;if(zn){let r=(e=t==null?void 0:t[zn])==null?void 0:e.call(t);if(r instanceof Promise)return r.catch(()=>{})}},St="fullscreenElement"in b?"fullscreenElement":"webkitFullscreenElement"in b?"webkitFullscreenElement":void 0,_s=i=>{let{documentElement:t,media:e}=i,r=t==null?void 0:t[St];return!r&&"webkitDisplayingFullscreen"in e&&"webkitPresentationMode"in e&&e.webkitDisplayingFullscreen&&e.webkitPresentationMode===Tr.FULLSCREEN?e:r},Jn=i=>{var o;let{media:t,documentElement:e,fullscreenElement:r=t}=i;if(!t||!e)return!1;let n=_s(i);if(!n)return!1;if(n===r||n===t)return!0;if(n.localName.includes("-")){let l=n.shadowRoot;if(!(St in l))return de(n,r);for(;l!=null&&l[St];){if(l[St]===r)return!0;l=(o=l[St])==null?void 0:o.shadowRoot}}return!1},Ls="fullscreenEnabled"in b?"fullscreenEnabled":"webkitFullscreenEnabled"in b?"webkitFullscreenEnabled":void 0,eo=i=>{let{documentElement:t,media:e}=i;return!!(t!=null&&t[Ls])||e&&"webkitSupportsFullscreen"in e};var Ti,Cr=()=>{var i,t;return Ti||(Ti=(t=(i=b)==null?void 0:i.createElement)==null?void 0:t.call(i,"video"),Ti)},to=async(i=Cr())=>{if(!i)return!1;let t=i.volume;i.volume=t/2+.1;let e=new AbortController,r=await Promise.race([Rs(i,e.signal),ks(i,t)]);return e.abort(),r},Rs=(i,t)=>new Promise(e=>{i.addEventListener("volumechange",()=>e(!0),{signal:t})}),ks=async(i,t)=>{for(let e=0;e<10;e++){if(i.volume===t)return!1;await li(10)}return i.volume!==t},Cs=/.*Version\/.*Safari\/.*/.test(d.navigator.userAgent),xr=(i=Cr())=>d.matchMedia("(display-mode: standalone)").matches&&Cs?!1:typeof(i==null?void 0:i.requestPictureInPicture)=="function",Dr=(i=Cr())=>eo({documentElement:b,media:i}),io=Dr(),ro=xr(),no=!!d.WebKitPlaybackTargetAvailabilityEvent,oo=!!d.chrome;var Je=i=>we(i.media,t=>[W.SUBTITLES,W.CAPTIONS].includes(t.kind)).sort((t,e)=>t.kind>=e.kind?1:-1),wr=i=>we(i.media,t=>t.mode===pe.SHOWING&&[W.SUBTITLES,W.CAPTIONS].includes(t.kind)),Ii=(i,t)=>{let e=Je(i),r=wr(i),n=!!r.length;if(e.length){if(t===!1||n&&t!==!0)De(pe.DISABLED,e,r);else if(t===!0||!n&&t!==!1){let o=e[0],{options:l}=i;if(!(l!=null&&l.noSubtitlesLangPref)){let A=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),T=A?[A,...globalThis.navigator.languages]:globalThis.navigator.languages,v=e.filter(g=>T.some(L=>g.language.toLowerCase().startsWith(L.split("-")[0]))).sort((g,L)=>{let I=T.findIndex(R=>g.language.toLowerCase().startsWith(R.split("-")[0])),y=T.findIndex(R=>L.language.toLowerCase().startsWith(R.split("-")[0]));return I-y});v[0]&&(o=v[0])}let{language:m,label:c,kind:h}=o;De(pe.DISABLED,e,r),De(pe.SHOWING,e,[{language:m,label:c,kind:h}])}}},Si=(i,t)=>i===t?!0:i==null||t==null||typeof i!=typeof t?!1:typeof i=="number"&&Number.isNaN(i)&&Number.isNaN(t)?!0:typeof i!="object"?!1:Array.isArray(i)?xs(i,t):Object.entries(i).every(([e,r])=>e in t&&Si(r,t[e])),xs=(i,t)=>{let e=Array.isArray(i),r=Array.isArray(t);return e!==r?!1:e||r?i.length!==t.length?!1:i.every((n,o)=>Si(n,t[o])):!0};var Ds=Object.values(z),Mi,ws=to().then(i=>(Mi=i,Mi)),ao=async(...i)=>{await Promise.all(i.filter(t=>t).map(async t=>{if(!("localName"in t&&t instanceof d.HTMLElement))return;let e=t.localName;if(!e.includes("-"))return;let r=d.customElements.get(e);r&&t instanceof r||(await d.customElements.whenDefined(e),d.customElements.upgrade(t))}))},Mt={mediaError:{get(i){let{media:t}=i;return t==null?void 0:t.error},mediaEvents:["emptied","error"]},mediaErrorCode:{get(i){var e;let{media:t}=i;return(e=t==null?void 0:t.error)==null?void 0:e.code},mediaEvents:["emptied","error"]},mediaErrorMessage:{get(i){var e,r;let{media:t}=i;return(r=(e=t==null?void 0:t.error)==null?void 0:e.message)!=null?r:""},mediaEvents:["emptied","error"]},mediaWidth:{get(i){var e;let{media:t}=i;return(e=t==null?void 0:t.videoWidth)!=null?e:0},mediaEvents:["resize"]},mediaHeight:{get(i){var e;let{media:t}=i;return(e=t==null?void 0:t.videoHeight)!=null?e:0},mediaEvents:["resize"]},mediaPaused:{get(i){var e;let{media:t}=i;return(e=t==null?void 0:t.paused)!=null?e:!0},set(i,t){var r;let{media:e}=t;e&&(i?e.pause():(r=e.play())==null||r.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(i,t){let{media:e}=i;return e?t?t.type==="playing":!e.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(i){var e;let{media:t}=i;return(e=t==null?void 0:t.ended)!=null?e:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(i){var e;let{media:t}=i;return(e=t==null?void 0:t.playbackRate)!=null?e:1},set(i,t){let{media:e}=t;e&&Number.isFinite(+i)&&(e.playbackRate=+i)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(i){var e;let{media:t}=i;return(e=t==null?void 0:t.muted)!=null?e:!1},set(i,t){let{media:e}=t;e&&(e.muted=i)},mediaEvents:["volumechange"]},mediaVolume:{get(i){var e;let{media:t}=i;return(e=t==null?void 0:t.volume)!=null?e:1},set(i,t){let{media:e}=t;if(e){try{i==null?d.localStorage.removeItem("media-chrome-pref-volume"):d.localStorage.setItem("media-chrome-pref-volume",i.toString())}catch{}Number.isFinite(+i)&&(e.volume=+i)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(i,t)=>{let{options:{noVolumePref:e}}=t;if(!e)try{let r=d.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;Mt.mediaVolume.set(+r,t),i(+r)}catch(r){console.debug("Error getting volume pref",r)}}]},mediaVolumeLevel:{get(i){let{media:t}=i;return typeof(t==null?void 0:t.volume)=="undefined"?"high":t.muted||t.volume===0?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(i){var e;let{media:t}=i;return(e=t==null?void 0:t.currentTime)!=null?e:0},set(i,t){let{media:e}=t;!e||!je(i)||(e.currentTime=i)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(i){let{media:t,options:{defaultDuration:e}={}}=i;return e&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?e:Number.isFinite(t==null?void 0:t.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(i){let{media:t}=i;return(t==null?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(i){var n;let{media:t}=i;if(!((n=t==null?void 0:t.seekable)!=null&&n.length))return;let e=t.seekable.start(0),r=t.seekable.end(t.seekable.length-1);if(!(!e&&!r))return[Number(e.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(i){var r;let{media:t}=i,e=(r=t==null?void 0:t.buffered)!=null?r:[];return Array.from(e).map((n,o)=>[Number(e.start(o).toFixed(3)),Number(e.end(o).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(i){let{media:t,options:{defaultStreamType:e}={}}=i,r=[z.LIVE,z.ON_DEMAND].includes(e)?e:void 0;if(!t)return r;let{streamType:n}=t;if(Ds.includes(n))return n===z.UNKNOWN?r:n;let o=t.duration;return o===1/0?z.LIVE:Number.isFinite(o)?z.ON_DEMAND:r},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(i){let{media:t}=i;if(!t)return Number.NaN;let{targetLiveWindow:e}=t,r=Mt.mediaStreamType.get(i);return(e==null||Number.isNaN(e))&&r===z.LIVE?0:e},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(i){let{media:t,options:{liveEdgeOffset:e=10}={}}=i;if(!t)return!1;if(typeof t.liveEdgeStart=="number")return Number.isNaN(t.liveEdgeStart)?!1:t.currentTime>=t.liveEdgeStart;if(!(Mt.mediaStreamType.get(i)===z.LIVE))return!1;let n=t.seekable;if(!n)return!0;if(!n.length)return!1;let o=n.end(n.length-1)-e;return t.currentTime>=o},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(i){return Je(i).map(({kind:t,label:e,language:r})=>({kind:t,label:e,language:r}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(i){return wr(i).map(({kind:t,label:e,language:r})=>({kind:t,label:e,language:r}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(i,t)=>{var o,l;let{media:e,options:r}=t;if(!e)return;let n=m=>{var h;!r.defaultSubtitles||m&&![W.CAPTIONS,W.SUBTITLES].includes((h=m==null?void 0:m.track)==null?void 0:h.kind)||Ii(t,!0)};return(o=e.textTracks)==null||o.addEventListener("addtrack",n),(l=e.textTracks)==null||l.addEventListener("removetrack",n),n(),()=>{var m,c;(m=e.textTracks)==null||m.removeEventListener("addtrack",n),(c=e.textTracks)==null||c.removeEventListener("removetrack",n)}}]},mediaChaptersCues:{get(i){var r;let{media:t}=i;if(!t)return[];let[e]=we(t,{kind:W.CHAPTERS});return Array.from((r=e==null?void 0:e.cues)!=null?r:[]).map(({text:n,startTime:o,endTime:l})=>({text:n,startTime:o,endTime:l}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(i,t)=>{var o;let{media:e}=t;if(!e)return;let r=e.querySelector('track[kind="chapters"][default][src]'),n=(o=e.shadowRoot)==null?void 0:o.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r==null||r.addEventListener("load",i),n==null||n.addEventListener("load",i),()=>{r==null||r.removeEventListener("load",i),n==null||n.removeEventListener("load",i)}}]},mediaIsPip:{get(i){var r,n;let{media:t,documentElement:e}=i;if(!t||!e||!e.pictureInPictureElement)return!1;if(e.pictureInPictureElement===t)return!0;if(e.pictureInPictureElement instanceof HTMLMediaElement)return(r=t.localName)!=null&&r.includes("-")?de(t,e.pictureInPictureElement):!1;if(e.pictureInPictureElement.localName.includes("-")){let o=e.pictureInPictureElement.shadowRoot;for(;o!=null&&o.pictureInPictureElement;){if(o.pictureInPictureElement===t)return!0;o=(n=o.pictureInPictureElement)==null?void 0:n.shadowRoot}}return!1},set(i,t){let{media:e}=t;if(e)if(i){if(!b.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!e.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}let r=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};e.requestPictureInPicture().catch(n=>{if(n.code===11){if(!e.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(e.readyState===0&&e.preload==="none"){let o=()=>{e.removeEventListener("loadedmetadata",l),e.preload="none"},l=()=>{e.requestPictureInPicture().catch(r),o()};e.addEventListener("loadedmetadata",l),e.preload="metadata",setTimeout(()=>{e.readyState===0&&r(),o()},1e3)}else throw n}else throw n})}else b.pictureInPictureElement&&b.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(i){var e;let{media:t}=i;return[...(e=t==null?void 0:t.videoRenditions)!=null?e:[]].map(r=>({...r}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(i){var e,r,n;let{media:t}=i;return(n=(r=t==null?void 0:t.videoRenditions)==null?void 0:r[(e=t.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:n.id},set(i,t){let{media:e}=t;if(!(e!=null&&e.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}let r=i,n=Array.prototype.findIndex.call(e.videoRenditions,o=>o.id==r);e.videoRenditions.selectedIndex!=n&&(e.videoRenditions.selectedIndex=n)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(i){var e;let{media:t}=i;return[...(e=t==null?void 0:t.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(i){var e,r;let{media:t}=i;return(r=[...(e=t==null?void 0:t.audioTracks)!=null?e:[]].find(n=>n.enabled))==null?void 0:r.id},set(i,t){let{media:e}=t;if(!(e!=null&&e.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}let r=i;for(let n of e.audioTracks)n.enabled=r==n.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(i){return Jn(i)},set(i,t){i?Xn(t):Zn(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(i){var e;let{media:t}=i;return!(t!=null&&t.remote)||((e=t.remote)==null?void 0:e.state)==="disconnected"?!1:!!t.remote.state},set(i,t){var r,n;let{media:e}=t;if(e&&!(i&&((r=e.remote)==null?void 0:r.state)!=="disconnected")&&!(!i&&((n=e.remote)==null?void 0:n.state)!=="connected")){if(typeof e.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}e.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(i,t){let{media:e}=t;if(e){if(!(e.webkitShowPlaybackTargetPicker&&d.WebKitPlaybackTargetAvailabilityEvent)){console.warn("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}e.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(i){let{media:t}=i;if(!io||!Dr(t))return Y.UNSUPPORTED}},mediaPipUnavailable:{get(i){let{media:t}=i;if(!ro||!xr(t))return Y.UNSUPPORTED}},mediaVolumeUnavailable:{get(i){let{media:t}=i;if(Mi===!1||(t==null?void 0:t.volume)==null)return Y.UNSUPPORTED},stateOwnersUpdateHandlers:[i=>{Mi==null&&ws.then(t=>i(t?void 0:Y.UNSUPPORTED))}]},mediaCastUnavailable:{get(i,{availability:t="not-available"}={}){var r;let{media:e}=i;if(!oo||!((r=e==null?void 0:e.remote)!=null&&r.state))return Y.UNSUPPORTED;if(!(t==null||t==="available"))return Y.UNAVAILABLE},stateOwnersUpdateHandlers:[(i,t)=>{var n;let{media:e}=t;return e?(e.disableRemotePlayback||e.hasAttribute("disableremoteplayback")||(n=e==null?void 0:e.remote)==null||n.watchAvailability(o=>{i({availability:o?"available":"not-available"})}).catch(o=>{o.name==="NotSupportedError"?i({availability:null}):i({availability:"not-available"})}),()=>{var o;(o=e==null?void 0:e.remote)==null||o.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(i,t){if(!no)return Y.UNSUPPORTED;if((t==null?void 0:t.availability)==="not-available")return Y.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(i,t)=>{var n;let{media:e}=t;return e?(e.disableRemotePlayback||e.hasAttribute("disableremoteplayback")||(n=e==null?void 0:e.remote)==null||n.watchAvailability(o=>{i({availability:o?"available":"not-available"})}).catch(o=>{o.name==="NotSupportedError"?i({availability:null}):i({availability:"not-available"})}),()=>{var o;(o=e==null?void 0:e.remote)==null||o.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(i){var e;let{media:t}=i;if(!(t!=null&&t.videoRenditions))return Y.UNSUPPORTED;if(!((e=t.videoRenditions)!=null&&e.length))return Y.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(i){var e,r;let{media:t}=i;if(!(t!=null&&t.audioTracks))return Y.UNSUPPORTED;if(((r=(e=t.audioTracks)==null?void 0:e.length)!=null?r:0)<=1)return Y.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}};var so={[E.MEDIA_PREVIEW_REQUEST](i,t,{detail:e}){var A,T,v;let{media:r}=t,n=e!=null?e:void 0,o,l;if(r&&n!=null){let[g]=we(r,{kind:W.METADATA,label:"thumbnails"}),L=Array.prototype.find.call((A=g==null?void 0:g.cues)!=null?A:[],(I,y,R)=>y===0?I.endTime>n:y===R.length-1?I.startTime<=n:I.startTime<=n&&I.endTime>n);if(L){let I=/'^(?:[a-z]+:)?\/\//i.test(L.text)||(T=r==null?void 0:r.querySelector('track[label="thumbnails"]'))==null?void 0:T.src,y=new URL(L.text,I);l=new URLSearchParams(y.hash).get("#xywh").split(",").map(K=>+K),o=y.href}}let m=i.mediaDuration.get(t),h=(v=i.mediaChaptersCues.get(t).find((g,L,I)=>L===I.length-1&&m===g.endTime?g.startTime<=n&&g.endTime>=n:g.startTime<=n&&g.endTime>n))==null?void 0:v.text;return e!=null&&h==null&&(h=""),{mediaPreviewTime:n,mediaPreviewImage:o,mediaPreviewCoords:l,mediaPreviewChapter:h}},[E.MEDIA_PAUSE_REQUEST](i,t){i["mediaPaused"].set(!0,t)},[E.MEDIA_PLAY_REQUEST](i,t){var o;let e="mediaPaused";if(i.mediaStreamType.get(t)===z.LIVE){let l=!(i.mediaTargetLiveWindow.get(t)>0),m=(o=i.mediaSeekable.get(t))==null?void 0:o[1];l&&m&&i.mediaCurrentTime.set(m,t)}i[e].set(!1,t)},[E.MEDIA_PLAYBACK_RATE_REQUEST](i,t,{detail:e}){let r="mediaPlaybackRate",n=e;i[r].set(n,t)},[E.MEDIA_MUTE_REQUEST](i,t){i["mediaMuted"].set(!0,t)},[E.MEDIA_UNMUTE_REQUEST](i,t){let e="mediaMuted";i.mediaVolume.get(t)||i.mediaVolume.set(.25,t),i[e].set(!1,t)},[E.MEDIA_VOLUME_REQUEST](i,t,{detail:e}){let r="mediaVolume",n=e;n&&i.mediaMuted.get(t)&&i.mediaMuted.set(!1,t),i[r].set(n,t)},[E.MEDIA_SEEK_REQUEST](i,t,{detail:e}){let r="mediaCurrentTime",n=e;i[r].set(n,t)},[E.MEDIA_SEEK_TO_LIVE_REQUEST](i,t){var n;let e="mediaCurrentTime",r=(n=i.mediaSeekable.get(t))==null?void 0:n[1];Number.isNaN(Number(r))||i[e].set(r,t)},[E.MEDIA_SHOW_SUBTITLES_REQUEST](i,t,{detail:e}){var m;let{options:r}=t,n=Je(t),o=kr(e),l=(m=o[0])==null?void 0:m.language;l&&!r.noSubtitlesLangPref&&d.localStorage.setItem("media-chrome-pref-subtitles-lang",l),De(pe.SHOWING,n,o)},[E.MEDIA_DISABLE_SUBTITLES_REQUEST](i,t,{detail:e}){let r=Je(t),n=e!=null?e:[];De(pe.DISABLED,r,n)},[E.MEDIA_TOGGLE_SUBTITLES_REQUEST](i,t,{detail:e}){Ii(t,e)},[E.MEDIA_RENDITION_REQUEST](i,t,{detail:e}){let r="mediaRenditionSelected",n=e;i[r].set(n,t)},[E.MEDIA_AUDIO_TRACK_REQUEST](i,t,{detail:e}){let r="mediaAudioTrackEnabled",n=e;i[r].set(n,t)},[E.MEDIA_ENTER_PIP_REQUEST](i,t){let e="mediaIsPip";i.mediaIsFullscreen.get(t)&&i.mediaIsFullscreen.set(!1,t),i[e].set(!0,t)},[E.MEDIA_EXIT_PIP_REQUEST](i,t){i["mediaIsPip"].set(!1,t)},[E.MEDIA_ENTER_FULLSCREEN_REQUEST](i,t){let e="mediaIsFullscreen";i.mediaIsPip.get(t)&&i.mediaIsPip.set(!1,t),i[e].set(!0,t)},[E.MEDIA_EXIT_FULLSCREEN_REQUEST](i,t){i["mediaIsFullscreen"].set(!1,t)},[E.MEDIA_ENTER_CAST_REQUEST](i,t){let e="mediaIsCasting";i.mediaIsFullscreen.get(t)&&i.mediaIsFullscreen.set(!1,t),i[e].set(!0,t)},[E.MEDIA_EXIT_CAST_REQUEST](i,t){i["mediaIsCasting"].set(!1,t)},[E.MEDIA_AIRPLAY_REQUEST](i,t){i["mediaIsAirplaying"].set(!0,t)}};var Ps=({media:i,fullscreenElement:t,documentElement:e,stateMediator:r=Mt,requestMap:n=so,options:o={},monitorStateOwnersOnlyWithSubscriptions:l=!0})=>{let m=[],c={options:{...o}},h=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),A=I=>{I!=null&&(Si(I,h)||(h=Object.freeze({...h,...I}),m.forEach(y=>y(h))))},T=()=>{let I=Object.entries(r).reduce((y,[R,{get:K}])=>(y[R]=K(c),y),{});A(I)},v={},g,L=async(I,y)=>{var dn,mn,cn,un,pn,hn,En,bn,gn,fn,vn,An,Tn,In,Sn,Mn;let R=!!g;if(g={...c,...g!=null?g:{},...I},R)return;await ao(...Object.values(I));let K=m.length>0&&y===0&&l,ue=c.media!==g.media,be=((dn=c.media)==null?void 0:dn.textTracks)!==((mn=g.media)==null?void 0:mn.textTracks),ht=((cn=c.media)==null?void 0:cn.videoRenditions)!==((un=g.media)==null?void 0:un.videoRenditions),Ye=((pn=c.media)==null?void 0:pn.audioTracks)!==((hn=g.media)==null?void 0:hn.audioTracks),qr=((En=c.media)==null?void 0:En.remote)!==((bn=g.media)==null?void 0:bn.remote),Yr=c.documentElement!==g.documentElement,Qr=!!c.media&&(ue||K),jr=!!((gn=c.media)!=null&&gn.textTracks)&&(be||K),zr=!!((fn=c.media)!=null&&fn.videoRenditions)&&(ht||K),Xr=!!((vn=c.media)!=null&&vn.audioTracks)&&(Ye||K),Zr=!!((An=c.media)!=null&&An.remote)&&(qr||K),Jr=!!c.documentElement&&(Yr||K),en=Qr||jr||zr||Xr||Zr||Jr,Qe=m.length===0&&y===1&&l,tn=!!g.media&&(ue||Qe),rn=!!((Tn=g.media)!=null&&Tn.textTracks)&&(be||Qe),nn=!!((In=g.media)!=null&&In.videoRenditions)&&(ht||Qe),on=!!((Sn=g.media)!=null&&Sn.audioTracks)&&(Ye||Qe),an=!!((Mn=g.media)!=null&&Mn.remote)&&(qr||Qe),sn=!!g.documentElement&&(Yr||Qe),ln=tn||rn||nn||on||an||sn;if(!(en||ln)){Object.entries(g).forEach(([P,Et])=>{c[P]=Et}),T(),g=void 0;return}Object.entries(r).forEach(([P,{get:Et,mediaEvents:Ka=[],textTracksEvents:Ga=[],videoRenditionsEvents:Wa=[],audioTracksEvents:qa=[],remoteEvents:Ya=[],rootEvents:Qa=[],stateOwnersUpdateHandlers:ja=[]}])=>{v[P]||(v[P]={});let Q=$=>{let j=Et(c,$);A({[P]:j})},V;V=v[P].mediaEvents,Ka.forEach($=>{V&&Qr&&(c.media.removeEventListener($,V),v[P].mediaEvents=void 0),tn&&(g.media.addEventListener($,Q),v[P].mediaEvents=Q)}),V=v[P].textTracksEvents,Ga.forEach($=>{var j,Z;V&&jr&&((j=c.media.textTracks)==null||j.removeEventListener($,V),v[P].textTracksEvents=void 0),rn&&((Z=g.media.textTracks)==null||Z.addEventListener($,Q),v[P].textTracksEvents=Q)}),V=v[P].videoRenditionsEvents,Wa.forEach($=>{var j,Z;V&&zr&&((j=c.media.videoRenditions)==null||j.removeEventListener($,V),v[P].videoRenditionsEvents=void 0),nn&&((Z=g.media.videoRenditions)==null||Z.addEventListener($,Q),v[P].videoRenditionsEvents=Q)}),V=v[P].audioTracksEvents,qa.forEach($=>{var j,Z;V&&Xr&&((j=c.media.audioTracks)==null||j.removeEventListener($,V),v[P].audioTracksEvents=void 0),on&&((Z=g.media.audioTracks)==null||Z.addEventListener($,Q),v[P].audioTracksEvents=Q)}),V=v[P].remoteEvents,Ya.forEach($=>{var j,Z;V&&Zr&&((j=c.media.remote)==null||j.removeEventListener($,V),v[P].remoteEvents=void 0),an&&((Z=g.media.remote)==null||Z.addEventListener($,Q),v[P].remoteEvents=Q)}),V=v[P].rootEvents,Qa.forEach($=>{V&&Jr&&(c.documentElement.removeEventListener($,V),v[P].rootEvents=void 0),sn&&(g.documentElement.addEventListener($,Q),v[P].rootEvents=Q)});let yn=v[P].stateOwnersUpdateHandlers;ja.forEach($=>{yn&&en&&yn(),ln&&(v[P].stateOwnersUpdateHandlers=$(Q,g))})}),Object.entries(g).forEach(([P,Et])=>{c[P]=Et}),T(),g=void 0};return L({media:i,fullscreenElement:t,documentElement:e,options:o}),{dispatch(I){let{type:y,detail:R}=I;if(n[y]&&h.mediaErrorCode==null){A(n[y](r,c,I));return}y==="mediaelementchangerequest"?L({media:R}):y==="fullscreenelementchangerequest"?L({fullscreenElement:R}):y==="documentelementchangerequest"?L({documentElement:R}):y==="optionschangerequest"&&Object.entries(R!=null?R:{}).forEach(([K,ue])=>{c.options[K]=ue})},getState(){return h},subscribe(I){return L({},m.length+1),m.push(I),I(h),()=>{let y=m.indexOf(I);y>=0&&(L({},m.length-1),m.splice(y,1))}}}},lo=Ps;var mo=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],co=10,M={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset"},he,et,F,tt,ee,_t,Lt,Ur,Ue,yt,Rt,Nr,yi=class extends ft{constructor(){super();u(this,Lt);u(this,Ue);u(this,Rt);this.mediaStateReceivers=[];this.associatedElementSubscriptions=new Map;u(this,he,new Ze(this,M.HOTKEYS));u(this,et,void 0);u(this,F,void 0);u(this,tt,void 0);u(this,ee,void 0);u(this,_t,e=>{var r;(r=s(this,F))==null||r.dispatch(e)});this.associateElement(this);let e={};p(this,tt,r=>{Object.entries(r).forEach(([n,o])=>{if(n in e&&e[n]===o)return;this.propagateMediaState(n,o);let l=n.toLowerCase(),m=new d.CustomEvent(Ar[l],{composed:!0,detail:o});this.dispatchEvent(m)}),e=r}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(M.NO_HOTKEYS,M.HOTKEYS,M.DEFAULT_STREAM_TYPE,M.DEFAULT_SUBTITLES,M.DEFAULT_DURATION)}get mediaStore(){return s(this,F)}set mediaStore(e){var r,n;if(s(this,F)&&((r=s(this,ee))==null||r.call(this),p(this,ee,void 0)),p(this,F,e),!s(this,F)&&!this.hasAttribute(M.NO_DEFAULT_STORE)){f(this,Lt,Ur).call(this);return}p(this,ee,(n=s(this,F))==null?void 0:n.subscribe(s(this,tt)))}get fullscreenElement(){var e;return(e=s(this,et))!=null?e:this}set fullscreenElement(e){var r;this.hasAttribute(M.FULLSCREEN_ELEMENT)&&this.removeAttribute(M.FULLSCREEN_ELEMENT),p(this,et,e),(r=s(this,F))==null||r.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}attributeChangedCallback(e,r,n){var o,l,m,c,h,A;if(super.attributeChangedCallback(e,r,n),e===M.NO_HOTKEYS)n!==r&&n===""?(this.hasAttribute(M.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):n!==r&&n===null&&this.enableHotkeys();else if(e===M.HOTKEYS)s(this,he).value=n;else if(e===M.DEFAULT_SUBTITLES&&n!==r)(o=s(this,F))==null||o.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(M.DEFAULT_SUBTITLES)}});else if(e===M.DEFAULT_STREAM_TYPE)(m=s(this,F))==null||m.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(l=this.getAttribute(M.DEFAULT_STREAM_TYPE))!=null?l:void 0}});else if(e===M.LIVE_EDGE_OFFSET)(c=s(this,F))==null||c.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(M.LIVE_EDGE_OFFSET)?+this.getAttribute(M.LIVE_EDGE_OFFSET):void 0}});else if(e===M.FULLSCREEN_ELEMENT){let T=n?(h=this.getRootNode())==null?void 0:h.getElementById(n):void 0;p(this,et,T),(A=s(this,F))==null||A.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}}connectedCallback(){var e,r;!s(this,F)&&!this.hasAttribute(M.NO_DEFAULT_STORE)&&f(this,Lt,Ur).call(this),(e=s(this,F))==null||e.dispatch({type:"documentelementchangerequest",detail:b}),super.connectedCallback(),s(this,F)&&!s(this,ee)&&p(this,ee,(r=s(this,F))==null?void 0:r.subscribe(s(this,tt))),this.enableHotkeys()}disconnectedCallback(){var e,r,n,o;(e=super.disconnectedCallback)==null||e.call(this),s(this,F)&&((r=s(this,F))==null||r.dispatch({type:"documentelementchangerequest",detail:void 0}),(n=s(this,F))==null||n.dispatch({type:E.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),s(this,ee)&&((o=s(this,ee))==null||o.call(this),p(this,ee,void 0))}mediaSetCallback(e){var r;super.mediaSetCallback(e),(r=s(this,F))==null||r.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var r;super.mediaUnsetCallback(e),(r=s(this,F))==null||r.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,r){po(this.mediaStateReceivers,e,r)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:r}=this;if(r.has(e))return;let n=this.registerMediaStateReceiver.bind(this),o=this.unregisterMediaStateReceiver.bind(this),l=Bs(e,n,o);Object.values(E).forEach(m=>{e.addEventListener(m,s(this,_t))}),r.set(e,l)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:r}=this;if(!r.has(e))return;r.get(e)(),r.delete(e),Object.values(E).forEach(o=>{e.removeEventListener(o,s(this,_t))})}registerMediaStateReceiver(e){if(!e)return;let r=this.mediaStateReceivers;r.indexOf(e)>-1||(r.push(e),s(this,F)&&Object.entries(s(this,F).getState()).forEach(([o,l])=>{po([e],o,l)}))}unregisterMediaStateReceiver(e){let r=this.mediaStateReceivers,n=r.indexOf(e);n<0||r.splice(n,1)}enableHotkeys(){this.addEventListener("keydown",f(this,Rt,Nr))}disableHotkeys(){this.removeEventListener("keydown",f(this,Rt,Nr)),this.removeEventListener("keyup",f(this,Ue,yt))}get hotkeys(){return s(this,he)}keyboardShortcutHandler(e){var c,h,A,T,v;let r=e.target;if(((A=(h=(c=r.getAttribute(M.KEYS_USED))==null?void 0:c.split(" "))!=null?h:r==null?void 0:r.keysUsed)!=null?A:[]).map(g=>g==="Space"?" ":g).filter(Boolean).includes(e.key))return;let o,l,m;if(!s(this,he).contains(`no${e.key.toLowerCase()}`)&&!(e.key===" "&&s(this,he).contains("nospace")))switch(e.key){case" ":case"k":o=s(this,F).getState().mediaPaused?E.MEDIA_PLAY_REQUEST:E.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new d.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"m":o=this.mediaStore.getState().mediaVolumeLevel==="off"?E.MEDIA_UNMUTE_REQUEST:E.MEDIA_MUTE_REQUEST,this.dispatchEvent(new d.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"f":o=this.mediaStore.getState().mediaIsFullscreen?E.MEDIA_EXIT_FULLSCREEN_REQUEST:E.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new d.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new d.CustomEvent(E.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let g=this.hasAttribute(M.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(M.KEYBOARD_BACKWARD_SEEK_OFFSET):co;l=Math.max(((T=this.mediaStore.getState().mediaCurrentTime)!=null?T:0)-g,0),m=new d.CustomEvent(E.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(m);break}case"ArrowRight":{let g=this.hasAttribute(M.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(M.KEYBOARD_FORWARD_SEEK_OFFSET):co;l=Math.max(((v=this.mediaStore.getState().mediaCurrentTime)!=null?v:0)+g,0),m=new d.CustomEvent(E.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(m);break}default:break}}};he=new WeakMap,et=new WeakMap,F=new WeakMap,tt=new WeakMap,ee=new WeakMap,_t=new WeakMap,Lt=new WeakSet,Ur=function(){var e;this.mediaStore=lo({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(M.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(M.DEFAULT_DURATION)?+this.getAttribute(M.DEFAULT_DURATION):void 0,defaultStreamType:(e=this.getAttribute(M.DEFAULT_STREAM_TYPE))!=null?e:void 0,liveEdgeOffset:this.hasAttribute(M.LIVE_EDGE_OFFSET)?+this.getAttribute(M.LIVE_EDGE_OFFSET):void 0,noVolumePref:this.hasAttribute(M.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(M.NO_SUBTITLES_LANG_PREF)}})},Ue=new WeakSet,yt=function(e){let{key:r}=e;if(!mo.includes(r)){this.removeEventListener("keyup",f(this,Ue,yt));return}this.keyboardShortcutHandler(e)},Rt=new WeakSet,Nr=function(e){let{metaKey:r,altKey:n,key:o}=e;if(r||n||!mo.includes(o)){this.removeEventListener("keyup",f(this,Ue,yt));return}[" ","ArrowLeft","ArrowRight"].includes(o)&&!(s(this,he).contains(`no${o.toLowerCase()}`)||o===" "&&s(this,he).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",f(this,Ue,yt),{once:!0})};var Us=Object.values(a),Ns=Object.values(oi),ho=i=>{var r,n,o,l;let{observedAttributes:t}=i.constructor;!t&&((r=i.nodeName)!=null&&r.includes("-"))&&(d.customElements.upgrade(i),{observedAttributes:t}=i.constructor);let e=(l=(o=(n=i==null?void 0:i.getAttribute)==null?void 0:n.call(i,S.MEDIA_CHROME_ATTRIBUTES))==null?void 0:o.split)==null?void 0:l.call(o,/\s+/);return Array.isArray(t||e)?(t||e).filter(m=>Us.includes(m)):[]},Os=i=>{var t,e;return(t=i.nodeName)!=null&&t.includes("-")&&d.customElements.get((e=i.nodeName)==null?void 0:e.toLowerCase())&&!(i instanceof d.customElements.get(i.nodeName.toLowerCase()))&&d.customElements.upgrade(i),Ns.some(r=>r in i)},Or=i=>Os(i)||!!ho(i).length,uo=i=>{var t;return(t=i==null?void 0:i.join)==null?void 0:t.call(i,":")},Pr={[a.MEDIA_SUBTITLES_LIST]:It,[a.MEDIA_SUBTITLES_SHOWING]:It,[a.MEDIA_SEEKABLE]:uo,[a.MEDIA_BUFFERED]:i=>i==null?void 0:i.map(uo).join(" "),[a.MEDIA_PREVIEW_COORDS]:i=>i==null?void 0:i.join(" "),[a.MEDIA_RENDITION_LIST]:kn,[a.MEDIA_AUDIO_TRACK_LIST]:Cn},Hs=async(i,t,e)=>{var n,o;if(i.isConnected||await li(0),typeof e=="boolean"||e==null)return _(i,t,e);if(typeof e=="number")return H(i,t,e);if(typeof e=="string")return x(i,t,e);if(Array.isArray(e)&&!e.length)return i.removeAttribute(t);let r=(o=(n=Pr[t])==null?void 0:n.call(Pr,e))!=null?o:e;return i.setAttribute(t,r)},Fs=i=>{var t;return!!((t=i.closest)!=null&&t.call(i,'*[slot="media"]'))},Pe=(i,t)=>{if(Fs(i))return;let e=(n,o)=>{var h,A;Or(n)&&o(n);let{children:l=[]}=n!=null?n:{},m=(A=(h=n==null?void 0:n.shadowRoot)==null?void 0:h.children)!=null?A:[];[...l,...m].forEach(T=>Pe(T,o))},r=i==null?void 0:i.nodeName.toLowerCase();if(r.includes("-")&&!Or(i)){d.customElements.whenDefined(r).then(()=>{e(i,t)});return}e(i,t)},po=(i,t,e)=>{i.forEach(r=>{if(t in r){r[t]=e;return}let n=ho(r),o=t.toLowerCase();n.includes(o)&&Hs(r,o,e)})},Bs=(i,t,e)=>{Pe(i,t);let r=A=>{var v;let T=(v=A==null?void 0:A.composedPath()[0])!=null?v:A.target;t(T)},n=A=>{var v;let T=(v=A==null?void 0:A.composedPath()[0])!=null?v:A.target;e(T)};i.addEventListener(E.REGISTER_MEDIA_STATE_RECEIVER,r),i.addEventListener(E.UNREGISTER_MEDIA_STATE_RECEIVER,n);let o=A=>{A.forEach(T=>{let{addedNodes:v=[],removedNodes:g=[],type:L,target:I,attributeName:y}=T;L==="childList"?(Array.prototype.forEach.call(v,R=>Pe(R,t)),Array.prototype.forEach.call(g,R=>Pe(R,e))):L==="attributes"&&y===S.MEDIA_CHROME_ATTRIBUTES&&(Or(I)?t(I):e(I))})},l=[],m=A=>{let T=A.target;T.name!=="media"&&(l.forEach(v=>Pe(v,e)),l=[...T.assignedElements({flatten:!0})],l.forEach(v=>Pe(v,t)))};i.addEventListener("slotchange",m);let c=new MutationObserver(o);return c.observe(i,{childList:!0,attributes:!0,subtree:!0}),()=>{Pe(i,e),i.removeEventListener("slotchange",m),c.disconnect(),i.removeEventListener(E.REGISTER_MEDIA_STATE_RECEIVER,r),i.removeEventListener(E.UNREGISTER_MEDIA_STATE_RECEIVER,n)}};d.customElements.get("media-controller")||d.customElements.define("media-controller",yi);var Eo=yi;var _i={TOOLTIP_PLACEMENT:"tooltipplacement"},bo=b.createElement("template");bo.innerHTML=`
<style>
  :host {
    position: relative;
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-button-padding, var(--media-control-padding, 10px));
    justify-content: var(--media-button-justify-content, center);
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }

  media-tooltip {
    
    max-width: 0;
    overflow-x: clip;
    opacity: 0;
    transition: opacity .3s, max-width 0s 9s;
  }

  :host(:hover) media-tooltip,
  :host(:focus-visible) media-tooltip {
    max-width: 100vw;
    opacity: 1;
    transition: opacity .3s;
  }

  :host([notooltip]) slot[name="tooltip"] {
    display: none;
  }
</style>

<slot name="tooltip">
  <media-tooltip part="tooltip" aria-hidden="true">
    <slot name="tooltip-content"></slot>
  </media-tooltip>
</slot>
`;var te,Ne,Ee,Oe,kt,Li,go,B=class extends d.HTMLElement{constructor(e={}){var r;super();u(this,Li);u(this,te,void 0);this.preventClick=!1;this.tooltipEl=null;this.tooltipContent="";u(this,Ne,e=>{this.preventClick||this.handleClick(e),setTimeout(s(this,Ee),0)});u(this,Ee,()=>{var e,r;(r=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||r.call(e)});u(this,Oe,e=>{let{key:r}=e;if(!this.keysUsed.includes(r)){this.removeEventListener("keyup",s(this,Oe));return}this.preventClick||this.handleClick(e)});u(this,kt,e=>{let{metaKey:r,altKey:n,key:o}=e;if(r||n||!this.keysUsed.includes(o)){this.removeEventListener("keyup",s(this,Oe));return}this.addEventListener("keyup",s(this,Oe),{once:!0})});if(!this.shadowRoot){this.attachShadow({mode:"open"});let n=bo.content.cloneNode(!0);this.nativeEl=n;let o=e.slotTemplate;o||(o=b.createElement("template"),o.innerHTML=`<slot>${e.defaultContent||""}</slot>`),e.tooltipContent&&(n.querySelector('slot[name="tooltip-content"]').innerHTML=(r=e.tooltipContent)!=null?r:"",this.tooltipContent=e.tooltipContent),this.nativeEl.appendChild(o.content.cloneNode(!0)),this.shadowRoot.appendChild(n)}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",_i.TOOLTIP_PLACEMENT,S.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",s(this,Ne)),this.addEventListener("keydown",s(this,kt)),this.tabIndex=0}disable(){this.removeEventListener("click",s(this,Ne)),this.removeEventListener("keydown",s(this,kt)),this.removeEventListener("keyup",s(this,Oe)),this.tabIndex=-1}attributeChangedCallback(e,r,n){var o,l,m,c,h;e===S.MEDIA_CONTROLLER?(r&&((l=(o=s(this,te))==null?void 0:o.unassociateElement)==null||l.call(o,this),p(this,te,null)),n&&this.isConnected&&(p(this,te,(m=this.getRootNode())==null?void 0:m.getElementById(n)),(h=(c=s(this,te))==null?void 0:c.associateElement)==null||h.call(c,this))):e==="disabled"&&n!==r?n==null?this.enable():this.disable():e===_i.TOOLTIP_PLACEMENT&&this.tooltipEl&&n!==r&&(this.tooltipEl.placement=n),s(this,Ee).call(this)}connectedCallback(){var n,o,l;let{style:e}=O(this.shadowRoot,":host");e.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");let r=this.getAttribute(S.MEDIA_CONTROLLER);r&&(p(this,te,(n=this.getRootNode())==null?void 0:n.getElementById(r)),(l=(o=s(this,te))==null?void 0:o.associateElement)==null||l.call(o,this)),d.customElements.whenDefined("media-tooltip").then(()=>f(this,Li,go).call(this))}disconnectedCallback(){var e,r;this.disable(),(r=(e=s(this,te))==null?void 0:e.unassociateElement)==null||r.call(e,this),p(this,te,null),this.removeEventListener("mouseenter",s(this,Ee)),this.removeEventListener("focus",s(this,Ee)),this.removeEventListener("click",s(this,Ne))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return w(this,_i.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){x(this,_i.TOOLTIP_PLACEMENT,e)}handleClick(e){}};te=new WeakMap,Ne=new WeakMap,Ee=new WeakMap,Oe=new WeakMap,kt=new WeakMap,Li=new WeakSet,go=function(){this.addEventListener("mouseenter",s(this,Ee)),this.addEventListener("focus",s(this,Ee)),this.addEventListener("click",s(this,Ne));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)};d.customElements.get("media-chrome-button")||d.customElements.define("media-chrome-button",B);var fo=B;var vo=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,To=b.createElement("template");To.innerHTML=`
  <style>
    :host([${a.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    
    :host(:not([${a.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${a.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
    :host(:not([${a.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${vo}</slot>
    <slot name="exit">${vo}</slot>
  </slot>
`;var $s=`
  <slot name="tooltip-enter">${U.ENTER_AIRPLAY}</slot>
  <slot name="tooltip-exit">${U.EXIT_AIRPLAY}</slot>
`,Ao=i=>{let t=i.mediaIsAirplaying?N.EXIT_AIRPLAY():N.ENTER_AIRPLAY();i.setAttribute("aria-label",t)},Ri=class extends B{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_IS_AIRPLAYING,a.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(t={}){super({slotTemplate:To,tooltipContent:$s,...t})}connectedCallback(){super.connectedCallback(),Ao(this)}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t===a.MEDIA_IS_AIRPLAYING&&Ao(this)}get mediaIsAirplaying(){return k(this,a.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(t){_(this,a.MEDIA_IS_AIRPLAYING,t)}get mediaAirplayUnavailable(){return w(this,a.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(t){x(this,a.MEDIA_AIRPLAY_UNAVAILABLE,t)}handleClick(){let t=new d.CustomEvent(E.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(t)}};d.customElements.get("media-airplay-button")||d.customElements.define("media-airplay-button",Ri);var Io=Ri;var Vs=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,Ks=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,_o=b.createElement("template");_o.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-checked="true"]) slot[name=tooltip-enable],
    :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${Vs}</slot>
    <slot name="off">${Ks}</slot>
  </slot>
`;var Gs=`
  <slot name="tooltip-enable">${U.ENABLE_CAPTIONS}</slot>
  <slot name="tooltip-disable">${U.DISABLE_CAPTIONS}</slot>
`,So=i=>{i.setAttribute("aria-checked",jn(i).toString())},ki=class extends B{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_SUBTITLES_LIST,a.MEDIA_SUBTITLES_SHOWING]}constructor(t={}){super({slotTemplate:_o,tooltipContent:Gs,...t}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",G.CLOSED_CAPTIONS()),So(this)}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t===a.MEDIA_SUBTITLES_SHOWING&&So(this)}get mediaSubtitlesList(){return Mo(this,a.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){yo(this,a.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return Mo(this,a.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){yo(this,a.MEDIA_SUBTITLES_SHOWING,t)}handleClick(){this.dispatchEvent(new d.CustomEvent(E.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}},Mo=(i,t)=>{let e=i.getAttribute(t);return e?Rr(e):[]},yo=(i,t,e)=>{if(!(e!=null&&e.length)){i.removeAttribute(t);return}let r=It(e);i.getAttribute(t)!==r&&i.setAttribute(t,r)};d.customElements.get("media-captions-button")||d.customElements.define("media-captions-button",ki);var Lo=ki;var Ws='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',qs='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>',ko=b.createElement("template");ko.innerHTML=`
  <style>
  :host([${a.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  
  :host(:not([${a.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${a.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
    :host(:not([${a.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${Ws}</slot>
    <slot name="exit">${qs}</slot>
  </slot>
`;var Ys=`
  <slot name="tooltip-enter">${U.START_CAST}</slot>
  <slot name="tooltip-exit">${U.STOP_CAST}</slot>
`,Ro=i=>{let t=i.mediaIsCasting?N.EXIT_CAST():N.ENTER_CAST();i.setAttribute("aria-label",t)},Ci=class extends B{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_IS_CASTING,a.MEDIA_CAST_UNAVAILABLE]}constructor(t={}){super({slotTemplate:ko,tooltipContent:Ys,...t})}connectedCallback(){super.connectedCallback(),Ro(this)}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t===a.MEDIA_IS_CASTING&&Ro(this)}get mediaIsCasting(){return k(this,a.MEDIA_IS_CASTING)}set mediaIsCasting(t){_(this,a.MEDIA_IS_CASTING,t)}get mediaCastUnavailable(){return w(this,a.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(t){x(this,a.MEDIA_CAST_UNAVAILABLE,t)}handleClick(){let t=this.mediaIsCasting?E.MEDIA_EXIT_CAST_REQUEST:E.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new d.CustomEvent(t,{composed:!0,bubbles:!0}))}};d.customElements.get("media-cast-button")||d.customElements.define("media-cast-button",Ci);var Co=Ci;function Qs(i){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        transition: display .15s, opacity .15s ease-in, transform .15s ease-in;
        transition-behavior: allow-discrete;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, opacity .2s ease-out, transform .15s ease-out;
        transition-behavior: allow-discrete;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(i)}
  `}function js(i){return`
    <slot id="content"></slot>
  `}var Ct={OPEN:"open",ANCHOR:"anchor"},xt,it,Ie,Dt,Hr,xi,xo,Di,Do,wi,wo,Pi,Po,Ui,Uo,Se=class extends d.HTMLElement{constructor(){super();u(this,Dt);u(this,xi);u(this,Di);u(this,wi);u(this,Pi);u(this,Ui);u(this,xt,!1);u(this,it,null);u(this,Ie,null);this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[Ct.OPEN,Ct.ANCHOR]}get open(){return k(this,Ct.OPEN)}set open(e){_(this,Ct.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":f(this,wi,wo).call(this,e);break;case"focusout":f(this,Pi,Po).call(this,e);break;case"keydown":f(this,Ui,Uo).call(this,e);break}}connectedCallback(){f(this,Dt,Hr).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,r,n){f(this,Dt,Hr).call(this),e===Ct.OPEN&&n!==r&&(this.open?f(this,xi,xo).call(this):f(this,Di,Do).call(this))}focus(){p(this,it,_r());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),r=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||r)return;let n=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');n==null||n.focus()}get keysUsed(){return["Escape","Tab"]}};xt=new WeakMap,it=new WeakMap,Ie=new WeakMap,Dt=new WeakSet,Hr=function(){if(!s(this,xt)&&(p(this,xt,!0),!this.shadowRoot)){this.attachShadow({mode:"open"});let e=Fn(this.attributes);this.shadowRoot.innerHTML=`
        ${this.constructor.getTemplateHTML(e)}
      `}},xi=new WeakSet,xo=function(){var e;(e=s(this,Ie))==null||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},Di=new WeakSet,Do=function(){var e;(e=s(this,Ie))==null||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},wi=new WeakSet,wo=function(e){p(this,Ie,e.relatedTarget),de(this,e.relatedTarget)||(this.open=!this.open)},Pi=new WeakSet,Po=function(e){var r;de(this,e.relatedTarget)||((r=s(this,it))==null||r.focus(),s(this,Ie)&&s(this,Ie)!==e.relatedTarget&&this.open&&(this.open=!1))},Ui=new WeakSet,Uo=function(e){var m,c,h,A,T;let{key:r,ctrlKey:n,altKey:o,metaKey:l}=e;n||o||l||this.keysUsed.includes(r)&&(e.preventDefault(),e.stopPropagation(),r==="Tab"?(e.shiftKey?(c=(m=this.previousElementSibling)==null?void 0:m.focus)==null||c.call(m):(A=(h=this.nextElementSibling)==null?void 0:h.focus)==null||A.call(h),this.blur()):r==="Escape"&&((T=s(this,it))==null||T.focus(),this.open=!1))},Se.getTemplateHTML=Qs,Se.getSlotTemplateHTML=js;d.customElements.get("media-chrome-dialog")||d.customElements.define("media-chrome-dialog",Se);var No=Se;var Oo=b.createElement("template");Oo.innerHTML=`
  <style>
    :host {
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      box-shadow: var(--_focus-visible-box-shadow, none);
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      display: inline-flex;
      align-items: center;
      
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      width: 100px;
      transition: background .15s linear;
      cursor: pointer;
      pointer-events: auto;
      touch-action: none; 
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #leftgap {
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
    }

    #rightgap {
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
    }

    #startpoint,
    #endpoint {
      position: absolute;
    }

    #endpoint {
      right: 0;
    }

    #container {
      
      width: var(--media-range-track-width, 100%);
      transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      min-width: 40px;
    }

    #range {
      
      display: var(--media-time-range-hover-display, block);
      bottom: var(--media-time-range-hover-bottom, -7px);
      height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
      width: 100%;
      position: absolute;
      cursor: pointer;

      -webkit-appearance: none; 
      -webkit-tap-highlight-color: transparent;
      background: transparent; 
      margin: 0;
      z-index: 1;
    }

    @media (hover: hover) {
      #range {
        bottom: var(--media-time-range-hover-bottom, -5px);
        height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
      }
    }

    
    
    #range::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: transparent;
      width: .1px;
      height: .1px;
    }

    
    #range::-moz-range-thumb {
      background: transparent;
      border: transparent;
      width: .1px;
      height: .1px;
    }

    #appearance {
      height: var(--media-range-track-height, 4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: absolute;
      
      will-change: transform;
    }

    #track {
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      border-radius: var(--media-range-track-border-radius, 1px);
      border: var(--media-range-track-border, none);
      outline: var(--media-range-track-outline);
      outline-offset: var(--media-range-track-outline-offset);
      backdrop-filter: var(--media-range-track-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
      box-shadow: var(--media-range-track-box-shadow, none);
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    #progress,
    #pointer {
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #progress {
      background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
      transition: var(--media-range-track-transition);
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    @media (hover: hover) {
      :host(:hover) #pointer {
        transition: visibility .5s, opacity .5s;
        visibility: visible;
        opacity: 1;
      }
    }

    #thumb {
      width: var(--media-range-thumb-width, 10px);
      height: var(--media-range-thumb-height, 10px);
      margin-left: calc(var(--media-range-thumb-width, 10px) / -2);
      border: var(--media-range-thumb-border, none);
      border-radius: var(--media-range-thumb-border-radius, 10px);
      background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
      box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
      transition: var(--media-range-thumb-transition);
      transform: var(--media-range-thumb-transform, none);
      opacity: var(--media-range-thumb-opacity, 1);
      position: absolute;
      left: 0;
      cursor: pointer;
    }

    :host([disabled]) #thumb {
      background-color: #777;
    }

    .segments #appearance {
      height: var(--media-range-segment-hover-height, 7px);
    }

    #track {
      clip-path: url(#segments-clipping);
    }

    #segments {
      --segments-gap: var(--media-range-segments-gap, 2px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #segments-clipping {
      transform: translateX(calc(var(--segments-gap) / 2));
    }

    #segments-clipping:empty {
      display: none;
    }

    #segments-clipping rect {
      height: var(--media-range-track-height, 4px);
      y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
      transition: var(--media-range-segment-transition, transform .1s ease-in-out);
      transform: var(--media-range-segment-transform, scaleY(1));
      transform-origin: center;
    }
  </style>
  <div id="leftgap"></div>
  <div id="container">
    <div id="startpoint"></div>
    <div id="endpoint"></div>
    <div id="appearance">
      <div id="track" part="track">
        <div id="pointer"></div>
        <div id="progress" part="progress"></div>
      </div>
      <div id="thumb" part="thumb"></div>
      <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
    </div>
    <input id="range" type="range" min="0" max="1" step="any" value="0">
  </div>
  <div id="rightgap"></div>
`;var ie,wt,Pt,Ut,X,Nt,Ot,Ht,Ft,Ni,Ho,Bt,Fr,$t,Br,Vt,$r,Oi,Fo,Hi,Bo,Fi,$o,Bi,Vo,Me=class extends d.HTMLElement{constructor(){super();u(this,Ni);u(this,Bt);u(this,$t);u(this,Vt);u(this,Oi);u(this,Hi);u(this,Fi);u(this,Bi);u(this,ie,void 0);u(this,wt,void 0);u(this,Pt,void 0);u(this,Ut,void 0);u(this,X,{});u(this,Nt,[]);u(this,Ot,()=>{if(this.range.matches(":focus-visible")){let{style:e}=O(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}});u(this,Ht,()=>{let{style:e}=O(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")});u(this,Ft,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)});this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Oo.content.cloneNode(!0))),this.container=this.shadowRoot.querySelector("#container"),p(this,Pt,this.shadowRoot.querySelector("#startpoint")),p(this,Ut,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",S.MEDIA_CONTROLLER]}attributeChangedCallback(e,r,n){var o,l,m,c,h;e===S.MEDIA_CONTROLLER?(r&&((l=(o=s(this,ie))==null?void 0:o.unassociateElement)==null||l.call(o,this),p(this,ie,null)),n&&this.isConnected&&(p(this,ie,(m=this.getRootNode())==null?void 0:m.getElementById(n)),(h=(c=s(this,ie))==null?void 0:c.associateElement)==null||h.call(c,this))):(e==="disabled"||e==="aria-disabled"&&r!==n)&&(n==null?(this.range.removeAttribute(e),f(this,Bt,Fr).call(this)):(this.range.setAttribute(e,n),f(this,$t,Br).call(this)))}connectedCallback(){var n,o,l;let{style:e}=O(this.shadowRoot,":host");e.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),s(this,X).pointer=O(this.shadowRoot,"#pointer"),s(this,X).progress=O(this.shadowRoot,"#progress"),s(this,X).thumb=O(this.shadowRoot,"#thumb"),s(this,X).activeSegment=O(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(S.MEDIA_CONTROLLER);r&&(p(this,ie,(n=this.getRootNode())==null?void 0:n.getElementById(r)),(l=(o=s(this,ie))==null?void 0:o.associateElement)==null||l.call(o,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",s(this,Ot)),this.shadowRoot.addEventListener("focusout",s(this,Ht)),f(this,Bt,Fr).call(this),pi(this.container,s(this,Ft))}disconnectedCallback(){var e,r;f(this,$t,Br).call(this),(r=(e=s(this,ie))==null?void 0:e.unassociateElement)==null||r.call(e,this),p(this,ie,null),this.shadowRoot.removeEventListener("focusin",s(this,Ot)),this.shadowRoot.removeEventListener("focusout",s(this,Ht)),Hn(this.container,s(this,Ft))}updatePointerBar(e){var r;(r=s(this,X).pointer)==null||r.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var r,n;let e=this.range.valueAsNumber*100;(r=s(this,X).progress)==null||r.style.setProperty("width",`${e}%`),(n=s(this,X).thumb)==null||n.style.setProperty("left",`${e}%`)}updateSegments(e){let r=this.shadowRoot.querySelector("#segments-clipping");if(r.textContent="",this.container.classList.toggle("segments",!!(e!=null&&e.length)),!(e!=null&&e.length))return;let n=[...new Set([+this.range.min,...e.flatMap(l=>[l.start,l.end]),+this.range.max])];p(this,Nt,[...n]);let o=n.pop();for(let[l,m]of n.entries()){let[c,h]=[l===0,l===n.length-1],A=c?"calc(var(--segments-gap) / -1)":`${m*100}%`,v=`calc(${((h?o:n[l+1])-m)*100}%${c||h?"":" - var(--segments-gap)"})`,g=b.createElementNS("http://www.w3.org/2000/svg","rect"),L=O(this.shadowRoot,`#segments-clipping rect:nth-child(${l+1})`);L.style.setProperty("x",A),L.style.setProperty("width",v),r.append(g)}}getPointerRatio(e){let r=$n(e.clientX,e.clientY,s(this,Pt).getBoundingClientRect(),s(this,Ut).getBoundingClientRect());return Math.max(0,Math.min(1,r))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":f(this,Bi,Vo).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":f(this,Oi,Fo).call(this,e);break;case"pointerdown":f(this,Vt,$r).call(this,e);break;case"pointerup":f(this,Hi,Bo).call(this);break;case"pointerleave":f(this,Fi,$o).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}};ie=new WeakMap,wt=new WeakMap,Pt=new WeakMap,Ut=new WeakMap,X=new WeakMap,Nt=new WeakMap,Ot=new WeakMap,Ht=new WeakMap,Ft=new WeakMap,Ni=new WeakSet,Ho=function(e){let r=s(this,X).activeSegment;if(!r)return;let n=this.getPointerRatio(e),l=`#segments-clipping rect:nth-child(${s(this,Nt).findIndex((m,c,h)=>{let A=h[c+1];return A!=null&&n>=m&&n<=A})+1})`;(r.selectorText!=l||!r.style.transform)&&(r.selectorText=l,r.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},Bt=new WeakSet,Fr=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},$t=new WeakSet,Br=function(){var e,r;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),(e=d.window)==null||e.removeEventListener("pointerup",this),(r=d.window)==null||r.removeEventListener("pointermove",this)},Vt=new WeakSet,$r=function(e){var r;p(this,wt,e.composedPath().includes(this.range)),(r=d.window)==null||r.addEventListener("pointerup",this)},Oi=new WeakSet,Fo=function(e){var r;e.pointerType!=="mouse"&&f(this,Vt,$r).call(this,e),this.addEventListener("pointerleave",this),(r=d.window)==null||r.addEventListener("pointermove",this)},Hi=new WeakSet,Bo=function(){var e;(e=d.window)==null||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},Fi=new WeakSet,$o=function(){var e,r;this.removeEventListener("pointerleave",this),(e=d.window)==null||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(r=s(this,X).activeSegment)==null||r.style.removeProperty("transform")},Bi=new WeakSet,Vo=function(e){this.toggleAttribute("dragging",e.buttons===1||e.pointerType!=="mouse"),this.updatePointerBar(e),f(this,Ni,Ho).call(this,e),this.dragging&&(e.pointerType!=="mouse"||!s(this,wt))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))};d.customElements.get("media-chrome-range")||d.customElements.define("media-chrome-range",Me);var Ko=Me;var Go=b.createElement("template");Go.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    ::slotted(media-time-range),
    ::slotted(media-volume-range) {
      min-height: 100%;
    }

    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }

    ::slotted([role="menu"]) {
      position: absolute;
    }
  </style>

  <slot></slot>
`;var re,$i=class extends d.HTMLElement{constructor(){super();u(this,re,void 0);this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Go.content.cloneNode(!0)))}static get observedAttributes(){return[S.MEDIA_CONTROLLER]}attributeChangedCallback(e,r,n){var o,l,m,c,h;e===S.MEDIA_CONTROLLER&&(r&&((l=(o=s(this,re))==null?void 0:o.unassociateElement)==null||l.call(o,this),p(this,re,null)),n&&this.isConnected&&(p(this,re,(m=this.getRootNode())==null?void 0:m.getElementById(n)),(h=(c=s(this,re))==null?void 0:c.associateElement)==null||h.call(c,this)))}connectedCallback(){var r,n,o;let e=this.getAttribute(S.MEDIA_CONTROLLER);e&&(p(this,re,(r=this.getRootNode())==null?void 0:r.getElementById(e)),(o=(n=s(this,re))==null?void 0:n.associateElement)==null||o.call(n,this))}disconnectedCallback(){var e,r;(r=(e=s(this,re))==null?void 0:e.unassociateElement)==null||r.call(e,this),p(this,re,null)}};re=new WeakMap;d.customElements.get("media-control-bar")||d.customElements.define("media-control-bar",$i);var Wo=$i;var qo=b.createElement("template");qo.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;var ne,oe=class extends d.HTMLElement{constructor(){super();u(this,ne,void 0);this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(qo.content.cloneNode(!0)))}static get observedAttributes(){return[S.MEDIA_CONTROLLER]}attributeChangedCallback(e,r,n){var o,l,m,c,h;e===S.MEDIA_CONTROLLER&&(r&&((l=(o=s(this,ne))==null?void 0:o.unassociateElement)==null||l.call(o,this),p(this,ne,null)),n&&this.isConnected&&(p(this,ne,(m=this.getRootNode())==null?void 0:m.getElementById(n)),(h=(c=s(this,ne))==null?void 0:c.associateElement)==null||h.call(c,this)))}connectedCallback(){var n,o,l;let{style:e}=O(this.shadowRoot,":host");e.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(S.MEDIA_CONTROLLER);r&&(p(this,ne,(n=this.getRootNode())==null?void 0:n.getElementById(r)),(l=(o=s(this,ne))==null?void 0:o.associateElement)==null||l.call(o,this))}disconnectedCallback(){var e,r;(r=(e=s(this,ne))==null?void 0:e.unassociateElement)==null||r.call(e,this),p(this,ne,null)}};ne=new WeakMap;d.customElements.get("media-text-display")||d.customElements.define("media-text-display",oe);var rt,Vi=class extends oe{constructor(){super();u(this,rt,void 0);p(this,rt,this.shadowRoot.querySelector("slot")),s(this,rt).textContent=J(0)}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_DURATION]}attributeChangedCallback(e,r,n){e===a.MEDIA_DURATION&&(s(this,rt).textContent=J(+n)),super.attributeChangedCallback(e,r,n)}get mediaDuration(){return D(this,a.MEDIA_DURATION)}set mediaDuration(e){H(this,a.MEDIA_DURATION,e)}};rt=new WeakMap;d.customElements.get("media-duration-display")||d.customElements.define("media-duration-display",Vi);var Yo=Vi;function zs(i){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${i.mediaerrorcode}" id="content">
      ${jo({code:+i.mediaerrorcode,message:i.mediaerrormessage})}
    </slot>
  `}function Xs(i){return i.code&&Ir(i)!==null}function jo(i){var n;let{title:t,message:e}=(n=Ir(i))!=null?n:{},r="";return t&&(r+=`<slot name="error-${i.code}-title"><h3>${t}</h3></slot>`),e&&(r+=`<slot name="error-${i.code}-message"><p>${e}</p></slot>`),r}var Qo=[a.MEDIA_ERROR_CODE,a.MEDIA_ERROR_MESSAGE],Kt,nt=class extends Se{constructor(){super(...arguments);u(this,Kt,null)}static get observedAttributes(){return[...super.observedAttributes,...Qo]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,r,n){var l;if(super.attributeChangedCallback(e,r,n),!Qo.includes(e))return;let o=(l=this.mediaError)!=null?l:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=Xs(o),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(o))}get mediaError(){return s(this,Kt)}set mediaError(e){p(this,Kt,e)}get mediaErrorCode(){return D(this,"mediaerrorcode")}set mediaErrorCode(e){H(this,"mediaerrorcode",e)}get mediaErrorMessage(){return w(this,"mediaerrormessage")}set mediaErrorMessage(e){x(this,"mediaerrormessage",e)}};Kt=new WeakMap,nt.getSlotTemplateHTML=zs,nt.formatErrorMessage=jo;d.customElements.get("media-error-dialog")||d.customElements.define("media-error-dialog",nt);var zo=nt;var Zs=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,Js=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,Zo=b.createElement("template");Zo.innerHTML=`
  <style>
    :host([${a.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    
    :host(:not([${a.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${a.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
    :host(:not([${a.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${Zs}</slot>
    <slot name="exit">${Js}</slot>
  </slot>
`;var el=`
  <slot name="tooltip-enter">${U.ENTER_FULLSCREEN}</slot>
  <slot name="tooltip-exit">${U.EXIT_FULLSCREEN}</slot>
`,Xo=i=>{let t=i.mediaIsFullscreen?N.EXIT_FULLSCREEN():N.ENTER_FULLSCREEN();i.setAttribute("aria-label",t)},Ki=class extends B{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_IS_FULLSCREEN,a.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(t={}){super({slotTemplate:Zo,tooltipContent:el,...t})}connectedCallback(){super.connectedCallback(),Xo(this)}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t===a.MEDIA_IS_FULLSCREEN&&Xo(this)}get mediaFullscreenUnavailable(){return w(this,a.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(t){x(this,a.MEDIA_FULLSCREEN_UNAVAILABLE,t)}get mediaIsFullscreen(){return k(this,a.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(t){_(this,a.MEDIA_IS_FULLSCREEN,t)}handleClick(){let t=this.mediaIsFullscreen?E.MEDIA_EXIT_FULLSCREEN_REQUEST:E.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new d.CustomEvent(t,{composed:!0,bubbles:!0}))}};d.customElements.get("media-fullscreen-button")||d.customElements.define("media-fullscreen-button",Ki);var Jo=Ki;var{MEDIA_TIME_IS_LIVE:Gi,MEDIA_PAUSED:Gt}=a,{MEDIA_SEEK_TO_LIVE_REQUEST:tl,MEDIA_PLAY_REQUEST:il}=E,rl='<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>',ta=b.createElement("template");ta.innerHTML=`
  <style>
  :host { --media-tooltip-display: none; }
  
  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${Gi}]:not([${Gt}])) slot[name=indicator] > *,
  :host([${Gi}]:not([${Gt}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${Gi}]:not([${Gt}])) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator">${rl}</slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;var ea=i=>{let t=i.mediaPaused||!i.mediaTimeIsLive,e=t?N.SEEK_LIVE():N.PLAYING_LIVE();i.setAttribute("aria-label",e),t?i.removeAttribute("aria-disabled"):i.setAttribute("aria-disabled","true")},Wi=class extends B{static get observedAttributes(){return[...super.observedAttributes,Gt,Gi]}constructor(t={}){super({slotTemplate:ta,...t})}connectedCallback(){ea(this),super.connectedCallback()}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),ea(this)}get mediaPaused(){return k(this,a.MEDIA_PAUSED)}set mediaPaused(t){_(this,a.MEDIA_PAUSED,t)}get mediaTimeIsLive(){return k(this,a.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(t){_(this,a.MEDIA_TIME_IS_LIVE,t)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new d.CustomEvent(tl,{composed:!0,bubbles:!0})),this.hasAttribute(Gt)&&this.dispatchEvent(new d.CustomEvent(il,{composed:!0,bubbles:!0})))}};d.customElements.get("media-live-button")||d.customElements.define("media-live-button",Wi);var ia=Wi;var ra={LOADING_DELAY:"loadingdelay"},na=500,oa=b.createElement("template"),nl=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;oa.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${na}ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${a.MEDIA_LOADING}]:not([${a.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${a.MEDIA_LOADING}]:not([${a.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${a.MEDIA_LOADING}]:not([${a.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">${nl}</slot>
<div id="status" role="status" aria-live="polite">${G.MEDIA_LOADING()}</div>
`;var ae,Wt,qi=class extends d.HTMLElement{constructor(){super();u(this,ae,void 0);u(this,Wt,na);if(!this.shadowRoot){let e=this.attachShadow({mode:"open"}),r=oa.content.cloneNode(!0);e.appendChild(r)}}static get observedAttributes(){return[S.MEDIA_CONTROLLER,a.MEDIA_PAUSED,a.MEDIA_LOADING,ra.LOADING_DELAY]}attributeChangedCallback(e,r,n){var o,l,m,c,h;e===ra.LOADING_DELAY&&r!==n?this.loadingDelay=Number(n):e===S.MEDIA_CONTROLLER&&(r&&((l=(o=s(this,ae))==null?void 0:o.unassociateElement)==null||l.call(o,this),p(this,ae,null)),n&&this.isConnected&&(p(this,ae,(m=this.getRootNode())==null?void 0:m.getElementById(n)),(h=(c=s(this,ae))==null?void 0:c.associateElement)==null||h.call(c,this)))}connectedCallback(){var r,n,o;let e=this.getAttribute(S.MEDIA_CONTROLLER);e&&(p(this,ae,(r=this.getRootNode())==null?void 0:r.getElementById(e)),(o=(n=s(this,ae))==null?void 0:n.associateElement)==null||o.call(n,this))}disconnectedCallback(){var e,r;(r=(e=s(this,ae))==null?void 0:e.unassociateElement)==null||r.call(e,this),p(this,ae,null)}get loadingDelay(){return s(this,Wt)}set loadingDelay(e){p(this,Wt,e);let{style:r}=O(this.shadowRoot,":host");r.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return k(this,a.MEDIA_PAUSED)}set mediaPaused(e){_(this,a.MEDIA_PAUSED,e)}get mediaLoading(){return k(this,a.MEDIA_LOADING)}set mediaLoading(e){_(this,a.MEDIA_LOADING,e)}};ae=new WeakMap,Wt=new WeakMap;d.customElements.get("media-loading-indicator")||d.customElements.define("media-loading-indicator",qi);var aa=qi;var{MEDIA_VOLUME_LEVEL:He}=a,ol=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,sa=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,al=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,da=b.createElement("template");da.innerHTML=`
  <style>
  
  :host(:not([${He}])) slot[name=icon] slot:not([name=high]), 
  :host([${He}=high]) slot[name=icon] slot:not([name=high]) {
    display: none !important;
  }

  :host([${He}=off]) slot[name=icon] slot:not([name=off]) {
    display: none !important;
  }

  :host([${He}=low]) slot[name=icon] slot:not([name=low]) {
    display: none !important;
  }

  :host([${He}=medium]) slot[name=icon] slot:not([name=medium]) {
    display: none !important;
  }

  :host(:not([${He}=off])) slot[name=tooltip-unmute],
  :host([${He}=off]) slot[name=tooltip-mute] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="off">${ol}</slot>
    <slot name="low">${sa}</slot>
    <slot name="medium">${sa}</slot>
    <slot name="high">${al}</slot>
  </slot>
`;var sl=`
  <slot name="tooltip-mute">${U.MUTE}</slot>
  <slot name="tooltip-unmute">${U.UNMUTE}</slot>
`,la=i=>{let e=i.mediaVolumeLevel==="off"?N.UNMUTE():N.MUTE();i.setAttribute("aria-label",e)},Yi=class extends B{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_VOLUME_LEVEL]}constructor(t={}){super({slotTemplate:da,tooltipContent:sl,...t})}connectedCallback(){la(this),super.connectedCallback()}attributeChangedCallback(t,e,r){t===a.MEDIA_VOLUME_LEVEL&&la(this),super.attributeChangedCallback(t,e,r)}get mediaVolumeLevel(){return w(this,a.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(t){x(this,a.MEDIA_VOLUME_LEVEL,t)}handleClick(){let t=this.mediaVolumeLevel==="off"?E.MEDIA_UNMUTE_REQUEST:E.MEDIA_MUTE_REQUEST;this.dispatchEvent(new d.CustomEvent(t,{composed:!0,bubbles:!0}))}};d.customElements.get("media-mute-button")||d.customElements.define("media-mute-button",Yi);var ma=Yi;var ca=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,pa=b.createElement("template");pa.innerHTML=`
  <style>
  :host([${a.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  
  :host(:not([${a.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${a.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
  :host(:not([${a.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${ca}</slot>
    <slot name="exit">${ca}</slot>
  </slot>
`;var ll=`
  <slot name="tooltip-enter">${U.ENTER_PIP}</slot>
  <slot name="tooltip-exit">${U.EXIT_PIP}</slot>
`,ua=i=>{let t=i.mediaIsPip?N.EXIT_PIP():N.ENTER_PIP();i.setAttribute("aria-label",t)},Qi=class extends B{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_IS_PIP,a.MEDIA_PIP_UNAVAILABLE]}constructor(t={}){super({slotTemplate:pa,tooltipContent:ll,...t})}connectedCallback(){ua(this),super.connectedCallback()}attributeChangedCallback(t,e,r){t===a.MEDIA_IS_PIP&&ua(this),super.attributeChangedCallback(t,e,r)}get mediaPipUnavailable(){return w(this,a.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(t){x(this,a.MEDIA_PIP_UNAVAILABLE,t)}get mediaIsPip(){return k(this,a.MEDIA_IS_PIP)}set mediaIsPip(t){_(this,a.MEDIA_IS_PIP,t)}handleClick(){let t=this.mediaIsPip?E.MEDIA_EXIT_PIP_REQUEST:E.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new d.CustomEvent(t,{composed:!0,bubbles:!0}))}};d.customElements.get("media-pip-button")||d.customElements.define("media-pip-button",Qi);var ha=Qi;var Vr={RATES:"rates"},dl=[1,1.2,1.5,1.7,2],ji=1,Ea=b.createElement("template");Ea.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;var Fe,zi=class extends B{constructor(e={}){super({slotTemplate:Ea,tooltipContent:U.PLAYBACK_RATE,...e});u(this,Fe,new Ze(this,Vr.RATES,{defaultValue:dl}));this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${ji}x`}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_PLAYBACK_RATE,Vr.RATES]}attributeChangedCallback(e,r,n){if(super.attributeChangedCallback(e,r,n),e===Vr.RATES&&(s(this,Fe).value=n),e===a.MEDIA_PLAYBACK_RATE){let o=n?+n:Number.NaN,l=Number.isNaN(o)?ji:o;this.container.innerHTML=`${l}x`,this.setAttribute("aria-label",G.PLAYBACK_RATE({playbackRate:l}))}}get rates(){return s(this,Fe)}set rates(e){e?Array.isArray(e)&&(s(this,Fe).value=e.join(" ")):s(this,Fe).value=""}get mediaPlaybackRate(){return D(this,a.MEDIA_PLAYBACK_RATE,ji)}set mediaPlaybackRate(e){H(this,a.MEDIA_PLAYBACK_RATE,e)}handleClick(){var o,l;let e=Array.from(this.rates.values(),m=>+m).sort((m,c)=>m-c),r=(l=(o=e.find(m=>m>this.mediaPlaybackRate))!=null?o:e[0])!=null?l:ji,n=new d.CustomEvent(E.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(n)}};Fe=new WeakMap;d.customElements.get("media-playback-rate-button")||d.customElements.define("media-playback-rate-button",zi);var ba=zi;var ml=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,cl=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,fa=b.createElement("template");fa.innerHTML=`
  <style>
    :host([${a.MEDIA_PAUSED}]) slot[name=pause],
    :host(:not([${a.MEDIA_PAUSED}])) slot[name=play] {
      display: none !important;
    }

    :host([${a.MEDIA_PAUSED}]) slot[name=tooltip-pause],
    :host(:not([${a.MEDIA_PAUSED}])) slot[name=tooltip-play] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="play">${ml}</slot>
    <slot name="pause">${cl}</slot>
  </slot>
`;var ul=`
  <slot name="tooltip-play">${U.PLAY}</slot>
  <slot name="tooltip-pause">${U.PAUSE}</slot>
`,ga=i=>{let t=i.mediaPaused?N.PLAY():N.PAUSE();i.setAttribute("aria-label",t)},Xi=class extends B{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_PAUSED,a.MEDIA_ENDED]}constructor(t={}){super({slotTemplate:fa,tooltipContent:ul,...t})}connectedCallback(){ga(this),super.connectedCallback()}attributeChangedCallback(t,e,r){t===a.MEDIA_PAUSED&&ga(this),super.attributeChangedCallback(t,e,r)}get mediaPaused(){return k(this,a.MEDIA_PAUSED)}set mediaPaused(t){_(this,a.MEDIA_PAUSED,t)}handleClick(){let t=this.mediaPaused?E.MEDIA_PLAY_REQUEST:E.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new d.CustomEvent(t,{composed:!0,bubbles:!0}))}};d.customElements.get("media-play-button")||d.customElements.define("media-play-button",Xi);var va=Xi;var ce={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},Aa=b.createElement("template");Aa.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img part="poster img" aria-hidden="true" id="image"/>
`;var pl=i=>{i.style.removeProperty("background-image")},hl=(i,t)=>{i.style["background-image"]=`url('${t}')`},Zi=class extends d.HTMLElement{static get observedAttributes(){return[ce.PLACEHOLDER_SRC,ce.SRC]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Aa.content.cloneNode(!0))),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(t,e,r){t===ce.SRC&&(r==null?this.image.removeAttribute(ce.SRC):this.image.setAttribute(ce.SRC,r)),t===ce.PLACEHOLDER_SRC&&(r==null?pl(this.image):hl(this.image,r))}get placeholderSrc(){return w(this,ce.PLACEHOLDER_SRC)}set placeholderSrc(t){x(this,ce.SRC,t)}get src(){return w(this,ce.SRC)}set src(t){x(this,ce.SRC,t)}};d.customElements.get("media-poster-image")||d.customElements.define("media-poster-image",Zi);var Ta=Zi;var qt,Ji=class extends oe{constructor(){super();u(this,qt,void 0);p(this,qt,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(e,r,n){super.attributeChangedCallback(e,r,n),e===a.MEDIA_PREVIEW_CHAPTER&&n!==r&&n!=null&&(s(this,qt).textContent=n,n!==""?this.setAttribute("aria-valuetext",`chapter: ${n}`):this.removeAttribute("aria-valuetext"))}get mediaPreviewChapter(){return w(this,a.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){x(this,a.MEDIA_PREVIEW_CHAPTER,e)}};qt=new WeakMap;d.customElements.get("media-preview-chapter-display")||d.customElements.define("media-preview-chapter-display",Ji);var Ia=Ji;var Sa=b.createElement("template");Sa.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;var se,er=class extends d.HTMLElement{constructor(){super();u(this,se,void 0);this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Sa.content.cloneNode(!0)))}static get observedAttributes(){return[S.MEDIA_CONTROLLER,a.MEDIA_PREVIEW_IMAGE,a.MEDIA_PREVIEW_COORDS]}connectedCallback(){var r,n,o;let e=this.getAttribute(S.MEDIA_CONTROLLER);e&&(p(this,se,(r=this.getRootNode())==null?void 0:r.getElementById(e)),(o=(n=s(this,se))==null?void 0:n.associateElement)==null||o.call(n,this))}disconnectedCallback(){var e,r;(r=(e=s(this,se))==null?void 0:e.unassociateElement)==null||r.call(e,this),p(this,se,null)}attributeChangedCallback(e,r,n){var o,l,m,c,h;[a.MEDIA_PREVIEW_IMAGE,a.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===S.MEDIA_CONTROLLER&&(r&&((l=(o=s(this,se))==null?void 0:o.unassociateElement)==null||l.call(o,this),p(this,se,null)),n&&this.isConnected&&(p(this,se,(m=this.getRootNode())==null?void 0:m.getElementById(n)),(h=(c=s(this,se))==null?void 0:c.associateElement)==null||h.call(c,this)))}get mediaPreviewImage(){return w(this,a.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){x(this,a.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(a.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(r=>+r)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(a.MEDIA_PREVIEW_COORDS);return}this.setAttribute(a.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,r=this.mediaPreviewImage;if(!(e&&r))return;let[n,o,l,m]=e,c=r.split("#")[0],h=getComputedStyle(this),{maxWidth:A,maxHeight:T,minWidth:v,minHeight:g}=h,L=Math.min(parseInt(A)/l,parseInt(T)/m),I=Math.max(parseInt(v)/l,parseInt(g)/m),y=L<1,R=y?L:I>1?I:1,{style:K}=O(this.shadowRoot,":host"),ue=O(this.shadowRoot,"img").style,be=this.shadowRoot.querySelector("img"),ht=y?"min":"max";K.setProperty(`${ht}-width`,"initial","important"),K.setProperty(`${ht}-height`,"initial","important"),K.width=`${l*R}px`,K.height=`${m*R}px`;let Ye=()=>{ue.width=`${this.imgWidth*R}px`,ue.height=`${this.imgHeight*R}px`,ue.display="block"};be.src!==c&&(be.onload=()=>{this.imgWidth=be.naturalWidth,this.imgHeight=be.naturalHeight,Ye()},be.src=c,Ye()),Ye(),ue.transform=`translate(-${n*R}px, -${o*R}px)`}};se=new WeakMap;d.customElements.get("media-preview-thumbnail")||d.customElements.define("media-preview-thumbnail",er);var Ma=er;var ot,tr=class extends oe{constructor(){super();u(this,ot,void 0);p(this,ot,this.shadowRoot.querySelector("slot")),s(this,ot).textContent=J(0)}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,r,n){super.attributeChangedCallback(e,r,n),e===a.MEDIA_PREVIEW_TIME&&n!=null&&(s(this,ot).textContent=J(parseFloat(n)))}get mediaPreviewTime(){return D(this,a.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){H(this,a.MEDIA_PREVIEW_TIME,e)}};ot=new WeakMap;d.customElements.get("media-preview-time-display")||d.customElements.define("media-preview-time-display",tr);var ya=tr;var at={SEEK_OFFSET:"seekoffset"},ir=30,El=`<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">${ir}</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg>`,_a=b.createElement("template");_a.innerHTML=`
  <slot name="icon">${El}</slot>
`;var bl=0,rr=class extends B{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_CURRENT_TIME,at.SEEK_OFFSET]}constructor(t={}){super({slotTemplate:_a,tooltipContent:U.SEEK_BACKWARD,...t})}connectedCallback(){this.seekOffset=D(this,at.SEEK_OFFSET,ir),super.connectedCallback()}attributeChangedCallback(t,e,r){t===at.SEEK_OFFSET&&(this.seekOffset=D(this,at.SEEK_OFFSET,ir)),super.attributeChangedCallback(t,e,r)}get seekOffset(){return D(this,at.SEEK_OFFSET,ir)}set seekOffset(t){H(this,at.SEEK_OFFSET,t),this.setAttribute("aria-label",N.SEEK_BACK_N_SECS({seekOffset:this.seekOffset})),hi(Ei(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return D(this,a.MEDIA_CURRENT_TIME,bl)}set mediaCurrentTime(t){H(this,a.MEDIA_CURRENT_TIME,t)}handleClick(){let t=Math.max(this.mediaCurrentTime-this.seekOffset,0),e=new d.CustomEvent(E.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(e)}};d.customElements.get("media-seek-backward-button")||d.customElements.define("media-seek-backward-button",rr);var La=rr;var st={SEEK_OFFSET:"seekoffset"},nr=30,gl=`<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">${nr}</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg>`,Ra=b.createElement("template");Ra.innerHTML=`
  <slot name="icon">${gl}</slot>
`;var fl=0,or=class extends B{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_CURRENT_TIME,st.SEEK_OFFSET]}constructor(t={}){super({slotTemplate:Ra,tooltipContent:U.SEEK_FORWARD,...t})}connectedCallback(){this.seekOffset=D(this,st.SEEK_OFFSET,nr),super.connectedCallback()}attributeChangedCallback(t,e,r){t===st.SEEK_OFFSET&&(this.seekOffset=D(this,st.SEEK_OFFSET,nr)),super.attributeChangedCallback(t,e,r)}get seekOffset(){return D(this,st.SEEK_OFFSET,nr)}set seekOffset(t){H(this,st.SEEK_OFFSET,t),this.setAttribute("aria-label",N.SEEK_FORWARD_N_SECS({seekOffset:this.seekOffset})),hi(Ei(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return D(this,a.MEDIA_CURRENT_TIME,fl)}set mediaCurrentTime(t){H(this,a.MEDIA_CURRENT_TIME,t)}handleClick(){let t=this.mediaCurrentTime+this.seekOffset,e=new d.CustomEvent(E.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(e)}};d.customElements.get("media-seek-forward-button")||d.customElements.define("media-seek-forward-button",or);var ka=or;var le={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},Ca=[...Object.values(le),a.MEDIA_CURRENT_TIME,a.MEDIA_DURATION,a.MEDIA_SEEKABLE],xa=["Enter"," "],vl="&nbsp;/&nbsp;",Da=(i,{timesSep:t=vl}={})=>{var c,h;let e=i.hasAttribute(le.REMAINING),r=i.hasAttribute(le.SHOW_DURATION),n=(c=i.mediaCurrentTime)!=null?c:0,[,o]=(h=i.mediaSeekable)!=null?h:[],l=0;Number.isFinite(i.mediaDuration)?l=i.mediaDuration:Number.isFinite(o)&&(l=o);let m=e?J(0-(l-n)):J(n);return r?`${m}${t}${J(l)}`:m},Al="video not loaded, unknown time.",Tl=i=>{var h;let t=i.mediaCurrentTime,[,e]=(h=i.mediaSeekable)!=null?h:[],r=null;if(Number.isFinite(i.mediaDuration)?r=i.mediaDuration:Number.isFinite(e)&&(r=e),t==null||r===null){i.setAttribute("aria-valuetext",Al);return}let n=i.hasAttribute(le.REMAINING),o=i.hasAttribute(le.SHOW_DURATION),l=n?fe(0-(r-t)):fe(t);if(!o){i.setAttribute("aria-valuetext",l);return}let m=fe(r),c=`${l} of ${m}`;i.setAttribute("aria-valuetext",c)},Be,ar=class extends oe{constructor(){super();u(this,Be,void 0);p(this,Be,this.shadowRoot.querySelector("slot")),s(this,Be).innerHTML=`${Da(this)}`}static get observedAttributes(){return[...super.observedAttributes,...Ca,"disabled"]}connectedCallback(){let{style:e}=O(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","pointer"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",G.PLAYBACK_TIME());let r=n=>{let{key:o}=n;if(!xa.includes(o)){this.removeEventListener("keyup",r);return}this.toggleTimeDisplay()};this.addEventListener("keydown",n=>{let{metaKey:o,altKey:l,key:m}=n;if(o||l||!xa.includes(m)){this.removeEventListener("keyup",r);return}this.addEventListener("keyup",r)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,r,n){Ca.includes(e)?this.update():e==="disabled"&&n!==r&&(n==null?this.enable():this.disable()),super.attributeChangedCallback(e,r,n)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return k(this,le.REMAINING)}set remaining(e){_(this,le.REMAINING,e)}get showDuration(){return k(this,le.SHOW_DURATION)}set showDuration(e){_(this,le.SHOW_DURATION,e)}get noToggle(){return k(this,le.NO_TOGGLE)}set noToggle(e){_(this,le.NO_TOGGLE,e)}get mediaDuration(){return D(this,a.MEDIA_DURATION)}set mediaDuration(e){H(this,a.MEDIA_DURATION,e)}get mediaCurrentTime(){return D(this,a.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){H(this,a.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(a.MEDIA_SEEKABLE);if(e)return e.split(":").map(r=>+r)}set mediaSeekable(e){if(e==null){this.removeAttribute(a.MEDIA_SEEKABLE);return}this.setAttribute(a.MEDIA_SEEKABLE,e.join(":"))}update(){let e=Da(this);Tl(this),e!==s(this,Be).innerHTML&&(s(this,Be).innerHTML=e)}};Be=new WeakMap;d.customElements.get("media-time-display")||d.customElements.define("media-time-display",ar);var wa=ar;var $e,Yt,Ve,lt,Qt,jt,zt,Ke,ye,Xt,sr=class{constructor(t,e,r){u(this,$e,void 0);u(this,Yt,void 0);u(this,Ve,void 0);u(this,lt,void 0);u(this,Qt,void 0);u(this,jt,void 0);u(this,zt,void 0);u(this,Ke,void 0);u(this,ye,0);u(this,Xt,(t=performance.now())=>{p(this,ye,requestAnimationFrame(s(this,Xt))),p(this,lt,performance.now()-s(this,Ve));let e=1e3/this.fps;if(s(this,lt)>e){p(this,Ve,t-s(this,lt)%e);let r=1e3/((t-s(this,Yt))/++_n(this,Qt)._),n=(t-s(this,jt))/1e3/this.duration,o=s(this,zt)+n*this.playbackRate;o-s(this,$e).valueAsNumber>0?p(this,Ke,this.playbackRate/this.duration/r):(p(this,Ke,.995*s(this,Ke)),o=s(this,$e).valueAsNumber+s(this,Ke)),this.callback(o)}});p(this,$e,t),this.callback=e,this.fps=r}start(){s(this,ye)===0&&(p(this,Ve,performance.now()),p(this,Yt,s(this,Ve)),p(this,Qt,0),s(this,Xt).call(this))}stop(){s(this,ye)!==0&&(cancelAnimationFrame(s(this,ye)),p(this,ye,0))}update({start:t,duration:e,playbackRate:r}){let n=t-s(this,$e).valueAsNumber,o=Math.abs(e-this.duration);(n>0||n<-.03||o>=.5)&&this.callback(t),p(this,zt,t),p(this,jt,performance.now()),this.duration=e,this.playbackRate=r}};$e=new WeakMap,Yt=new WeakMap,Ve=new WeakMap,lt=new WeakMap,Qt=new WeakMap,jt=new WeakMap,zt=new WeakMap,Ke=new WeakMap,ye=new WeakMap,Xt=new WeakMap;var Il="video not loaded, unknown time.",Sl=i=>{let t=i.range,e=fe(+Ua(i)),r=fe(+i.mediaSeekableEnd),n=e&&r?`${e} of ${r}`:Il;t.setAttribute("aria-valuetext",n)},Pa=b.createElement("template");Pa.innerHTML=`
  <style>
    :host {
      --media-box-border-radius: 4px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
      --media-preview-border-radius: var(--media-box-border-radius);
      --media-box-arrow-offset: var(--media-box-border-radius);
      --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      --_preview-background: var(--media-preview-background, var(--_control-background));

      
      contain: layout;
    }

    #buffered {
      background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #preview-rail,
    #current-rail {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
      will-change: transform;
    }

    [part~="box"] {
      width: min-content;
      
      position: absolute;
      bottom: 100%;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="current-box"] {
      display: var(--media-current-box-display, var(--media-box-display, flex));
      margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
      visibility: hidden;
    }

    [part~="preview-box"] {
      display: var(--media-preview-box-display, var(--media-box-display, flex));
      margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host(:is([${a.MEDIA_PREVIEW_IMAGE}], [${a.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    @media (hover: hover) {
      :host(:is([${a.MEDIA_PREVIEW_IMAGE}], [${a.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--_preview-background));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${a.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
    :host([${a.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    @media (hover: hover) {
      :host([${a.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
      :host([${a.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      :host([${a.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }
    }

    media-preview-chapter-display,
    ::slotted(media-preview-chapter-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      visibility: hidden;
      
      transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-chapter-background, var(--_preview-background));
      border-radius: var(--media-preview-chapter-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-chapter-padding, 3.5px 9px);
      margin: var(--media-preview-chapter-margin, 0 0 5px);
      text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${a.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
    :host([${a.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-chapter-border-radius, 0);
      padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
      margin: var(--media-preview-chapter-margin, 0);
      min-width: 100%;
    }

    media-preview-chapter-display[${a.MEDIA_PREVIEW_CHAPTER}],
    ::slotted(media-preview-chapter-display[${a.MEDIA_PREVIEW_CHAPTER}]) {
      visibility: visible;
    }

    media-preview-chapter-display:not([aria-valuetext]),
    ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
      display: none;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display),
    media-time-display,
    ::slotted(media-time-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--_preview-background));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 3.5px 9px);
      margin: var(--media-preview-time-margin, 0);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50%)
      ));
    }

    :host([${a.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${a.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
      min-width: 100%;
    }

    :host([${a.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }

    [part~="arrow"],
    ::slotted([part~="arrow"]) {
      display: var(--media-box-arrow-display, inline-block);
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
      ));
      
      border-color: transparent;
      border-top-color: var(--media-box-arrow-background, var(--_control-background));
      border-width: var(--media-box-arrow-border-width,
        var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
      border-style: solid;
      justify-content: center;
      height: 0;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-chapter-display></media-preview-chapter-display>
      <media-preview-time-display></media-preview-time-display>
      <slot name="preview-arrow"><div part="arrow"></div></slot>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;var lr=(i,t=i.mediaCurrentTime)=>{let e=Number.isFinite(i.mediaSeekableStart)?i.mediaSeekableStart:0,r=Number.isFinite(i.mediaDuration)?i.mediaDuration:i.mediaSeekableEnd;if(Number.isNaN(r))return 0;let n=(t-e)/(r-e);return Math.max(0,Math.min(n,1))},Ua=(i,t=i.range.valueAsNumber)=>{let e=Number.isFinite(i.mediaSeekableStart)?i.mediaSeekableStart:0,r=Number.isFinite(i.mediaDuration)?i.mediaDuration:i.mediaSeekableEnd;return Number.isNaN(r)?0:t*(r-e)+e},Ge,_e,Jt,dt,ei,ti,mt,ct,We,qe,Zt,cr,Na,ur,ii,Kr,ri,Gr,ni,Wr,pr,Oa,ut,dr,hr,Ha,mr=class extends Me{constructor(){super();u(this,qe);u(this,cr);u(this,ii);u(this,ri);u(this,ni);u(this,pr);u(this,ut);u(this,hr);u(this,Ge,void 0);u(this,_e,void 0);u(this,Jt,void 0);u(this,dt,void 0);u(this,ei,void 0);u(this,ti,void 0);u(this,mt,void 0);u(this,ct,void 0);u(this,We,void 0);u(this,ur,e=>{this.dragging||(je(e)&&(this.range.valueAsNumber=e),this.updateBar())});this.container.appendChild(Pa.content.cloneNode(!0)),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),p(this,Jt,this.shadowRoot.querySelectorAll('[part~="box"]')),p(this,ei,this.shadowRoot.querySelector('[part~="preview-box"]')),p(this,ti,this.shadowRoot.querySelector('[part~="current-box"]'));let r=getComputedStyle(this);p(this,mt,parseInt(r.getPropertyValue("--media-box-padding-left"))),p(this,ct,parseInt(r.getPropertyValue("--media-box-padding-right"))),p(this,_e,new sr(this.range,s(this,ur),60))}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_PAUSED,a.MEDIA_DURATION,a.MEDIA_SEEKABLE,a.MEDIA_CURRENT_TIME,a.MEDIA_PREVIEW_IMAGE,a.MEDIA_PREVIEW_TIME,a.MEDIA_PREVIEW_CHAPTER,a.MEDIA_BUFFERED,a.MEDIA_PLAYBACK_RATE,a.MEDIA_LOADING,a.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",G.SEEK()),f(this,qe,Zt).call(this),p(this,Ge,this.getRootNode()),(e=s(this,Ge))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),f(this,qe,Zt).call(this),(e=s(this,Ge))==null||e.removeEventListener("transitionstart",this),p(this,Ge,null)}attributeChangedCallback(e,r,n){super.attributeChangedCallback(e,r,n),r!=n&&(e===a.MEDIA_CURRENT_TIME||e===a.MEDIA_PAUSED||e===a.MEDIA_ENDED||e===a.MEDIA_LOADING||e===a.MEDIA_DURATION||e===a.MEDIA_SEEKABLE?(s(this,_e).update({start:lr(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),f(this,qe,Zt).call(this),Sl(this)):e===a.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===a.MEDIA_DURATION||e===a.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=s(this,We),this.updateBar()))}get mediaChaptersCues(){return s(this,We)}set mediaChaptersCues(e){var r;p(this,We,e),this.updateSegments((r=s(this,We))==null?void 0:r.map(n=>({start:lr(this,n.startTime),end:lr(this,n.endTime)})))}get mediaPaused(){return k(this,a.MEDIA_PAUSED)}set mediaPaused(e){_(this,a.MEDIA_PAUSED,e)}get mediaLoading(){return k(this,a.MEDIA_LOADING)}set mediaLoading(e){_(this,a.MEDIA_LOADING,e)}get mediaDuration(){return D(this,a.MEDIA_DURATION)}set mediaDuration(e){H(this,a.MEDIA_DURATION,e)}get mediaCurrentTime(){return D(this,a.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){H(this,a.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return D(this,a.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){H(this,a.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(a.MEDIA_BUFFERED);return e?e.split(" ").map(r=>r.split(":").map(n=>+n)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(a.MEDIA_BUFFERED);return}let r=e.map(n=>n.join(":")).join(" ");this.setAttribute(a.MEDIA_BUFFERED,r)}get mediaSeekable(){let e=this.getAttribute(a.MEDIA_SEEKABLE);if(e)return e.split(":").map(r=>+r)}set mediaSeekable(e){if(e==null){this.removeAttribute(a.MEDIA_SEEKABLE);return}this.setAttribute(a.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var r;let[,e=this.mediaDuration]=(r=this.mediaSeekable)!=null?r:[];return e}get mediaSeekableStart(){var r;let[e=0]=(r=this.mediaSeekable)!=null?r:[];return e}get mediaPreviewImage(){return w(this,a.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){x(this,a.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return D(this,a.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){H(this,a.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return k(this,a.MEDIA_ENDED)}set mediaEnded(e){_(this,a.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var o;let e=this.mediaBuffered;if(!e.length)return;let r;if(this.mediaEnded)r=1;else{let l=this.mediaCurrentTime,[,m=this.mediaSeekableStart]=(o=e.find(([c,h])=>c<=l&&l<=h))!=null?o:[];r=lr(this,m)}let{style:n}=O(this.shadowRoot,"#buffered");n.setProperty("width",`${r*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let r=O(this.shadowRoot,"#current-rail"),n=O(this.shadowRoot,'[part~="current-box"]'),o=f(this,ii,Kr).call(this,s(this,ti)),l=f(this,ri,Gr).call(this,o,this.range.valueAsNumber),m=f(this,ni,Wr).call(this,o,this.range.valueAsNumber);r.style.transform=`translateX(${l})`,r.style.setProperty("--_range-width",`${o.range.width}`),n.style.setProperty("--_box-shift",`${m}`),n.style.setProperty("--_box-width",`${o.box.width}px`),n.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":f(this,hr,Ha).call(this);break;case"pointermove":f(this,pr,Oa).call(this,e);break;case"pointerup":case"pointerleave":f(this,ut,dr).call(this,null);break;case"transitionstart":de(e.target,this)&&setTimeout(()=>f(this,qe,Zt).call(this),0);break}}};Ge=new WeakMap,_e=new WeakMap,Jt=new WeakMap,dt=new WeakMap,ei=new WeakMap,ti=new WeakMap,mt=new WeakMap,ct=new WeakMap,We=new WeakMap,qe=new WeakSet,Zt=function(){f(this,cr,Na).call(this)?s(this,_e).start():s(this,_e).stop()},cr=new WeakSet,Na=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&bi(this)},ur=new WeakMap,ii=new WeakSet,Kr=function(e){var h;let n=((h=this.getAttribute("bounds")?ve(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?h:this).getBoundingClientRect(),o=this.range.getBoundingClientRect(),l=e.offsetWidth,m=-(o.left-n.left-l/2),c=n.right-o.left-l/2;return{box:{width:l,min:m,max:c},bounds:n,range:o}},ri=new WeakSet,Gr=function(e,r){let n=`${r*100}%`,{width:o,min:l,max:m}=e.box;if(!o)return n;if(Number.isNaN(l)||(n=`max(${`calc(1 / var(--_range-width) * 100 * ${l}% + var(--media-box-padding-left))`}, ${n})`),!Number.isNaN(m)){let h=`calc(1 / var(--_range-width) * 100 * ${m}% - var(--media-box-padding-right))`;n=`min(${n}, ${h})`}return n},ni=new WeakSet,Wr=function(e,r){let{width:n,min:o,max:l}=e.box,m=r*e.range.width;if(m<o+s(this,mt)){let c=e.range.left-e.bounds.left-s(this,mt);return`${m-n/2+c}px`}if(m>l-s(this,ct)){let c=e.bounds.right-e.range.right-s(this,ct);return`${m+n/2-c-e.range.width}px`}return 0},pr=new WeakSet,Oa=function(e){let r=[...s(this,Jt)].some(v=>e.composedPath().includes(v));if(!this.dragging&&(r||!e.composedPath().includes(this))){f(this,ut,dr).call(this,null);return}let n=this.mediaSeekableEnd;if(!n)return;let o=O(this.shadowRoot,"#preview-rail"),l=O(this.shadowRoot,'[part~="preview-box"]'),m=f(this,ii,Kr).call(this,s(this,ei)),c=(e.clientX-m.range.left)/m.range.width;c=Math.max(0,Math.min(1,c));let h=f(this,ri,Gr).call(this,m,c),A=f(this,ni,Wr).call(this,m,c);o.style.transform=`translateX(${h})`,o.style.setProperty("--_range-width",`${m.range.width}`),l.style.setProperty("--_box-shift",`${A}`),l.style.setProperty("--_box-width",`${m.box.width}px`);let T=Math.round(s(this,dt))-Math.round(c*n);Math.abs(T)<1&&c>.01&&c<.99||(p(this,dt,c*n),f(this,ut,dr).call(this,s(this,dt)))},ut=new WeakSet,dr=function(e){this.dispatchEvent(new d.CustomEvent(E.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},hr=new WeakSet,Ha=function(){s(this,_e).stop();let e=Ua(this);this.dispatchEvent(new d.CustomEvent(E.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))};d.customElements.get("media-time-range")||d.customElements.define("media-time-range",mr);var Fa=mr;var pt={PLACEMENT:"placement",BOUNDS:"bounds"},Ba=b.createElement("template");Ba.innerHTML=`
  <style>
    :host {
      --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
      --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
      --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
      --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
      --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
      position: relative;
      pointer-events: none;
      display: var(--media-tooltip-display, inline-flex);
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      z-index: var(--media-tooltip-z-index, 1);
      background: var(--_tooltip-background);
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      font: var(--media-font,
        var(--media-font-weight, 400)
        var(--media-font-size, 13px) /
        var(--media-text-content-height, var(--media-control-height, 18px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      padding: var(--media-tooltip-padding, .35em .7em);
      border: var(--media-tooltip-border, none);
      border-radius: var(--media-tooltip-border-radius, 5px);
      filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
      white-space: var(--media-tooltip-white-space, nowrap);
    }

    :host([hidden]) {
      display: none;
    }

    img, svg {
      display: inline-block;
    }

    #arrow {
      position: absolute;
      width: 0px;
      height: 0px;
      border-style: solid;
      display: var(--media-tooltip-arrow-display, block);
    }

    :host(:not([placement])),
    :host([placement="top"]) {
      position: absolute;
      bottom: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host(:not([placement])) #arrow,
    :host([placement="top"]) #arrow {
      top: 100%;
      left: 50%;
      border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
      border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="right"]) {
      position: absolute;
      left: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="right"]) #arrow {
      top: 50%;
      right: 100%;
      border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
      border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
      transform: translate(0, -50%);
    }

    :host([placement="bottom"]) {
      position: absolute;
      top: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host([placement="bottom"]) #arrow {
      bottom: 100%;
      left: 50%;
      border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
      border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="left"]) {
      position: absolute;
      right: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="left"]) #arrow {
      top: 50%;
      left: 100%;
      border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
      border-color: transparent transparent transparent var(--_tooltip-arrow-background);
      transform: translate(0, -50%);
    }
    
    :host([placement="none"]) #arrow {
      display: none;
    }

  </style>
  <slot></slot>
  <div id="arrow"></div>
`;var Er=class extends d.HTMLElement{constructor(){super();this.updateXOffset=()=>{var R;if(!bi(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let e=this.placement;if(e==="left"||e==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}let r=getComputedStyle(this),n=(R=ve(this,"#"+this.bounds))!=null?R:Bn(this);if(!n)return;let{x:o,width:l}=n.getBoundingClientRect(),{x:m,width:c}=this.getBoundingClientRect(),h=m+c,A=o+l,T=r.getPropertyValue("--media-tooltip-offset-x"),v=T?parseFloat(T.replace("px","")):0,g=r.getPropertyValue("--media-tooltip-container-margin"),L=g?parseFloat(g.replace("px","")):0,I=m-o+v-L,y=h-A+v+L;if(I<0){this.style.setProperty("--media-tooltip-offset-x",`${I}px`);return}if(y>0){this.style.setProperty("--media-tooltip-offset-x",`${y}px`);return}this.style.removeProperty("--media-tooltip-offset-x")};if(this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Ba.content.cloneNode(!0))),this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[pt.PLACEMENT,pt.BOUNDS]}get placement(){return w(this,pt.PLACEMENT)}set placement(e){x(this,pt.PLACEMENT,e)}get bounds(){return w(this,pt.BOUNDS)}set bounds(e){x(this,pt.BOUNDS,e)}};d.customElements.get("media-tooltip")||d.customElements.define("media-tooltip",Er);var $a=Er;var Ml=1,yl=i=>i.mediaMuted?0:i.mediaVolume,_l=i=>`${Math.round(i*100)}%`,br=class extends Me{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_VOLUME,a.MEDIA_MUTED,a.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let t=this.range.value,e=new d.CustomEvent(E.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(e)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",G.VOLUME())}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),(t===a.MEDIA_VOLUME||t===a.MEDIA_MUTED)&&(this.range.valueAsNumber=yl(this),this.range.setAttribute("aria-valuetext",_l(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return D(this,a.MEDIA_VOLUME,Ml)}set mediaVolume(t){H(this,a.MEDIA_VOLUME,t)}get mediaMuted(){return k(this,a.MEDIA_MUTED)}set mediaMuted(t){_(this,a.MEDIA_MUTED,t)}get mediaVolumeUnavailable(){return w(this,a.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(t){x(this,a.MEDIA_VOLUME_UNAVAILABLE,t)}};d.customElements.get("media-volume-range")||d.customElements.define("media-volume-range",br);var Va=br;return es(Ll);})();
//# sourceMappingURL=index.js.map
