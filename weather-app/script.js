const prefCode = "27";
//https://nlftp.mlit.go.jp/ksj/gml/codelist/PrefCd.html

const todayUrl = "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/"+ prefCode +"0000.json"

const weeklyUrl = "https://www.jma.go.jp/bosai/forecast/data/forecast/"+prefCode+"0000.json"


const textEl = document.querySelector('.text')
const todayIconEl = document.querySelector('.today-icon')
const todayDateEl = document.querySelector('.today-date')
const todayAreaEl = document.querySelector('.today-area')

const todayData = getWeather(todayUrl);
const weeklyData = getWeather(weeklyUrl);

async function getWeather(url) {
    const res = await fetch(url);
    const result = await res.json();
    return result;
}

todayData.then((res) => {
    textEl.innerText = res.text;
    todayIconEl.innerHTML = `
                        <i class="fas fa-sun"></i>
    `;
})

weeklyData.then((res) => {
    res.forEach((date) => {
        console.log(date.reportDatetime)
    })
})

