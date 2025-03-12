const hitungDataTahun = (tahun) => {
  let hasil = tahun % 8; let thn = hasil;
  const grades = ["Baa", "Wawu", "Jim Awal", "Alip", "Haa", "Jim Akhir", "Zai", "Dal"];
  let grade = grades[thn];
  let tahuntam = tahun - 1;
  let bB = Math.trunc(tahuntam / 30);
  let cC = tahuntam % 30;
  let gradeskabisah = ["11", "0", "1", "1", "1", "2", "2", "3", "3", "3", "4", "4", "4", "5", "5", "5", "6", "6", "7", "7", "7", "8", "8", "8", "9", "9", "10", "10", "10", "11"][cC];
  let gradesbasitoh = ["19", "1", "1", "2", "3", "3", "4", "4", "5", "6", "6", "7", "8", "8", "9", "10", "10", "11", "11", "12", "13", "13", "14", "15", "15", "16", "16", "17", "18", "18"][cC];
  let dD = bB * 5;
  let eE = parseInt(gradeskabisah) * 5;
  let fF = parseInt(gradesbasitoh) * 4;
  let gG = dD + eE + fF + 5;
  let hH = gG % 7;
  let hmth = ["Sabtu", "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at"][hH];
  let iI = bB + fF;
  let jJ = iI % 5;
  let hmp = ["Kliwon", "Legi", "Pahing", "Pon", "Wage"][jJ];

  let kbbsValues = [
    "Basitoh", "Basitoh", "Kabisah", "Basitoh", "Basitoh", "Kabisah",
    "Basitoh", "Kabisah", "Basitoh", "Basitoh", "Kabisah", "Basitoh",
    "Basitoh", "Kabisah", "Basitoh", "Kabisah", "Basitoh", "Basitoh",
    "Kabisah", "Basitoh", "Basitoh", "Kabisah", "Basitoh", "Basitoh",
    "Kabisah", "Basitoh", "Kabisah", "Basitoh", "Basitoh", "Kabisah", "Basitoh"
  ];
  let kbbs = kbbsValues[tahun % 30];
  if (kbbs == "Kabisah") {uBln = "30";
} else {uBln = "29";}

  return { tahun, hasil, grade, tahuntam, bB, cC, gradeskabisah, gradesbasitoh, iI, jJ, hH, hmth, hmp, kbbs };
};

const calculate1 = () => {
  let tahun = document.querySelector("#tahun").value;
  if (!tahun) {
    document.querySelector("#showdata").innerHTML = "Mohon maaf, harap masukan tahun!";
    return;
  }

  let { hasil, grade, tahuntam, bB, cC, gradeskabisah, gradesbasitoh, hH, hmth, iI, jJ, hmp, kbbs } = hitungDataTahun(parseInt(tahun));
  let days = ["Sabtu", "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
  let hHBase = hH % 7; 
  let days2 = ["Kliwon", "Legi", "Pahing", "Pon", "Wage"];
  let hHBase2 = jJ % 5; 

  let soparN = days[(hHBase + 2) % 7];
  let robiulAwalN = days[(hHBase + 3) % 7];
  let robiusStaniN = days[(hHBase + 5) % 7];
  let jumadilAwalN = days[(hHBase + 6) % 7];
  let jumadisStaniN = days[(hHBase + 1) % 7];
  let rojabN = days[(hHBase + 2) % 7];
  let syabanN = days[(hHBase + 4) % 7];
  let romadhonN = days[(hHBase + 5) % 7];
  let syawalN = days[hHBase]; 
  let dzulQodahN = days[(hHBase + 1) % 7];
  let dzulHijjahN = days[(hHBase + 3) % 7];

  let robiulAwalandStani = days2[(hHBase2 + 4) % 5];
  let jumadilAwalandStani = days2[(hHBase2 + 3) % 5];
  let rojabandSyaban = days2[(hHBase2 + 2) % 5];
  let romadhonandSyawal = days2[(hHBase2 + 1) % 5];


  document.querySelector("#showdata").innerHTML = `
 		<table class="table-harokat">
 	   	<tr class="tr-harokat">
 	      	<th class="th-harokat">Bulan</th>
 	        	<th class="th-harokat">H.NSL</th>
 	          	<th class="th-harokat">H.PSN</th>
 		            <th class="th-harokat">U.Bln</th></tr>
  	              	<tr class="tr-harokat">
 	                  <td class="td-harokat">Muharom</td>
 	                    <td class="td-harokat"> ${hmth}</td>
 	                      <td class="td-harokat"> ${hmp}</td>
 	                        <td class="td-harokat"> 30</td></tr>
   	              	<tr class="tr-harokat">
 	                  <td class="td-harokat">Sopar</td>
 	                    <td class="td-harokat"> ${soparN}</td>
 	                      <td class="td-harokat"> ${hmp}</td>
 	                        <td class="td-harokat"> 29</td></tr>
  	              	<tr class="tr-harokat">
 	                  <td class="td-harokat">Robiul Awal</td>
 	                    <td class="td-harokat"> ${robiulAwalN}</td>
 	                      <td class="td-harokat"> ${robiulAwalandStani}</td>
 	                        <td class="td-harokat"> 30</td></tr>
 	              	<tr class="tr-harokat">
 	                  <td class="td-harokat">Robius Stani</td>
 	                    <td class="td-harokat"> ${robiusStaniN}</td>
 	                      <td class="td-harokat"> ${robiulAwalandStani}</td>
 	                        <td class="td-harokat"> 29</td></tr>   
   	              	<tr class="tr-harokat">
 	                  <td class="td-harokat">Jumadil Awal</td>
 	                    <td class="td-harokat"> ${jumadilAwalN}</td>
 	                      <td class="td-harokat"> ${jumadilAwalandStani}</td>
 	                        <td class="td-harokat"> 30</td></tr>                                                                                               
 	              	<tr class="tr-harokat">
 	                  <td class="td-harokat">Jumadis Stani</td>
 	                    <td class="td-harokat"> ${jumadisStaniN}</td>
 	                      <td class="td-harokat"> ${jumadilAwalandStani}</td>
 	                        <td class="td-harokat"> 29</td></tr>
 	              	<tr class="tr-harokat">
 	                  <td class="td-harokat">Rojab</td>
 	                    <td class="td-harokat"> ${rojabN}</td>
 	                      <td class="td-harokat"> ${rojabandSyaban}</td>
 	                        <td class="td-harokat"> 30</td></tr>
 	              	<tr class="tr-harokat">
 	                  <td class="td-harokat">Syaban</td>
 	                    <td class="td-harokat"> ${syabanN}</td>
 	                      <td class="td-harokat"> ${rojabandSyaban}</td>
 	                        <td class="td-harokat"> 29</td></tr>
 	              	<tr class="tr-harokat">
 	                  <td class="td-harokat">Romadhon</td>
 	                    <td class="td-harokat"> ${romadhonN}</td>
 	                      <td class="td-harokat"> ${romadhonandSyawal}</td>
 	                        <td class="td-harokat"> 30</td></tr>
 	              	<tr class="tr-harokat">
 	                  <td class="td-harokat">Syawal</td>
 	                    <td class="td-harokat"> ${syawalN}</td>
 	                      <td class="td-harokat"> ${romadhonandSyawal}</td>
 	                        <td class="td-harokat"> 30</td></tr>
 	              	<tr class="tr-harokat">
 	                  <td class="td-harokat">Dzul-Qo'dah</td>
 	                    <td class="td-harokat"> ${dzulQodahN}</td>
 	                      <td class="td-harokat"> ${hmp}</td>
 	                        <td class="td-harokat"> 29</td></tr>
 	              	<tr class="tr-harokat">
 	                  <td class="td-harokat">Dzul-Hijjah</td>
 	                    <td class="td-harokat"> ${dzulHijjahN}</td>
 	                      <td class="td-harokat"> ${hmp}</td>
 	                        <td class="td-harokat"> ${uBln}</td></tr>
    </table>

  `;
};
const calculate2 = () => {
  let tahun = document.querySelector("#tahun").value;
  if (!tahun) {
    document.querySelector("#showdata").innerHTML = "Mohon maaf, harap masukan tahun!";
    return;
  }
  let { hasil, grade, tahuntam, bB, cC, gradeskabisah, gradesbasitoh, hmth, hmp, kbbs } = hitungDataTahun(parseInt(tahun));
  document.querySelector("#showdata").innerHTML = `
    <table class="table-harokat">
      <tr class="tr-harokat"><th class="th-harokat">Nama</th><th class="th-harokat">Hasil</th></tr>
      <tr class="tr-harokat"><td class="td-harokat">Tahun</td><td class="td-harokat">${tahun}</td></tr>
      <tr class="tr-harokat"><td class="td-harokat">A</td><td class="td-harokat">${hasil}</td></tr>
      <tr class="tr-harokat"><td class="td-harokat">Tahun Jawa</td><td class="td-harokat">${grade}</td></tr>
      <tr class="tr-harokat"><td class="td-harokat">Tahun Tam</td><td class="td-harokat">${tahuntam}</td></tr>
      <tr class="tr-harokat"><td class="td-harokat">B</td><td class="td-harokat">${bB}</td></tr>
      <tr class="tr-harokat"><td class="td-harokat">C</td><td class="td-harokat">${cC}</td></tr>
      <tr class="tr-harokat"><td class="td-harokat">Kabisah</td><td class="td-harokat">${gradeskabisah}</td></tr>
      <tr class="tr-harokat"><td class="td-harokat">Basitoh</td><td class="td-harokat">${gradesbasitoh}</td></tr>
      <tr class="tr-harokat"><td class="td-harokat">Hari</td><td class="td-harokat">${hmth}</td></tr>
      <tr class="tr-harokat"><td class="td-harokat">Pasaran</td><td class="td-harokat">${hmp}</td></tr>
      <tr class="tr-harokat"><td class="td-harokat">Kbbs</td><td class="td-harokat">${kbbs}</td></tr>
    </table>
    <h1 style="margin-top:20px">Al-Hasil</h1>
    <p>Awal Tahun ${tahun} Hijriyah jatuh Pada Hari ${hmth} , ${hmp}</p>
  `;
};
