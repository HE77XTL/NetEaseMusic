$(()=>{
	$.get('./songs.json').then((response)=>{
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
})


