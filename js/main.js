url="https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=9619aa418b38ce1b6500fe0b36a544da";
// url="https://api.themoviedb.org/3/discover/movie?api_key=9619aa418b38ce1b6500fe0b36a544da";
// url="https://api.themoviedb.org/3/discover/tv?api_key=9619aa418b38ce1b6500fe0b36a544da";
img_url=`https://image.tmdb.org/t/p/w300/backdrop_path`;

function display (data) {
  console.log(data);
  cards=document.querySelector(".cards")
  // console.log(cards)

  cartona=``;
  data.map(
    (m)=>{
      let i=img_url.replace("backdrop_path",m.img)
      cartona+=`<div class="card">
        <div class="img">
          <img src="${i}" alt="${m.title}">
          </div>
          <div class="title">
            <h2>${m.title}</h2>
            <h2>${m.vote}</h2>
          </div>
          <p>${m.overview}</p>
      </div>`
    }
  )
  // console.log(cartona)
  cards.innerHTML=cartona
};

fetch(url)
.then(
  (res)=>{
   return res.json();
}
).then((data)=>{
  data=data.results;
  console.log(data)
  parsedData=data.map(
    (m)=>{
      return {
        title:m.title == undefined ? m.name :m.title,
        img : m?.backdrop_path == undefined ? m?.poster_path:m?.backdrop_path,
        vote:m?.vote_average,
        overview:m?.overview
      }
    }
  );

  display(parsedData);
})