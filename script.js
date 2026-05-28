  const mobileBtn = document.querySelector(".mobile-menu-btn");

  const navMenu = document.querySelector(".nav-menu");


  mobileBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

  });


  /* ========================= */
  /* LANGUAGE SWITCHER */
  /* ========================= */

  const langButtons = document.querySelectorAll(".lang");

  const heroTitle = document.querySelector(".hero-text h1");
  const heroParagraph = document.querySelector(".hero-text p");

  const aboutTitle = document.querySelector(".about-text h2");
  const aboutText1 = document.querySelector(".about-text .about-p1");
  const aboutText2 = document.querySelector(".about-text .about-p2");

  const visionTitle = document.querySelector(".vision-title");
  const visionHeading = document.querySelector(".vision-heading");
  const missionHeading = document.querySelector(".mission-heading");
  const visionText = document.querySelector(".vision-text");
  const missionList = document.querySelector(".mission-list");

  const servicesHeading = document.querySelector(".services-heading");

  const serviceTitles = document.querySelectorAll(".service-card h3");
  const serviceTexts = document.querySelectorAll(".service-card p");


  langButtons.forEach(button=>{

    button.addEventListener("click",()=>{

      langButtons.forEach(btn=>{
        btn.classList.remove("active");
      });

      button.classList.add("active");


      /* ========================= */
      /* INDONESIA */
      /* ========================= */

      if(button.dataset.lang === "id"){


        /* HERO */

        heroTitle.innerHTML =
        "Mitra <span>Perdagangan</span><br>Energi Global";

        heroParagraph.innerHTML =
        "Perusahaan perdagangan komoditas minyak dan energi profesional yang menyediakan solusi terpercaya untuk pasar domestik dan internasional.";


        /* ABOUT */

        aboutTitle.innerHTML =
        "Efisien.<br>Transparan.<br>Berkelanjutan.";

        aboutText1.innerHTML =
        "PT. Abanawest Nusantara Indonesia adalah perusahaan perdagangan komoditas energi profesional yang berfokus pada minyak dan produk turunannya untuk pasar domestik dan internasional.";

        aboutText2.innerHTML =
        "Perusahaan menghubungkan pemasok, kilang, pemilik produk, dan pembeli melalui standar perdagangan internasional yang profesional.";


        /* VISION MISSION */

        visionTitle.innerHTML =
        "Membangun Kemitraan Energi Berkelanjutan";

        visionHeading.innerHTML =
        "Visi";

        missionHeading.innerHTML =
        "Misi";

        visionText.innerHTML =
        "Menjadi perusahaan perdagangan energi yang terpercaya dan kompetitif di tingkat nasional maupun internasional dengan menyediakan solusi komoditas energi yang efisien, transparan, dan berkelanjutan.";

        missionList.innerHTML =
        `
        <li>
        Mengembangkan jaringan perdagangan energi domestik dan internasional.
        </li>

        <li>
        Menyediakan akses pasokan komoditas yang stabil dan kompetitif.
        </li>

        <li>
        Menjaga profesionalisme, transparansi, dan integritas.
        </li>

        <li>
        Mendukung pengembangan energi berkelanjutan.
        </li>

        <li>
        Membangun kemitraan bisnis strategis jangka panjang.
        </li>
        `;


        /* SERVICES */

        servicesHeading.innerHTML =
        "Solusi Strategis Perdagangan Energi";

        serviceTitles[0].innerHTML =
        "Perdagangan Komoditas Energi";

        serviceTexts[0].innerHTML =
        "Perdagangan komoditas energi internasional dengan standar transaksi profesional.";

        serviceTitles[1].innerHTML =
        "Perantara Perdagangan Minyak";

        serviceTexts[1].innerHTML =
        "Menghubungkan pemasok, pemilik produk, dan pembeli secara global.";

        serviceTitles[2].innerHTML =
        "Layanan Brokerage Energi";

        serviceTexts[2].innerHTML =
        "Memfasilitasi negosiasi, koordinasi logistik, dan verifikasi dokumen.";

        serviceTitles[3].innerHTML =
        "Koordinasi Rantai Pasok";

        serviceTexts[3].innerHTML =
        "Mengelola pengadaan, inspeksi, penyimpanan, dan koordinasi distribusi.";
  /* PRODUCTS */

  document.querySelector(".products-heading").innerHTML =
  "Portofolio Produk Energi Global";

  document.querySelector(".product-title-2").innerHTML =
  "Minyak Mentah";

  document.querySelector(".product-desc-2").innerHTML =
  "Pasokan minyak mentah berstandar internasional dari sumber global terpercaya.";

  document.querySelector(".product-title-3").innerHTML =
  "Bahan Bakar Kapal";

  document.querySelector(".product-desc-3").innerHTML =
  "Solusi bahan bakar untuk transportasi maritim dan industri pelayaran.";

  document.querySelector(".product-title-4").innerHTML =
  "Bahan Bakar Industri";

  document.querySelector(".product-desc-4").innerHTML =
  "Pasokan bahan bakar industri yang andal untuk sektor manufaktur dan energi.";

  /* WHY US */

  document.querySelector(".why-heading").innerHTML =
  "Mitra Perdagangan Energi Terpercaya";

  document.querySelectorAll(".why-card h3")[0].innerHTML =
  "Jaringan Perdagangan Terpercaya";

  document.querySelectorAll(".why-card p")[0].innerHTML =
  "Koneksi profesional dengan pemasok, pembeli, dan kilang di pasar domestik maupun internasional.";

  document.querySelectorAll(".why-card h3")[1].innerHTML =
  "Standar Internasional";

  document.querySelectorAll(".why-card p")[1].innerHTML =
  "Transaksi dikelola dengan transparansi, profesionalisme, dan standar kepatuhan.";

  document.querySelectorAll(".why-card h3")[2].innerHTML =
  "Rantai Pasok Andal";

  document.querySelectorAll(".why-card p")[2].innerHTML =
  "Koordinasi efisien mulai dari pengadaan dan inspeksi hingga penyimpanan dan pengiriman.";

  document.querySelectorAll(".why-card h3")[3].innerHTML =
  "Fokus Energi Berkelanjutan";

  document.querySelectorAll(".why-card p")[3].innerHTML =
  "Mendukung solusi perdagangan energi yang bertanggung jawab dan berkelanjutan untuk masa depan.";

  /* LEGAL & CERTIFICATION */

  document.querySelector(".certification-heading").innerHTML =
  "Perusahaan Energi Terdaftar & Terpercaya";

  document.querySelector(".cert-title").innerHTML =
  "PT. ABANAWEST NUSANTARA INDONESIA";

  document.querySelector(".cert-desc").innerHTML =
  "Perusahaan perdagangan komoditas energi Indonesia yang terdaftar dan beroperasi berdasarkan standar perizinan bisnis serta kepatuhan resmi.";

  document.querySelectorAll(".cert-item span")[0].innerHTML =
  "Nomor NIB";

  document.querySelectorAll(".cert-item span")[1].innerHTML =
  "Alamat Kantor";

  document.querySelectorAll(".cert-item span")[2].innerHTML =
  "Email";

  document.querySelectorAll(".cert-item p")[0].innerHTML =
  "1610240010787";

  document.querySelectorAll(".cert-item p")[1].innerHTML =
  `
  AD Premier Lantai 17 Suite 04B<br>
  Jl. TB Simatupang No. 5 Ragunan<br>
  Pasar Minggu, Jakarta Selatan 12550 Indonesia
  `;

  document.querySelectorAll(".cert-item p")[2].innerHTML =
  "abanawestnusantaraindonesia@gmail.com";
      
/* SHIP SHOWCASE */

document.querySelector(".fleet-label-1").innerHTML =
"ARMADA KAMI";

document.querySelector(".fleet-title-1").innerHTML =
"Mengirim Energi<br>Antar Negara";

document.querySelector(".fleet-desc-1").innerHTML =
"Armada andal dan dukungan logistik untuk distribusi energi global.";


document.querySelector(".fleet-label-2").innerHTML =
"KOMITMEN KAMI";

document.querySelector(".fleet-title-2").innerHTML =
"Dibangun dengan Keamanan,<br>Didorong oleh Kepercayaan";

document.querySelector(".fleet-desc-2").innerHTML =
"Menjaga standar operasional, keselamatan, dan kemitraan terpercaya.";

document.querySelector(".footer-banner-content h2").innerHTML =
"Membangun Kemitraan<br>Energi Strategis";

document.querySelector(".footer-banner-content p").innerHTML =
"Kami siap berkolaborasi dan menghadirkan solusi energi berkelanjutan untuk pertumbuhan bersama.";
/* FOOTER */

document.querySelector(".footer-brand h3").innerHTML =
"ABANAWEST";

document.querySelector(".footer-brand p").innerHTML =
"Menyediakan solusi energi terpercaya dengan integritas, kepatuhan, dan keunggulan operasional.";

document.querySelectorAll(".footer-grid h4")[0].innerHTML =
"Navigasi";

document.querySelectorAll(".footer-grid h4")[1].innerHTML =
"Produk";

document.querySelectorAll(".footer-grid h4")[2].innerHTML =
"Kontak";

document.querySelectorAll(".footer-grid ul li a")[0].innerHTML =
"Tentang Kami";

document.querySelectorAll(".footer-grid ul li a")[1].innerHTML =
"Layanan";

document.querySelectorAll(".footer-grid ul li a")[2].innerHTML =
"Produk";

document.querySelectorAll(".footer-grid ul li a")[3].innerHTML =
"Keunggulan";

document.querySelectorAll(".footer-grid ul li a")[4].innerHTML =
"Kontak";

document.querySelectorAll(".footer-grid ul")[1].children[0].innerHTML =
"Aluminium Rod";

document.querySelectorAll(".footer-grid ul")[1].children[1].innerHTML =
"Crude Oil";

document.querySelectorAll(".footer-grid ul")[1].children[2].innerHTML =
"Marine Fuel Oil";

document.querySelectorAll(".footer-grid ul")[1].children[3].innerHTML =
"Industrial Fuel";

document.querySelector(".footer-credit").innerHTML =
"Dibuat oleh aethere";
}




      /* ========================= */
      /* ENGLISH */
      /* ========================= */

      else{


        /* HERO */

        heroTitle.innerHTML =
        "Global Energy <span class='white-text'>Trading</span> <span>Partner</span>";

        heroParagraph.innerHTML =
        "Professional oil and energy commodity trading company delivering reliable solutions for domestic and international markets.";


        /* ABOUT */

        aboutTitle.innerHTML =
        "Efficient.<br>Transparent.<br>Sustainable.";

        aboutText1.innerHTML =
        "PT. Abanawest Nusantara Indonesia is a professional energy commodity trading company focused on oil and derivative products across domestic and international markets.";

        aboutText2.innerHTML =
        "The company connects suppliers, refineries, product owners, and buyers through professional international trading standards.";


        /* VISION MISSION */

        visionTitle.innerHTML =
        "Building Sustainable Energy Partnerships";

        visionHeading.innerHTML =
        "Vision";

        missionHeading.innerHTML =
        "Mission";

        visionText.innerHTML =
        "To become a trusted and competitive energy trading company at national and international levels by delivering efficient, transparent, and sustainable energy commodity solutions.";

        missionList.innerHTML =
        `
        <li>
        Develop domestic and international energy trading networks.
        </li>

        <li>
        Provide stable and competitive commodity supply access.
        </li>

        <li>
        Maintain professionalism, transparency, and integrity.
        </li>

        <li>
        Support sustainable energy development.
        </li>

        <li>
        Build long-term strategic business partnerships.
        </li>
        `;


        /* SERVICES */

        servicesHeading.innerHTML =
        "Strategic Energy Trading Solutions";

        serviceTitles[0].innerHTML =
        "Energy Commodities Trading";

        serviceTexts[0].innerHTML =
        "International commodity trading with professional transaction standards.";

        serviceTitles[1].innerHTML =
        "Oil Trading Intermediary";

        serviceTexts[1].innerHTML =
        "Connecting suppliers, product owners, and buyers globally.";

        serviceTitles[2].innerHTML =
        "Energy Brokerage Services";

        serviceTexts[2].innerHTML =
        "Facilitating negotiations, logistics coordination, and document verification.";

        serviceTitles[3].innerHTML =
        "Supply Chain Coordination";

        serviceTexts[3].innerHTML =
        "Managing procurement, inspection, storage, and delivery coordination.";

        /* PRODUCTS */

  document.querySelector(".products-heading").innerHTML =
  "Global Energy Product Portfolio";

  document.querySelector(".product-title-2").innerHTML =
  "Crude Oil";

  document.querySelector(".product-desc-2").innerHTML =
  "International-standard crude oil supply from trusted global sources.";

  document.querySelector(".product-title-3").innerHTML =
  "Marine Fuel Oil";

  document.querySelector(".product-desc-3").innerHTML =
  "Fuel solutions for maritime transportation and shipping industries.";

  document.querySelector(".product-title-4").innerHTML =
  "Industrial Fuel";

  document.querySelector(".product-desc-4").innerHTML =
  "Reliable industrial fuel supply for manufacturing and energy sectors.";

  /* WHY US */

  document.querySelector(".why-heading").innerHTML =
  "Reliable Energy Trading Partner";

  document.querySelectorAll(".why-card h3")[0].innerHTML =
  "Trusted Trading Network";

  document.querySelectorAll(".why-card p")[0].innerHTML =
  "Professional connections with suppliers, buyers, and refineries across domestic and international markets.";

  document.querySelectorAll(".why-card h3")[1].innerHTML =
  "International Standards";

  document.querySelectorAll(".why-card p")[1].innerHTML =
  "Transactions handled with transparency, professionalism, and compliance standards.";

  document.querySelectorAll(".why-card h3")[2].innerHTML =
  "Reliable Supply Chain";

  document.querySelectorAll(".why-card p")[2].innerHTML =
  "Efficient coordination from procurement and inspection to storage and delivery.";

  document.querySelectorAll(".why-card h3")[3].innerHTML =
  "Sustainable Energy Focus";

  document.querySelectorAll(".why-card p")[3].innerHTML =
  "Supporting responsible and long-term energy trading solutions for future growth.";

  /* LEGAL & CERTIFICATION */

  document.querySelector(".certification-heading").innerHTML =
  "Trusted & Registered Energy Company";

  document.querySelector(".cert-title").innerHTML =
  "PT. ABANAWEST NUSANTARA INDONESIA";

  document.querySelector(".cert-desc").innerHTML =
  "Registered Indonesian energy commodity trading company operating under official business licensing and compliance standards.";

  document.querySelectorAll(".cert-item span")[0].innerHTML =
  "NIB Number";

  document.querySelectorAll(".cert-item span")[1].innerHTML =
  "Office Address";

  document.querySelectorAll(".cert-item span")[2].innerHTML =
  "Email";

  document.querySelectorAll(".cert-item p")[0].innerHTML =
  "1610240010787";

  document.querySelectorAll(".cert-item p")[1].innerHTML =  
  `
  AD Premier Lantai 17 Suite 04B<br>
  Jl. TB Simatupang No. 5 Ragunan<br>
  Pasar Minggu, South Jakarta 12550 Indonesia
  `;

  document.querySelectorAll(".cert-item p")[2].innerHTML =
  "abanawestnusantaraindonesia@gmail.com";

     
/* SHIP SHOWCASE */

document.querySelector(".fleet-label-1").innerHTML =
"OUR FLEET";

document.querySelector(".fleet-title-1").innerHTML =
"Delivering Energy Across<br>Borders";

document.querySelector(".fleet-desc-1").innerHTML =
"Reliable fleet and logistics support for global energy distribution.";


document.querySelector(".fleet-label-2").innerHTML =
"OUR COMMITMENT";

document.querySelector(".fleet-title-2").innerHTML =
"Built on Safety,<br>Driven by Trust";

document.querySelector(".fleet-desc-2").innerHTML =
"Upholding operational excellence, safety, and reliable partnerships.";

document.querySelector(".footer-banner-content h2").innerHTML =
"Let’s Build Strategic<br>Energy Partnerships";

document.querySelector(".footer-banner-content p").innerHTML =
"We are ready to collaborate and deliver energy solutions that drive sustainable growth together.";

/* FOOTER */

document.querySelector(".footer-brand h3").innerHTML =
"ABANAWEST";

document.querySelector(".footer-brand p").innerHTML =
"Delivering reliable energy solutions with integrity, compliance, and operational excellence.";

document.querySelectorAll(".footer-grid h4")[0].innerHTML =
"Quick Links";

document.querySelectorAll(".footer-grid h4")[1].innerHTML =
"Products";

document.querySelectorAll(".footer-grid h4")[2].innerHTML =
"Contact";

document.querySelectorAll(".footer-grid ul li a")[0].innerHTML =
"About Us";

document.querySelectorAll(".footer-grid ul li a")[1].innerHTML =
"Services";

document.querySelectorAll(".footer-grid ul li a")[2].innerHTML =
"Products";

document.querySelectorAll(".footer-grid ul li a")[3].innerHTML =
"Why Us";

document.querySelectorAll(".footer-grid ul li a")[4].innerHTML =
"Contact";

document.querySelectorAll(".footer-grid ul")[1].children[0].innerHTML =
"Aluminium Rod";

document.querySelectorAll(".footer-grid ul")[1].children[1].innerHTML =
"Crude Oil";

document.querySelectorAll(".footer-grid ul")[1].children[2].innerHTML =
"Marine Fuel Oil";

document.querySelectorAll(".footer-grid ul")[1].children[3].innerHTML =
"Industrial Fuel";

document.querySelector(".footer-credit").innerHTML =
"Crafted by aethere";
}
      
    

    });

  });


  /* ========================= */
  /* ACTIVE NAVBAR */
  /* ========================= */

  const sections = document.querySelectorAll("section, footer");

  const navLinks = document.querySelectorAll(".nav-menu a");


  window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.clientHeight;

      if(scrollY >= sectionTop){
        current = section.getAttribute("id");
      }

    });

    navLinks.forEach(link=>{

      link.classList.remove("active");

      if(link.getAttribute("href") === `#${current}`){
        link.classList.add("active");
      }

    });

  });