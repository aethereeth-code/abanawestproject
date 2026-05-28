const langButtons = document.querySelectorAll('.lang');

langButtons.forEach(button => {

  button.addEventListener('click', () => {

    langButtons.forEach(btn => {
      btn.classList.remove('active');
    });

    button.classList.add('active');


    /* ========================= */
    /* INDONESIA */
    /* ========================= */

    if(button.dataset.lang === 'id'){

      /* HERO */

      document.querySelector('.hero-title').innerHTML =
      'Portofolio Inovasi<br>Energi Berkelanjutan';

      document.querySelector('.hero-desc').innerHTML =
      'Eksplorasi pengembangan energi terbarukan melalui biomassa, green hydrogen, dan biogas untuk masa depan industri yang lebih bersih dan berkelanjutan.';


      /* PRODUCTS SECTION */

      document.querySelectorAll('.section-heading')[0].innerHTML =
      'Solusi Energi Berkelanjutan Masa Depan';


      /* PRODUCT TITLE */

      document.querySelectorAll('.renew-content h3')[0].innerHTML =
      'Energi Biomassa';

      document.querySelectorAll('.renew-content h3')[1].innerHTML =
      'Hidrogen Hijau';

      document.querySelectorAll('.renew-content h3')[2].innerHTML =
      'Solusi Biogas';


      /* PRODUCT DESC */

      document.querySelectorAll('.renew-content p')[0].innerHTML =
      'Sumber energi organik terbarukan yang dikembangkan untuk alternatif bahan bakar industri yang lebih bersih.';

      document.querySelectorAll('.renew-content p')[1].innerHTML =
      'Solusi energi hidrogen berkelanjutan yang mendukung pengembangan industri rendah karbon di masa depan.';

      document.querySelectorAll('.renew-content p')[2].innerHTML =
      'Teknologi gas terbarukan yang efisien untuk sistem energi yang lebih ramah lingkungan dan bertanggung jawab.';


      /* VIDEO SECTION */

      document.querySelectorAll('.section-heading')[1].innerHTML =
      'Wawasan Operasional<br>Energi Terbarukan';


      /* GALLERY SECTION */

      document.querySelectorAll('.section-heading')[2].innerHTML =
      'Operasional Lapangan &<br>Aktivitas Proyek';

      


      /* PARTNERSHIP */

      document.querySelector('.partnership-box h2').innerHTML =
      'Membangun Kemitraan<br>Energi Berkelanjutan';

      document.querySelector('.partnership-box p').innerHTML =
      'Berkolaborasi menuju solusi energi terbarukan yang inovatif dan pertumbuhan industri yang berkelanjutan.';

      document.querySelectorAll('.section-heading')[3].innerHTML =
'Bidang Bisnis Lainnya';

document.querySelector('.footer-copy').innerHTML =
'© 2026 Abanawest Nusantara Indonesia. Hak cipta dilindungi.';
    }


    /* ========================= */
    /* ENGLISH */
    /* ========================= */

    else{

      /* HERO */

      document.querySelector('.hero-title').innerHTML =
      'Sustainable Energy<br>Innovation Portfolio';

      document.querySelector('.hero-desc').innerHTML =
      'Exploring renewable energy development through biomass, green hydrogen, and biogas solutions for a cleaner industrial future.';


      /* PRODUCTS SECTION */

      document.querySelectorAll('.section-heading')[0].innerHTML =
      'Future Sustainable Energy Solutions';


      /* PRODUCT TITLE */

      document.querySelectorAll('.renew-content h3')[0].innerHTML =
      'Biomass Energy';

      document.querySelectorAll('.renew-content h3')[1].innerHTML =
      'Green Hydrogen';

      document.querySelectorAll('.renew-content h3')[2].innerHTML =
      'Biogas Solution';


      /* PRODUCT DESC */

      document.querySelectorAll('.renew-content p')[0].innerHTML =
      'Renewable organic energy resources developed for cleaner industrial fuel alternatives.';

      document.querySelectorAll('.renew-content p')[1].innerHTML =
      'Sustainable hydrogen energy solution supporting future low-carbon industrial development.';

      document.querySelectorAll('.renew-content p')[2].innerHTML =
      'Efficient renewable gas technology for environmentally responsible energy systems.';


      /* VIDEO SECTION */

      document.querySelectorAll('.section-heading')[1].innerHTML =
      'Renewable Energy<br>Operational Insights';


      /* GALLERY SECTION */

      document.querySelectorAll('.section-heading')[2].innerHTML =
      'Field Operations &<br>Project Activities';




      /* PARTNERSHIP */

      document.querySelector('.partnership-box h2').innerHTML =
      'Let’s Build Sustainable<br>Energy Partnerships';

      document.querySelector('.partnership-box p').innerHTML =
      'Collaborating toward innovative renewable energy solutions and sustainable industrial growth.';

      document.querySelectorAll('.section-heading')[3].innerHTML =
'Others Business Field';

document.querySelector('.footer-copy').innerHTML =
'© 2026 Abanawest Nusantara Indonesia. All rights reserved.';
    }

  });

});

/* ========================= */
/* MOBILE MENU */
/* ========================= */

const mobileBtn = document.querySelector('.mobile-menu-btn');

const subNavbar = document.querySelector('.sub-navbar');

if(mobileBtn){

  mobileBtn.addEventListener('click',()=>{

    subNavbar.classList.toggle('active');

  });

}