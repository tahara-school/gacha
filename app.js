// ガチャを引くボタン要素
const gachaButton = document.getElementById('btn-gacha');

// ガチャ結果の名前要素
const resultName = document.getElementById('result-name');
// ガチャ結果の画像要素
const resultImage = document.getElementById('result-img');

// ガチャをする関数
const gacha = async () => {
    try{
        // ガチャAPIにGETメソッド
        const res = await fetch('https://prd.api.neecbox.net/v1/gacha/drop');
        // JSで扱える形式に変換
        const json = await res.json();
        if(!json.status) { alert('APIでエラーが発生しました。'); }

        // 結果の名前をセット
        resultName.innerHTML = `<h2>${json.result.name}</h2>`;
        // 結果の画像をセット
        resultImage.innerHTML = `<img src="${json.result.img}"></img>`;
    }
    catch(e){
        alert('通信中にエラーが発生しました。');
    }
}

// 読み込み完了時の処理
window.onload = () => {
    // コールバックをセット
    gachaButton.onclick = gacha;
}