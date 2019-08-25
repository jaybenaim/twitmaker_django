document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');
  let tweets = document.querySelector('.tweets')
  let li = document.createElement('li');
  let deleteButton = document.querySelectorAll('#delete')

 
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    axios.post(
      this.action,
      formData,
      { headers: { "X-Requested-With": "XMLHttpRequest" } }
    )
    .then(response => {
      let date = new Date()
      data = { 
        message: this.message.value, 
        date: date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear(),
        }
      tweets.innerHTML = ''
      tweets.appendChild(li)
      li.innerHTML = JSON.stringify(data)

      console.log(date)
      
    }).catch(function(error) {
      console.log(error);
    })
   
  });
  
  deleteButton.forEach(button => { 
    button.addEventListener('click', function() { 
      let b = button.parentNode.parentNode
        b.remove() 
    }) 


  })

});