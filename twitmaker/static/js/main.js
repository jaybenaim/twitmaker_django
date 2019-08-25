document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');
  let body = document.querySelector('body')
  let tweets = document.querySelector('.tweets')
  let li = document.createElement('li');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    axios.post(
      this.action,
      formData,
      { headers: { "X-Requested-With": "XMLHttpRequest" } }
    )
    .then(response => {
      tweets.innerHTML = ''
      tweets.appendChild(li)
      li.innerHTML = JSON.stringify(this.message.value)
    
    }).catch(function(error) {
      console.log(error);
    });
  });
});