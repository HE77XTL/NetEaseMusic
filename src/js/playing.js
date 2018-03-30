$( ()=>{

	let songID = parseInt(location.search.match(/\bid=([^&]*)/)[1]); 

	$.get('./songs.json').then((response)=>{
		let songsArr = response;
		let song = songsArr.filter((s)=>{
			return (s.id === songID)
		})[0]
		let{url} = song;
		let audio = document.createElement('audio');
		audio.src = url;
		audio.oncanplay = ()=>{
			audio.play();
			$('.disc-container').addClass('playing')
			showIrc(audio)
		}

	//播放暂停	

		$('.disc').on('touchstart',()=>{
			if(audio.paused){
				audio.play()
				$('.disc .light').css({
					'AnimationPlayState': 'running'
				})
				$('.disc .cover').css({
					'AnimationPlayState': 'running'
				})
				$('.icon-play').css({
					'display': 'none'
				})
			}else{
				audio.pause()
				$('.disc .light').css({
					'AnimationPlayState': 'paused'
				})
				$('.disc .cover').css({
					'AnimationPlayState': 'paused'
				})
				$('.icon-play').css({
					'display': 'block'
				})
			}
		})


	})

	$.get('./lyric.json').then((response)=>{
		//请求歌词
		let lyric = response.lrc.lyric;
		let array = lyric.split('\n')
		let regex = /^\[(.+)\](.+)/
		array = array.map(function(string){
			let matches =  regex.exec(string);
			if(matches){
				return {time: matches[1], words: matches[2]}
			}else{
				return ''
			}	
		})
		for(let i=0; i<array.length; i++){
			if(array[i] == ''){
				array.splice(i,1);
				i--;
			}
		}
		let $lyric = $('.lyric .lines')
		array.map((object)=>{
			let $p = $('<p/>')
			$p.attr('data-time',object.time).text(object.words)
			$p.appendTo($lyric)
		})
	})


	let showIrc = (audio)=>{
			//歌词显示
		let lyricID = setInterval(()=>{
			let seconds = audio.currentTime;
			let munites = ~~(seconds/60);
			let left = seconds - munites*60;
			let time = `${pad(munites)}:${pad(left)}`;
			let lines = $('.lines p')
			let whichLine;
			// console.log(time)
			// console.log(lines[5])
			// console.log(lines.eq(5))
			for(let i=0; i<lines.length; i++){
				let currentTime = lines.eq(i).attr('data-time');
				let nextTime = lines.eq(i+1).attr('data-time');
				if(lines[i+1] != undefined && time>currentTime && time < nextTime){
					whichLine = lines.eq(i);
					break;
				}			
			}
			if(whichLine){
				whichLine.addClass('active').prev().removeClass('active')
				let baseTop = $('.lines').offset().top;
				let lineTop = whichLine.offset().top;
				let move = lineTop - baseTop-$('.lyric').height()/3;
				$('.lines').css({
					'transform': `translateY(-${move}px)`
				})
			}
		}, 500)

		function pad(number){
			return number>10 ? number+'' : '0'+number 
		}
	}




	// 
		// 	let play_lock = $('.disc').attr('data-play')
	// 	console.log(play_lock)
	// 	if(play_lock == 'playing'){
	// 		$('.disc-container').removeClass('playing')
	// 		$('.disc').attr('data-play','pause')
	// 	}else{
	// 		$('.disc-container').addClass('playing')
	// 		$('.disc').attr('data-play','playing')
	// 	}
	// 	console.log(play_lock)


})
