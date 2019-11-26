<template>
	<div class="hotel">
		<div class="hotel-banner"></div>
		<ul class="hotel-list wrapper">
			<li class="hotel-item flex" v-for="i in 10">
				<img class="item-img" src="../assets/images/Hotel_img01.jpg" alt="" />
				<ol>
					<li class="item-title">
						珠海瑞吉酒店
						<span class="hotel-rank">[五星级]</span>
					</li>
					<li class="item-address">番禺区 长沙路5号</li>
					<li class="item-info item-info01">
						<span class="w230">最大厅面积：1100㎡</span>
						<span>最多容纳：1200人</span>
					</li>
					<li class="item-info item-info02">
						<span class="w230">会场数量：15间</span>
						<span>会场参考价：￥4,000起</span>
					</li>
					<li class="item-info item-info03">
						<span class="w230">客房数量：222间</span>
						<span>客房参考价：￥4,000起</span>
					</li>
				</ol>
				<!-- <button class="btn-view" type="button">
					查看详情
				</button> -->
				<router-link :to="'/hotelDetail/' + i" class="btn-view" tag="button" type="button">查看详情</router-link>
			</li>
		</ul>
		<div class="flex flex-center">
			<el-pagination
				@current-change="handleCurrentChange"
				class="pagination"
				background
				layout="prev, pager, next"
				:page-size="limit"
				:current-page="current_page"
				:total="total_page"
				prev-text="上一页"
				next-text="下一页"
			></el-pagination>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	created() {
		this.current_page = this.$route.query.page * 1 || 1;
	},
	mounted() {},
	props: {},
	data() {
		return {
			limit: 1,
			current_page: 1,
			total_page: 99
		};
	},
	computed: {},
	watch: {
		'$route.query': function(newVal, oldVal) {
			console.log('oldVal' + oldVal.page);
			console.log('newVal' + newVal.page);
		}
	},
	methods: {
		handleCurrentChange(page) {
			let query = JSON.parse(JSON.stringify(this.$route.query));
			query.page = page;
			this.$router.push({
				query: query
			});
		}
	}
};
</script>

<style></style>
