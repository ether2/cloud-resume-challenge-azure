window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionapi = 'https://functiongrant2022.azurewebsites.net/api/HttpTrigger1?code=PUc5pkDcmjQF9Oz6Z2PBal65OqdT0AcwaCxeoibNroY4UM9qql47dQ==';

const getVisitCount = () => {
    let count = 12;
    fetch(functionapi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("function api was called.");
        count = response;
        document.getElementById('views').innerText = count;
    }).catch(function(error) {
        console.log(error);
    });
    return count;
}