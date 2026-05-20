/* Seafarer Hub - Multi-language (EN/MY) Support
   Handles translation using data-i18n attributes
*/

const translations = {
  en: {
    "nav-logo": "MYANMAR SEAFARER HUB",
    "nav-contact": "Contact Us",
    "nav-shop": "Shopping",
    "nav-home": "Home",
    "nav-services": "Services",
    "nav-cat": "Categories",
    "cat-title": "Categories",
    "cat-all": "All",
    "cat-docs": "Documents",
    "cat-insight": "Seafarer Insight",
    "cat-training": "Training",
    "cat-shop": "Shopping",
    "cat-comp": "Approved Shipping Companies",
    "hero-title": "Myanmar Seafarers Hub: Guide & Marine Supply",
    "hero-desc":
      "Your one-stop destination for beginner guides, professional maritime resources, and high-quality seafaring gear.",
    "service-1-title": "Myanmar Seafarer Shop",
    "service-1-desc":
      "Seafaring accessories, food, and apparel for Myanmar seafarers.",
    "service-1-link": "View Products",
    "service-2-title": "Documentation",
    "service-2-desc": "Guidelines for SIRB and other essential documents.",
    "service-2-link": "Documentation Guide",
    "service-3-title": "Seafarer Insights",
    "service-3-desc":
      "Essential maritime knowledge, general guidelines, and experience sharing for new seafarers.",
    "service-3-link": "Read Insights",
    "service-4-title": "Training Courses",
    "service-4-desc": "Locations and contact of maritime schools.",
    "service-4-link": "Training Centers",

    "service-5-title": "DMA Approved Seafarer Job Placement Companies",
    "service-5-desc": "List of SRPS Companies Licensed by DMA",
    "service-5-link": "View More",
    "about-title": "About Us",
    "about-desc":
      "Myanmar Seafarer Hub is a dedicated platform for Myanmar seafarers, providing a one-stop solution for documentation guides, interview preparation, maritime training center information, and high-quality seafaring gear.",
    "contact-title": "Contact Us",
    "contact-phone": "Phone",
    "contact-email": "Email",
    "contact-fb": "Facebook",
    //================Shop Page Translations================//
    "shop-title": "Myanmar Seafarer Hub Shopping",
    "shop-subtitle":
      "High-quality marine equipment, ocean-ready provisions, and essential seafarer gear.",
    "shop-search-placeholder": "Search product name...",
    "shop-cat-all": "All",
    "shop-cat-gear": "Accessories",
    "shop-cat-food": "Food",
    "shop-cat-dry": "Dry Goods",
    "prod-item1-name": "Safety Shoes",
    "prod-item2-name": "Universal Travel Adapter",
    "prod-item3-name": "Boiler Suit",
    "prod-item4-name": "Premium Coffee",
    "prod-item5-name": "Dried Fish",
    "shop-add-cart": "Add to Cart",
    "cart-head": "Your Cart",
    "cart-header": "Your Chosen Items",
    "cart-empty": "Your cart is currently empty.",
    "cart-total": "Total",
    "btn-buy": "Buy Now",
    "cart-instruction": "Click one of the apps below to place your order",
    "order-summary-head": "Hello! I would like to place an order -",
    "order-total-label": "Total Amount",
    // ================Document Page Translations=================//
    "back-home": "Back to Home",
    "docs-page-title": "Documentation Guide",
    "docs-page-desc":
      "Essential guidelines for applying maritime documents for seafarers.",
    ///SIRB BOOK REQUIREMENTS ///
    "doc-sirb-title": "SIRB (Seaman Book) Application Guide(New Seafarers).",
    "doc-sirb-desc":
      "SIRB (Seaman Book) is an essential leadership document for a senior seafarer. As a new seafarer/cadet, this book provides a summary of the basic requirements to make the program work.",
    "sirb-req-1":
      "Obtain New Seafarer Application Form (Available at Seafarer Centers)",
    "sirb-req-2": "Medical Certificate must be done at DMA approved clinics.",
    "sirb-req-3":
      "Eye Test Certificate must be done at DMA Maritime Branch and Maritime Engineer Branch. (Not required for GS and Ship's Cook applicants)",
    "sirb-req-4": "Training Certificate (Pre-Sea, Basic Safety Training, etc.)",
    "sirb-req-5":
      "Pre-Sea Training Certificate is required for Deck Rating and Engine Rating applicants.",
    "sirb-req-6":
      "Ship's Cook Training Certificate is required for Ship's Cook applicants.",
    "sirb-req-7":
      "Workshop Skill Certificate is required for Training/Electro Technical Rating, Training/Electro Technical Officer, and Engine Cadet applicants.",
    "sirb-req-8":
      "NIRC (National Identity Registration Card) Original and Copy",
    "sirb-req-9":
      "Educational Qualifications (High School Diploma or Equivalent) Original and Copy",
    "sirb-req-10": "Passport (PS) Copy",
    "sirb-req-11": "Household List Copy",
    "sirb-req-12": "Photo (1 pcs, 2.5cm x 2.5cm, white background)",
    "sirb-req-13": "Book Issuance Application Form is required.",
    "pro-tip-label": "Tip :",
    "sirb-tip":
      "SIRB is usually valid for (10) years. Prepare for renewal 6 months before expiry.",
    "sirb-warning-label": "Important Note:",
    "sirb-new-tip":
      "This information is intended as a beginner's guide only. Since the Department of Marine Administration (DMA) regulations and Standard Operating Procedures (SOPs) are subject to change, we highly encourage you to check the latest accurate information and application forms directly on the Official DMA Website <a href='http://www.dma.gov.mm' target='_blank' >www.dma.gov.mm</a>.",
    ///SID REQUIREMENTS ///
    "doc-sid-title": "SID (Identity Document)",
    "doc-sid-desc":
      "Required for Shore Leave in international ports under ILO C185.",
    "sid-req-1": "Valid SIRB Book",
    "sid-req-2": "Valid Passport",
    "sid-req-3": "Online Application Form with QR Code",
    "sid-tip-label": "Tip:",
    "sid-tip": "Both original and copy are required.",
    "doc-passport-title": "Passport (Type-PS)",
    "doc-passport-desc":
      "Seafarers must hold Type-P Passport instead of PJ for maritime work.",
    "pass-req-1": "Original NRC and Copy",
    "pass-req-2": "Household list copy",
    "pass-req-3": "Old Passport (If any)",
    "pass-req-4": "Proof of Residency (If required)",
    "pass-req-5": "Online Application Form with QR Code",
    "doc-all-in-one-title": "All In One",
    "doc-all-in-one-desc":
      "A comprehensive booklet combining essential Certificates & Training for seafarers. It streamlines the application process by consolidating all necessary documents in one place. The required documents include:",
    "all-in-one-req-1":
      "Training Certificates (Pre-Sea, Basic Safety Training, etc.)",
    "all-in-one-req-2": "Valid Passport (Original & Copy)",
    "all-in-one-req-3":
      "Online Applications, Certificate of Proficiency, Seafarer Identity Document (recently available for online application)",
    "doc-med-title": "Medical Certificate",
    "doc-med-desc":
      "Medical examinations must be done at DMA approved clinics.",
    "med-req-1": "Colour Blindness Test",
    "med-req-2": "Hearing and Vision Test",
    "med-req-3": "Infectious Disease Screening",
    "med-req-4": "Chest X-Ray",
    "med-warning-label": "Note:",
    "med-tip":
      "Ensure blood sugar and pressure are controlled before the medical check.",
    //=================Seafarers Insight Translations =================//
    "insight-page-title": "Seafarer Insights",
    "insight-page-desc":
      "Essential maritime knowledge, general guidelines, and experience sharing for new seafarers.",
    "insight-sec1-title": "Basic Maritime Knowledge & Navigation Rules",
    "insight-sec1-p1":
      "As a new seafarer, it is mandatory to study basic maritime standards and navigation rules before heading to sea. Especially, the International Regulations for Preventing Collisions at Sea (COLREGs) are highly crucial.",
    "insight-sec1-p2":
      "In addition, it is necessary to know the maritime terms according to your assigned department (Deck or Engine) and safety protocols to follow for life-saving in emergencies.",
    "insight-sec1-sub1": "Essential Knowledge You Must Know:",
    "insight-sec1-list1": "COLREGs (Rules of the Road) and Basic Navigation",
    "insight-sec1-list2": "Engine Room / Bridge Equipment Fundamentals",
    "insight-sec1-list3": "Emergency Procedures and Lifeboat Drills",

    "insight-sec2-title": "Maritime English & Communication",
    "insight-sec2-p1":
      "Working on international cargo ships means collaborating with multi-national crews from different countries. Therefore, English communication is the key to a smooth workplace experience.",
    "insight-sec2-p2":
      "Beyond general English, mastering Maritime English and Standard Marine Communication Phrases (SMCP) will ensure you understand orders precisely and work safely.",
    "insight-sec2-list1":
      "Preparing for English tests like Marlins Test or CES Test",
    "insight-sec2-list2":
      "Studying SMCP (Standard Marine Communication Phrases)",
    "insight-sec2-list3": "Understanding the basics of VHF Radio Communication",
    "insight-tip-label": "Senior's Advice:",
    "insight-tip-text":
      "English is not just in books; practice continuously to speak with confidence during daily communications.",

    "insight-sec3-title": "Work Culture & Attitude On Board",
    "insight-sec3-p1":
      "Spending months together at sea requires not only professional skills but also a Good Attitude and the ability to work as a team (Teamwork), which are very important factors.",
    "insight-sec3-p2":
      "Particularly, obeying orders from superiors (Discipline), respecting diverse cultures (Cultural Awareness), and managing stress are indispensable for long-term seafaring success.",
    "insight-sec3-list1": "Teamwork (Active cooperation with crew members)",
    "insight-sec3-list2":
      "Discipline & Safety Mindset (Adhering to regulations and safety awareness)",
    "insight-sec3-list3":
      "Cultural Adaptability (Living harmoniously with multi-national crewing)",
    //=================Training Page==============///
    "training-page-title": "Training Center",
    "training-page-desc": "Locations and phone numbers of training centers.",
    // ================Applicable company===========///
    "comp-hero-title": "DMA Approved Seafarer Job Placement Companies",
    "comp-hero-desc": "List of SRPS Companies Licensed by DMA",

    //===============Terms & Conditions Specific Translations==========//
    "terms-page-title": "Terms & Conditions - Myanmar Seafarer Hub",
    "terms-quick-nav": "Table of Contents",
    "terms-nav-1": "1. General Agreement",
    "terms-nav-2": "2. User Eligibility",
    "terms-nav-3": "3. Job Portal Disclaimer",
    "terms-nav-4": "4. Courses & Documents",
    "terms-nav-5": "5. Marine Store Policies",
    "terms-nav-6": "6. Pricing & Payments",
    "terms-nav-7": "7. Shipping & Delivery",
    "terms-nav-8": "8. Returns & Refunds",
    "terms-nav-9": "9. Copyright & Intellectual Property",
    "terms-nav-10": "10. Prohibited Activities",
    "terms-nav-11": "11. Privacy Policy",
    "terms-header-title": "Terms and Conditions",
    "terms-header-subtitle": "Terms and Conditions & Store Policies",
    "terms-last-updated": "Last Updated: May, 2026",

    "terms-c1-title": "1. General Agreement",
    "terms-c1-p1":
      "These terms and conditions govern the use of <strong>Myanmar Seafarer Hub</strong> (Jobs, Training, Documentation Guides, Interview Support, and Seafarer Marine Shop) between the user (buyer, browser) and the site owner.",
    "terms-c1-p2":
      "By accessing this website, placing orders, or obtaining information, you accept these terms and conditions in full without any reservation.",

    "terms-c2-title": "2. User Eligibility",
    "terms-c2-p1":
      "This website is primarily built for Myanmar seafarers and individuals interested in pursuing a maritime career.",
    "terms-c2-p2":
      "Providing false information, using others' identities, or breaching these terms will result in immediate termination of access to this portal without any prior notice.",

    "terms-c3-title": "3. Job Portal Disclaimer",
    "terms-c3-p1":
      "The recruitment agency listings (SRPS) and shipping company details provided in our <strong>Jobs</strong> section are verified to the best of our knowledge. However:",
    "terms-c3-li1":
      "We do not participate in, nor take responsibility for, the direct interviews, documentation, or personal financial transactions between seafarers and SRPS companies. We are not liable for any third-party fraudulent acts.",
    "terms-c3-li2":
      "Seafarers are strongly advised to verify the credentials and follow DMA regulations when dealing with any agency or recruitment process.",

    "terms-c4-title": "4. Maritime Courses & Documentation Guidelines",
    "terms-c4-p1":
      "The details regarding maritime training centers and CDC/SIRB document preparation guidelines are based on current regulations. However, these rules can change anytime. Users must verify the exact specifications directly with respective institutions or authorities.",

    "terms-c5-title": "5. Marine Store Policies (E-commerce Policy)",
    "terms-c5-p1":
      "Our Marine Store (Shop) offers high-quality seafarer garments, protective equipment, and Myanmar dry foods. When placing orders, the following conditions must be met:",
    "terms-c5-box":
      "<i class='fas fa-exclamation-triangle'></i> <strong>Important Order Confirmation Process</strong><br>Adding items to the Cart on this website does NOT complete or guarantee your order. The buyer must click 'Copy Order to Clipboard' on the Cart page and send that copied text to our official Messenger chat. The order (including prices, stock, and delivery dates) is only confirmed after direct messaging.",

    "terms-c6-title": "6. Pricing and Payments",
    "terms-c6-p1":
      "All prices of goods are displayed in Myanmar Kyats (MMK) and are subject to market variations. We accept the following payment methods:",
    "terms-c6-li1": "Mobile banking systems such as KPay or Wave Money.",
    "terms-c6-li2":
      "Cash on Delivery (COD) within Yangon and designated townships.",
    "terms-c6-li3":
      "Any transfer charges or bank service fees must be covered by the buyer.",

    "terms-c7-title": "7. Shipping & Delivery Policy",
    "terms-c7-p1":
      "Items are shipped via reliable home delivery services or local bus stations depending on the location.",
    "terms-c7-li1":
      "<strong>Delivery Fee:</strong> Calculated based on item size, weight, and delivery address. This fee must be paid by the buyer.",
    "terms-c7-li2":
      "<strong>Delivery Time:</strong> Yangon orders take 1 to 3 days. Rural areas take 3 to 5 days. We are not liable for delays caused by natural disasters or transport station issues.",

    "terms-c8-title": "8. Returns & Refunds Policy",
    "terms-c8-p1":
      "To ensure customer satisfaction, we offer returns under the following conditions:",
    "terms-c8-li1":
      "<strong>Apparel & Equipment:</strong> Boiler suits and boots can be exchanged within (3) days of receipt if the size does not fit, provided the tags and original packaging are undamaged. Return shipping fees are borne by the buyer.",
    "terms-c8-li2":
      "<strong>Dry Foods:</strong> Due to hygiene and health standards, we do NOT accept returns or offer refunds for dry food products once purchased.",

    "terms-c9-title": "9. Copyright & Intellectual Property",
    "terms-c9-p1":
      "All logos, designs, compiled interview questions, guidelines, articles, and source codes on this website are the intellectual property of <strong>Myanmar Seafarer Hub</strong>. Copying, commercializing, or using them elsewhere without permission is strictly prohibited.",

    "terms-c10-title": "10. Prohibited Activities",
    "terms-c10-p1":
      "While using this portal, users are strictly prohibited from:",
    "terms-c10-li1":
      "Attempting DDoS attacks or executing malicious scripts to compromise website security.",
    "terms-c10-li2":
      "Generating fake orders repeatedly to disrupt store operations.",
    "terms-c10-li3":
      "Refusing payment, dodging deliveries, or providing fake addresses after confirming orders.",

    "terms-c11-title": "11. Privacy Policy",
    "terms-c11-p1":
      "We take user privacy seriously. All personal information such as name, phone number, email, and shipping address will:",
    "terms-c11-li1":
      "Be used solely for processing orders and delivery-related communications.",
    "terms-c11-li2":
      "Never be leaked, shared, or sold to third-party advertisers or external agencies.",

    "terms-footer-copy":
      "&copy; 2026 Myanmar Seafarer Hub. All Rights Reserved. Created by Seafarer for Seafarers.",
    "terms-footer-home": "Back to Home",
    "terms-footer-shop": "Back to Shop",
  },
  my: {
    "nav-logo": "MYANMAR SEAFARER HUB",
    "nav-contact": "ဆက်သွယ်ရန်",
    "nav-shop": "ရိက္ခာဆိုင်",
    "nav-home": "ပင်မ",
    "nav-services": "ဝန်ဆောင်မှု",
    "nav-cat": "ကဏ္ဍ",
    "cat-title": "ကဏ္ဍများ",
    "cat-all": "အားလုံး",
    "cat-docs": "စာရွက်စာတမ်းများ",
    "cat-insight": "ပင်လယ်ပြင်ဗဟုသုတ",
    "cat-training": "သင်တန်းများ",
    "cat-shop": "ရိက္ခာဆိုင်",
    "cat-comp": "အလုပ်လျှောက်နိုင်သော ကုမ္ပဏီများ",
    "hero-title": "လူသစ်မှသည် ဝါရင့်သင်္ဘောသားများအထိ...",
    "hero-desc":
      "   ပင်လယ်ပြင်လုပ်ငန်းခွင်အတွက် လိုအပ်သော <b>ရေကြောင်းဗဟုသုတများ</b>၊<b>အလုပ်ခွင်သုံးအသုံးအဆောင်များ</b>နှင့်<b>ရိက္ခာခြောက် အစားအသောက်များ</b>ကို တစ်နေရာတည်းတွင် စုံလင်စွာရရှိနိုင်ပါပြီ။",
    "service-1-title": " မြန်မာသင်္ဘောသားသုံး ပစ္စည်းနှင့် ရိက္ခာဆိုင်",
    "service-1-desc":
      "အရည်အသွေးမြင့် လုပ်ငန်းခွင်သုံးကိရိယာများ၊ ပင်လယ်ပြင်သုံးရိက္ခာခြောက်များနှင့် မရှိမဖြစ် အသုံးအဆောင်ပစ္စည်းများ",
    "service-1-link": "ပစ္စည်းများ ကြည့်ရန်",
    "service-2-title": "စာရွှက်စာတမ်းများ ",
    "service-2-desc": "SIRB နှင့် အခြားစာရွက်စာတမ်းများ လမ်းညွှန်ချက်။",
    "service-2-link": "စာရွက်စာတမ်း လမ်းညွှန်ချက်များ",
    "service-3-title": "ပင်လယ်ပြင်ဗဟုသုတ",
    "service-3-desc":
      "သင်္ဘောသားလူသစ်များအတွက် မဖြစ်မနေသိထားရမည့် အခြေခံဗဟုသုတများနှင့် သိမှတ်ဖွယ်ရာ အတွေ့အကြုံများ။",
    "service-3-link": "လေ့လာဖတ်ရှုရန်",
    "service-4-title": "သင်တန်းကျောင်းများ",
    "service-4-desc": " သင်တန်းကျောင်းများ၏ တည်နေရာနှင့် ဖုန်းနံပါတ်များ။",
    "service-4-link": "သင်တန်းကျောင်းများ",

    "service-5-title":
      "ရေကြောင်းဦးစီးဌာန (DMA) အသိအမှတ်ပြု သင်္ဘောသားအလုပ်သမား ရှာဖွေရေးကုမ္ပဏီများ",
    "service-5-desc":
      "DMA မှ တရားဝင်လိုင်စင်ထုတ်ပေးထားသော SRPS ကုမ္ပဏီများစာရင်း",
    "service-5-link": "ပိုမိုကြည့်ရန်",
    "about-title": "ကျွန်ုပ်တို့အကြောင်း",
    "about-desc":
      "Myanmar Seafarer Hub သည် မြန်မာသင်္ဘောသားများအတွက် ရည်ရွယ်ပြီး စာရွက်စာတမ်းဆိုင်ရာ လမ်းညွှန်ချက်များ၊ အင်တာဗျူးပြင်ဆင်မှုများ၊ ပင်လယ်ရေကြောင်းသင်တန်းကျောင်း သတင်းအချက်အလက်များနှင့် အရည်အသွေးမြင့် သင်္ဘောသားသုံး အသုံးအဆောင်များကို တစ်နေရာတည်းတွင် အလွယ်တကူ ရရှိနိုင်ရန် ဖန်တီးထားသော Platform ဖြစ်ပါသည်။",
    "contact-title": "ဆက်သွယ်ရန်",
    "contact-phone": "ဖုန်းနံပါတ်",
    "contact-email": "အီးမေးလ်",
    "contact-fb": "ဖေ့စ်ဘွတ်ခ်",
    // =================Shop Page Translations================//
    "shop-title": "မြန်မာသင်္ဘောသားသုံး ပစ္စည်းနှင့် ရိက္ခာဆိုင်",
    "shop-subtitle":
      "အရည်အသွေးမြင့် လုပ်ငန်းခွင်သုံးကိရိယာများ၊ ပင်လယ်ပြင်သုံး ရိက္ခာခြောက်များနှင့် မရှိမဖြစ် အသုံးအဆောင်ပစ္စည်းများ",
    "shop-search-placeholder": "ပစ္စည်းအမည်ဖြင့် ရှာပါ...",
    "shop-cat-all": "အားလုံး",
    "shop-cat-gear": "အသုံးအဆောင်",
    "shop-cat-food": "အစားအသောက်",
    "shop-cat-dry": "အခြောက်အခြမ်း",
    "prod-item1-name": "လုံခြုံရေးဖိနပ်",
    "prod-item2-name": "Multi-plug နိုင်ငံစုံသုံး",
    "prod-item3-name": "ဘွိုင်လာဆွတ်",
    "prod-item4-name": "အရည်အသွေးမြင့် ကော်ဖီ",
    "prod-item5-name": "ငါးခြောက်ကြော် (ရှူးရှဲ)",
    "shop-add-cart": "ဝယ်ယူမည်",
    "cart-title": "သင်ရွေးထားသည်များ",
    "cart-empty": "ခြင်းတောင်းထဲတွင် ပစ္စည်းမရှိသေးပါ။",
    "cart-total": "စုစုပေါင်း",
    "btn-buy": "ဝယ်ယူမည်",
    "cart-header": "သင်ရွေးထားသည်များ",
    "cart-empty": "ခြင်းတောင်းထဲတွင် ပစ္စည်းမရှိသေးပါ။",
    "cart-total": "စုစုပေါင်း",
    "cart-instruction": "အော်ဒါလုပ်ရန် အောက်ပါအက်ပ်များကို နှိပ်ပါ",
    "order-summary-head": "မင်္ဂလာပါ! အော်ဒါလုပ်ချင်ပါတယ် -",
    "order-total-label": "စုစုပေါင်းငွေ",
    // Document Page //
    "back-home": "ပင်မစာမျက်နှာသို့",
    "docs-page-title": "စာရွက်စာတမ်း လမ်းညွှန်ချက်များ",
    "docs-page-desc":
      "သင်္ဘောသားတစ်ဦး လိုအပ်သော အခြေခံစာရွက်စာတမ်းများ လျှောက်ထားရန် လမ်းညွှန်။",
    ///SIRB BOOK REQUIREMENTS(for New Seafarers) ////
    "doc-sirb-title":
      "SIRB (Seaman Book) လျှောက်ထားနည်း လမ်းညွှန်(လူသစ်များအတွက်)",
    "doc-sirb-desc":
      "သင်္ဘောသားတစ်ယောက်အဖြစ် ပထမဦးဆုံးခြေလှမ်းလှမ်းဖို့အတွက် SIRB (Seaman Book) ဟာ မရှိမဖြစ်လိုအပ်တဲ့ သက်သေခံလက်မှတ်တစ်ခု ဖြစ်ပါတယ်။ လူသစ် (New Seafarer / Cadet) တစ်ယောက်အနေနဲ့ ဒီစာအုပ်ကို စနစ်တကျနဲ့ အဆင်ပြေပြေ လျှောက်ထားနိုင်ဖို့ အခြေခံပြင်ဆင်ရမယ့် အချက်အလက်တွေကို စုစည်းဖော်ပြပေးလိုက်ပါတယ် ။",
    "sirb-req-1":
      "သင်္ဘောသားလူသစ်လျှောက်လွှာရယူရမည်။ (သင်္ဘောကျင်းဝင်းအတွင်း တွင်ဝယ်ယူနိုင်ပါသည်။)",
    "sirb-req-2":
      "ဆေးစစ်မှတ်တမ်း (Medical Certificate) DMA မှ အသိအမှတ်ပြုထားသော ဆေးခန်းများတွင်သာ စစ်ဆေးရန် လိုအပ်ပါသည်။",
    "sirb-req-3":
      "မျက်စိစစ်မှတ်တမ်း (Eye Test Certificate)အား DMA ရေးကြောင်းဌာနခွဲ နှင့် ရေကြောင်းအင်ဂျင်နီယာဌာနခွဲများတွင် စစ်ဆေးရန် လိုအပ်ပါသည်။ (GS နှင့် Ship's Cook ရာထူးလျှောက်ထားသူများ မလိုအပ်ပါ)",
    "sirb-req-4":
      "သင်တန်းဆင်းလက်မှတ်များ (Pre-Sea, Basic Safety Training, etc.)",
    "sirb-req-5":
      "Deck Rating နှင့် Engine Rating လျှောက်ထားသူများအတွက် Pre-Sea Training Certificate လိုအပ်ပါသည်။",
    "sirb-req-6":
      "Ship's Cook ရာထူးလျှောက်ထားသူများအတွက် Ship's Cook Training Certificate လိုအပ်ပါသည်။",
    "sirb-req-7":
      "Training/Electro Technical Rating၊ Training/Electro Technical Officer နှင့် Engine Cadet ရာထူးလျှောက်ထားသူများအတွက် Workshop Skill Certificate လိုအပ်ပါသည်။",
    "sirb-req-8": "နိုင်ငံသားမှတ်ပုံတင် မိတ္တူ",
    "sirb-req-9":
      "ပညာရေးအရည်အချင်းများ (ဆယ်တန်းအောင်လက်မှတ် သို့မဟုတ် ဘွဲ့လက်မှတ်) မူရင်းနှင့် မိတ္တူ",
    "sirb-req-10": "နိုင်ငံကူးလက်မှတ် (PS) မိတ္တူ",
    "sirb-req-11": "သန်းခေါင်စာရင်း မိတ္တူ",
    "sirb-req-12": "(၂)လက်မအရွယ်ဓာတ်ပုံ တစ်ပုံ(၁) ပုံ၊ အဖြူရောင်နောက်ခံ",
    "sirb-req-13": "စာအုပ်ထုတ်ပေးရန် လျှောက်လွှာပုံစံ လိုအပ်ပါသည်။",
    "pro-tip-label": "မှတ်ချက် :",
    "sirb-tip":
      "SIRB သက်တမ်းမှာ များသောအားဖြင့် (၁၀) နှစ်ဖြစ်ပြီး၊ သက်တမ်းမကုန်မီ (၆) လအလိုတွင် ကြိုတင်ပြင်ဆင်သင့်ပါသည်။",
    "sirb-warning-label": "အရေးကြီးသတိပြုရန်:",
    "dma-link-text": "DMA Official Website",
    "sirb-new-tip":
      "ဤအချက်အလက်များသည် လူသစ်များ လွယ်ကူစွာ နားလည်နိုင်စေရန် လမ်းညွှန်ပေးထားခြင်းသာ ဖြစ်ပါတယ် ။ ရေကြောင်းပို့ဆောင်ရေးညွှန်ကြားမှုဦးစီးဌာန (DMA) ရဲ့ စည်းမျဉ်းများနှင့် လျှောက်ထားမှုပုံစံ (SOP) များသည် အချိန်နဲ့အမျှ ပြောင်းလဲမှု ရှိနိုင်ပါသဖြင့် ၊ ပိုမိုတိကျသေချာသော နောက်ဆုံးရ အချက်အလက်များနှင့် Application Form များကို DMA ၏ တရားဝင်ဝဘ်ဆိုက် <a href='http://www.dma.gov.mm' target='_blank' >www.dma.gov.mm</a> တွင် တိုက်ရိုက်ဝင်ရောက် စစ်ဆေးဖတ်ရှုကြပါရန် တိုက်တွန်းအပ်ပါသည်။",
    ///SID REQUIREMENTS ///
    "doc-sid-title": "SID (Identity Document)",
    "doc-sid-desc":
      "ILO Convention C185 အရ နိုင်ငံတကာဆိပ်ကမ်းများတွင် ကုန်းပေါ်တက်ခွင့် (Shore Leave) အတွက် မရှိမဖြစ်လိုအပ်ပါသည်။",
    "sid-req-1": "သက်တမ်းရှိ SIRB စာအုပ်",
    "sid-req-2": "သက်တမ်းရှိ နိုင်ငံကူးလက်မှတ် (Passport)",
    "sid-req-3":
      "Online Application Form (လျှောက်လွှာပုံစံ) QR Code ပါရှိရမည်။",
    "sid-tip-label": "Tip:",
    "sid-tip": "မိတ္တူ & မူရင်း များလိုအပ်ပါသည်။",
    "doc-passport-title": "Passport (Type-PS)",
    "doc-passport-desc":
      "သင်္ဘောသားများအတွက် သာမန်နိုင်ငံကူးလက်မှတ် (PJ) အစား (Type-PS) ကို ကိုင်ဆောင်ရပါသည်။",
    "pass-req-1": "မှတ်ပုံတင် မူရင်းနှင့် မိတ္တူ",
    "pass-req-2": "အိမ်ထောင်စုစာရင်း မိတ္တူ",
    "pass-req-3": "ယခင် Passport အဟောင်း (ရှိပါက)",
    "pass-req-4":
      "အခွန်ထမ်းဆောင်ထားသော ပြေစာများ ပြရန်လိုအပ်ပါသည်။ (လူဟောင်းများအတွက်)",
    "pass-req-5": "QR Code ပါသော လျှောက်လွှာပုံစံ (Online Application Form)",
    "doc-all-in-one-title": "All In One",
    "doc-all-in-one-desc":
      "သင်္ဘောသားများအတွက် (Certificates & Training) များကို တစ်ခုတည်း အဖြစ် စုစည်းထားသော စာအုပ်တစ်ခုဖြစ်သည်။ လိုအပ်သော စာရွက်စာတမ်းများကို တစ်နေရာတည်းတွင် စုစည်းထားခြင်းဖြင့်  ပိုမိုလွယ်ကူစေသည်။ ပြုလုပ်ရန် လိုအပ်သော စာရွက်စာတမ်းများမှာ အောက်ပါအတိုင်းဖြစ်သည်။",
    "all-in-one-req-1":
      "သင်တန်းဆင်းလက်မှတ်များ (Pre-Sea, Basic Safety Training, etc.)",
    "all-in-one-req-2": "သက်တမ်းရှိ Passport (မူရင်းနှင့် မိတ္တူ)",
    "all-in-one-req-3":
      "ယခုနောက်ပိုင်းတွင် အွန်လိုင်းဖြင့် လျှောက်ထားနိုင်သော စာရွက်စာတမ်းများ (Online Applications, Certificate of Proficiency, Seafarer Identity Document)",
    "doc-med-title": "Medical Certificate",
    "doc-med-desc":
      "DMA မှ အသိအမှတ်ပြုထားသော ဆေးခန်းများတွင်သာ စစ်ဆေးရန် လိုအပ်ပါသည်။",
    "med-req-1": "အရောင်ခွဲခြားနိုင်စွမ်း (Colour Blindness Test)",
    "med-req-2": "အကြားအာရုံနှင့် အမြင်အာရုံ စစ်ဆေးချက်",
    "med-req-3": "ကူးစက်ရောဂါ ရှိ/မရှိ စစ်ဆေးချက်",
    "med-req-4": "ရင်ဘတ် X-Ray ရိုက်ခြင်း",
    "med-warning-label": "သတိပြုရန်:",
    "med-tip":
      "ဆေးစစ်သည့်အခါ ဆီးချို၊ သွေးတိုး စသည်တို့ကို ကြိုတင်ထိန်းသိမ်းသွားရန် အကြံပြုလိုပါသည်။",
    //=================Seafarers Insight Translations =================//
    "insight-page-title": "ပင်လယ်ပြင်ဗဟုသုတ",
    "insight-page-desc":
      "သင်္ဘောသားလူသစ်များအတွက် အခြေခံဗဟုသုတများနှင့် သိမှတ်ဖွယ်ရာ အတွေ့အကြုံများ။",
    "insight-sec1-title": "ရေကြောင်းအခြေခံ ဗဟုသုတများနှင့် လမ်းစည်းကမ်းများ",
    "insight-sec1-p1":
      "သင်္ဘောသားလူသစ်တစ်ဦးအနေဖြင့်ပင်လယ်ပြင်သို့မထွက်ခွာမီရေကြောင်းဆိုင်ရာအခြေခံစံနှုန်းများ နှင့် စည်းကမ်းများကို မဖြစ်မနေလေ့လာထားရပါမည်။ အထူးသဖြင့် နိုင်ငံတကာပင်လယ်ပြင်တိုက်မိမှုကာကွယ်ရေးစည်းမျက်ဥ်းများ (COLREGs) သည် အလွန်အရေးကြီးပါသည်။",
    "insight-sec1-p2":
      "ထို့အပြင် မိမိတာဝန်ကျမည့် Deck သို့မဟုတ် Engine Room အလိုက် အခြေခံအသုံးအနှုန်းများ (Maritime Terms) နှင့် အရေးပေါ်အခြေအနေများတွင် အသက်ဘေးကင်းရှင်းရေးအတွက် လိုက်နာရမည့် Safety ပရိုတိုကောများကိုလည်း ကြိုတင်သိရှိထားရန် လိုအပ်သည်။",
    "insight-sec1-sub1": "မဖြစ်မနေ သိထားရမည့် အခြေခံအချက်များ-",
    "insight-sec1-list1":
      "COLREGs (လမ်းစည်းကမ်းများ) နှင့် အခြေခံ ရေကြောင်းပြပညာ (Navigation)",
    "insight-sec1-list2":
      "Engine Room / Bridge Equipment (စက်ခန်းနှင့် ပဲ့စင်ရှိ အခြေခံပစ္စည်းများ)",
    "insight-sec1-list3":
      "Emergency Procedures (အရေးပေါ်အခြေအနေ တုံ့ပြန်မှုနှင့် အသက်ကယ်လှေလေ့ကျင့်ခန်းများ)",

    "insight-sec2-title":
      "နိုင်ငံတကာသင်္ဘောများနှင့် သင်္ဘောသုံးအင်္ဂလိပ်စာ (Maritime English)",
    "insight-sec2-p1":
      "နိုင်ငံတကာကုန်တင်သင်္ဘောကြီးများပေါ်တွင် မတူညီသော နိုင်ငံစုံမှ သင်္ဘောသားများနှင့် အတူတကွ အလုပ်လုပ်ရမည်ဖြစ်သောကြောင့် အင်္ဂလိပ်စာ ဆက်သွယ်ပြောဆိုနိုင်မှုသည် လုပ်ငန်းခွင်အဆင်ပြေစေရန်အတွက် သော့ချက်ဖြစ်ပါသည်။",
    "insight-sec2-p2":
      "သာမန်အင်္ဂလိပ်စာအပြင် ပင်လယ်ပြင်လုပ်ငန်းခွင်သုံး အင်္ဂလိပ်စာ (Maritime English) နှင့် Standard Marine Communication Phrases (SMCP) များကို တတ်မြောက်ထားခြင်းဖြင့် အမိန့်ပေးစေခိုင်းမှုများကို တိကျစွာနားလည်ပြီး ဘေးအန္တရာယ်ကင်းရှင်းစွာ လုပ်ကိုင်နိုင်မည်ဖြစ်သည်။",
    "insight-sec2-list1":
      "Marlins Test သို့မဟုတ် CES Test ကဲ့သို့ အင်္ဂလိပ်စာစစ်ဆေးမှုများအတွက် ပြင်ဆင်ခြင်း",
    "insight-sec2-list2":
      "SMCP (သင်္ဘောသုံး ပုံသေဆက်သွယ်ရေးစကားစုများ) ကို လေ့လာမှတ်သားခြင်း",
    "insight-sec2-list3":
      "ရေဒီယိုဆက်သွယ်ရေး (VHF Radio Communication) အခြေခံများကို နားလည်ခြင်း",
    "insight-tip-label": "အတွေ့အကြုံ ဆရာတင်စကား:",
    "insight-tip-text":
      "အင်္ဂလိပ်စာသည် စာအုပ်ထဲတွင်သာမက အချင်းချင်း နေ့စဥ်ပြောဆိုဆက်သွယ်ရာတွင် ယုံကြည်မှုရှိရှိ ပြောဆိုနိုင်ရန် အမြဲတစေ လေ့ကျင့်ထားပါ။",

    "insight-sec3-title":
      "သင်္ဘောပေါ်ရှိ လုပ်ငန်းခွင်ယဉ်ကျေးမှုနှင့် စိတ်နေသဘောထား (Attitude)",
    "insight-sec3-p1":
      "ပင်လယ်ပြင်တွင် လပေါင်းများစွာ အတူတကွ ဖြတ်သန်းရမည်ဖြစ်၍ ပညာအရည်အချင်းအပြင် စိတ်နေသဘောထားကောင်းမွန်မှု (Good Attitude) နှင့် အသင်းအဖွဲ့ဖြင့် ပူးပေါင်းလုပ်ဆောင်နိုင်စွမ်း (Teamwork) မှာ အလွန်အရေးကြီးသော အချက်ဖြစ်သည်။",
    "insight-sec3-p2":
      "အထူးသဖြင့် အထက်လူကြီးများ၏ အမိန့်ကို နာခံတတ်ခြင်း (Discipline)၊ ကွဲပြားခြားနားသော ယဉ်ကျေးမှုများကို လေးစားတတ်ခြင်း (Cultural Awareness) နှင့် စိတ်ဖိစီးမှုများကို ထိန်းချုပ်နိုင်ခြင်းတို့သည် ရေရှည်သင်္ဘောသားဘဝ အောင်မြင်မှုအတွက် မရှိမဖြစ်လိုအပ်ပါသည်။",
    "insight-sec3-list1":
      "Teamwork (အသင်းအဖွဲ့နှင့် တက်ကြွစွာ ပူးပေါင်းလုပ်ကိုင်နိုင်စွမ်း)",
    "insight-sec3-list2":
      "Discipline & Safety Mindset (စည်းကမ်းလိုက်နာမှုနှင့် ဘေးအန္တရာယ်အသိရှိမှု)",
    "insight-sec3-list3":
      "Cultural Adaptability (နိုင်ငံစုံ လူမျိုးစုံနှင့် လိုက်လျောညီထွေ နေထိုင်နိုင်မှု)",
    //=================Training Page Translations==============///
    "training-page-title": "သင်တန်းကျောင်းများ",
    "training-page-desc": "သင်တန်းကျောင်းများ၏ တည်နေရာနှင့် ဖုန်းနံပါတ်များ။",
    //===================== Applicable company(Jobs Page) =================//
    "comp-hero-title":
      "ရေကြောင်းဦးစီးဌာန (DMA) အသိအမှတ်ပြု သင်္ဘောသားအလုပ်သမား ရှာဖွေရေးကုမ္ပဏီများ",
    "comp-hero-desc":
      "DMA မှ တရားဝင်လိုင်စင်ထုတ်ပေးထားသော SRPS ကုမ္ပဏီများစာရင်း",

    // ============Terms & Conditions Specific Translations ===============///
    "terms-page-title": "စည်းကမ်းသတ်မှတ်ချက်များ - Myanmar Seafarer Hub",
    "terms-quick-nav": "အမြန်သွားရန်",
    "terms-nav-1": "၁။ အထွေထွေသဘောတူညီချက်",
    "terms-nav-2": "၂။ အသုံးပြုသူ သတ်မှတ်ချက်",
    "terms-nav-3": "၃။ အလုပ်အကိုင် တာဝန်ယူမှုအာမခံချက်",
    "terms-nav-4": "၄။ သင်တန်းနှင့် စာရွက်စာတမ်းများ",
    "terms-nav-5": "၅။ စျေးဆိုင်နှင့် ပတ်သက်သော စည်းကမ်း",
    "terms-nav-6": "၆။ ငွေပေးချေမှုနှင့် ဈေးနှုန်းများ",
    "terms-nav-7": "၇။ ကုန်စည်ပို့ဆောင်ရေး မူဝါဒ",
    "terms-nav-8": "၈။ ပစ္စည်းလဲလှယ်ခြင်းနှင့် ငွေပြန်အမ်းခြင်း",
    "terms-nav-9": "၉။ မူပိုင်ခွင့်နှင့် အသိဉာဏ်ပစ္စည်း",
    "terms-nav-10": "၁၀။ တားမြစ်ထားသော အပြုအမူများ",
    "terms-nav-11": "၁၁။ ကိုယ်ရေးအချက်အလက် ထိန်းသိမ်းမှု",
    "terms-header-title": "စည်းကမ်းသတ်မှတ်ချက်များ",
    "terms-header-subtitle": "Terms and Conditions & Store Policies",
    "terms-last-updated": "နောက်ဆုံးပြင်ဆင်သည့်ရက်စွဲ - မေလ၊ ၂၀၂၆ ခုနှစ်",

    "terms-c1-title": "၁။ အထွေထွေသဘောတူညီချက်များ",
    "terms-c1-p1":
      "ဤစည်းကမ်းသတ်မှတ်ချက်များသည် <strong>Myanmar Seafarer Hub</strong> ဝဘ်ဆိုက် (အလုပ်အကိုင်၊ သင်တန်း၊ စာရွက်စာတမ်း၊ အင်တာဗျူး လမ်းညွှန်များနှင့် သင်္ဘောသားအသုံးအဆောင် စျေးဆိုင်) တို့ကို အသုံးပြုသူ (ဝယ်ယူသူ၊ ရှာဖွေသူ) နှင့် ဝဘ်ဆိုက်တည်ထောင်သူအကြား ချုပ်ဆိုထားသော တရားဝင် သဘောတူစာချုပ် ဖြစ်ပါသည်။",
    "terms-c1-p2":
      "ဝဘ်ဆိုက်သို့ ဝင်ရောက်အသုံးပြုခြင်း၊ စျေးဆိုင်မှ ပစ္စည်းများအား ရွေးချယ်မှာယူခြင်း သို့မဟုတ် အချက်အလက်များအား ရယူခြင်းဖြင့် သင်သည် ဤနေရာတွင် ဖော်ပြထားသော စည်းမျဉ်းစည်းကမ်းများအားလုံးကို အကြွင်းမဲ့ လက်ခံသဘောတူညီပြီး ဖြစ်သည်ဟု မှတ်ယူပါမည်။",

    "terms-c2-title": "၂။ အသုံးပြုသူ သတ်မှတ်ချက် (User Eligibility)",
    "terms-c2-p1":
      "ဤဝဘ်ဆိုက်သည် အဓိကအားဖြင့် မြန်မာသင်္ဘောသားများနှင့် သင်္ဘောသားလုပ်ငန်းသို့ စိတ်ဝင်စားသူများအတွက် ဖန်တီးထားခြင်း ဖြစ်ပါသည်။",
    "terms-c2-p2":
      "စနစ်ကို အသုံးပြုရာတွင် မမှန်ကန်သော အချက်အလက်များပေးခြင်း၊ အခြားသူတစ်ဦး၏ အမည်၊ ကိုယ်ရေးအချက်အလက်များအား အလွဲသုံးစားပြုလုပ်၍ ဆက်သွယ်ခြင်း သို့မဟုတ် စည်းကမ်းချက်များကို ဖောက်ဖျက်ခြင်းများ ပြုလုပ်ပါက ဝဘ်ဆိုက်အား အသုံးပြုခွင့်ကို မည်သည့်အသိပေးချက်မျှ မရှိဘဲ ချက်ချင်း ကန့်သတ်ပိတ်ပင်သွားမည် ဖြစ်ပါသည်။",

    "terms-c3-title":
      "၃။ အလုပ်အကိုင်ဆိုင်ရာ တာဝန်ယူမှုအာမခံချက် ကန့်သတ်ချက် (Job Portal Disclaimer)",
    "terms-c3-p1":
      "ကျွန်ုပ်တို့၏ <strong>Jobs</strong> ကဏ္ဍတွင် ဖော်ပြထားသော တရားဝင်ခွင့်ပြုချက်ရ သင်္ဘောသားအလုပ်အကိုင်ရှာဖွေရေး အေဂျင်စီများ (SRPS) နှင့် သင်္ဘောလိုင်းကုမ္ပဏီများ၏ လိပ်စာများ၊ အလုပ်ခေါ်စာများသည် စစ်ဆေးတွေ့ရှိရသလောက် အမှန်ကန်ဆုံးဖြစ်ရန် အစွမ်းကုန် ကြိုးစားထားပါသည်။ သို့သော်လည်း -",
    "terms-c3-li1":
      "SRPS ကုမ္ပဏီများနှင့် တိုက်ရိုက်ဆက်သွယ်ဆောင်ရွက်ရာတွင် ဖြစ်ပေါ်လာနိုင်သည့် လူတွေ့စစ်ဆေးခြင်း (Interview)၊ စာရွက်စာတမ်းလုပ်ငန်းစဉ်များနှင့် ကိုယ်ရေးကိုယ်တာ ငွေကြေးကိစ္စရပ်များအတွက် မိမိတို့ Hub အနေဖြင့် တစ်စုံတစ်ရာ ပါဝင်ပတ်သက်ခြင်း မရှိသလို၊ ကြားခံခေါင်းပုံဖြတ်မှုများအတွက် တာဝန်ယူမည် မဟုတ်ပါ။",
    "terms-c3-li2":
      "အလုပ်လျှောက်ထားသူ သင်္ဘောသားညီအစ်ကိုများအနေဖြင့် မည်သည့်အေဂျင်စီနှင့်မဆို အလုပ်ကိစ္စ ဆောင်ရွက်ရာတွင် DMA ၏ တရားဝင် စည်းမျဉ်းစည်းကမ်းများနှင့်အညီ သေချာစွာ စုံစမ်းစစ်ဆေးပြီးမှသာ ဆောင်ရွက်ရန် အထူးသတိပေး တိုက်တွန်းအပ်ပါသည်။",

    "terms-c4-title":
      "၄။ သင်တန်းကျောင်းများနှင့် စာရွက်စာတမ်း လမ်းညွှန်ချက်များ",
    "terms-c4-p1":
      "ဝဘ်ဆိုက်တွင် ဖော်ပြထားသော မရိမ်းသင်တန်းကျောင်းများ၊ CDC/SIRB လျှောက်ထားခြင်းဆိုင်ရာ စာရွက်စာတမ်း လမ်းညွှန်ချက်များသည် ဌာနဆိုင်ရာ၏ နောက်ဆုံးရ စည်းကမ်းသတ်မှတ်ချက်များအပေါ် အခြေခံထားသော်လည်း အပြောင်းအလဲများ အချိန်မရွေး ရှိနိုင်ပါသည်။ အသုံးပြုသူများသည် ၎င်းအချက်အလက်များအပြင် သက်ဆိုင်ရာဌာန၊ ကျောင်းများသို့ တိုက်ရိုက် ထပ်မံအတည်ပြု စစ်ဆေးရန် လိုအပ်ပါသည်။",

    "terms-c5-title":
      "၅။ စျေးဆိုင်နှင့် ပတ်သက်သော စည်းကမ်းချက်များ (E-commerce Policy)",
    "terms-c5-p1":
      "ကျွန်ုပ်တို့၏ စျေးဆိုင် (Shop) သည် အရည်အသွေးမြင့် သင်္ဘောသားသုံး ပစ္စည်းများနှင့် သင်္ဘောသားအကြိုက် အစားအသောက်များကို ရောင်းချပေးပါသည်။ ဝဘ်ဆိုက်တွင် ပစ္စည်းများ ရွေးချယ်မှာယူခြင်းနှင့် ပတ်သက်၍ အောက်ပါအချက်များကို လိုက်နာရပါမည် -",
    "terms-c5-box":
      "<i class='fas fa-exclamation-triangle'></i> <strong>အော်ဒါအတည်ပြုခြင်းဆိုင်ရာ အရေးကြီးအချက်</strong><br />ဝဘ်ဆိုက်ပေါ်တွင် Cart (ခြင်းတောင်း) ထဲသို့ ထည့်ပြီး မှာယူခြင်းသည် အော်ဒါအပြီးသတ် အတည်ဖြစ်ခြင်း မဟုတ်သေးပါ။ ဝယ်ယူသူသည် Cart စာမျက်နှာရှိ \"Copy Order to Clipboard\" ကိုနှိပ်၍ ရရှိလာသော စာသားကို မိမိတို့ ဆိုင်၏တရားဝင် Messenger သို့ ပေးပို့ကာ စကားပြော အတည်ပြုပြီးမှသာ စျေးနှုန်း၊ စတော့နှင့် ပစ္စည်းပေးပို့မည့်ရက် အတည်ဖြစ်ပါမည်။",

    "terms-c6-title": "၆။ ငွေပေးချေမှုနှင့် ဈေးနှုန်းများ",
    "terms-c6-p1":
      "ကုန်ပစ္စည်းများ၏ စျေးနှုန်းများကို မြန်မာကျပ်ငွေ (MMK) ဖြင့် ဖော်ပြထားပြီး ပြင်ပပေါက်စျေးအလိုက် ပြောင်းလဲမှုများ ရှိနိုင်ပါသည်။ ကုန်ပစ္စည်းတန်ဖိုးအား ပေးချေရာတွင် အောက်ပါနည်းလမ်းများကို လက်ခံပါသည် -",
    "terms-c6-li1":
      "မိုဘိုင်းလ်ဘဏ်စနစ်များ ဖြစ်ကြသော KPay သို့မဟုတ် Wave Money ဖြင့် လွှဲပြောင်းပေးချေခြင်း။",
    "terms-c6-li2":
      "ရန်ကုန်မြို့တွင်းနှင့် သတ်မှတ်ထားသော မြို့နယ်များအတွက် လူကိုယ်တိုင် လက်ခံရရှိမှ ငွေချေစနစ် (Cash on Delivery)။",
    "terms-c6-li3":
      "ငွေလွှဲခနှင့် ဘဏ်ဝန်ဆောင်ခများ ရှိပါက ဝယ်ယူသူဘက်မှ ကျခံရပါမည်။",

    "terms-c7-title": "၇။ ကုန်စည်ပို့ဆောင်ရေး မူဝါဒ (Shipping & Delivery)",
    "terms-c7-p1":
      "ကုန်ပစ္စည်းများအား ပို့ဆောင်ရာတွင် နာမည်ကြီး အိမ်အရောက် Delivery ဝန်ဆောင်မှုလုပ်ငန်းများနှင့် လမ်းကြောင်းအလိုက် ကားဂိတ်များမှတစ်ဆင့် ပို့ဆောင်ပေးပါသည်။",
    "terms-c7-li1":
      "<strong>ပို့ဆောင်ခ (Delivery Fee):</strong> ပစ္စည်း၏ အရွယ်အစား၊ အလေးချိန်နှင့် ဝယ်ယူသူ၏ လိပ်စာတည်နေရာပေါ် မူတည်၍ တွက်ချက်မည်ဖြစ်ပြီး ပို့ဆောင်ခကို ဝယ်ယူသူမှ ကျခံရပါမည်။",
    "terms-c7-li2":
      "<strong>ကြာမြင့်ချိန်:</strong> အော်ဒါ အတည်ပြုပြီးနောက် ရန်ကုန်မြို့တွင်းဖြစ်ပါက (၁) ရက်မှ (၃) ရက်အတွင်း၊ နယ်မြို့များဖြစ်ပါက (၃) ရက်မှ (၅) ရက်အတွင်း ပို့ဆောင်ပေးပါမည်။ သဘာဝဘေးအန္တရာယ် သို့မဟုတ် ကားဂိတ်ကြန့်ကြာမှုများကြောင့် ဖြစ်ပေါ်လာသည့် နောက်ကျမှုများအတွက် မိမိတို့ဆိုင်မှ တာဝန်ယူမည် မဟုတ်ပါသည်။",

    "terms-c8-title": "၈။ ပစ္စည်းလဲလှယ်ခြင်းနှင့် ငွေပြန်အမ်းခြင်း မူဝါဒ",
    "terms-c8-p1":
      "ဝယ်ယူသူများ စိတ်တိုင်းကျစေရန်အတွက် စည်းကမ်းချက်နှင့်အညီ လဲလှယ်ခွင့် ပေးထားပါသည် -",
    "terms-c8-li1":
      "<strong>အဝတ်အထည်နှင့် အသုံးအဆောင်များ:</strong> သင်္ဘောသားဝတ်စုံ (Boiler Suit)၊ ဖိနပ်များ ဆိုဒ်မတော်ခြင်း သို့မဟုတ် ပစ္စည်းချို့ယွင်းချက်ရှိခြင်းများအတွက် ပစ္စည်းလက်ခံရရှိပြီး (၃) ရက်အတွင်း မူရင်းအထုပ်၊ တံဆိပ်မပျက်စီးဘဲ ရှိနေမှသာ ဆိုဒ်အသစ်ဖြင့် အခမဲ့ လဲလှယ်ခွင့်ပြုပါမည်။ (ပြန်ပို့ခနှင့် ပြန်လည်ပေးပို့ခကို ဝယ်ယူသူမှ ကျခံရပါမည်)။",
    "terms-c8-li2":
      "<strong>အစားအသောက် (အခြောက်အခြမ်း):</strong> အစားအသောက်များ၏ သန့်ရှင်းသပ်ရပ်မှုနှင့် ကျန်းမာရေးဆိုင်ရာ စံနှုန်းများအရ အခြောက်အခြမ်း မုန့်များနှင့် အစားအသောက်များအား ဝယ်ယူပြီးနောက် ပြန်လည်အပ်နှံခြင်း သို့မဟုတ် ငွေပြန်အမ်းပေးခြင်း လုံးဝပြုလုပ်ပေးမည် မဟုတ်ပါ။",

    "terms-c9-title": "၉။ မူပိုင်ခွင့်နှင့် အသိဉာဏ်ပစ္စည်း",
    "terms-c9-p1":
      "ဤဝဘ်ဆိုက်ရှိ Logo၊ စာသားဒီဇိုင်းများ၊ အင်တာဗျူးမေးခွန်းစုစည်းမှုများ၊ ဆောင်းပါးလမ်းညွှန်များနှင့် ကုတ်ဒ်များအားလုံးသည် <strong>Myanmar Seafarer Hub</strong> ၏ မူပိုင်ပိုင်ဆိုင်မှုများ ဖြစ်ပါသည်။ ၎င်းတို့အား ခွင့်ပြုချက်မရှိဘဲ စီးပွားဖြစ် ကူးယူဖော်ပြခြင်း၊ ပြန်လည်ရောင်းချခြင်း သို့မဟုတ် အခြားသော ဝဘ်ဆိုက်များတွင် အသုံးပြုခြင်းကို လုံးဝ ခွင့်မပြုပါ။",

    "terms-c10-title": "၁၀။ တားမြစ်ထားသော အပြုအမူများ",
    "terms-c10-p1":
      "ဝဘ်ဆိုက်ကို အသုံးပြုရာတွင် အောက်ပါအချက်များကို တားမြစ်ထားပါသည် -",
    "terms-c10-li1":
      "ဝဘ်ဆိုက်၏ စနစ်လုံခြုံရေးကို ထိခိုက်စေမည့် DDoS Attack ပြုလုပ်ခြင်း သို့မဟုတ် စက်ဝိုင်းကုဒ်များ (Malicious Scripts) ထည့်သွင်းခြင်း။",
    "terms-c10-li2":
      "မမှန်ကန်သော အော်ဒါများကို တမင်တကာ အကြိမ်ကြိမ် ပေးပို့၍ ဆိုင်၏ လုပ်ငန်းလည်ပတ်မှုကို နှောင့်ယှက်ခြင်း။",
    "terms-c10-li3":
      "အော်ဒါမှာယူပြီးနောက် ငွေပေးချေမှု မလုပ်ဘဲ တမင်ရှောင်လွှဲခြင်း၊ လိပ်စာအတုပေးခြင်း။",

    "terms-c11-title":
      "၁၁။ ကိုယ်ရေးအချက်အလက် ထိန်းသိမ်းမှု မူဝါဒ (Privacy Policy)",
    "terms-c11-p1":
      "ကျွန်ုပ်တို့သည် အသုံးပြုသူများနှင့် ဝယ်ယူသူများ၏ လုံခြုံရေးကို အလေးထားပါသည်။ သင်၏ အမည်၊ ဖုန်းနံပါတ်၊ အီးမေးလ်၊ ပို့ဆောင်ရမည့်လိပ်စာများနှင့် စာရွက်စာတမ်းဆိုင်ရာ အချက်အလက်များကို -",
    "terms-c11-li1":
      "ပစ္စည်းအော်ဒါများ ပို့ဆောင်ရန်နှင့် ဆက်သွယ်ရန်အတွက်သာ တရားဝင် အသုံးပြုပါမည်။",
    "terms-c11-li2":
      "သင်၏ ခွင့်ပြုချက်မရှိဘဲ တတိယလူ သို့မဟုတ် အခြားစီးပွားရေး ကြော်ငြာလုပ်ငန်းများထံသို့ မည်သည့်အခါမျှ လွှဲပြောင်းရောင်းချခြင်း သို့မဟုတ် မျှဝေခြင်း ပြုလုပ်မည် မဟုတ်ကြောင်း ရာနှုန်းပြည့် အာမခံပါသည်။",
  },
};

//ဘာသာစကားပြောင်းလဲခြင်း လုပ်ဆောင်ချက်//
function setLanguage(lang) {
  // ရွေးချယ်လိုက်သော ဘာသာစကားကို LocalStorage တွင် သိမ်းဆည်းပါ
  localStorage.setItem("preferred-lang", lang);

  // အစိတ်အပိုင်းများအားလုံးကို လိုက်လံဘာသာပြန်ပါ
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      const translatedText = translations[lang][key];

      // ၁။ Input သို့မဟုတ် Textarea Placeholder များအတွက် ဘာသာပြန်စနစ်
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translatedText;
        return;
      }

      // 💡 ဖြည့်စွက်ချက် - စာသားထဲမှာ HTML tags (a, strong, i, br) ပါဝင်ခြင်း ရှိ/မရှိ စစ်ဆေးရန် Helper
      const hasHTML =
        /<[a-z][\s\S]*>/i.test(translatedText) ||
        translatedText.includes("<br");

      // ၂။ အကယ်၍ nested span (စာသားသီးသန့်) ပါရှိလျှင် ၎င်းကိုသာ ဘာသာပြန်ပါ (Icon မပျောက်ပျက်စေရန်)
      const span = el.querySelector("span");
      if (span) {
        if (hasHTML) {
          span.innerHTML = translatedText;
        } else {
          span.textContent = translatedText;
        }
        return;
      }

      // ၃။ အကယ်၍ inner icon <i> ပါရှိပြီး သာမန် Tag ဖြစ်ပါက Icon မပျောက်အောင် ထိန်းသိမ်းပြီး HTML tag များပါဝင်မှု စစ်ဆေးပါ
      const icon = el.querySelector("i");
      if (icon) {
        el.innerHTML = `<i class="${icon.className}"></i> ${translatedText}`;
        return;
      }

      // ၄။ အထက်ပါအချက်များနှင့် မကိုက်ညီပါက သာမန် fallback ဘာသာပြန်စနစ်
      if (hasHTML) {
        el.innerHTML = translatedText;
      } else {
        el.textContent = translatedText;
      }
    }
  });

  // Language Switcher ခလုတ်များ၏ Active status ကို ညှိပါ
  updateActiveButtons(lang);
}

// ခလုတ်များ၏ Active status ကို တစ်ပြိုင်တည်း ညှိပေးသည့် လုပ်ဆောင်ချက်
function updateActiveButtons(lang) {
  document
    .querySelectorAll(".nav-lang-bar button, .lang-options button")
    .forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
}

// Event Listeners များ သတ်မှတ်ခြင်း (အဟောင်းနှင့် အသစ်ပေါင်းစပ်မှု)
document.addEventListener("DOMContentLoaded", () => {
  // Default ဘာသာစကားကို LocalStorage မှယူပါ (မရှိလျှင် 'my' ကိုသုံးပါ)
  const savedLang = localStorage.getItem("preferred-lang") || "my";
  setLanguage(savedLang);

  // 💡 Integrated Language Buttons Event Listener (အပေါ် Nav ကော တခြားနေရာကပါ နှိပ်ရင် အလုပ်လုပ်ရန်)
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".nav-lang-bar button, .lang-options button");
    if (btn) {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
      e.stopPropagation();
    }
  });
});
