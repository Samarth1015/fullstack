let url1 = "https://dog.ceo/api/breeds/image/random";

// console.log(fetch(url));
// fetch(url)
//   .then((res) => {
//     console.log(res.json());
//     return res.json();
//   })
//   .then((data) => {
//     // console.log(data);
//     console.log(data.message);
//   })
//   .catch((r) => {
//     console.log(r);
//   });
// console.log("he");
// let url = "https://catfact.ninja/fact";
// async function getFAct() {
//   try {
//     let res = await axios.get(url);
//     console.log(res);
//   } catch {
//     console.log("heeeeeeeeeeee");
//   }

//   console.log("he");
// }
// getFAct();

let btn = document.querySelector("button");
btn.addEventListener("click", setimage);
git;

async function setimage() {
  let imageurl = await axios.get(url1);
  console.log(imageurl.data.message);
  let imge = document.querySelector("#result");
  //   console.dir();
  imge.src = imageurl.data.message;
}
