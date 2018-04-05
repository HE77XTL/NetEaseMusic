// $(()=>{

	// var APP_ID = 'j6MmRnR6gxfCy3HSWGKMh2NB-gzGzoHsz';
	// var APP_KEY = 'l1ikbAXF7958fV2NzXNOSC1t';

	// AV.init({
	//   appId: APP_ID,
	//   appKey: APP_KEY
	// });

	// var query = new AV.Query('Song');
	// query.contains('name', '爱');
	// query.find().then(function (results) {
	// 	console.log(results)
	// }, function (error) {
	// });

// $.get('./data/songs.json').then((response)=>{
// 	let songs=[]
// 	let SongObject = AV.Object.extend('Song');//选择就表名

// 	response.forEach((value,index)=>{
// 	songs[index] = new SongObject();
// 	songs[index].set(value);	
// 	})
// 	AV.Object.saveAll(songs).then(function(todoFolder) {
// 		console.log(todoFolder)
// 	}, function (error) {
// 	// 异常处理
// 	});
// 	console.log(response)
// })

// })










// var SongObject = AV.Object.extend('SongObject');
// var SongObject = new SongObject();
// SongObject.save({
//   name: '一生所爱',
//   singer: '舒淇'
// }).then(function(object) {
//   alert('保存成功');
// })

  // var todoFolder = new AV.Object('TodoFolder');
  // todoFolder.set('name', '工作');
  // todoFolder.set('priority', 1);

  // var todo1 = new AV.Object('Todo');
  // todo1.set('title', '工程师周会');
  // todo1.set('content', '每周工程师会议，周一下午2点');
  // todo1.set('location', '会议室');

  // var todo2 = new AV.Object('Todo');
  // todo2.set('title', '维护文档');
  // todo2.set('content', '每天 16：00 到 18：00 定期维护文档');
  // todo2.set('location', '当前工位');

  // var todo3 = new AV.Object('Todo');
  // todo3.set('title', '发布 SDK');
  // todo3.set('content', '每周一下午 15：00');
  // todo3.set('location', 'SA 工位');

  // var todos = [todo1, todo2, todo3];
  // AV.Object.saveAll(todos).then(function () {
  //   var relation = todoFolder.relation('containedTodos'); // 创建 AV.Relation
  //   todos.map(relation.add.bind(relation));
  //   return todoFolder.save();// 保存到云端
  // }).then(function(todoFolder) {
  //   // 保存成功
  // }, function (error) {
  //   // 异常处理
  // });