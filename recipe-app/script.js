const meals = document.getElementById('meals');
const fav = document.getElementById('fav-meals')


getRandomBoardgame();
fetchBoardgame();

async function getRandomBoardgame() {
    const url = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&keyword=ボードゲーム&genreId=101164&shopCode=surugaya-a-too&affiliateId=1abe6f15.23715f15.1abe6f16.44dbab1a&applicationId=1025786052191340350"
    const res = await fetch(url);
    //json処理もawaitが必要
    const resData = await res.json();

    const randomNum = Math.floor(Math.random() * resData.Items.length);

    const itemData = resData.Items[randomNum].Item
    // console.log(itemData.itemName);

    addBoardGame(itemData, true);

}

function addBoardGame(itemData, random = false ) {

    const meal = document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML = `
                <div class="meal-header">
                ${ random ? ` <span class="random">Random Game</span>` : ""}

                    <img src="${itemData.mediumImageUrls[0].imageUrl}" alt="${itemData.itemName}">
                </div>
                <div class="meal-body">
                    <h4>${itemData.itemName}</h4>
                    <button class="fav-btn">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
    `;
    const btn = meal.querySelector('.meal-body .fav-btn');
    btn.addEventListener('click', () => {

        if(btn.classList.contains('active')) {
            removeBoardgameFromLS(itemData);
            btn.classList.remove('active');
        } else {
            btn.classList.add('active')
            addBoardGameToLS(itemData);
        }

        fav.innerHTML = '';
        fetchBoardgame();
    })
    meals.appendChild(meal);

}


function addBoardGameToLS(itemData) {
    const savedData = getBoardgameFromLS();

    const item = {
        name : itemData.itemName,
        image : itemData.mediumImageUrls[0].imageUrl,
    }
    
    // For save , data is changed to JSON
    localStorage.setItem('boardgame', JSON.stringify([...savedData, item]));
}

function removeBoardgameFromLS(itemData) {
    const savedData = getBoardgameFromLS();

    const newData = savedData.filter((item) =>{
        return item.name != itemData.itemName
    })

    localStorage.setItem('boardgame', JSON.stringify(newData));


}


function getBoardgameFromLS () {
    const items = JSON.parse(localStorage.getItem('boardgame'));
    return items ? items : [];

}

function getFav() {
    const LSData = localStorage.getItem('boardgame');
    return JSON.parse(LSData);
}

function fetchBoardgame(){
    const savedData = getFav();
    console.log(savedData)
    for (let i = 0; i < savedData.length; i++) {
        addBoardGameFav(savedData[i]);
    }
}

function addBoardGameFav(itemData) {

    const meal = document.createElement('li');
    meal.innerHTML = `
                    <button class="remove-fav"><i class="fas fa-times"></i></button>
                    <img src="${itemData.image}" alt=""><span>${itemData.name}</span>
    `;
    fav.appendChild(meal);

}

function removeFav(itemData) {
    const removeFav = document.querySelector('.remove-fav');
    removeFav.addEventListener('click', () => {
        removeBoardgameFromLS(itemData);
    })    
}