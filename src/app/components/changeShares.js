window.changeShare = (shareSelect) =>{
    let totalShare = +localStorage.getItem('shares')
    let sharesSlectElement = document.querySelectorAll('select[name="amount-of-shares"]');


    

    let otherElements = [...sharesSlectElement].filter(el => el != shareSelect)

    console.log(otherElements)

    let eachShareAmount = Math.floor((totalShare - shareSelect.value) /  otherElements.length)
 
     for (let i = 0; i < otherElements.length; i++) {
        otherElements[i].value = eachShareAmount
    }

    
}

 