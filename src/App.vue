<template>
  <div id="app">
      <transition :name="transitionName">  
        <router-view class="child-view"/>
     </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return{
          transitionName:""
      }
  },
  watch: {  
    $route(to, from) {  
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        if(to.path == '/login' || to.path == '/reg'){
            this.transitionName = 'slide-up'
        }else if(to.path == '/welcome'){
            this.transitionName = 'slide-bottom'
        }
    }  
  }  
}
</script>

<style>
/* 页面过渡 */
.child-view {  
  position: absolute;
  left: 0;
  top: 0;
  width:100%;
  height: 100%;
  transition: all .8s cubic-bezier(.55,0,.1,1);
  background: #fff;
}  
.slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    overflow: hidden;
    transform: translate(100px, 0);  
}  
.slide-left-leave-active, .slide-right-enter {  
    opacity: 0;
    overflow: hidden;
    transform: translate(-100px, 0);  
}

.slide-bottom-enter, .slide-up-leave-active{
    opacity: 0;
    overflow: hidden;
    transform: translate(0, 100px);  
}  
.slide-bottom-leave-active, .slide-up-enter{  
    opacity: 0;
    overflow: hidden;
    transform: translate(0, -100px);  
}  


body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
    font-family: Microsoft Yahei,SimSun,Helvetica;
}

a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
}

body,
dl,
dd,
ul,
ol,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
legend,
input,
textarea,
optgroup,
p,
blockquote,
figure,
hr,
menu,
dir,
thead,
tbody,
tfoot,
th,
td {
    margin: 0;
    padding: 0;
}

ul,
ol {
    list-style-type: none;
    list-style-image: none;
}

a {
    text-decoration: none;
    background-color: transparent;
}

input:-webkit-autofill, 
 textarea:-webkit-autofill, 
 select:-webkit-autofill { 
       -webkit-box-shadow: 0 0 0 1000px white inset; 
}
 input[type=text]:focus, input[type=password]:focus, textarea:focus {
      -webkit-box-shadow: 0 0 0 1000px white inset; 
}

a:active,
a:hover{
    outline-width: 0;
}

a:focus,
button:focus,
input:focus{
    outline: none;
}

html {
    -webkit-user-select: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
}

body {
    line-height: 1.8;
}

::-webkit-scrollbar {
    display: none;
}

body,
button,
input,
select,
textarea {
    -ms-text-autospace: ideograph-alpha ideograph-numeric ideograph-parenthesis;
    text-spacing: ideograph-alpha ideograph-numeric ideograph-parenthesis;
}

b,
strong {
    font-weight: bold;
}

hr {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 0;
}

mark {
    background-color: #d2e5ff;
    color: #000;
}

q {
    quotes: none;
}

q:before,
q:after {
    content: '';
    content: none;
}

small {
    font-size: 85.7%;
}

img {
    border-style: none;
    width: auto\9;
    height: auto;
    max-width: 100%;
    vertical-align: top;
    -ms-interpolation-mode: bicubic;
}

svg:not(:root) {
    overflow: hidden;
}

button,
input,
select,
textarea {
    font-family: inherit;
    font-size: 100%;
    margin: 0;
    vertical-align: baseline;
    *vertical-align: middle;
}

input,
button {
    *overflow: visible;
}

button,
select {
    text-transform: none;
}

button,
html input[type='button'],
input[type='reset'],
input[type='submit'] {
    -webkit-appearance: button;
    cursor: pointer;
}

button[disabled],
input[disabled] {
    cursor: default;
}

input[type='checkbox'],
input[type='radio'] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    *height: 13px;
    *width: 13px;
}

input[type='search'] {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
}

input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
    border-style: none;
    padding: 0;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
    height: auto;
}

textarea {
    overflow: auto;
    resize: vertical;
}

select:disabled option:checked,
option:disabled:checked {
    color: #d2d2d2;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
    input {
        line-height: normal !important;
    }
}

input::-moz-placeholder,
textarea::-moz-placeholder {
    color: darkGray;
    opacity: 1;
}

label {
    cursor: pointer;
}

select[size],
select[multiple],
select[size][multiple] {
    border: 1px solid #aaa;
    padding: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
    display: block;
}

audio,
canvas,
video,
progress {
    display: inline-block;
    vertical-align: baseline;
}

audio:not([controls]) {
    display: none;
    height: 0;
}

[hidden],
template {
    display: none;
}

[draggable] {
    cursor: move;
}

/* 公共样式 */

.container{
    height: 100%;
}

/* 按钮 */
.button{
    width: 100%;
    height: 2.25rem /* 36/16 */;
    border: none;
}

.button.red{
    background: #F44336;
    color: #fff;
}

.button.red:active{
    background: #bb2c22;
}

/* 表单 */
input::-webkit-input-placeholder {
    font-size: 1rem /* 16/16 */;
    font-weight: 200;
}

.box-input,
.box-button {
    width: 100%;
    height: 2.875rem /* 46/16 */;
}

.box-input.current{
    border-color:#fdd000;
}

.box-input {
    border-bottom: 2px solid #ededed;
    margin-top: 0.9375rem /* 15/16 */;
}

.box-button {
    margin-top: 1.875rem /* 30/16 */;
}

.btn {
    width: 100%;
    height: 2.625rem /* 42/16 */;
    border: none;
    font-size: 1.125rem /* 18/16 */;
    white-space: pre;
}

.btn-submit {
    background: #fdd000;
}

.btn-submit:active {
    background: #FF9800;
}
/* 布局 */
.full{
    width: 100%;
    height: 3rem /* 48/16 */;
}

.space{
    padding: .9375rem /* 15/16 */;
}

/* 顶部弹出层 */
.popup{
    width: 100%;
    height: 2.5rem /* 40/16 */;
    text-align: center;
    line-height: 2.5rem /* 40/16 */;
    background: #F44336;
    color: #fff;
    opacity: .92;
}

.popup.success{
    background: #4CAF50;
}

/* ipone 5 */
@media only screen and (max-width: 360px) and (min-width: 320px) {
    html {
        font-size: 13.65px;
    }
}

/* ipone 6 */
@media only screen and (max-width: 375px) and (min-width: 360px) {
    html {
        font-size: 15.36px;
    }
}

@media only screen and (min-width: 390px) and (max-width: 375px) {
    html {
        font-size: 16px;
    }
}

/* ipone 6p */
@media only screen and (max-width: 414px) and (min-width: 390px) {
    html {
        font-size: 16.64px;
    }
}

@media only screen and (min-width: 640px) and (max-width: 414px) {
    html {
        font-size: 17.664px;
    }
}

/* ipad */
@media screen and (min-width: 640px) {
    html {
        font-size: 27.31px;
    }
}
</style>
