const hitungDataBulan = () => { let latText = document.getElementById("latitude"); let longText = document.getElementById("longitude"); 
navigator.geolocation.getCurrentPosition((position) => { let lat = position.coords.latitude; let long = position.coords.longitude; 
latText.innerText = lat.toFixed(3); longText.innerText = long.toFixed(3);}); let ltd = longText.innerText - 106.000 + 106.000; let ltd2 = ltd.toFixed(3); 

let tahunmajmuah = document.querySelector("#tahunmajmuah").value; let totaltahunmajmuah =  parseFloat(tahunmajmuah); 

const dataMajmuah = [
  [1410, 161.900], [1420, 33.983], [1430, 74.067], [1440, 114.150], [1450, 154.233], [1460, 26.317], [1470, 66.400], [1480, 106.483], 
  [1490, 146.566], [1500, 18.649], [1510, 58.732], [1520, 98.815], [1530, 138.898], [1540, 10.981], [1550, 51.064]]; 
const dataHissohSinin = [
  [1410, 197.550], [1420, 278.050], [1430, 358.550], [1440, 79.050], [1450, 159.550], [1460, 240.050], [1470, 320.550], [1480, 41.050], 
  [1490, 121.550], [1500, 202.050], [1510, 282.550], [1520, 3.050], [1530, 83.550], [1540, 164.050], [1550, 244.550]];
const dataWasatSinin = [
  [1410, 162.000], [1420, 54.800], [1430, 307.600], [1440, 200.400], [1450, 93.200], [1460, 346.000], [1470, 238.800], [1480, 131.600], 
  [1490, 24.400], [1500, 277.200], [1510, 170.000], [1520, 62.800], [1530, 315.600], [1540, 208.400], [1550, 101.200]];
const dataKhosohSinin = [
  [1410, 322.217], [1420, 180.217], [1430, 38.217], [1440, 256.217], [1450, 114.217], [1460, 332.217], [1470, 190.217], [1480, 48.217], 
  [1490, 266.217], [1500, 124.217], [1510, 342.217], [1520, 3.050], [1530, 83.550], [1540, 164.050], [1550, 244.550]];
const dataMarkazSinin = [
  [1410, 59.833], [1420, 312.500], [1430, 205.167], [1440, 97.833], [1450, 350.500], [1460, 243.167], [1470, 135.833], [1480, 28.500], 
  [1490, 281.167], [1500, 173.833], [1510, 66.500], [1520, 319.167], [1530, 211.834], [1540, 104.501], [1550, 357.168]];

let alamahsininmajmuah = dataMajmuah.find(([batas]) => tahunmajmuah <= batas)?.[1] || 0;
let hissohsininmajmuah = dataHissohSinin.find(([batas]) => tahunmajmuah <= batas)?.[1] || 0;
let wasatsininmajmuah = dataWasatSinin.find(([batas]) => tahunmajmuah <= batas)?.[1] || 0;
let khosohsininmajmuah = dataKhosohSinin.find(([batas]) => tahunmajmuah <= batas)?.[1] || 0;
let markazsininmajmuah = dataMarkazSinin.find(([batas]) => tahunmajmuah <= batas)?.[1] || 0;

let tahunmabsutoh = document.querySelector("#tahunmabsutoh").value; let totaltahunmabsutoh = parseFloat(tahunmabsutoh);

const dataAlamahSininMabsutoh = [
  [1, 104.800], [2, 41.617], [3, 146.417], [4, 83.233], [5, 20.033], [6, 124.850], [7, 61.650], [8, 166.467], [9, 103.267], [10, 40.083]];
const dataHissohSininMabsutoh = [
  [1, 8.050], [2, 16.100], [3, 24.150], [4, 32.200], [5, 40.250], [6, 48.300], [7, 56.350], [8, 64.400], [9, 72.450], [10, 80.500]];
const dataWasatSininMabsutoh = [
  [1, 349.267], [2, 338.567], [3, 327.833], [4, 317.117], [5, 306.400], [6, 295.683], [7, 284.967], [8, 274.233], [9, 263.517], [10, 252.800]]; 
const dataKhosohSininMabsutoh = [
  [1, 309.800], [2, 259.600], [3, 209.400], [4, 159.200], [5, 109.000], [6, 58.800], [7, 8.600], [8, 318.400], [9, 268.200], [10, 218.000]];
const dataMarkazSininMabsutoh = [
  [1, 349.267], [2, 338.533], [3, 327.800], [4, 317.067], [5, 306.333], [6, 295.600], [7, 284.867], [8, 274.133], [9, 263.400], [10, 252.667]];

let alamahsininmabsutoh = dataAlamahSininMabsutoh.find(([batas]) => totaltahunmabsutoh <= batas)?.[1] || "0"; 
let hissohsininmabsutoh = dataHissohSininMabsutoh.find(([batas]) => totaltahunmabsutoh <= batas)?.[1] || "0"; 
let wasatsininmabsutoh = dataWasatSininMabsutoh.find(([batas]) => totaltahunmabsutoh <= batas)?.[1] || "0";
let khosohsininmabsutoh = dataKhosohSininMabsutoh.find(([batas]) => totaltahunmabsutoh <= batas)?.[1] || "0";
let markazsininmabsutoh = dataMarkazSininMabsutoh.find(([batas]) => totaltahunmabsutoh <= batas)?.[1] || "0";

let bulanhijriyah = document.querySelector("#bulanhijriyah").value; let totalbulan = parseFloat(bulanhijriyah);

const dataAlamah = [[1, 68.067], [2, 0.000], [3, 36.733], [4, 73.467], [5, 110.200], [6, 146.933], [7, 15.667], [8, 52.400], [9, 89.133], [10, 125.867], [11, 162.600], [12, 31.333]];
const dataHissoh = [[1, 337.383], [2, 0.000], [3, 30.667], [4, 61.333], [5, 92.017], [6, 122.683], [7, 153.350], [8, 184.017], [9, 214.700], [10, 245.367], [11, 276.050], [12, 306.717]];
const dataWasat = [[1, 320.167], [2, 0.000], [3, 29.100], [4, 58.217], [5, 87.317], [6, 116.433], [7, 145.533], [8, 174.633], [9, 203.750], [10, 232.850], [11, 261.950], [12, 291.067]];
const dataKhosoh = [[1, 283.983], [2, 0.000], [3, 25.817], [4, 51.633], [5, 77.433], [6, 103.267], [7, 129.083], [8, 154.900], [9, 180.717], [10, 206.533], [11, 232.350], [12, 258.167]];
const dataMarkaz = [[1, 320.167], [2, 0.000], [3, 29.100], [4, 58.217], [5, 87.317], [6, 116.433], [7, 145.533], [8, 174.633], [9, 203.750], [10, 232.850], [11, 261.950], [12, 291.067]];

let alamahbulan = dataAlamah.find(([batas]) => totalbulan <= batas)?.[1] || "0";
let hissohbulan = dataHissoh.find(([batas]) => totalbulan <= batas)?.[1] || "0";
let wasatbulan = dataWasat.find(([batas]) => totalbulan <= batas)?.[1] || "0";
let khosohbulan = dataKhosoh.find(([batas]) => totalbulan <= batas)?.[1] || "0";
let markazbulan = dataMarkaz.find(([batas]) => totalbulan <= batas)?.[1] || "0";

let totalAlamah = alamahsininmajmuah + alamahsininmabsutoh + alamahbulan;
let hasilAkhirAlamah = totalAlamah >= 168 ? totalAlamah - 168 : totalAlamah -0;
let hasilAkhirAlamah2 = hasilAkhirAlamah >= 168 ? hasilAkhirAlamah - 168 : hasilAkhirAlamah -0;
let totalHissoh = hissohsininmajmuah + hissohsininmabsutoh + hissohbulan;
let hasilAkhirHissoh = totalHissoh >= 360 ? totalHissoh - 360 : totalHissoh -0;
let hasilAkhirHissoh2 = hasilAkhirHissoh >= 360 ? hasilAkhirHissoh - 360 : hasilAkhirHissoh -0;            

function hitungHasil(total, batas) {
return total >= batas ? total - batas : total;}
let totalWasat123 = wasatsininmajmuah + wasatsininmabsutoh + wasatbulan;
let hasilAkhirWasat = hitungHasil(totalWasat123, 360); 
let hasilAkhirWasat2 = hitungHasil(hasilAkhirWasat, 360);
let totalKhosoh123 = khosohsininmajmuah + khosohsininmabsutoh + khosohbulan;
let hasilAkhirKhosoh = hitungHasil(totalKhosoh123, 360);
let hasilAkhirKhosoh2 = hitungHasil(hasilAkhirKhosoh, 360);
let totalMarkaz123 = markazsininmajmuah + markazsininmabsutoh + markazbulan;
let hasilAkhirMarkaz = hitungHasil(totalMarkaz123, 360);
let hasilAkhirMarkaz2 = hitungHasil(hasilAkhirMarkaz, 360);
let hasilAkhirAlamah3 = hasilAkhirAlamah2.toFixed(3);
let hasilAkhirHissoh3 = hasilAkhirHissoh2.toFixed(3);
let hasilAkhirWasat3 = hasilAkhirWasat2.toFixed(3);
let hasilAkhirKhosoh3 = Math.round(hasilAkhirKhosoh2);
let hasilAkhirMarkaz3 = Math.round(hasilAkhirMarkaz2); 

tahunYangDimaksud = totaltahunmajmuah + totaltahunmabsutoh + (totalbulan <= 1 ? 1 : 0);
const bulanList = ["Muharom", "Sopar", "Robi'ul Awal", "Robi'ust Stani", "Jumadil Awal", "Jumadist Stani", "Rojab", "Sya'ban", "Romadhon", "Syawal", "Dzul Qo'dah", "Dzul Hijjah"];
bulanYangDimaksud = bulanList[totalbulan - 1] || "Invalid";
const lookupTadilKhosoh = [
  4.983, 4.900, 4.833, 4.750, 4.667, 4.583, 4.500, 4.417, 4.333, 4.250, // 0 - 9
  4.183, 4.100, 4.017, 3.933, 3.850, 3.783, 3.717, 3.633, 3.550, 3.467, // 10 - 19
  3.400, 3.317, 3.250, 3.183, 3.117, 3.050, 2.967, 2.900, 2.817, 2.750, // 20 - 29
  2.683, 2.600, 2.533, 2.467, 2.400, 2.333, 2.250, 2.183, 2.117, 2.050, // 30 - 39
  1.983, 1.917, 1.850, 1.783, 1.717, 1.667, 1.600, 1.550, 1.483, 1.433, // 40 - 49
  1.383, 1.317, 1.267, 1.217, 1.167, 1.117, 1.067, 1.017, 0.967, 0.917, // 50 - 59
  0.867, 0.817, 0.783, 0.733, 0.683, 0.633, 0.600, 0.567, 0.533, 0.483, // 60 - 69
  0.450, 0.433, 0.417, 0.383, 0.350, 0.300, 0.283, 0.267, 0.250, 0.217, // 70 - 79
  0.183, 0.150, 0.133, 0.117, 0.100, 0.083, 0.067, 0.050, 0.050, 0.033, // 80 - 89
  0.033, 0.033, 0.017, 0.017, 0.000, 0.000, 0.000, 0.000, 0.017, 0.017, // 90 - 99
  0.033, 0.033, 0.050, 0.067, 0.083, 0.100, 0.117, 0.133, 0.150, 0.167, // 100 - 109
  0.183, 0.200, 0.250, 0.267, 0.300, 0.317, 0.350, 0.383, 0.417, 0.450, // 110 - 119
  0.500, 0.533, 0.583, 0.617, 0.667, 0.717, 0.767, 0.817, 0.867, 0.917, // 120 - 129
  0.967, 1.033, 1.083, 1.150, 1.200, 1.250, 1.317, 1.383, 1.450, 1.517, // 130 - 139
  1.583, 1.650, 1.717, 1.783, 1.850, 1.933, 2.000, 2.083, 2.150, 2.233, // 140 - 149
  2.317, 2.383, 2.450, 2.533, 2.617, 2.717, 2.800, 2.950, 2.967, 3.050, // 150 - 159
  3.133, 3.217, 3.317, 3.400, 3.483, 3.583, 3.667, 3.750, 3.850, 3.933, // 160 - 169
  4.033, 4.117, 4.200, 4.283, 4.367, 4.450, 4.550, 4.650, 4.767, 4.867, // 170 - 179
  4.983, 5.083, 5.183, 5.267, 5.367, 5.450, 5.550, 5.650, 5.750, 5.833, // 180 - 189
  5.933, 6.033, 6.133, 6.217, 6.317, 6.400, 6.500, 6.583, 6.667, 6.750, // 190 - 199
  6.833, 6.933, 7.017, 7.100, 7.183, 7.267, 7.350, 7.433, 7.517, 7.600, // 200 - 209
  7.683, 7.767, 7.833, 7.917, 7.983, 8.050, 8.133, 8.200, 8.283, 8.350, // 210 - 219
  8.417, 8.483, 8.550, 8.617, 8.683, 8.733, 8.800, 8.850, 8.900, 8.967, // 220 - 229
  9.017, 9.067, 9.117, 9.167, 9.217, 9.267, 9.317, 9.350, 9.383, 9.433, // 230 - 239
  9.483, 9.517, 9.550, 9.600, 9.633, 9.667, 9.683, 9.700, 9.733, 9.767, // 240 - 249
  9.800, 9.817, 9.833, 9.850, 9.867, 9.883, 9.900, 9.917, 9.933, 9.950, // 250 - 259
  9.950, 9.967, 9.967, 9.983, 9.983, 10.000, 10.000, 10.000, 9.983, 9.983, // 260 - 269
  9.983, 9.983, 9.967, 9.950, 9.950, 9.933, 9.900, 9.883, 9.867, 9.833, // 270 - 279
  9.800, 9.783, 9.767, 9.733, 9.717, 9.683, 9.650, 9.617, 9.583, 9.550, // 280 - 289
  9.517, 9.483, 9.450, 9.417, 9.383, 9.333, 9.283, 9.250, 9.217, 9.167, // 290 - 299
  9.117, 9.067, 9.017, 8.967, 8.917, 8.867, 8.817, 8.767, 8.717, 8.667, // 300 - 309
  8.600, 8.550, 8.483, 8.417, 8.367, 8.300, 8.250, 8.183, 8.117, 8.050, // 310 - 319
  7.983, 7.917, 7.850, 7.783, 7.717, 7.650, 7.583, 7.517, 7.450, 7.383, // 320 - 329
  7.300, 7.233, 7.150, 7.083, 7.000, 6.933, 6.867, 6.800, 6.717, 6.650, // 330 - 339
  6.583, 6.500, 6.400, 6.350, 6.267, 6.183, 6.100, 6.017, 5.950, 5.867, // 340 - 349
  5.783, 5.700, 5.617, 5.550, 5.467, 5.383, 5.300, 5.217, 5.150, 5.067  // 350 - 359
];
let index = Math.ceil(hasilAkhirKhosoh3);if (index < 0) index = 0;if (index >= lookupTadilKhosoh.length) index = lookupTadilKhosoh.length - 1;tadilkhosoh = lookupTadilKhosoh[index];

const lookupTadilMarkaz = [
  1.933, 1.983, 2.017, 2.050, 2.083, 2.100, 2.133, 2.167, 2.200, 2.233, // 0 - 9
  2.267, 2.300, 2.317, 2.350, 2.383, 2.417, 2.450, 2.483, 2.517, 2.550, // 10 - 19
  2.583, 2.617, 2.650, 2.667, 2.700, 2.733, 2.767, 2.800, 2.833, 2.850, // 20 - 29
  2.883, 2.917, 2.950, 2.967, 2.983, 3.017, 3.050, 3.083, 3.117, 3.133, // 30 - 39
  3.150, 3.167, 3.200, 3.217, 3.250, 3.267, 3.283, 3.317, 3.333, 3.350, // 40 - 49
  3.383, 3.400, 3.433, 3.450, 3.467, 3.500, 3.517, 3.533, 3.550, 3.567, // 50 - 59
  3.583, 3.600, 3.617, 3.633, 3.650, 3.667, 3.683, 3.683, 3.700, 3.717, // 60 - 69
  3.733, 3.750, 3.767, 3.767, 3.783, 3.800, 3.800, 3.800, 3.817, 3.817, // 70 - 79
  3.833, 3.833, 3.850, 3.850, 3.850, 3.867, 3.867, 3.867, 3.867, 3.867, // 80 - 89
  3.867, 3.867, 3.867, 3.867, 3.867, 3.867, 3.867, 3.867, 3.867, 3.867, // 90 - 99
  3.867, 3.850, 3.850, 3.850, 3.833, 3.833, 3.817, 3.800, 3.800, 3.783, // 100 - 109
  3.783, 3.767, 3.750, 3.750, 3.733, 3.717, 3.717, 3.700, 3.683, 3.660, // 110 - 119
  3.650, 3.633, 3.617, 3.600, 3.583, 3.567, 3.550, 3.533, 3.500, 3.483, // 120 - 129
  3.467, 3.450, 3.417, 3.400, 3.367, 3.350, 3.317, 3.300, 3.283, 3.250, // 130 - 139
  3.233, 3.200, 3.167, 3.133, 3.117, 3.083, 3.050, 3.017, 2.983, 2.950, // 140 - 149
  2.933, 2.900, 2.867, 2.850, 2.817, 2.783, 2.750, 2.717, 2.700, 2.667, // 150 - 159
  2.633, 2.600, 2.567, 2.533, 2.500, 2.467, 2.433, 2.383, 2.350, 2.317, // 160 - 169
  2.283, 2.250, 2.217, 2.183, 2.150, 2.117, 2.083, 2.050, 2.017, 1.983, // 170 - 179
  1.933, 1.900, 1.883, 1.850, 1.800, 1.767, 1.733, 1.700, 1.667, 1.633, // 180 - 189
  1.600, 1.567, 1.533, 1.483, 1.450, 1.417, 1.383, 1.350, 1.317, 1.283, // 190 - 199
  1.250, 1.217, 1.183, 1.167, 1.133, 1.100, 1.067, 1.033, 1.000, 0.967, // 200 - 209
  0.933, 0.900, 0.867, 0.833, 0.800, 0.783, 0.750, 0.717, 0.700, 0.667, // 210 - 219
  0.650, 0.617, 0.600, 0.583, 0.550, 0.533, 0.500, 0.483, 0.467, 0.433, // 220 - 229
  0.417, 0.400, 0.383, 0.350, 0.333, 0.317, 0.300, 0.283, 0.267, 0.250, // 230 - 239
  0.233, 0.217, 0.200, 0.183, 0.167, 0.150, 0.150, 0.133, 0.117, 0.117, // 240 - 249
  0.100, 0.100, 0.083, 0.067, 0.067, 0.050, 0.050, 0.033, 0.033, 0.017, // 250 - 259
  0.017, 0.017, 0.017, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, // 260 - 269
  0.000, 0.000, 0.000, 0.000, 0.017, 0.017, 0.017, 0.033, 0.033, 0.033, // 270 - 279
  0.050, 0.050, 0.067, 0.067, 0.083, 0.100, 0.100, 0.117, 0.117, 0.133, // 280 - 289
  0.150, 0.150, 0.167, 0.183, 0.200, 0.217, 0.233, 0.250, 0.267, 0.283, // 290 - 209
  0.300, 0.317, 0.333, 0.360, 0.383, 0.400, 0.417, 0.433, 0.467, 0.483, // 300 - 309
  0.500, 0.517, 0.550, 0.567, 0.600, 0.617, 0.633, 0.667, 0.683, 0.717, // 310 - 319
  0.733, 0.767, 0.783, 0.817, 0.833, 0.867, 0.883, 0.917, 0.933, 0.967, // 320 - 329
  1.000, 1.033, 1.067, 1.083, 1.117, 1.150, 1.183, 1.217, 1.233, 1.267, // 330 - 339
  1.300, 1.333, 1.367, 1.383, 1.400, 1.450, 1.483, 1.517, 1.550, 1.583, // 340 - 349
  1.617, 1.650, 1.683, 1.717, 1.750, 1.767, 1.800, 1.833, 1.867, 1.900  // 350 - 359
];
let index2 = Math.ceil(hasilAkhirMarkaz3);if (index2 < 0) index2 = 0;if (index2 >= lookupTadilMarkaz.length) index2 = lookupTadilMarkaz.length - 1;tadilmarkaz = lookupTadilMarkaz[index2];

let buduGoerMuadal = tadilkhosoh + tadilmarkaz; let buduGoerMuadal2 = buduGoerMuadal.toFixed(3); let hasildorob = buduGoerMuadal * 0.08333;let hasildorob2 = hasildorob.toFixed(3);let tadilwasat = tadilmarkaz + hasildorob;let tadilwasat2 = tadilwasat.toFixed(3);let muqowwamsyamsi = hasilAkhirWasat3 - tadilwasat;let muqowwamsyamsi2 = muqowwamsyamsi.toFixed(3);
let mq = muqowwamsyamsi / 30;let mq1 = Math.trunc(mq);
mq1 = Math.min(Math.max(mq1, 0), 12);
const months = ['Al-Haml', 'As-Stuur', 'Al-Jauza', 'As-Syarthon', 'Al-Asad', 'As-Sumbulah', 'Al-Mizan', 'Al-Aqrob', 'Al-Qous', 'Al-Jadyu', 'Ad-Dalwu', 'Al-Huut', 'Al-Haml'
];
let mq2 = months[mq1]; let mq3 = (mq1 <= 2) ? 'Utara' : (mq1 <= 8 ? 'Selatan' : 'Utara');let mq3a = (mq1 <= 2) ? 'Selatan' : (mq1 <= 8 ? 'Utara' : 'Selatan');let mq4 = Math.round(muqowwamsyamsi);

const lookupTadilayyam = [
  { min: 355, value: 0.050 }, { min: 350, value: 0.050 }, { min: 345, value: 0.033 },
  { min: 340, value: 0.017 }, { min: 335, value: 0.017 }, { min: 330, value: 0.000 },
  { min: 325, value: 0.000 }, { min: 320, value: 0.000 }, { min: 315, value: 0.000 },
  { min: 310, value: 0.017 }, { min: 305, value: 0.017 }, { min: 300, value: 0.033 },
  { min: 295, value: 0.050 }, { min: 290, value: 0.067 }, { min: 285, value: 0.083 },
  { min: 280, value: 0.100 }, { min: 275, value: 0.117 }, { min: 270, value: 0.150 },
  { min: 265, value: 0.167 }, { min: 260, value: 0.183 }, { min: 255, value: 0.217 },
  { min: 250, value: 0.233 }, { min: 245, value: 0.250 }, { min: 240, value: 0.267 },
  { min: 235, value: 0.267 }, { min: 230, value: 0.283 }, { min: 225, value: 0.283 },
  { min: 220, value: 0.283 }, { min: 215, value: 0.283 }, { min: 210, value: 0.283 },
  { min: 205, value: 0.267 }, { min: 200, value: 0.267 }, { min: 195, value: 0.250 },
  { min: 190, value: 0.233 }, { min: 185, value: 0.217 }, { min: 180, value: 0.217 },
  { min: 175, value: 0.200 }, { min: 170, value: 0.183 }, { min: 165, value: 0.187 },
  { min: 160, value: 0.150 }, { min: 155, value: 0.133 }, { min: 150, value: 0.117 },
  { min: 145, value: 0.117 }, { min: 140, value: 0.110 }, { min: 135, value: 0.100 },
  { min: 130, value: 0.100 }, { min: 125, value: 0.083 }, { min: 120, value: 0.100 },
  { min: 115, value: 0.100 }, { min: 110, value: 0.100 }, { min: 105, value: 0.117 },
  { min: 100, value: 0.117 }, { min: 95, value: 0.133 }, { min: 90, value: 0.133 },
  { min: 85, value: 0.150 }, { min: 80, value: 0.150 }, { min: 75, value: 0.167 },
  { min: 70, value: 0.167 }, { min: 65, value: 0.183 }, { min: 60, value: 0.183 },
  { min: 55, value: 0.183 }, { min: 50, value: 0.183 }, { min: 45, value: 0.183 },
  { min: 40, value: 0.167 }, { min: 35, value: 0.167 }, { min: 30, value: 0.150 },
  { min: 25, value: 0.150 }, { min: 20, value: 0.133 }, { min: 15, value: 0.117 },
  { min: 10, value: 0.100 }, { min: 5, value: 0.083 }, { min: 0, value: 0.067 }
];
let tadilayyam = lookupTadilayyam.find(item => mq4 >= item.min)?.value ?? 0;let budumuadal = buduGoerMuadal - tadilayyam;let budumuadal2 = budumuadal.toFixed(3);let thulsyamsi = muqowwamsyamsi - budumuadal;let thulsyamsi2 = thulsyamsi.toFixed(3);

const lookupHissohsaah = [
  { min: 355, value: 2.200 }, { min: 350, value: 2.200 }, { min: 345, value: 2.200 },
  { min: 340, value: 2.183 }, { min: 335, value: 2.167 }, { min: 330, value: 2.150 },
  { min: 325, value: 2.133 }, { min: 320, value: 2.117 }, { min: 315, value: 2.100 },
  { min: 310, value: 2.100 }, { min: 305, value: 2.067 }, { min: 300, value: 2.050 },
  { min: 295, value: 2.033 }, { min: 290, value: 2.017 }, { min: 285, value: 2.000 },
  { min: 280, value: 1.983 }, { min: 275, value: 1.983 }, { min: 270, value: 1.967 },
  { min: 265, value: 1.933 }, { min: 260, value: 1.917 }, { min: 255, value: 1.900 },
  { min: 250, value: 1.883 }, { min: 245, value: 1.867 }, { min: 240, value: 1.850 },
  { min: 235, value: 1.833 }, { min: 230, value: 1.800 }, { min: 225, value: 1.800 },
  { min: 220, value: 1.783 }, { min: 215, value: 1.767 }, { min: 210, value: 1.767 },
  { min: 205, value: 1.750 }, { min: 200, value: 1.750 }, { min: 195, value: 1.750 },
  { min: 190, value: 1.750 }, { min: 185, value: 1.750 }, { min: 180, value: 1.750 },
  { min: 175, value: 1.750 }, { min: 170, value: 1.767 }, { min: 165, value: 1.767 },
  { min: 160, value: 1.783 }, { min: 155, value: 1.800 }, { min: 150, value: 1.817 },
  { min: 145, value: 1.833 }, { min: 140, value: 1.833 }, { min: 135, value: 1.867 },
  { min: 130, value: 1.883 }, { min: 125, value: 1.900 }, { min: 120, value: 1.917 },
  { min: 115, value: 1.933 }, { min: 110, value: 1.950 }, { min: 105, value: 1.983 },
  { min: 100, value: 2.017 }, { min: 95, value: 2.033 }, { min: 90, value: 2.050 },
  { min: 85, value: 2.067 }, { min: 80, value: 2.083 }, { min: 75, value: 2.100 },
  { min: 70, value: 2.117 }, { min: 65, value: 2.133 }, { min: 60, value: 2.150 },
  { min: 55, value: 2.167 }, { min: 50, value: 2.167 }, { min: 45, value: 2.167 },
  { min: 40, value: 2.183 }, { min: 35, value: 2.200 }, { min: 30, value: 2.200 },
  { min: 25, value: 2.200 }, { min: 20, value: 2.200 }, { min: 15, value: 2.217 },
  { min: 10, value: 2.217 }, { min: 5, value: 2.217 }, { min: 0, value: 2.217 }
];
let hissohsaah = lookupHissohsaah.find(range => hasilAkhirKhosoh3 >= range.min).value;
  let tadilalamah = budumuadal * hissohsaah; let tadilalamah2 = tadilalamah.toFixed(3)
  let jkt = hasilAkhirAlamah3 - tadilalamah;
  if (jkt <= 0) {jkt2 = (hasilAkhirAlamah3 - tadilalamah) + 168;} else {jkt2 = hasilAkhirAlamah3 - tadilalamah;}
  let jkt3 = jkt2.toFixed(3);
  let selisihwaktu = Math.abs(ltd - 106.8272) /15; let selisihwaktu2 = selisihwaktu.toFixed(3)
  let bittatbieq = (jkt2 - selisihwaktu) +1;
  let bittatbieq2 = bittatbieq.toFixed(3);
  let ij = bittatbieq / 24; 
  let ijt = Math.trunc(ij);
  console.log(ijt);
  const days = ["Sabtu", "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at"];
let indexYaqoulijtima = Math.floor(ijt) % 7;
yaqoulijtima = days[indexYaqoulijtima];
yaqoulijtima2 = days[(indexYaqoulijtima + 1) % 7];
let sig = bittatbieq % 24; let sig2 = sig.toFixed(3)
let siz = sig <= 6 ? sig + 18 : (sig <= 18 ? sig - 6 : (sig - 18 <= 1 ? sig - 18 + 12 : sig - 6)); let siz2 = siz.toFixed(3);
let mig = 24 - sig2; let mig2 = mig.toFixed(3); let irtipa = mig / 2; let irtipa2 = irtipa.toFixed(3);
let mukstulhilal = irtipa * 0.0667; let mukstulhilal2 = mukstulhilal.toFixed(3);
let hs = Math.round(hasilAkhirHissoh2); 
const lookupKamyah = [
  1.933, 1.983, 2.017, 2.050, 2.083, 2.100, 2.133, 2.167, 2.200, 2.233, // 0 - 9
  2.267, 2.300, 2.317, 2.350, 2.383, 2.417, 2.450, 2.483, 2.517, 2.550, // 10 - 19
  2.583, 2.617, 2.650, 2.667, 2.700, 2.733, 2.767, 2.800, 2.833, 2.850, // 20 - 29
  2.883, 2.917, 2.950, 2.967, 2.983, 3.017, 3.050, 3.083, 3.117, 3.133, // 30 - 39
  3.150, 3.167, 3.200, 3.217, 3.250, 3.267, 3.283, 3.317, 3.333, 3.350, // 40 - 49
  3.383, 3.400, 3.433, 3.450, 3.467, 3.500, 3.517, 3.533, 3.550, 3.567, // 50 - 59
  3.583, 3.600, 3.617, 3.633, 3.650, 3.667, 3.683, 3.683, 3.700, 3.717, // 60 - 69
  3.733, 3.750, 3.767, 3.767, 3.783, 3.800, 3.800, 3.800, 3.817, 3.817, // 70 - 79
  3.833, 3.833, 3.850, 3.850, 3.850, 3.867, 3.867, 3.867, 3.867, 3.867, // 80 - 89
  3.867, 3.867, 3.867, 3.867, 3.867, 3.867, 3.867, 3.867, 3.867, 3.867, // 90 - 99
  3.867, 3.850, 3.850, 3.850, 3.883, 3.883, 3.817, 3.800, 3.800, 3.783, // 100 - 109
  3.783, 3.767, 3.750, 3.750, 3.733, 3.717, 3.717, 3.700, 3.683, 3.660, // 110 - 119
  3.650, 3.633, 3.617, 3.600, 3.583, 3.567, 3.550, 3.533, 3.500, 3.483, // 120 - 129
  3.467, 3.450, 3.417, 3.400, 3.367, 3.350, 3.317, 3.300, 3.283, 3.250, // 130 - 139
  3.233, 3.200, 3.167, 3.133, 3.117, 3.083, 3.050, 3.017, 2.983, 2.950, // 140 - 149
  2.933, 2.900, 2.867, 2.850, 2.817, 2.783, 2.750, 2.717, 2.700, 2.667, // 150 - 159
  2.633, 2.600, 2.567, 2.533, 2.500, 2.467, 2.433, 2.383, 2.350, 2.317, // 160 - 169
  2.283, 2.250, 2.217, 2.183, 2.150, 2.117, 2.083, 2.050, 2.017, 1.983, // 170 - 179
  1.933, 1.917, 1.883, 1.850, 1.800, 1.767, 1.733, 1.700, 1.667, 1.633, // 180 - 189
  1.600, 1.567, 1.533, 1.483, 1.450, 1.417, 1.383, 1.350, 1.317, 1.283, // 190 - 199
  1.250, 1.217, 1.183, 1.167, 1.133, 1.100, 1.067, 1.033, 1.000, 0.967, // 200 - 209
  0.933, 0.900, 0.867, 0.833, 0.800, 0.783, 0.750, 0.717, 0.700, 0.667, // 210 - 219
  0.650, 0.617, 0.600, 0.583, 0.550, 0.533, 0.500, 0.483, 0.467, 0.433, // 220 - 229
  0.417, 0.400, 0.383, 0.350, 0.333, 0.317, 0.300, 0.283, 0.267, 0.250, // 230 - 239
  0.233, 0.217, 0.200, 0.183, 0.167, 0.150, 0.150, 0.133, 0.117, 0.117, // 240 - 249
  0.100, 0.100, 0.083, 0.067, 0.067, 0.050, 0.050, 0.033, 0.017, 0.017, // 250 - 259
  0.017, 0.017, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, // 260 - 269
  0.000, 0.000, 0.000, 0.000, 0.017, 0.017, 0.017, 0.033, 0.033, 0.033, // 270 - 279
  0.050, 0.050, 0.067, 0.067, 0.083, 0.100, 0.100, 0.117, 0.117, 0.133, // 280 - 289
  0.150, 0.150, 0.167, 0.183, 0.200, 0.217, 0.233, 0.250, 0.267, 0.283, // 290 - 299
  0.300, 0.317, 0.333, 0.360, 0.383, 0.400, 0.417, 0.433, 0.467, 0.483, // 300 - 309
  0.500, 0.517, 0.550, 0.567, 0.600, 0.617, 0.633, 0.667, 0.683, 0.717, // 310 - 319
  0.733, 0.767, 0.783, 0.817, 0.833, 0.867, 0.883, 0.917, 0.933, 0.967, // 320 - 329
  1.000, 1.033, 1.067, 1.083, 1.117, 1.150, 1.183, 1.217, 1.233, 1.267, // 330 - 339
  1.300, 1.333, 1.367, 1.383, 1.400, 1.450, 1.483, 1.517, 1.550, 1.583, // 340 - 349
  1.617, 1.650, 1.683, 1.717, 1.750, 1.767, 1.800, 1.833, 1.867, 1.900  // 350 - 359
];
let index3 = Math.ceil(hs);if (index3 < 0) index3 = 0;
if (index3 >= lookupKamyah.length) index3 = lookupKamyah.length - 1;kamyah = lookupKamyah[index3];let nurilhilal = kamyah + mukstulhilal;let nurilhilal2 = nurilhilal.toFixed(3);
const hari = ["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Ahad"];const hitungHariMasuk = (irtipa, ijt) => hari[(ijt + (irtipa >= 2 ? 0 : 1)) % 7];harimasuk = hitungHariMasuk(irtipa2, ijt);harimasuk2 = hitungHariMasuk(irtipa2 >= 3 ? 3 : 0, ijt);harimasuk6 = hitungHariMasuk(irtipa2 >= 6 ? 6 : 0, ijt);harimasuk7 = hitungHariMasuk(irtipa2 >= 7 ? 7 : 0, ijt);if (irtipa2 >= 2) {imkanGoerImkan = "Imkan Rukyah";} else {imkanGoerImkan = "Tidak Imkan Rukyah"}if (irtipa2 >= 3) {imkanGoerImkan2 = "Imkan Rukyah";} else {imkanGoerImkan2 = "Tidak Imkan Rukyah" }if (irtipa2 >= 6) {imkanGoerImkan3 = "Imkan Rukyah";} else {imkanGoerImkan3 = "Tidak Imkan Rukyah"}
  if (irtipa2 >= 7) {imkanGoerImkan4 = "Imkan Rukyah";} else {imkanGoerImkan4 = "Tidak Imkan Rukyah" }
let derajatirtipa = document.querySelector("#derajatirtipa").value;let drj = parseFloat(derajatirtipa) 
   if (drj <= 1) {jatuhhari = harimasuk;} else if (drj <= 2) {jatuhhari = harimasuk2;} else if (drj <= 3) {jatuhhari = harimasuk6;} else if (drj <= 4) {jatuhhari = harimasuk7;}if (drj <= 1) {ikngoerikn  = imkanGoerImkan;} else if (drj <= 2) {ikngoerikn = imkanGoerImkan2;} else if (drj <= 3) {ikngoerikn = imkanGoerImkan3;} else if (drj <= 4) {ikngoerikn = imkanGoerImkan4;}if (drj <= 1) {ptkimkan = "2°";} else if (drj <= 2) {ptkimkan = "3°";} else if (drj <= 3) {ptkimkan = "6°";} else if (drj <= 4) {ptkimkan = "7°";}let e = 1 + Math.trunc((tahunYangDimaksud * 11) / 30) + (tahunYangDimaksud * 354) + (totalbulan * 30) - Math.trunc((totalbulan - 1) / 2) - 384;let f = e + 227016;let g = Math.trunc(f / 1461);let thM = g * 4 + Math.trunc((f - g * 1461) / 365) + 1;let tjdIjt = sig <= 12 ? "Malam" : "Hari";let jmsiz = siz;let jmsiz2 = Math.trunc(jmsiz);let jmsiz3 = (jmsiz -jmsiz2) *60;let jmsiz4 = Math.trunc(jmsiz3);let jmsig = sig;let jmsig2 = Math.trunc(jmsig);let jmsig3 = (jmsig -jmsig2) *60;let jmsig4 = Math.trunc(jmsig3);let jmipa = irtipa;let jmipa2 = Math.trunc(jmipa);let jmipa3 = (jmipa -jmipa2) *60;let jmipa4 = Math.trunc(jmipa3);let jmmks = mukstulhilal;let jmmks2 = Math.trunc(jmmks);let jmmks3 = (jmmks -jmmks2) *60;let jmmks4 = Math.trunc(jmmks3);let qnh = nurilhilal;let qnh2 = Math.trunc(qnh);let qnh3 = (qnh -qnh2) *60;let qnh4 = Math.trunc(qnh3)
    const bulanHijriyah = ["Dzul Hijjah", "Muharom", "Sopar", "Robiul Awal", "Robius Stani","Jumadil Awal", "Jumadis Stani", "Rojab", "Syaban", "Rhomadhon","Syawal", "Dzulqodah"];namebulan = bulanHijriyah[(totalbulan - 1 + 12) % 12];
return {tahunmajmuah,alamahsininmajmuah,bulanhijriyah, totalbulan,hissohsininmajmuah,wasatsininmajmuah, khosohsininmajmuah,markazsininmajmuah,tahunmabsutoh, alamahsininmabsutoh,hissohsininmabsutoh,wasatsininmabsutoh, khosohsininmabsutoh,markazsininmabsutoh,namebulan, alamahbulan, hissohbulan, wasatbulan,khosohbulan, markazbulan, hasilAkhirAlamah3, hasilAkhirHissoh3, hasilAkhirWasat3, hasilAkhirKhosoh3, hasilAkhirMarkaz3,tadilkhosoh, tadilmarkaz, buduGoerMuadal2, hasildorob2, tadilwasat2, muqowwamsyamsi2, mq1, mq2, mq3, tadilayyam, budumuadal2,thulsyamsi2, tadilalamah2, hissohsaah, jkt3, ltd2, selisihwaktu2, bittatbieq2, yaqoulijtima, sig2, siz2, mig2, irtipa2, mukstulhilal2, kamyah, nurilhilal2,harimasuk, harimasuk2, harimasuk6, harimasuk7, irtipa2, imkanGoerImkan, imkanGoerImkan2, imkanGoerImkan3, imkanGoerImkan4, derajatirtipa, drj,thM, tjdIjt,jmsiz2,jmsiz4,jmsig2,jmsig4,jmipa2,jmipa4,jmmks2, jmmks4,qnh2,qnh4,yaqoulijtima2,ptkimkan,ikngoerikn,mq3a };
  };
  const calculate2 = () => {
   let {tahunmajmuah, totalbulan, tahunmabsutoh, bulanhijriyah, alamahsininmajmuah, hissohsininmajmuah, wasatsininmajmuah,khosohsininmajmuah, markazsininmajmuah, alamahsininmabsutoh, hissohsininmabsutoh,wasatsininmabsutoh, khosohsininmabsutoh, markazsininmabsutoh, namebulan, alamahbulan, hissohbulan, wasatbulan,khosohbulan, markazbulan, hasilAkhirAlamah3, hasilAkhirHissoh3, hasilAkhirWasat3, hasilAkhirKhosoh3, hasilAkhirMarkaz3,tadilkhosoh, tadilmarkaz, buduGoerMuadal2, hasildorob2, tadilwasat2, muqowwamsyamsi2, mq1, mq2, mq3, tadilayyam, budumuadal2,thulsyamsi2, tadilalamah2, hissohsaah, jkt3, ltd2, selisihwaktu2, bittatbieq2, yaqoulijtima, sig2, siz2, mig2, irtipa2, mukstulhilal2, kamyah, nurilhilal2,harimasuk, harimasuk2, harimasuk6, harimasuk7, imkanGoerImkan, imkanGoerImkan2, imkanGoerImkan3, imkanGoerImkan4, derajatirtipa, drj,thM, tjdIjt, jmsiz2, jmsiz4, jmsig2, jmsig4, jmipa2, jmipa4, jmmks2, jmmks4, qnh2, qnh4, } = hitungDataBulan();
  if (tahunmajmuah == 0) {document.querySelector("#showdata").innerHTML = `Maaf, Anda Belum Memilih Tahun Majmuah `;}
 		else if (tahunmabsutoh == 0) {document.querySelector("#showdata").innerHTML = `Maaf, Anda Belum Memilih Tahun Mabsutoh `;}
 		else if (bulanhijriyah == 0) {document.querySelector("#showdata").innerHTML = `Maaf, Anda Belum Memilih Bulan `;}
 		else {document.querySelector("#showdata").innerHTML = ` 
<table class="table-harokat">
   <tr class="tr-harokat"><th class="th-harokat">Data</th><th class="th-harokat">Alamah</th><th class="th-harokat">Hissoh</th><th class="th-harokat">Wasath</th><th class="th-harokat">Khosoh</th><th class="th-harokat">Markaz</th></tr>
   <tr class="tr-harokat"><td class="td-harokat"> ${tahunmajmuah} </td><td class="td-harokat"> ${alamahsininmajmuah}</td> <td class="td-harokat"> ${hissohsininmajmuah}</td> <td class="td-harokat"> ${wasatsininmajmuah}</td> <td class="td-harokat"> ${khosohsininmajmuah}</td><td class="td-harokat"> ${markazsininmajmuah}</td></tr>
   <tr class="tr-harokat"><td class="td-harokat"> ${tahunmabsutoh}</td><td class="td-harokat"> ${alamahsininmabsutoh}</td> <td class="td-harokat"> ${hissohsininmabsutoh}</td><td class="td-harokat"> ${wasatsininmabsutoh}</td><td class="td-harokat"> ${khosohsininmabsutoh}</td> <td class="td-harokat"> ${markazsininmabsutoh}</td> </tr>
   <tr class="tr-harokat"><td class="td-harokat"> ${namebulan} </td> <td class="td-harokat"> ${alamahbulan}</td></td> <td class="td-harokat"> ${hissohbulan}</td></td> <td class="td-harokat"> ${wasatbulan}</td></td> <td class="td-harokat"> ${khosohbulan}</td></td> <td class="td-harokat"> ${markazbulan}</td></td> </tr>
   <tr class="tr-harokat"><td class="td-harokat">Hasil =</td><td class="td-harokat"> ${hasilAkhirAlamah3}</td> <td class="td-harokat"> ${hasilAkhirHissoh3}</td> <td class="td-harokat"> ${hasilAkhirWasat3}</td> <td class="td-harokat"> ${hasilAkhirKhosoh3}</td> <td class="td-harokat"> ${hasilAkhirMarkaz3}</td></tr></table></p><br><br> 
<table class="table-harokat">
  <tr class="tr-harokat"><th class="th-harokat">Nama</th><th class="th-harokat">Hitungan</th> <th class="th-harokat"></th></tr>
  <tr class="tr-harokat"> <td class="td-harokat"> Ta'dil Khosoh </td> <td class="td-harokat"> ${tadilkhosoh} </td><td class="td-harokat"> </td>	</tr> 
  <tr class="tr-harokat"><td class="td-harokat"> Ta'dil Markaz </td>  <td class="td-harokat"> ${tadilmarkaz} </td><td class="td-harokat"> </td>	</tr> 
  <tr class="tr-harokat"><td class="td-harokat"> Bu'du Goer Muadal </td><td class="td-harokat"> ${buduGoerMuadal2}</td> <td class="td-harokat"> </td>	</tr> </tr>
  <tr class="tr-harokat"><td class="td-harokat"> Hasilud Dorob </td> <td class="td-harokat"> ${hasildorob2} <td class="td-harokat"></tr>
  <tr class="tr-harokat"><td class="td-harokat"> Ta'dil Wasat </td> <td class="td-harokat"> ${tadilwasat2} <td class="td-harokat"></tr> 
  <tr class="tr-harokat"><td class="td-harokat"> Muqowwam Syamsi </td><td class="td-harokat"> ${muqowwamsyamsi2} <td class="td-harokat"></tr> 
  <tr class="tr-harokat"><td class="td-harokat"> Buruj </td><td class="td-harokat"> ${mq1} <td class="td-harokat"></tr>
  <tr class="tr-harokat"><td class="td-harokat"> Yaqoul Ijtima Piiburj </td><td class="td-harokat"> ${mq2} <td class="td-harokat"></tr>
  <tr class="tr-harokat"><td class="td-harokat"> Hai'atul Hilal Maailatun Ilaa </td><td class="td-harokat"> ${mq3} <td class="td-harokat"></tr>
  <tr class="tr-harokat"><td class="td-harokat"> Ta'dil Ayyam </td><td class="td-harokat"> ${tadilayyam} <td class="td-harokat"></tr>
  <tr class="tr-harokat"><td class="td-harokat"> Bu'du Muaddal </td><td class="td-harokat"> ${budumuadal2} <td class="td-harokat"></tr>
  <tr class="tr-harokat"><td class="td-harokat"> Thul Syamsi </td><td class="td-harokat"> ${thulsyamsi2} <td class="td-harokat"></tr>
  <tr class="tr-harokat"><td class="td-harokat"> Hissoh Sa'ah </td><td class="td-harokat"> ${hissohsaah} <td class="td-harokat"></tr>
  <tr class="tr-harokat"><td class="td-harokat"> Ta'dil Alamah </td><td class="td-harokat"> ${tadilalamah2} <td class="td-harokat"></tr>
  <tr class="tr-harokat"><td class="td-harokat"> Alamah Muadalah Jkt </td><td class="td-harokat"> ${jkt3} <td class="td-harokat"></tr>        
  <tr class="tr-harokat"><td class="td-harokat"> Busur Tempat </td><td class="td-harokat"> ${ltd2} <td class="td-harokat"></tr>
  <tr class="tr-harokat"><td class="td-harokat"> Selisih Waktu </td><td class="td-harokat"> ${selisihwaktu2} <td class="td-harokat"></tr>
  <tr class="tr-harokat"><td class="td-harokat"> AMB Bittatbieq </td>   <td class="td-harokat"> ${bittatbieq2} <td class="td-harokat"></tr>  
  <tr class="tr-harokat"> <td class="td-harokat"> Yaqoul Ijtima Lailata </td> <td class="td-harokat"> ${yaqoulijtima} <td class="td-harokat"></tr>
  <tr class="tr-harokat"><td class="td-harokat"> Sa'ah Ijtima Gurubiyah </td><td class="td-harokat"> ${sig2} <td class="td-harokat"></tr>
  <tr class="tr-harokat"><td class="td-harokat"> Sa'ah Ijtima Zawaliyah </td>    <td class="td-harokat"> ${siz2} <td class="td-harokat"></tr>     
  <tr class="tr-harokat"><td class="td-harokat"> Minal Ijatima Ilal Gurub </td><td class="td-harokat"> ${mig2} <td class="td-harokat"></tr>  
  <tr class="tr-harokat"><td class="td-harokat"> Irtipa Hilal Ba'dal Gurub </td><td class="td-harokat"> ${irtipa2} <td class="td-harokat"></tr>
  <tr class="tr-harokat"><td class="td-harokat"> Muktsul Hilal Pauqol Ufuk </td><td class="td-harokat"> ${mukstulhilal2} <td class="td-harokat"></tr>   
  <tr class="tr-harokat"> <td class="td-harokat"> Kamyah Ardl Qomar </td><td class="td-harokat"> ${kamyah} <td class="td-harokat"></tr> 
  <tr class="tr-harokat"><td class="td-harokat"> Qous Nuril Hilal </td><td class="td-harokat"> ${nurilhilal2} <td class="td-harokat"></tr></table></article>`;}};

const calculate1 = () => { let {
  tahunmajmuah, totalbulan, tahunmabsutoh, bulanhijriyah, alamahsininmajmuah, hissohsininmajmuah, wasatsininmajmuah, khosohsininmajmuah, 
  markazsininmajmuah, alamahsininmabsutoh, hissohsininmabsutoh,wasatsininmabsutoh, khosohsininmabsutoh, markazsininmabsutoh, namebulan, 
  alamahbulan, hissohbulan, wasatbulan,khosohbulan, markazbulan, hasilAkhirAlamah3, hasilAkhirHissoh3, hasilAkhirWasat3, hasilAkhirKhosoh3, 
  hasilAkhirMarkaz3,tadilkhosoh, tadilmarkaz, buduGoerMuadal2, hasildorob2, tadilwasat2, muqowwamsyamsi2, mq1, mq2, mq3, tadilayyam, 
  budumuadal2,thulsyamsi2, tadilalamah2, hissohsaah, jkt3, ltd2, selisihwaktu2, bittatbieq2, yaqoulijtima, sig2, siz2, mig2, irtipa2, mukstulhilal2,
  kamyah, nurilhilal2,harimasuk, harimasuk2, harimasuk6, harimasuk7, imkanGoerImkan, imkanGoerImkan2, imkanGoerImkan3, imkanGoerImkan4, 
  derajatirtipa, drj,thM, tjdIjt, jmsiz2, jmsiz4, jmsig2, jmsig4, jmipa2, jmipa4, jmmks2, jmmks4, qnh2, qnh4, yaqoulijtima2, ptkimkan, ikngoerikn, mq3a, } = hitungDataBulan();
  if (tahunmajmuah == 0) {document.querySelector("#showdata").innerHTML = `Maaf, Anda Belum Memilih Tahun Majmuah `;} 
 		else if (tahunmabsutoh == 0) {document.querySelector("#showdata").innerHTML = `Maaf, Anda Belum Memilih Tahun Mabsutoh `;}
 		else if (bulanhijriyah == 0) {document.querySelector("#showdata").innerHTML = `Maaf, Anda Belum Memilih Bulan `;}
 		else if (derajatirtipa == 0) {document.querySelector("#showdata").innerHTML = `Penting Untuk Menetukan Irtipa `;}
 		else {document.querySelector("#showdata").innerHTML = 
   `<table>
      <tr><td> Awal Bulan ${bulanYangDimaksud} ${tahunYangDimaksud} H </td></tr>  
      <tr><td> Jatuh Pada Hari ${jatuhhari}, ${thM} M</td></tr>
      <tr><td> Ijtima Terjadi Pada ${tjdIjt} ${yaqoulijtima}</td></tr>
      <tr><td> Jam Ijtima  ${jmsiz2}:${jmsiz4} WIB | ${jmsig2}:${jmsig4} WG </td></tr>
      <tr><td> Ketinggian Hilal {Malam ${yaqoulijtima2}} ${jmipa2}°${jmipa4}'</td></tr>
      <tr><td> Patokan Imkan ${ptkimkan} [${ikngoerikn}]</td></tr>
      <tr><td> Lama Hilal diatas Ufuk ${jmmks2}:${jmmks4}</td></tr> 
      <tr><td> Arah Hilal di ${mq3a}</td></tr><tr><td> Condongnya Hilal Miring ke ${mq3}</td></tr>
      <tr><td> Cahaya Hilal ${qnh2}°${qnh4}</td></tr>	
    </table>`;}}
