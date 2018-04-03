$(()=>{
	// 获取最新音乐信息
	$.get('./data/songs.json').then((response)=>{
		// console.log(response)
		let items = response;
		items.forEach((value)=>{
			let $li = $(`
					<li>
						<a href="playing.html?id=${value.id}">
							<h3>${value.name}</h3>
							<p>演唱者1-专辑1</p>
							<svg class="playcircle">
								<use xlink:href="#icon-playcircle"></use>
							</svg>
						</a>
					</li>
				`)
			$('.latestMusic ol').append($li)			
		})
		$('.download').remove()

	})

// 导航栏点击切换
	$('.nav-site').on('click',(e)=>{
		let $li = $(e.currentTarget)
		$li.addClass('active').siblings().removeClass('active');
		let index = $li.index();
		$('.nav-content').eq(index).addClass('active').siblings().removeClass('active');
		$li.trigger('tabChange',index)
	})

	$('.nav-site').on('tabChange',(e,index)=>{
		// console.log(e,index);
		let $li = $('.nav-content').eq(index);
		if($li.attr('data-download') =='yes'){
			return
		}
		$li.attr('data-download','yes');
		// 热歌榜页面
		if(index == 1){
			$.get('./data/page2.json').then((result)=>{
				// 获取热歌榜信息
				// console.log(result)
				let items = result;
				// 其实可以和上面的代码合并，但是html和css尝试了两种方法，作为练习就这样了
				items.forEach((value,index)=>{
					let $li = $(`
						<li>
							<a href="#">
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
		}else if(index == 2){
		// 搜索页面
			console.log(2)
			$.get('./data/page3.json').then((result)=>{
				console.log(result)
			})
		}
	})
})




