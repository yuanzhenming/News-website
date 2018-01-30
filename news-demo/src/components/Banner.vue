<template>
	<div id="banner">
		<div class="banner">
				<ul class="clearfix">
					<li>
						<img src="../assets/images/img_1.jpg" alt="" />
						<div class="text-box">
							<h2>和六点三刻反垄断法可浪费</h2>
							<p>流的哈 </p>
						</div>
					</li>
					<li>
						<img src="../assets/images/img_2.jpg" alt="" />
						<div class="text-box">
							<h2>和六点三刻反垄断法可浪费</h2>
							<p>流的哈 22</p>
						</div>
					</li>
					<li>
						<img src="../assets/images/img_3.jpg" alt="" />
						<div class="text-box">
							<h2>和六点三刻反垄断法可浪费</h2>
							<p>流的哈3333 </p>
						</div>
					</li>
				</ul>
			</div>
	</div>
</template>

<script>
	export default{
		mounted() {
			this.slider();
		},
		methods: {
			slider() {
				$(function() {
					var mySwipe = Swipe($('.banner')[0], {
						auto: 2000,
						continuous: true,
						stopPropation: true,
						callback: function(index, element) {
							$('.banner ol li').removeClass('active');
							$('.banner ol li').eq(index).addClass('active');
						}
					})
				})
			}
		}
	}
</script>

<style>
</style>