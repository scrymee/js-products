window.onload = function ()
{

class Text {

}

// canvas要素の取得
const canvas = document.getElementById('canvas');
//canvasに描写用のcontextを取得
const ct = canvas.getContext('2d');

text = 
`
function test(){
    echo 'hoge';
}
`;
drawText(text, 50, 60)
drawSquare(30, 70, 20, 20)


/**
 * テキストを描写する
 */
function drawText(message, x, y) {
    const TEXT_FONT = 13;
    const TEXT_HEIGHT = TEXT_FONT + 6;
    const textArr = getNewLineArr(message)
    textArr.forEach(text => {
        ct.font = TEXT_FONT + "pt Arial";
        ct.fillText(text, x, y);
        y += TEXT_HEIGHT;
        
    });
}

function getNewLineArr(text) {
    textArr = text.split('\n');
    return textArr

}
/**
 * 四角形を描写する
 */
function drawSquare(width, height, x, y) {
    ct.fillRect(x, y, width, height);
}

}

