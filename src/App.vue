<template>
  <div>
	<nav-bar></nav-bar>
	<div class="container">
		<div class="row">
			<div class="col-md-4">
				<left-side-bar></left-side-bar>
			</div>
			<div class="col-md-8">
				<table class="table">
					<thead>
						<tr>
							<td>Name</td>
							<td>Price</td>
							<td>Quantity</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>iMac</td>
							<td>$200</td>
							<td>60</td>
						</tr>
						<tr>
							<td>iMac</td>
							<td>$200</td>
							<td>60</td>
						</tr>
						<tr>
							<td>iMac</td>
							<td>$200</td>
							<td>60</td>
						</tr>
						<tr>
							<td>iMac</td>
							<td>$200</td>
							<td>60</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
import NavBar from './components/Partials/NavBar'
import LeftSideBar from './components/Partials/LeftSideBar'

export default {
  name: 'app',
  components: {
  	NavBar, LeftSideBar
  }
}
</script>

<style lang="less">
	@import url('../node_modules/bootstrap/less/bootstrap.less');
	body
	{
		background-color: #f9f9f9;
	}
</style>
