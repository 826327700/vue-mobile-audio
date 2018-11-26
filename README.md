## vue-mobile-audio
基于vue的移动端音频播放器（语音条外观）

## 使用

* npm install vue-mobile-audio
```javascript
//main.js
import audio from 'vue-mobile-audio'
Vue.use(audio)

//xxx.vue
<m-audio :src="src"></m-audio>
```
* 设置   

props|类型|默认值|描述
------------|------------|------------|------------
src|string|无|音频播放地址（ogg,mp3,wav）
text|string|轻触播放|播放器上的提示文字
showDuration|boolean|true|是否显示时长
block|boolean|true|播放器是否为块级元素

注：若显示时长，时长将替换提示文字   


## 截图
![截图](https://github.com/826327700/vue-mobile-audio/blob/master/dist/preview.png)

## 在线预览
[demo](https://826327700.github.io/vue-mobile-audio/dist/#/ "demo")
