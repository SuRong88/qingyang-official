<template>
	<div class="header wrapper">
		<a href="index" class="logo-box" title="清扬会务">
			<img class="logo" src="../../assets/images/logo.png" alt="">
		</a>
		<ul class="nav flex flex-ver">
			<router-link :to="{path:'/index'}" tag="li" class="nav-item">
				首页
			</router-link>
			<router-link :to="{path:'/hotel'}" tag="li" class="nav-item">
				精选会务酒店
			</router-link>
			<router-link :to="{path:'/meeting'}" tag="li" class="nav-item">
				专题会议
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'vHeader',
		components: {},
		created() {

		},
		mounted() {

		},
		props: {
		},
		data() {
			return {
			};
		},
		computed: {},
		watch: {},
		methods: {
			
		},
	}
</script>

<style>

</style>
