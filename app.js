const inputEl=document.getElementById('inputel')

const btnEl=document.getElementById('btnel')

const outputEl=document.getElementById('outputel')

const url='https://api.funtranslations.com/translate/pig-latin.json'

function errorHandle(error){
    console.log('error occured')

    outputEl.innerText='error occured'+error
    alert('something went wrong please try after sometime')

}

function getData(){
    const enterInput=inputEl.value
    updatedUrl=url+'?'+'text='+enterInput
    console.log(updatedUrl)

    fetch(updatedUrl).then(function(response){
        return response.json()
    }).then(function(changedData){
        const transText=changedData.contents.translated
        outputEl.innerText=transText
    }).catch(errorHandle)

   

}

btnEl.addEventListener('click',getData)
