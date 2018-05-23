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
		}else if(index == 2){
		// 搜索页面
		// 加载热门搜索
			$.get('./data/songs.json').then((results)=>{
				results.forEach((value)=>{
					let $li = $(`
						<li><a href="#">${value.name}</a></li>
					`)
					$('.recommen ul').append($li)
				})
			})

			console.log(2)
			let APP_ID = 'j6MmRnR6gxfCy3HSWGKMh2NB-gzGzoHsz';
			let APP_KEY = 'l1ikbAXF7958fV2NzXNOSC1t';

			AV.init({
			  appId: APP_ID,
			  appKey: APP_KEY
			});

			let query = new AV.Query('Song');

			let search = function(){
				let value = $('input#search').val().trim();
				console.log(value)
				if(value == ''){
					$('.default').css({
					'display': 'block'
					})
					$('.searchResult').css({
						'display': 'none'
					})
					return
				}

				$('.default').css({
					'display':'none'
				})
				$('.searchResult').css({
					'display':'block'
				})
				$('.searchResult h3').text('搜索'+value)
				query.contains('name', value);
				query.find().then(function (results) {
					console.log(results)
					if(results.length == 0){
						console.log("没有找到")
					}else{
						$('.searchResult ul li').remove()
						console.log('???')
						let name = results[0].attributes.name
						console.log(name)
						let $li = $(`
							<li>
								<div class="svg-search">
									<img src="./picture/search.svg" alt="">
								</div>
								<a href="#">${name}</a>
							</li>
						`)
						$('.searchResult ul').append($li)
					}
				}, function (error) {
					console.log('错误')
				});
			}

			let timer=null, begin=new Date(), delay=1000, duration=2000;

			$('input#search').on('input',()=>{
				console.log('llld')
				let current=new Date();;
			    clearTimeout(timer);
			    if(current-begin>=duration){
			         search();
			         begin=current;
			    }else{
			        timer=setTimeout(function(){
			            search();
			        },delay);
			    }
			})


		}
	})
})




