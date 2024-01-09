const row = document.querySelector(".row")


fetch("https://api.pexels.com/v1/search?query=fitness", {
    headers: {
        Authorization: "3JggPY36Qx3PvulmiaU65qHhPlI5rR2n5y5ydrQzSomVAQZ3V0YxNpeW"
    }
})
    .then((row) => {
        return row.json();
    })
    .then((res) => {
        const data = res.photos
        data.map((data) => {
            // renderizza qualcosa
            row.innerHTML += creaCard(data.src.original, data.alt, data.photographer)
        })
    })
    .catch((err) => console.log(err));

const creaCard = function (pics, alt, photographer) {
    return `
    <div class="col mt-3">
<div class="card" style="width: 18rem">
<img src="${pics}" class="card-img-top" alt="Fitness" />
<div class="card-body">
<h5 class="card-title">${alt}</h5>
<p class="card-text">
  ${photographer}
</p>
<a href="#" class="btn btn-primary">Go to the Gym</a>
</div>
</div>
</div>`;
}



//             for (items of data) {
//                 const pics = items.src.original
//                 const alt = items.alt
//                 const photographer = items.photographer
// console.log(pics)
//                 row.innerHTML += `
//                 <div class="col mt-3">
//         <div class="card" style="width: 18rem">
//           <img src="${pics}" class="card-img-top" alt="Fitness" />
//           <div class="card-body">
//             <h5 class="card-title">${alt}</h5>
//             <p class="card-text">
//               ${photographer}
//             </p>
//             <a href="#" class="btn btn-primary">Go to the Gym</a>
//           </div>
//         </div>
//     </div>`;
//             }