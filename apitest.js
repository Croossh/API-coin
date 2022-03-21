
// 일단 웹 콘솔창에서는 잘 됨 ↓
fetch('https://api.upbit.com/v1/ticker?markets=KRW-BTC')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
    });


    // 다른 방법
    // .then((res) => {
    //     console.log(res)
    //     return res.json();
    // })
    // .then((data) => {
    //     console.log(data);
    // })
    // .catch(err => {
    //     console.log('Fetch Error', err);
    // });