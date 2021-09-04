var dataSet = [250,100,50,210,300];
var dataSet = [
    ['test', 300],
    ['test', 300],
    ['test', 300],
    ['test', 300],
    ['test', 300],
];

	d3.select("#chart")  //SVG要素を指定
	.selectAll("rect")         //SVGで四角形を示す要素を指定
	.data(dataSet)             //データを設定
	.enter()                   //データ数に応じ、rect要素を生成
	.append("rect")            //SVG四角形を生成
	.attr("x",0)               //棒グラフの表示場所　X座標
	.attr("y",function(d,i){
		return i * 32;
	})                         //棒グラフの表示場所　Y座標
	.attr("width","0px")  	   //棒グラフの横幅
	.attr("height","24px")     //棒グラフの高さ

	/*
		グラフ出現時にアニメーションをさせるために
		transition()をここで使用
	*/
	.transition()
	/*
		上記のtransition()のみでdelay()メソッドを使わないと、
		全ての棒グラフが伸びてしまいます。

		そこでグラフの出現順番に応じて、
		アニメーションの開始時間を遅らせるようにします。
		この遅らせる待ち時間を設定するのがdelay()メソッドです。

		delay()メソッド
		第１引数：パラメータのデータ
		第２引数：出現の順番
	*/
	// .delay(function(d,i){
	// 	return i * 400;
	// })
	/*
		duration()メソッド
		アニメーション開始から終了までの時間を指定する
		グラフの１本の棒が２秒かけてアニメーションする
	*/
	.duration(2000) 
	.attr("width",function(d,i){
		return d + "px";
	});  					   //棒グラフの横幅

	//前回のコードに下記の処理を追加

	//データ更新ボタンをクリックしたとき
	d3.select("#updataGraph")
	/*
		on()メソッド
		第１引数：イベント名を文字列で指定
				　クリックの場合は"click"
		第２引数：イベントが発生したときに
				　呼ばれる関数を指定する。
	*/
	.on("click",function(){

		for( var i = 0 ; i < dataSet.length; i ++){
			dataSet[i] = Math.floor(Math.random() * 300 );
		}
		/*
			今回は、appendやenterメソッドは不要です。
			データセットの総数が５個で、変更前と
			変わらないからです。詳しくは別の記事で
			説明します。
		*/
		d3.select("#sampleGraph")
		.selectAll("rect")
		.data(dataSet)
		.transition()
		.attr("width",function(d,i){
			return d + "px";
		})
	});