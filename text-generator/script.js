
const generateBtn = document.getElementById('generate');
const articleTitleEls = document.querySelectorAll('.title');
const articleMsgEls = document.querySelectorAll('.description');

const article = document.getElementById('article-body');

const sectionCount = 5

const descLength = Math.floor(Math.random() * 2) + 1;

const descCount = Math.floor(Math.random() * 2) + 1;

const minLength = 1;
const maxLength = 250;


const catchcopy = [
    "モノより思い出",
    "そうだ、京都行こう",
    "ありがとう。いいくすりです",
    "やめられないとまらない",
    "すぐおいしい、すごくおいしい",
    "インテルはいってる",
    "心も満タンに",
    "目のつけどころがシャープでしょ",
    "自然を、おいしく、楽しく",
    "いいことあるぞ〜",
    "「あること」をするだけで元気になれる",
    "「やりたい」と思ってもできない人へ",
    "努力嫌いな叔父から学んだ",
    "【悲報】",
]

const headlines = [
    "について考えてみましょう",
    "を科学する",
    "をつくる",
    "論",
    "を手に入れる旅",
    "を始めると世界が魅力的に映る",
    "で9割決まる",
    "100選",
]


const conjunction = [
    "そして",
    "さらに",
    "だから",
    "そのため",
    "このため",
    "そこで",
    "したがって",
    "ゆえに",
    "すると",
    "それなら",
    "それでは",
    "しかし",
    "しかしながら",
    "だけど",
    "けれども",
    "ところが",
    "それなのに",
    "それにもかかわらず",
    "また",
    "かつ",
    "同じく",
    "第一に",
    "さらに",
    "おまけに",
    "くわえて",
    "それどころか",
    "一方で",
    "反対に",
    "または",
    "それとも",
    "あるいは",
    "なぜなら",
    "だって",
    "というのも",
    "どうしてかというと",
    "なぜなら",
    "それには",
    "ただし",
    "もっとも",
    "ちなみに",
    "実は",
    "つまり",
    "要するに",
    "すなわち",
    "例えば",
    "特に",
    "とりわけ",
    "なかでも",
    "さて",
    "ところで",
    "このように",
    "いずれにしても",
    "確かに",
    "しかし",
    "一方では",
    "まるで",
    "とりあえず",
    "個人的には",
    "グローバルな観点では",
    "一般的には",
    "先ほども述べたとおり",
    "やっぱり",
] 

const noum = [
    "本","辞書","雑誌","新聞","ノート","手帳","名刺","カード","鉛筆","ボールペン","シャープペンシル","鍵","時計","傘","鞄","カセットテープ","テープレコーダー","テレビ","ラジオ","カメラ","コンピューター","自動車","机","椅子","チョコレート","コーヒー","英語","日本語","教室","食堂","事務所","会議室","受付","ロビー","部屋","階段","エレベーター ","エスカレーター","お国","会社","家","電話","靴","ネクタイ","ワイン","たばこ","売り場","地下","イタリア","スイス","ご飯","朝ご飯","昼ご飯","晩ご飯","パン","卵","肉","魚","野菜","果物","水","お茶","紅茶","牛乳","ミルク","ジュース","ビール","お酒","ビデオ","映画","CD","手紙","レポート","写真","店","レストラン","庭","宿題","テニス","サッカー","お花見","メキシコ","スキー","週末","市役所","プール","川","経済","美術","釣り","会議","登録","注文","定食","牛丼"
]

const text = [
    "xxについて考えることを諦めてはいけません",
    "「xxってすごい」そう思わせる魅力がxxにはありました",
    "xxをしっかりと観察してみました",
    "xxについてあなたはどれくらいしっているでしょうか",
    "朝起きて、まずxxのことについて考えます",
    "xxには人生の大切なことが詰まっています",
    "xxをあなたがのぞいているとき、あなたもxxから覗かれています",
    "xx…。今までしっかりと考えたことはありませんでした",
    "xxという事象はもはや全世界の人が知っています",
    "大人から子供まで愛されているxxについて記します",
    "私たちのココロをつかんで離さないxxについてお話しします",
    "もはやみない日がないほど魅力的なxxの魅力を、改めてお伝えします",
    "あなたに魅力を感じてもらいたくて「xx」について詳細にお伝えします",
    "xxというものをあなたはどれくらい知っているでしょうか",
    "xxには興味深い点がいくつもあります",
    "あなたの身の回りの「xx」について募集します",
    "私の最も大好きなxxについて伝えます",
    "xxという言葉をきいたことがありますか",
    "xx…。xx…。なぜか頭から離れない言葉です",
    "私たちの気持ちを明るくしてくれる立派なxxについて知ってください",
    "xxで最も大切なことをお話しします",
    "xxというのは、必要である一方必要でないという意見もあります",
    "ここで、xxにまつわる興味深い文献を紹介します",
]

const emotion = [
    "すごい",
    "びっくり",
    "なるほど",
    "かわいい",
    "素敵",
    "かっこいい",
    "イケメン",
    "大好き",
    "ヒーローだ",
    "うれしい",
    "たのしい",
    "おもしろい",
    "かしこい",
    "頼りになる",
    "興味深い",
    "やった",
    "サイコー",
    "ありがとう",
    "さようなら",
    "笑いました",
]

const close = [
    "。",
    "…！",
    "！！",
    "！？",
]

const closeFriendly = [
    "!!!",
    "...!!",
    "!?",
    "☺️",
    "❤️",
    "☀️",
    "( ・∇・)",
    "☆",
    "( ´ ▽ ` )",
    "♪( ´▽｀)",
]


const discuss = [
    "私たちは、とても言い難い事実に直面しました",
    "今では、問題を解決することが最も大切です",
    "このような観点は大切です",
    "物事を理解するためには、一体どうやって考えると良いのでしょうか",
    "何を通してそれを理解すると良いのか判断が難しくなっています",
    "こうした件は全部が重要ではありません",
    "これらの疑問を持って、私たちは念入りに考える必要があります",
    "どのように描くかの計画の方が重要であります",
    "一般論を述べると、しっかりと考える経験を通して、回答を見出す機会を得ます",
    "問題のコツというのは何なのでしょうか",
    "このような事態は、なぜ発生したのでしょうか",
    "誰でも、時々こんな問題に遭遇するのでしょう。こんな問題に直面している場合について考えてみましょう",
    "一般的な考えですが、物事を慎重に考えてみます",
    "この存在が一体、社会に及ぼす影響は何かを感じてみましょう",
    "しっかりと考えることが、全ての問題を解く鍵となります",
    "非常に重要であると言わざるを得ません",
    "私自身もじっくりと考えながら、幾度となく感じています",
    "私は思いを巡らせ、いてもたってもいられません",
    "もし現れるとしたら、その事実を受け止めなければなりません",
    "この世界にとってある程度有意義であると考えています",
    "必要であれば、慎重に考える必要に迫られています",
    "そう思うことは、時には必要かもしれません",
    "異なる意見も受け入れることが肝要です",
    "価格競争の側面があります",
    "長く続けることで見える景色もあります",
    "朝早く起きると夜早く眠くなります",
    "PDCAサイクルを回し続けることが大切です",
    "未来に向かって考えることができるでしょう",
];


createArticle();

generateBtn.addEventListener('click', () => {
    article.innerHTML = "";
    //loopで同じ変数iを使うとバグる？
    
    for (k = 0; k <= sectionCount; k++) {
        createArticle();
    }
})


function createArticle() {


    const section = document.createElement('div');
    section.classList.add('section');
    //create Title
    const articleTitle = catchcopy[randomindex(catchcopy)] +"、"+ noum[randomindex(noum)] + headlines[randomindex(headlines)]; 
    const title = document.createElement('h3');
    title.classList.add('title');
    title.classList.add('fade')
    setTimeout(() => {
        title.classList.remove('fade')
    }, 500)
    title.innerText = articleTitle;
    section.appendChild(title);
    title.addEventListener('click', () => {
        copyClipboard(articleTitle);
    })
    //create description
    let articleMsg = "";    
    for(i =0; i< descLength; i++) {
        addMsg = 
                settingText(noum[randomindex(noum)])
                + "。"
                + settingText(getArrayText(noum))
                + getArrayText(close)
                + getArrayText(emotion)
                + getArrayText(closeFriendly)
                + conjunction[randomindex(conjunction)]
                + "、"
                + discuss[randomindex(discuss)]
                + getArrayText(closeFriendly)
                + settingText(noum[randomindex(noum)])
                + "。";
        if(articleMsg.length + addMsg.length > maxLength){
            break;
        }
        articleMsg += addMsg;
        }
    const description = document.createElement('p');
    description.classList.add('description');
    description.classList.add('fade')
    setTimeout(() => {
        description.classList.remove('fade')
    }, 500)
    description.innerText = articleMsg;
    section.appendChild(description);
    description.addEventListener('click', () => {
        copyClipboard(articleMsg);
    })
    article.appendChild(section)
}



function getArrayText(ary) {
    return ary[randomindex(ary)];
}

function randomindex(ary) {
    const num = ary.length;
    return Math.floor(Math.random() * num)
}

function settingText(noum) {
    const data = text[randomindex(text)];
    return data.replace(/xx/g, noum);
}

function copyClipboard(text) {
    navigator.clipboard.writeText(text).then(
        // ()=>alert("クリップボードにコピーしました"),
        // ()=>alert("クリップボードにコピーできませんでした")
        () => {
            createFlash('copied:' + text.length);
        }
    );
}

function createFlash(text) {
    const flash = document.createElement('div');
    flash.classList.add('flash')
    flash.innerText = text;
    document.body.appendChild(flash);
    setTimeout(() => {
        flash.remove()
    }, 1500)
}

