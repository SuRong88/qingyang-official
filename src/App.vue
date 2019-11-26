<template>
	<div id="app">
		<v-header></v-header>
		<router-view />
		<v-footer></v-footer>
	</div>
</template>

<script>
import vHeader from 'components/common/Header.vue';
import vFooter from 'components/common/Footer.vue';
export default {
	name: 'app',
	components: {
		vHeader,
		vFooter
	}
};
</script>

<style></style>
