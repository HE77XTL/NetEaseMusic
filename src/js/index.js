$(()=>{
	$.get('./songs.json').then((response)=>{
		console.log(response)
	})
})



			// <li>
			// 	<h3>歌曲名1</h3>
			// 	<p>演唱者1-专辑1</p>
			// 	<a href="#">
			// 		<svg class="playcircle">
			// 			<use xlink:href="#icon-playcircle"></use>
			// 		</svg>
			// 	</a>
			// </li>