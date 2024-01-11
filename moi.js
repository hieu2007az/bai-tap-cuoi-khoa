const apikey = "pub_34631aef6060e5c690f92e4167a210b5282a4";
let country = "us";
let bien = [9];
let giatri = 0;
function rreload() {
  document.getElementById("quaylai").style.display = "none";
  document.getElementById("video").style.display = "block";
  let tinphu = document.createElement("div");
  tinphu.id = "tinphu";
  document.getElementById("news").appendChild(tinphu);
  let tinchinh = document.createElement("div");
  tinchinh.id = "tinchinh";
  document.getElementById("news").appendChild(tinchinh);

  let conlai = document.createElement("div");
  conlai.id = "conlai";
  fetch(
    `https://newsdata.io/api/1/news?apikey=${apikey}&q=pizza&country=${country}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      document.getElementById("news").appendChild(conlai);
      let a = document.createElement("p");
      a.innerText = data.results[0].title;
      document.getElementById("tinchinh").appendChild(a);
      let img = document.createElement("img");
      img.src = data.results[0].image_url;
      a.appendChild(img);
      if (data.results[0].image_url == null) {
        img.src = "img/tai-hinh-nen-dep-nhat-the-gioi-57.jpg";
      }
      for (let i = 1; i < 4; i++) {
        console.log("asdasdasds");
        let tinphu = document.createElement("div");
        document.getElementById("tinphu").appendChild(tinphu);
        tinphu.classList.add(`news`);
        tinphu.id = `news${i}`;
        let a = document.createElement("p");
        a.innerText = data.results[i].title;
        tinphu.appendChild(a);
        let img = document.createElement("img");
        img.src = data.results[i].image_url;
        tinphu.appendChild(img);
        if (data.results[i].image_url == null) {
          img.src = "img/tai-hinh-nen-dep-nhat-the-gioi-57.jpg";
        }
      }

      for (let i = 4; i < data.results.length; i++) {
        let div = document.createElement("a");
        document.getElementById("conlai").appendChild(div);

        div.classList.add(`newss`);
        div.id = `news${i}`;
        let a = document.createElement("p");
        a.innerText = data.results[i].title;
        div.appendChild(a);
        let img = document.createElement("img");
        img.src = data.results[i].image_url;
        div.appendChild(img);
        if (data.results[i].image_url == null) {
          img.src = "img/tai-hinh-nen-dep-nhat-the-gioi-57.jpg";
        }
      }
    });

  fetch(
    `https://newsdata.io/api/1/news?apikey=${apikey}&q=pizza&country=${country}`
  )
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.results.length; i++) {
        bien[i] = document.getElementById(`news${i}`);
      }

      document.getElementById("tinchinh").onclick = () => {
        giatri = 0;
        console.log(giatri);
        noidung(giatri);
      };
      bien[1].onclick = () => {
        giatri = 1;
        console.log(giatri);
        noidung(giatri);
      };
      bien[2].onclick = () => {
        giatri = 2;
        console.log(giatri);
        noidung(giatri);
      };
      bien[3].onclick = () => {
        giatri = 3;
        console.log(giatri);
        noidung(giatri);
      };
      bien[4].onclick = () => {
        giatri = 4;
        console.log(giatri);
        noidung(giatri);
      };
      bien[5].onclick = () => {
        giatri = 5;
        console.log(giatri);
        noidung(giatri);
      };
      bien[6].onclick = () => {
        giatri = 6;
        console.log(giatri);
        noidung(giatri);
      };
      bien[7].onclick = () => {
        giatri = 7;
        console.log(giatri);
        noidung(giatri);
      };
      bien[8].onclick = () => {
        giatri = 8;
        console.log(giatri);
        noidung(giatri);
      };
      bien[9].onclick = () => {
        giatri = 9;
        console.log(giatri);
        noidung(giatri);
      };

      function noidung(gt) {
        document.getElementById("quaylai").style.display = "block";
        let thongtin = document.createElement("div");
        thongtin.id = "thongtin";
        document.getElementById("news").appendChild(thongtin);
        let title = document.createElement("h2");
        title.innerHTML = data.results[giatri].title;
        document.getElementById("thongtin").appendChild(title);
        title.id = "title";
        let pubDate = document.createElement("h2");
        pubDate.innerHTML = data.results[giatri].pubDate;
        document.getElementById("thongtin").appendChild(pubDate);
        pubDate.id = "pubDate";

        if (data.results[gt].image_url != null) {
          let img = document.createElement("img");
          img.src = data.results[gt].image_url;
          document.getElementById("thongtin").appendChild(img);
        }
        let content = document.createElement("p");
        content.innerHTML = data.results[giatri].content;
        document.getElementById("thongtin").appendChild(content);
        content.id = "content";
        
        let aa = document.querySelector("#tinchinh");
        aa.remove();
        aa = document.querySelector("#tinphu");
        aa.remove();
        aa = document.querySelector("#conlai");
        aa.remove();
        document.getElementById("video").style.display = "none";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    });
}

rreload();
document.getElementById("quaylai").onclick = () => {
  let xoa = document.querySelector("#thongtin");
  xoa.remove();
  rreload();
};

const submitInfoUser = () => {
  return alert("Chung toi da nhan duoc thong tin cua ban, Xin cam on!");
};
const nuoc=(a)=>{
  let aa = document.querySelector("#tinchinh");
        aa.remove();
        aa = document.querySelector("#tinphu");
        aa.remove();
        aa = document.querySelector("#conlai");
        aa.remove();
  country = a;
  rreload()
}
document.getElementById("nuoc").style.display="none"
let nut=()=>{
  if(document.getElementById("nuoc").style.display == "none"){
    document.getElementById("nuoc").style.display = "flex"
    document.getElementById("an").style.display = "flex"
    document.getElementById("hien").style.display = "none"
  }else{document.getElementById("nuoc").style.display = "none"
  document.getElementById("an").style.display = "none"
  document.getElementById("hien").style.display = "flex"}
}