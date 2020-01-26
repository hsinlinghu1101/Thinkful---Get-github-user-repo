


function displayList(resJson){
  let html=('');
  console.log(resJson);
  for(let i=0; i< resJson.length;i++){
    html += `<p>repo name: ${resJson[i].name}</p>
             <a href='${resJson[i].html_url}'> Repo Link </a>`;
  }
  $('div').html(html);
}


  
function  getGithub(name){
  let url =`https://api.github.com/users/${name}/repos`;
  console.log(url);
  fetch(url)
    .then(res =>{
      if(res.ok){
        return res.json();
      }else{
        throw new Error (res.statusText);
      }
    })
    .then(resJson =>displayList(resJson))
    .catch(error =>{
      $('div').text('something went wrong');
    });

}
function watchForm(){
  $('form').submit(function(event){
    event.preventDefault();
    let name =$('input[type="text"]').val();
    getGithub(name);
  });
    

}

$(watchForm);