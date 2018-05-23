$.get('./data/page2.json').then((result)=>{
	// 获取热歌榜信息
	console.log(result)
	let items = result;
	// 其实可以和上面的代码合并，但是html和css尝试了两种方法，作为练习就这样了
	items.forEach((value,index)=>{
		let $li = $(`
			<li>
				<a href="playing.html?id=${value.id}">
					<span>${index + 1}</span>
					<div class="detail">
						<h2>${value.name}</h2>
						<p>歌手</p>
					</div>							
					<svg class="playcircle">
						<use xlink:href="#icon-playcircle"></use>
					</svg>								
				</a>
			</li>								
		`)
		$('.hot-cont>ol').append($li)
	})
})