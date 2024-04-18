const btnCard = document.getElementById("btnCard");

const divBaru = document.createElement("div");
const divBaru2 = document.createElement("div");
btnCard.addEventListener("click", () => {
  // play music
  let audio = document.getElementById("audio");
  audio.currentTime = 30;
  audio.play();
  audio.addEventListener("timeupdate", function () {
    if (audio.currentTime >= 360) {
      audio.pause();
      audio.currentTime = 30;
      audio.play();
    }
  });
  let divBaru3 = document.createElement('div');
  let header = document.querySelector('header');
  document.body.insertBefore(divBaru3, header);

  divBaru3.classList.add('notification');
  divBaru3.setAttribute("id", "notification");
  divBaru3.innerHTML=`<span class="kotak"></span>
  <span class="text">Stop Music</span>`;

  // stop music
  let notif = document.getElementById("notification");
  notif.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    document.body.removeChild(notif);
  });

  function addCard() {
    const script = document.getElementsByTagName("script")[0];

    document.body.insertBefore(divBaru, script);
    document.body.insertBefore(divBaru2, script);

    divBaru.classList.add("blur");
    divBaru2.classList.add("card");
  };
  function closeCard() {
    document.body.removeChild(blur);
    document.body.removeChild(card);
  };
  addCard();
  const card = document.querySelector("div.card");
  const blur = document.querySelector("div.blur");
  card.innerHTML = `<div class="textArea taCenter">
    <button id="close">×</button>
      <img src="img/family.jpg" width="90%" height="130%""></>
      <p class="al-center">“kami segenap keluarga mengucapkan MINAL AIDZIN WAL FAIDZIN”</p>
    </div>
  <div class="btnArea">
  <button id='lanjut1'>Lanjut!</button>
  </div>`;
  const btnClose = document.getElementById("close");
  btnClose.addEventListener("click", () => {
    closeCard();
  });
  // pesan 2
  const lanjut1 = document.getElementById("lanjut1");
  lanjut1.addEventListener("click", () => {
    closeCard();
    addCard();
    card.innerHTML = `<div class="textArea taCenter">
    <button id="close">×</button>
      <img src="img/eid.gif" width="70%" height="110%""></>
      <p class="al-center">“deep in my heart, apabila saya ada salah yang sekiranya saya sendiri tidak tau. mohon dimaafkan”</p>
    </div>
    <div class="btnArea">
    <button id="lanjut2">Lanjut!</button>
    </div>`;
    const lanjut2 = document.getElementById('lanjut2');
    lanjut2.addEventListener('click',()=>{
      closeCard();
      addCard(); 
      card.innerHTML=`<div class="textArea taCenter">
      <button id="close">×</button>
        <img src="img/eid.gif" width="70%" height="110%""></>
        <p class="al-center">“terimakasih ya tante udah baik banget ke aku, maaf kalo jadi sering ngerepotin tante”</p>
      </div>
        <div class="btnArea">
          <button id="lanjut3">Lanjut!</button>
        </div>`;
      const btnClose = document.getElementById("close");
      btnClose.addEventListener("click", () => {
        closeCard();
      });
      const lanjut3 =document.getElementById('lanjut3');
      lanjut3.addEventListener('click',()=>{
        closeCard();
        addCard(); 
        card.innerHTML=`<div class="textArea taCenter">
        <button id="close">×</button>
          <img src="img/eid.gif" width="70%" height="110%""></>
          <p class="al-center">“terimakasih juga udah ngasi thr ke aku hehe”</p>
        </div>
        <div class="btnArea">
          <button id="lanjut4">Lanjut!</button>
        </div>`;
        const btnClose = document.getElementById("close");
        btnClose.addEventListener("click", () => {
          closeCard();
        });
        const lanjut4 =document.getElementById('lanjut4');
        lanjut4.addEventListener('click',()=>{
          closeCard();
          addCard(); 
          card.innerHTML=`<div class="textArea taCenter">
          <button id="close">×</button>
            <img src="img/eid.gif" width="70%" height="110%""></>
            <p class="al-center">“dan hari ini saya bawain oleh-oleh karna niatan dari diri sendiri, sekali-sekali ya tante... jangan marah ya tante cantik”</p>
          </div>
          <div class="btnArea">
            <button id="lanjut5">Lanjut!</button>
          </div>`;
          const btnClose = document.getElementById("close");
          btnClose.addEventListener("click", () => {
            closeCard();
          });
          const lanjut5 =document.getElementById('lanjut5');
        lanjut5.addEventListener('click',()=>{
          closeCard();
          addCard(); 
          card.innerHTML=`<div class="textArea taCenter">
          <button id="close">×</button>
            <img src="img/selamat-lebaran.gif" width="70%" height="110%""></>
            <p class="al-center">“semoga diterima dan sekali lagi terimakasih, met lebaran gaes”</p>
          </div>
          <div class="btnArea">
            <button id="keluar">Keluar</button>
          </div>`;
          const btnClose = document.getElementById("close");
          btnClose.addEventListener("click", () => {
            closeCard();
          });
          const keluar = document.getElementById("keluar");
          keluar.addEventListener("click", () => {
            closeCard();
          });
        });
        });
      });
    })
    // close
    const btnClose = document.getElementById("close");
    btnClose.addEventListener("click", () => {
      closeCard();
    });
  });
});
