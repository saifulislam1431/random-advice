document.getElementById('ad-btn').addEventListener('click', () => {
    const adId = document.getElementById('ad-id')
    const adText = document.getElementById('ad-text')

    const getData = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(data => displayData(data))
    }
    const displayData = advices => {
        console.log(advices);
        adId.innerText = advices.slip.id;
        adText.innerText = advices.slip.advice


    }



    getData()
})