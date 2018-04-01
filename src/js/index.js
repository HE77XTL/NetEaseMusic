$(()=>{
	$.get('./data/songs.json').then((response)=>{
		console.log(response)
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

	$('.nav-site').on('click',(e)=>{
		let $li = $(e.currentTarget)
		$li.addClass('active').siblings().removeClass('active');
		let index = $li.index();
		$('.nav-content').eq(index).addClass('active').siblings().removeClass('active');
		$li.trigger('tabChange',index)
	})

	$('.nav-site').on('tabChange',(e,index)=>{
		console.log(e,index);
		let $li = $('.nav-content').eq(index);
		if($li.attr('data-download') =='yes'){
			console.log('LLL');
			return
		}
		$li.attr('data-download','yes');
		if(index == 1){
			console.log(1)
			$.get('./data/page2.json').then((result)=>{
				console.log(result)
			})
		}else if(index == 2){
			console.log(2)
			$.get('./data/page3.json').then((result)=>{
				console.log(result)
			})
		}
	})
})


