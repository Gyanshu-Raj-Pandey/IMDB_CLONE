let left_btn= document.getElementsByClassName('bi-chevron-left')[0];
let right_btn= document.getElementsByClassName('bi-chevron-right')[0];
let cards= document.getElementsByClassName('cards')[0];
let search= document.getElementsByClassName('search')[0];
let Search_input= document.getElementById('Search_input')[0];

left_btn.addEventListener('click',()=>{
    cards.scrollLeft-=170;
})

right_btn.addEventListener('click',()=>{
    cards.scrollLeft+=170;
})

let json_url="movie.json";

fetch(json_url).then(Response => Response.json())
.then((data) => {
    // console.log(data);
    data.forEach((ele ,i) => {
        let {name , imdb , date , sposter , bposter, genre , url} = ele;
      let card = document.createElement('a');
      card.classList.add('card');
      card.href=url;
      card.innerHTML=`
      <img src="${sposter}" alt="${name}" class="poster">
                            <div class="rest_card">
                                <img src="${bposter}" alt="">
                                <div class="cont">
                                    <h4>${name}</h4>
                                    <div class="sub">
                                        <p>${genre}, ${date}</p>
                                    <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                                    </div>
                                </div>
                            </div>
      `  
      cards.appendChild(card);
    });

    document.getElementById('title').innerText=data[0].name ;
    document.getElementById('gen').innerText=data[0].genre ;
    document.getElementById('date').innerText=data[0].date ;
    document.getElementById('rate').innerHTML=`<span>IMDB</span><i class="bi bi-star-fill"></i> ${data[0].imdb}` ;

// search data load

data.forEach(element => {
    let {name , imdb , date , sposter , genre , url} = element;
    let card = document.createElement('div');
    card.classList.add('card');
    card.href=url;
    card.innerHTML=`
    <img src="${sposter}" alt="" >
                          <div class="cont">
                              <h3> ${name}</h3>
                              <p>${genre} , ${date}  <span>IMDB</span><i class="bi bi-star-fill"></i> ${imdb}</p>
                          </div>
   
                          `  
    search.appendChild(card);

 
                        });

                        // search filter
                        
Search_input.addEventListener('keyup',() =>{

let filter= Search_input.value.toUpperCase();
let a = search.getElementsByTagName('a');
for (let index = 0; index < a.length; index++) {
    
    let b = a[index].getElementsByClassName('cont')[0];
    // console.log(a.textContent);
    let textvalue = b.textContent || b.innerText
    if(textvalue.toUpperCase().indexOf(filter)> -1 ){
     a[index].style.display = "flex";
     search.style.visibility= "visible";
     search.style.opacity =1;

    }
    else{
        a[index].style.display = "none";
    }

    if (Search_input.value == 0) {
        search.style.visibility= "hidden";
     search.style.opacity =0;
    }

}


});

let video = document.getElementsByTagName('video')[0];
let play = document.getElementById('play');
play.addEventListener('click',() =>{
if(video.paused){
    video.play();
    play.innerHTML=`Play <i class="bi bi-pause-fill"></i>`
}else{
   play.innerHTML=`watch <i class="bi bi-play-fill"></i>`
    video.pause();
    
}
});


});



