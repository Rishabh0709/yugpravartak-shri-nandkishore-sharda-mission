/* ==========================================================================
   i18n.js — Manidweep EN / HI toggle
   A small dictionary-driven translator. Every translatable element carries
   data-i18n="key"; this file swaps innerHTML for that key on language
   change. No persistence to browser storage is used by design — the page
   simply starts in English and remembers the choice only for the current
   visit (in memory), which keeps this safe to preview anywhere.
   ========================================================================== */
(function () {
  'use strict';

  var DICT = {
    'nav.place':        { en: 'The Place',            hi: 'स्थल' },
    'nav.torchbearers':  { en: 'Torchbearers',          hi: 'पुरोधा' },
    'nav.philosophy':    { en: 'Our Philosophy',         hi: 'हमारा दर्शन' },
    'nav.community':     { en: 'Community',              hi: 'समुदाय' },
    'nav.publications':  { en: 'Publications',           hi: 'प्रकाशन' },
    'nav.gallery':       { en: 'Gallery',                hi: 'गैलरी' },
    'nav.visit':         { en: 'Visit Us',               hi: 'हमसे मिलें' },
    'skip.content':      { en: 'Skip to content',        hi: 'सामग्री पर जाएँ' },

    'hero.title':        { en: 'The Earthly Realm<br> of Jagatjanani Maa',
                            hi: 'वह भूमि जहाँ<br>मौन आज भी&nbsp;बोलता है' },
    'hero.subGloss':      { en: 'Imbued with the conscious energy and <em>divine grace of Maa Tripurasundari</em>, shaped by the visionary devotion of <em>Shri Nandkishore Sharda, Maa Basanti Manihar, and Maa Madhu Advani</em>, Manidweep brings the spirit of <em>"Vasudhaiva Kutumbakam"</em> to life with selfless service provided under <em>Shri Nandkishore Sharda Gyan Ganga Mission.</em>',
                             hi: '— <em>सारा संसार एक परिवार है</em> — यही भाव इस भूमि ने 1996 से साधकों के हृदय में शांति से जगाया है।' },
    'hero.ctaMain':       { en: 'Meet the Torchbearers', hi: 'पुरोधाओं से मिलें' },
    'hero.ctaScroll':     { en: 'Begin here',            hi: 'यहाँ से आरंभ करें' },

    'threshold.eyebrow':  { en: 'The Place',              hi: 'स्थल' },
    'threshold.statement':{ en: 'Manidweep is not a building. It is a ground <span class="ink">saturated with conscious particles</span> — where sitting quietly is, by itself, enough for joy to arrive on its own, unasked for.',
                             hi: 'मणिद्वीप केवल एक भवन नहीं है। यह <span class="ink">चैतन्य कणों से सराबोर</span> एक भूमि है — जहाँ शांतचित्त बैठना मात्र ही आनंद के स्वतः, बिना माँगे प्रकट होने के लिए पर्याप्त है।' },
    'threshold.link':     { en: 'Read the Full Story of This Ground →', hi: 'इस भूमि की पूरी कहानी पढ़ें →' },

    'torch.eyebrow':      { en: 'The Torchbearers', hi: 'पुरोधा' },
    'torch.heading':      { en: 'Three Lives, One Flame', hi: 'तीन जीवन, एक ज्योति' },
    'torch.n1.name':      { en: 'Shri Nandkishore Sharda', hi: 'श्री नंदकिशोर शारदा' },
    'torch.n1.hook':      { en: '"At fifteen, before his father\u2019s pyre, a boy resolved to know the power that moves us at all."',
                             hi: '"मात्र पंद्रह वर्ष की आयु में, पिता की चिता के समक्ष, एक बालक ने उस शक्ति को जानने का संकल्प लिया जो इस जीवन को गति देती है।"' },
    'torch.n2.name':      { en: 'Kumari Basanti Manihar', hi: 'कुमारी बसंती मणिहार' },
    'torch.n2.hook':      { en: '"She came to test his path in 1964 — and stayed to walk it for fifty-seven years."',
                             hi: '"वे 1964 में उनके मार्ग को परखने आईं — और सत्तावन वर्षों तक उसी पथ पर चलती रहीं।"' },
    'torch.n3.name':      { en: 'Kumari Madhubala Advani', hi: 'कुमारी मधुबाला आडवाणी' },
    'torch.n3.hook':      { en: '"A chance meeting in a hospital corridor in 1970 became a lifetime."',
                             hi: '"1970 में एक अस्पताल के गलियारे की मुलाकात जीवनभर का साथ बन गई।"' },

    'practice.eyebrow':   { en: 'The Practice', hi: 'साधना पद्धति' },
    'practice.heading':   { en: 'Buddhi&#8209;Vivek Yog Sadhna', hi: 'बुद्धि&#8209;विवेक योग साधना' },
    'practice.lede':      { en: 'A simple, practical discipline of intellect and discretion, given by Bhaiyaji to bring consciousness and material life into balance — so a seeker can live fully in the world without being ruled by it.',
                             hi: 'भैयाजी द्वारा प्रदत्त बुद्धि और विवेक पर आधारित यह सरल, व्यावहारिक साधना पद्धति चैतन्यता और भौतिकता में संतुलन स्थापित करती है — जिससे साधक संसार में रहते हुए भी उससे बंधे बिना पूर्ण जीवन जी सके।' },
    'practice.link':      { en: 'Learn the Practice →', hi: 'साधना पद्धति जानें →' },
    'practice.buddhi':    { en: '<strong>Buddhi</strong> — intellect', hi: '<strong>बुद्धि</strong> — बोध-शक्ति' },
    'practice.vivek':     { en: '<strong>Vivek</strong> — discretion', hi: '<strong>विवेक</strong> — विवेक-शक्ति' },

    'emblem.eyebrow':     { en: 'The Emblem', hi: 'प्रतीक चिह्न' },
    'emblem.heading':     { en: 'Every Mark Was Chosen', hi: 'हर चिह्न सुविचारित है' },
    'emblem.text':        { en: 'Our emblem carries the same devotion as everything else at Manidweep — the color, the petal count, the center mark. Nothing on it is decoration.',
                             hi: 'हमारा प्रतीक चिह्न भी मणिद्वीप की हर वस्तु जितनी ही भक्ति भावना लिए हुए है — रंग, पंखुड़ियों की संख्या, केंद्र का चिह्न। इसमें कुछ भी मात्र सजावट नहीं है।' },
    'emblem.link':        { en: 'Understand Our Emblem →', hi: 'हमारा प्रतीक चिह्न समझें →' },

    'voices.eyebrow':     { en: 'The Parivar', hi: 'परिवार' },
    'voices.heading':     { en: 'Others Found Their Way Here Too', hi: 'औरों ने भी यहाँ अपना मार्ग पाया' },
    'voices.v1.text':     { en: '"I came for one Sunday discourse to accompany my mother. I am still coming, eleven years later."',
                             hi: '"मैं अपनी माँ के साथ एक रविवारीय प्रवचन में आया था। ग्यारह वर्ष बाद भी आना जारी है।"' },
    'voices.v1.cite':     { en: '— A seeker, Jodhpur', hi: '— एक साधक, जोधपुर' },
    'voices.v2.text':     { en: '"Nobody asked what I could give. They only ever asked how I was."',
                             hi: '"किसी ने कभी नहीं पूछा कि मैं क्या दे सकता हूँ। सबने बस यही पूछा कि मैं कैसा हूँ।"' },
    'voices.v2.cite':     { en: '— A volunteer since 2011', hi: '— 2011 से एक स्वयंसेवक' },
    'voices.v3.text':     { en: '"The yoga class was meant to help my knees. It ended up helping everything else first."',
                             hi: '"योग कक्षा मेरे घुटनों के लिए थी, पर इसने सबसे पहले बाकी सब कुछ संवार दिया।"' },
    'voices.v3.cite':     { en: '— A daily visitor', hi: '— एक नियमित आगंतुक' },
    'voices.link':        { en: 'Read More Stories from the Parivar →', hi: 'परिवार की और कहानियाँ पढ़ें →' },

    'rhythm.eyebrow':     { en: 'The Weekly Rhythm', hi: 'साप्ताहिक क्रम' },
    'rhythm.heading':     { en: 'Manidweep\u2019s Week', hi: 'मणिद्वीप का सप्ताह' },
    'rhythm.r1.time':     { en: 'Daily · 7:15–8:15 AM', hi: 'प्रतिदिन · प्रातः 7:15–8:15' },
    'rhythm.r1.what':     { en: 'Free Yoga &amp; Meditation', hi: 'निःशुल्क योग एवं ध्यान' },
    'rhythm.r2.time':     { en: 'Sunday · 10:30 AM–12:30 PM', hi: 'रविवार · प्रातः 10:30 – दोपहर 12:30' },
    'rhythm.r2.what':     { en: 'Gyan Classes for Students', hi: 'विद्यार्थियों हेतु ज्ञान कक्षाएँ' },
    'rhythm.r3.time':     { en: 'Sunday · Evening', hi: 'रविवार · सायंकाल' },
    'rhythm.r3.what':     { en: 'Discourses for All Seekers', hi: 'सभी साधकों हेतु प्रवचन' },
    'rhythm.link':        { en: 'Plan Around This Rhythm →', hi: 'इस क्रम अनुसार योजना बनाएँ →' },

    'pub.eyebrow':        { en: 'Publications', hi: 'प्रकाशन' },
    'pub.heading':        { en: 'One Idea, Written Many Times', hi: 'एक विचार, अनेक बार लिखा गया' },
    'pub.text':           { en: 'Diaries, discourses, and books preserved and published by the Gyan Ganga Mission — so a teaching given in one room can still reach someone who was never in it.',
                             hi: 'ज्ञान गंगा मिशन द्वारा संरक्षित एवं प्रकाशित डायरियाँ, प्रवचन और पुस्तकें — ताकि एक कक्ष में दी गई शिक्षा उस तक भी पहुँच सके जो वहाँ कभी उपस्थित नहीं था।' },
    'pub.link':           { en: 'Browse the Library →', hi: 'पुस्तकालय देखें →' },

    'gallery.eyebrow':    { en: 'Gallery', hi: 'गैलरी' },
    'gallery.heading':    { en: 'Moments, Not Just Photographs', hi: 'क्षण, केवल तस्वीरें नहीं' },
    'gallery.cta':        { en: 'View the Gallery', hi: 'गैलरी देखें' },

    'closing.eyebrow':    { en: 'Visit', hi: 'हमसे मिलें' },
    'closing.heading':    { en: 'Anyone May Come and Sit Here', hi: 'कोई भी यहाँ आकर बैठ सकता है' },
    'closing.cta':        { en: 'Plan Your Visit', hi: 'अपनी यात्रा की योजना बनाएँ' },
    'closing.crosslinkLead': { en: 'Looking for the scholarship trust this mission inspired?',
                                hi: 'इस मिशन से प्रेरित छात्रवृत्ति ट्रस्ट खोज रहे हैं?' },
    'closing.crosslinkA':  { en: 'Visit Swami Vivekanand Students\u2019 Welfare Charitable Trust →',
                              hi: 'स्वामी विवेकानंद स्टूडेंट्स वेलफेयर चैरिटेबल ट्रस्ट देखें →' },

    'footer.brand':       { en: 'Manidweep', hi: 'मणिद्वीप' },
    'footer.brandSub':    { en: 'Jodhpur, Rajasthan', hi: 'जोधपुर, राजस्थान' },
    'footer.philosophy':  { en: 'Buddhi-Vivek Yog Sadhna', hi: 'बुद्धि-विवेक योग साधना' },
    'footer.emblem':      { en: 'Our Emblem', hi: 'हमारा प्रतीक चिह्न' },
    'footer.satsang':     { en: 'Satsang &amp; Sadhna', hi: 'सत्संग एवं साधना' },
    'footer.bottom':      { en: '© <span id="footerYear">2026</span> Shri Nandkishore Sharda Ganga Mission, Manidweep.',
                             hi: '© <span id="footerYear">2026</span> श्री नंदकिशोर शारदा ज्ञान गंगा मिशन, मणिद्वीप।' },

    'lang.switchLabel':   { en: 'Switch language', hi: 'भाषा बदलें' }
  };

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var entry = DICT[key];
      if (entry && entry[lang] != null) {
        el.innerHTML = entry[lang];
      }
    });

    document.querySelectorAll('.site-nav__lang-btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  function initLangToggle() {
    var current = 'en';
    applyLang(current);

    document.querySelectorAll('.site-nav__lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var chosen = btn.getAttribute('data-lang');
        if (chosen === current) return;
        current = chosen;
        applyLang(current);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangToggle);
  } else {
    initLangToggle();
  }
})();
