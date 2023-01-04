function saveLog(data){
    fetch('http://localhost:3000/', {
       method: "POST",
       mode: 'no-cors',
       headers: {
         "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
       },
       body: `解答=${data}`
     })
     .then((res) => {
       console.log(res)
     })
     .catch((err) => {
       console.log(err)
     })
 }
 
 function counter() {
     // 実行する処理
     var answer_text = document.querySelector('#commentGroup > div:nth-child(2) > h4')
     var kaitou = answer_text.innerText.substring(3, 9)
 //     str_count = String(count)
     console.log(kaitou);
 //     count += 1;
     saveLog(kaitou)
     setTimeout(counter, 5000);
 }
  
 counter();