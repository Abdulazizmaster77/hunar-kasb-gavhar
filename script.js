
const masalalar = [
    {
        belgi: "👨‍⚕️",
        kasb: "Shifokor",
        savol: "Shifokor 12 ta bemorni ertalab, 8 ta bemorni tushdan keyin qabul qildi. U jami nechta bemorni qabul qildi?",
        variantlar: ["18 ta", "20 ta", "22 ta", "16 ta"],
        javob: 1
    },
    {
        belgi: "👩‍🏫",
        kasb: "O‘qituvchi",
        savol: "O‘qituvchi 15 ta daftar va yana 10 ta daftar tarqatdi. U jami nechta daftar tarqatdi?",
        variantlar: ["20 ta", "30 ta", "25 ta", "15 ta"],
        javob: 2
    },
    {
        belgi: "👨‍🍳",
        kasb: "Oshpaz",
        savol: "Oshpaz 24 ta somsa tayyorladi. 9 tasi sotildi. Nechta somsa qoldi?",
        variantlar: ["13 ta", "15 ta", "16 ta", "14 ta"],
        javob: 1
    },
    {
        belgi: "👷",
        kasb: "Quruvchi",
        savol: "Quruvchi 18 ta g‘isht terdi, keyin yana 12 ta g‘isht terdi. Jami nechta g‘isht terdi?",
        variantlar: ["28 ta", "32 ta", "30 ta", "26 ta"],
        javob: 2
    },
    {
        belgi: "👨‍🌾",
        kasb: "Fermer",
        savol: "Fermer 35 ta sabzi yig‘di. 10 tasini sotdi. Unda nechta sabzi qoldi?",
        variantlar: ["25 ta", "20 ta", "15 ta", "30 ta"],
        javob: 0
    },
    {
        belgi: "🥖",
        kasb: "Nonvoy",
        savol: "Nonvoy 16 ta non yopdi. Yana 14 ta non yopdi. Jami nechta non bo‘ldi?",
        variantlar: ["28 ta", "30 ta", "32 ta", "26 ta"],
        javob: 1
    },
    {
        belgi: "💈",
        kasb: "Sartarosh",
        savol: "Sartarosh 20 ta mijozga xizmat ko‘rsatdi. 6 tasi bolalar edi. Qolganlari nechta?",
        variantlar: ["12 ta", "16 ta", "14 ta", "15 ta"],
        javob: 2
    },
    {
        belgi: "🚕",
        kasb: "Haydovchi",
        savol: "Haydovchi birinchi safarda 23 km, ikkinchi safarda 17 km yurdi. Jami necha kilometr yurdi?",
        variantlar: ["40 km", "35 km", "41 km", "30 km"],
        javob: 0
    },
    {
        belgi: "🌳",
        kasb: "Bog‘bon",
        savol: "Bog‘bon 40 ta gul ekdi. 15 tasi qizil, qolganlari sariq. Nechta sariq gul ekilgan?",
        variantlar: ["20 ta", "30 ta", "25 ta", "15 ta"],
        javob: 2
    },
    {
        belgi: "💻",
        kasb: "Dasturchi",
        savol: "Dasturchi 3 ta dastur tayyorladi. Har bir dasturda 5 tadan o‘yin bor. Jami nechta o‘yin bor?",
        variantlar: ["8 ta", "15 ta", "10 ta", "12 ta"],
        javob: 1
    }
];

const kasbTestlari = [
    {
        belgi: "🩺",
        kasb: "Shifokor",
        malumot: "Shifokor bemorlarni tekshiradi va davolaydi.",
        savol: "Shifokor bemorlarni davolaydimi?",
        javob: true
    },
    {
        belgi: "👩‍🏫",
        kasb: "O‘qituvchi",
        malumot: "O‘qituvchi bolalarga bilim beradi.",
        savol: "O‘qituvchining asosiy ishi mashina tuzatishmi?",
        javob: false
    },
    {
        belgi: "🚕",
        kasb: "Haydovchi",
        malumot: "Haydovchi odamlar yoki yuklarni transportda tashiydi.",
        savol: "Haydovchi yo‘lovchilarni manzilga olib boradimi?",
        javob: true
    },
    {
        belgi: "💻",
        kasb: "Dasturchi",
        malumot: "Dasturchi kompyuter dasturlari va ilovalar yaratadi.",
        savol: "Dasturchi kompyuter dasturlarini yarata oladimi?",
        javob: true
    },
    {
        belgi: "👨‍🌾",
        kasb: "Fermer",
        malumot: "Fermer ekin ekadi, hosil yetishtiradi va chorva boqishi mumkin.",
        savol: "Fermerning yagona ishi kompyuter o‘yinlari yaratishmi?",
        javob: false
    },
    {
        belgi: "👷",
        kasb: "Quruvchi",
        malumot: "Quruvchi uylar va boshqa binolar qurishda qatnashadi.",
        savol: "Quruvchi binolar quradimi?",
        javob: true
    },
    {
        belgi: "👨‍🍳",
        kasb: "Oshpaz",
        malumot: "Oshpaz mazali taomlar tayyorlaydi.",
        savol: "Oshpazning asosiy ishi bemorlarning tishini davolashmi?",
        javob: false
    },
    {
        belgi: "🥖",
        kasb: "Nonvoy",
        malumot: "Nonvoy non va boshqa non mahsulotlarini pishiradi.",
        savol: "Nonvoy non pishiradimi?",
        javob: true
    },
    {
        belgi: "🌳",
        kasb: "Bog‘bon",
        malumot: "Bog‘bon daraxtlar, gullar va o‘simliklarni parvarish qiladi.",
        savol: "Bog‘bon gullar va daraxtlarni parvarish qiladimi?",
        javob: true
    },
    {
        belgi: "💈",
        kasb: "Sartarosh",
        malumot: "Sartarosh odamlarning sochini oladi va turmaklaydi.",
        savol: "Sartaroshning asosiy ishi mashinaga benzin quyishmi?",
        javob: false
    },
    {
        belgi: "👮",
        kasb: "Politsiyachi",
        malumot: "Politsiyachi jamoat xavfsizligini saqlashga yordam beradi.",
        savol: "Politsiyachi odamlar xavfsizligini saqlashga yordam beradimi?",
        javob: true
    },
    {
        belgi: "🚒",
        kasb: "O‘t o‘chiruvchi",
        malumot: "O‘t o‘chiruvchi yong‘inlarni o‘chiradi va odamlarni qutqarishga yordam beradi.",
        savol: "O‘t o‘chiruvchi yong‘inlarni o‘chiradimi?",
        javob: true
    },
    {
        belgi: "🤖",
        kasb: "Robototexnik",
        malumot: "Robototexnik robotlarni yaratish va boshqarish bilan shug‘ullanadi.",
        savol: "Robototexnikning yagona ishi non pishirishmi?",
        javob: false
    },
    {
        belgi: "🛸",
        kasb: "Dron operatori",
        malumot: "Dron operatori dronni boshqaradi va undan turli vazifalarda foydalanadi.",
        savol: "Dron operatori dronni boshqaradimi?",
        javob: true
    },
    {
        belgi: "☀️",
        kasb: "Quyosh energiyasi mutaxassisi",
        malumot: "Bu mutaxassis quyosh panellari va energiya tizimlari bilan ishlaydi.",
        savol: "Quyosh energiyasi mutaxassisi quyosh panellari bilan ishlaydimi?",
        javob: true
    }
];

let masalaIndex = 0;
let masalaBall = 0;
let masalaJavobBerildi = false;

let testIndex = 0;
let testBall = 0;
let testJavobBerildi = false;

function bolimniOch(bolimId) {
    document.getElementById("boshSahifa").classList.add("yashirin");
    document.getElementById("masalalar").classList.add("yashirin");
    document.getElementById("testlar").classList.add("yashirin");

    document.getElementById(bolimId).classList.remove("yashirin");

    if (bolimId === "masalalar") {
        masalaniBoshlash();
    }

    if (bolimId === "testlar") {
        testniBoshlash();
    }

    window.scrollTo(0, 0);
}

function boshSahifagaQayt() {
    document.getElementById("boshSahifa").classList.remove("yashirin");
    document.getElementById("masalalar").classList.add("yashirin");
    document.getElementById("testlar").classList.add("yashirin");
    window.scrollTo(0, 0);
}

function masalaniBoshlash() {
    masalaIndex = 0;
    masalaBall = 0;
    masalaJavobBerildi = false;
    masalaniChiqar();
}

function masalaniChiqar() {
    const joy = document.getElementById("masalaJoy");

    if (masalaIndex >= masalalar.length) {
        const foiz = Math.round(masalaBall / masalalar.length * 100);

        joy.innerHTML = `
            <div class="natija">
                <div style="font-size:60px">${foiz >= 70 ? "🏆" : "👏"}</div>
                <h2>Masalalar yakunlandi!</h2>
                <p>To‘g‘ri javoblar: <strong>${masalaBall} / ${masalalar.length}</strong></p>
                <p>Natijangiz: <strong>${foiz}%</strong></p>
                <button class="asosiy-tugma" onclick="masalaniBoshlash()">
                    🔄 Qaytadan boshlash
                </button>
            </div>
        `;
        return;
    }

    masalaJavobBerildi = false;
    const m = masalalar[masalaIndex];
    const foizJarayon = masalaIndex / masalalar.length * 100;

    joy.innerHTML = `
        <p><strong>Masala ${masalaIndex + 1} / ${masalalar.length}</strong>
        &nbsp; | &nbsp; Ball: ${masalaBall}</p>

        <div class="jarayon">
            <div class="jarayon-ichki" style="width:${foizJarayon}%"></div>
        </div>

        <div class="masala-kartasi">
            <div class="kasb-belgi">${m.belgi}</div>
            <div class="masala-matni">
                <h3>${m.kasb}</h3>
                <p>${m.savol}</p>
            </div>
        </div>

        <div class="variantlar">
            ${m.variantlar.map((variant, i) => `
                <button class="variant-tugma" id="variant${i}"
                    onclick="masalaJavobiniTekshir(${i})">
                    ${String.fromCharCode(65 + i)}. ${variant}
                </button>
            `).join("")}
        </div>

        <p id="masalaXabar" class="xabar" aria-live="polite"></p>
        <div id="masalaDavom"></div>
    `;
}

function masalaJavobiniTekshir(tanlangan) {
    if (masalaJavobBerildi) return;
    masalaJavobBerildi = true;

    const m = masalalar[masalaIndex];

    for (let i = 0; i < m.variantlar.length; i++) {
        const tugma = document.getElementById("variant" + i);
        tugma.disabled = true;

        if (i === m.javob) {
            tugma.classList.add("togri");
        } else if (i === tanlangan) {
            tugma.classList.add("noto-gri");
        }
    }

    const xabar = document.getElementById("masalaXabar");

    if (tanlangan === m.javob) {
        masalaBall++;
        xabar.textContent = "✅ Barakalla! To‘g‘ri javob!";
        xabar.style.color = "#16865d";
    } else {
        xabar.textContent = "❌ Noto‘g‘ri. To‘g‘ri javob: " +
            m.variantlar[m.javob];
        xabar.style.color = "#d33f49";
    }

    document.getElementById("masalaDavom").innerHTML = `
        <button class="asosiy-tugma" onclick="masalaKeyingi()">
            ${masalaIndex === masalalar.length - 1
                ? "🏆 Natijani ko‘rish"
                : "➡️ Keyingi masala"}
        </button>
    `;
}

function masalaKeyingi() {
    masalaIndex++;
    masalaniChiqar();
}

function testniBoshlash() {
    testIndex = 0;
    testBall = 0;
    testJavobBerildi = false;
    testniChiqar();
}

function testniChiqar() {
    const joy = document.getElementById("testJoy");

    if (testIndex >= kasbTestlari.length) {
        const foiz = Math.round(testBall / kasbTestlari.length * 100);

        joy.innerHTML = `
            <div class="test-natija">
                <div style="font-size:60px">${foiz >= 70 ? "🏆" : "👏"}</div>
                <h2>Test yakunlandi!</h2>
                <p>To‘g‘ri javoblar: <strong>${testBall} / ${kasbTestlari.length}</strong></p>
                <p>Natijangiz: <strong>${foiz}%</strong></p>
                <p>${foiz === 100
                    ? "Ajoyib! Barcha savollarga to‘g‘ri javob berdingiz!"
                    : "Yaxshi harakat! Yana bir marta urinib ko‘ring."}</p>
                <button class="asosiy-tugma" onclick="testniBoshlash()">
                    🔄 Qaytadan boshlash
                </button>
            </div>
        `;
        return;
    }

    testJavobBerildi = false;
    const t = kasbTestlari[testIndex];
    const foizJarayon = testIndex / kasbTestlari.length * 100;

    joy.innerHTML = `
        <p><strong>Savol ${testIndex + 1} / ${kasbTestlari.length}</strong>
        &nbsp; | &nbsp; Ball: ${testBall}</p>

        <div class="jarayon">
            <div class="test-jarayon-ichki"
                style="width:${foizJarayon}%; background:#f39c35; height:100%">
            </div>
        </div>

        <div class="kasb-test-kartasi">
            <div class="test-kasb-belgi">${t.belgi}</div>
            <h3>${t.kasb}</h3>
            <p class="test-tushuncha">${t.malumot}</p>
            <h3>${t.savol}</h3>

            <div class="ha-yoq">
                <button id="haTugma" class="ha-tugma"
                    onclick="testJavobiniTekshir(true)">✅ Ha</button>
                <button id="yoqTugma" class="yoq-tugma"
                    onclick="testJavobiniTekshir(false)">❌ Yo‘q</button>
            </div>

            <p id="testXabar" class="test-xabar" aria-live="polite"></p>
            <div id="testDavom"></div>
        </div>
    `;
}

function testJavobiniTekshir(tanlanganJavob) {
    if (testJavobBerildi) return;
    testJavobBerildi = true;

    const t = kasbTestlari[testIndex];
    const ha = document.getElementById("haTugma");
    const yoq = document.getElementById("yoqTugma");
    ha.disabled = true;
    yoq.disabled = true;

    const xabar = document.getElementById("testXabar");

    if (tanlanganJavob === t.javob) {
        testBall++;
        xabar.textContent = "✅ To‘g‘ri javob! Barakalla!";
        xabar.style.color = "#16865d";
    } else {
        xabar.textContent = "❌ Noto‘g‘ri! To‘g‘ri javob: " +
            (t.javob ? "Ha" : "Yo‘q");
        xabar.style.color = "#d33f49";
    }

    document.getElementById("testDavom").innerHTML = `
        <button class="asosiy-tugma" onclick="testKeyingiSavol()">
            ${testIndex === kasbTestlari.length - 1
                ? "🏆 Natijani ko‘rish"
                : "➡️ Keyingi savol"}
        </button>
    `;
}

function testKeyingiSavol() {
    testIndex++;
    testniChiqar();
}
