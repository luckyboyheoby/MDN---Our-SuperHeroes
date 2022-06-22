async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}

function populateHeader(obj) {
  //Bắt 2 phần tử là cái header và thẻ h1
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");

  //Thay text của h1 thành super heroes squadname, sau đó đẩy dô thẻ header
  myH1.textContent = obj["squadName"];
  header.appendChild(myH1);

  //Bắt phần tử p, đổi text của nó thành ... gọi superheroes[hometown, formed], sau đó thêm dô cái header
  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj["homeTown"]} // Formed: ${obj["formed"]}`;
  header.appendChild(myPara);
}

function populateHeroes(obj) {
  //Bắt lấy section, tạo hằng heroes -> gọi superHeroes[members] -> trả về mảng members 
  const section = document.querySelector("section");
  const heroes = obj["members"];

  //Lặp từng hero của bộ heroes, lấy từng cái ra lắp dô, xong nhét dô cái article sau đó nhét dô cái section
  for (const hero of heroes) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`; 
    myPara3.textContent = "Superpowers:";

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

populate();
