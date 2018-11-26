<template>
	<div class="home">
		<p>简单使用</p>
		<m-audio :src="src"></m-audio>
		<p>自定义文字</p>
		<m-audio :show-duration="false" text="点这里播放" :src="src"></m-audio>
		<p>设置是否在开始播放后显示时长（默认为true）</p>
		<m-audio :show-duration="false" text="播放3" :src="src"></m-audio>
		<p>设置为行内元素（默认为块级元素）</p>
		<m-audio :block="false" :src="src"></m-audio>
		<m-audio :block="false" :src="src"></m-audio>
	</div>
</template>

<script>
export default {
	name: "home",
	data(){
		return{
			src:'http://1252014125.vod2.myqcloud.com/46740e39vodcq1252014125/1db79a9a5285890783173288539/ZOaFuTmGs30A.mp3'
		}
	}
};
</script>
