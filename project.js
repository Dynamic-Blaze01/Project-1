// ────────────────────────────────────
//  DYNAMICX STORE — project.js
// ────────────────────────────────────

// ─── PRODUCT DATA ───
const products = [
  { id:"pacific-jogger",            name:"Pacific Jogger",              desc:"Casual outdoor jogger",                    price:"₦13,500.00", series:"CORE COLLECTION", img:"image/pant9.png",   colors:["#001f5b","#8b0000","#0a0a0a","#37676e"] },
  { id:"tactile-shacket",           name:"Tactile Shacket",             desc:"Woven texture shirt for men. Premium series",                             price:"₦25,850.00", series:"PREMIUM SERIES",  img:"image/top10.png",   colors:["#f5f1e8","#0a0a0a"] },
  { id:"criterion-t-shirt",         name:"Criterion T-Shirt",           desc:"Outdoor texture shirt premium line",                                      price:"₦14,000.00", series:"PREMIUM LINE",    img:"image/top20.png",   colors:["#f5f0e8|#7a5c18","#0a0a0a|#e8dfc8"] },
  { id:"lightning-static-pullover", name:"Lightning Static Pullover",   desc:"Outdoor men knit winter edition",           price:"₦12,000.00", series:"WINTER EDITION",  img:"image/top7.png",    colors:["#87ceeb","#808080"] },
  { id:"desert-cargo-pant",         name:"Desert Cargo Pant",           desc:"Multi pocket canvas cargo pant for men. Tactical series",                 price:"₦15,000.00", series:"TACTICAL SERIES", img:"image/pant2.png",   colors:["#C2A46B","#6B5A3A"] },
  { id:"arch-fleece-short",         name:"Arch Fleece Short",           desc:"Casual outdoor short for fashion. Signature series",                      price:"₦10,000.00", series:"SIGNATURE",       img:"image/short2.png",  colors:["#0a0a0a","#4B5320","#9a9080","#f5f0e8"] },
  { id:"recon-cargo-denim",         name:"Recon Cargo Denim",           desc:"Multi pocket cargo jeans. Street series",                                 price:"₦15,000.00", series:"STREET SERIES",   img:"image/pant6.jpeg",  colors:["#0a0a0a","#7C6B4A"] },
  { id:"bloc-flame-ignite-short",   name:"Bloc Flame Ignite Short",     desc:"Outdoor short for fashion. Premium series",                               price:"₦15,000.00", series:"PREMIUM SERIES",  img:"image/short10.png", colors:["#0a0a0a|#3b5998", "#0a0a0a|#8b0000", "#0a0a0a|#ffd700"] },
  { id:"velocity-short",            name:"Velocity Short",              desc:"Curved strip beach short. Active series",                                 price:"₦8,500.00",  series:"ACTIVE SERIES",   img:"image/short12.png", colors:["#0a0a0a","#e8dfc8","#3B5998"] },
  { id:"stitch-denim-shirt",        name:"Stitch Denim Shirt",          desc:"Patchwork short sleeve denim shirt. Premium edition",                     price:"₦22,000.00", series:"PREMIUM EDITION", img:"image/top2.png",    colors:["#3B5998","#0a0a0a","#f5f0e8"] },
  { id:"dynasty-suit",              name:"Dynasty Suit",                desc:"luxury dual suit outfit for men. Premium edition",                        price:"₦25,000.00", series:"PREMIUM EDITION", img:"image/suit12.png",  colors:["#e8dfc8","#3d3830","#3b5998"] },
  { id:"cipher-splash-pullover",    name:"Cipher Splash Pullover",      desc:"Outdoor fit for men winter edition",                                      price:"₦10,500.00", series:"WINTER EDITION",  img:"image/top1.png",    colors:["#f5f0e8","#0a0a0a"] },
  { id:"stroke-fleece",             name:"Stroke Fleece",               desc:"Outdoor pullover. Winter edition",                                        price:"₦15,000.00", series:"WINTER EDITION",  img:"image/top6.png",    colors:["#f5f0e8","#3d3830","#3b5998"] },
  { id:"patro-dual",                name:"Patro Dual",                  desc:"Outdoor strip block quarter zip + jogger. Core collection",               price:"₦15,000.00", series:"CORE COLLECTION", img:"image/suit10.png",  colors:["#6b7c4a|#e8dfc8","#8b4513|#e8dfc8"] },
  { id:"outlaw-denim-short",        name:"Outlaw Denim Short",          desc:"Graphic art print denim short for men. Statement series",                 price:"₦20,000.00", series:"STATEMENT",       img:"image/short6.png",  colors:["#3B5998"] },
  { id:"titan-cargo-pant",          name:"Titan Cargo Pant",            desc:"Multi pocket cargo pant for outdoor. Tactical series",                    price:"₦15,000.00", series:"TACTICAL SERIES", img:"image/pant1.png",   colors:["#808080","#0a0a0a","#6B5A3A","#c19a6b"] },
  { id:"prism-track-pant",          name:"Prism Track Pant",            desc:"Outdoor pants for men. Signature line",                                   price:"₦18,500.00", series:"SIGNATURE LINE",  img:"image/pant19.png",  colors:["#808080|#0a0a0a","#fffdd0|#0a0a0a"] },
  { id:"circuit-suit",              name:"Circuit Suit",                desc:"Outdoor fashion tracksuit. Premium edition",                              price:"₦25,000.00", series:"PREMIUM EDITION", img:"image/suit2.png",   colors:["#8b4513"] },
  { id:"denim-splice-set",          name:"Denim Splice Set",            desc:"Outdoor splice due for. Core collection",                                 price:"₦17,500.00", series:"CORE COLLECTION", img:"image/top4.png",    colors:["#8B0000|#0a0a0a","#ffd700|#0a0a0a","#3B5998|#0a0a0a"] },
  { id:"essential-hoodie",          name:"Essential Hoodie",            desc:"Diagonal split hoodie for outdoor. Signature line",                       price:"₦25,000.00", series:"SIGNATURE LINE",  img:"image/suit15.jpeg", colors:["#001f3f|#f5f0e8"] },
  { id:"strike-cargo-short",        name:"Strike Cargo Short",          desc:"Casual outdoor cargo short for men",                                      price:"₦12,500.00", series:"TACTICAL SERIES", img:"image/short3.png",  colors:["#0a0a0a","#8b4513"] },
  { id:"command-short",             name:"Command Short",               desc:"Casual short good for sports and outdoor. Active series",                 price:"₦15,000.00", series:"ACTIVE SERIES",   img:"image/short9.png",  colors:["#e8dfc8","#6a5c38","#0a0a0a"] },
  { id:"sovereign-hoodie",          name:"Sovereign Hoodie",            desc:"Signature collection hoodie + jogger men tracksuit",                      price:"₦25,000.00", series:"SIGNATURE",       img:"image/suit5.png",   colors:["#c4a484","#fdf6ec","#0a0a0a","#800080"] },
  { id:"volt-hoodie",               name:"Volt Hoodie",                 desc:"Neon zip quarter hoodie with sleeve pocket. Active series",               price:"₦25,000.00", series:"ACTIVE SERIES",   img:"image/top16.png",   colors:["#808080","#f5f1e8","#8b7335"] },
  { id:"bloc-cedar-01",             name:"Bloc Cedar 01 Series",        desc:"Waffle-knit set for men",                                                 price:"₦17,500.00", series:"BLOC SERIES",     img:"image/top21.png",   colors:["#8b4513","#e8dfc8"] },
  { id:"sage-waffle-pant",          name:"Sage Waffle Pant",            desc:"Waffle texture wide leg pant. Core collection",                           price:"₦13,500.00", series:"CORE COLLECTION", img:"image/pant12.png",  colors:["#6B7C4A","#0a0a0a","#37636e","#f5f0e8"] },
  { id:"strap-cargo-jeans",         name:"Strap Cargo Jeans",           desc:"Multi pocket strap buckle cargo jeans for men",                           price:"₦17,500.00", series:"STREET SERIES",   img:"image/pant3.png",   colors:["#c19a6b","#0a0a0a","#e8dfc8"] },
  { id:"appex-track",               name:"Appex Track",                 desc:"Zip jacket + wide trouser outdoor tracksuit",                             price:"₦20,500.00", series:"CORE COLLECTION", img:"image/suit6.png",   colors:["#808080","#7a5c18","#f5f0e8"] },
  { id:"pipe-set-grove-suit",       name:"Pipe Set-Grove Suit",         desc:"Quality outdoor tracksuit for men",                                       price:"₦25,000.00", series:"CORE COLLECTION", img:"image/suit8.png",   colors:["#0b3d0b","#808080","#cc5500","#ffff00","#0000ff"] },
  { id:"eclipse-crewneck",          name:"Eclipse Crewneck",            desc:"Outdoor fit for men. Signature line",                                     price:"₦15,000.00", series:"SIGNATURE LINE",  img:"image/top11.png",   colors:["#f5f1e8|#0a0a0a","#ff0000|#0000ff"] },
  { id:"ultra-script-pant",         name:"Ultra Script Pant",           desc:"Vertical script print pant for men. Premium series",                      price:"₦25,000.00", series:"PREMIUM SERIES",  img:"image/pant13.png",  colors:["#f5f0e8","#0a0a0a"] },
  { id:"prism-grid-sweater",        name:"Prism Grid Sweater",          desc:"Geo-patch knit sweater. Winter edition",                                  price:"₦16,000.00", series:"WINTER EDITION",  img:"image/top8.png",    colors:["#0a0a0a","#3B5998","#C2A46B","#f5f0e8"] },
  { id:"tidal-wave-knit",           name:"Tidal Wave Knit",             desc:"Texture outdoor fit. Winter edition",                                     price:"₦15,000.00", series:"WINTER EDITION",  img:"image/top9.png",    colors:["#4A6B7C","#0a0a0a","#7C7C4A","#f5f0e8"] },
  { id:"warfare-short",             name:"Warfare Short",               desc:"Outdoor cargo short for men. Tactical series",                            price:"₦10,000.00", series:"TACTICAL SERIES", img:"image/short4.png",  colors:["#7a6228","#0b3d0b","#0a0a0a","#c0c0c0"] },
  { id:"nomad-cargo-jogger",        name:"Nomad Cargo Jogger",          desc:"Vertical print cargo jogger for men",                                     price:"₦11,500.00", series:"STREET SERIES",   img:"image/pant20.jpeg", colors:["#C2A46B","#0a0a0a","#c0c0c0"] },
  { id:"bastion-cargo-pant",        name:"Bastion Cargo pant",          desc:"Multi pocket jogger pant. Street series",                                 price:"₦22,300.00", series:"STREET SERIES",   img:"image/pant17.png",  colors:["#0a0a0a","#808080"] },
  { id:"moss-cargo-jogger",         name:"Moss Cargo Jogger",           desc:"Outdoor olive multi pocket cargo jogger for men. Tactical series",        price:"₦11,500.00", series:"TACTICAL SERIES", img:"image/pant14.png",  colors:["#6B7C4A","#0a0a0a","#7C6B4A","#e8dfc8"] },
  { id:"crimson-suit",              name:"Crimson Suit",                desc:"Jacquard knit wordmark quarter zip for men. Signature line",              price:"₦20,000.00", series:"SIGNATURE LINE",  img:"image/top13.png",   colors:["#8b0000|#0a0a0a","#001f5b|#0a0a0a","#e8dfc8|#0a0a0a"] },
  { id:"axis-suit",                 name:"Axis Suit",                   desc:"Outdoor tracksuit. Signature line",                                       price:"₦14,000.00", series:"SIGNATURE LINE",  img:"image/suit1.jpeg",  colors:["#0a0a0a","#808080","#f5f0e8"] },
  { id:"field-cargo-short",         name:"Field Cargo Short",           desc:"Multi pocket outdoor cargo short. Tactical series",                       price:"₦8,500.00",  series:"TACTICAL SERIES", img:"image/short11.png", colors:["#6B7C4A","#C2A46B","#8b0000"] },
  { id:"phantom-knit",              name:"Phantom Knit",                desc:"Washed distressed dark",                                                  price:"₦25,000.00", series:"PREMIUM EDITION", img:"image/top3.png",    colors:["#0a0a0a"] },
  { id:"ops-jogger",                name:"Ops Jogger",                  desc:"Multi pocket tactical jogger. Tactical series",                           price:"₦15,000.00", series:"TACTICAL SERIES", img:"image/pant8.png",   colors:["#4b5320","#0f172a","#6f4e37","#fff8e7"] },
  { id:"venom-sweatpant",           name:"Venom Sweatpant",             desc:"Venom flame wide leg pant for men. Premium edition",                      price:"₦30,000.00", series:"PREMIUM EDITION", img:"image/pant5.png",   colors:["#f5f0e8|#008000","#f5f0e8|#c62828","#f5f0e8|#0000ff","#f5f0e8|#87ceeb","#f5f0e8|#8b4513"] },
  { id:"terrain-fit",               name:"Terrain Fit",                 desc:"Summer outdoor wears for men",              price:"₦23,500.00", series:"OUTDOOR SERIES",  img:"image/top19.png",  colors:["#7a6a5a","#003366","#b71c1c","#0a0a0a"] },
  { id:"gradient-fade-knit",        name:"Gradient Fade Knit",          desc:"Outdoor pullover crewneck. Dark edit",                                    price:"₦13,800.00", series:"DARK EDIT",       img:"image/top18.png",   colors:["#3f4f2a","#2c4a63","#7a5c00","#7a1f1f"] },
  { id:"rover-split-jogger",        name:"Rover Split Jogger",          desc:"Outdoor strip jogger pant for men",         price:"₦25,000.00", series:"STREET SERIES",   img:"image/pant10.png",  colors:["#0a0a0a|#f5f0e8","#808080|#0a0a0a","#1f3a52|#0a0a0a","#87ceeb|#0a0a0a"] },
  { id:"prestige-knit",             name:"Prestige Knit",               desc:"Texture long sleeve fit for men. Premium line",                           price:"₦13,500.00", series:"PREMIUM LINE",    img:"image/top5.png",    colors:["#4682b4|#808080","#6b5a3a|#808080"] },
  { id:"surplus-cargo-pant",        name:"Surplus Cargo Pant",          desc:"Multi pocket cargo pant for men. Street edition",                         price:"₦11,500.00", series:"STREET SERIES",   img:"image/pant16.png",  colors:["#0d3a4a","#808080","#f5f5f0","#708238"] },
  { id:"desert-cargo-short",        name:"Desert Cargo Short",          desc:"Casual short for men",                      price:"₦10,000.00", series:"TACTICAL SERIES", img:"image/short1.png",  colors:["#C2A46B"] },
  { id:"shadow-jogger",             name:"Shadow Jogger",               desc:"Outdoor wide leg jogger. Street series",                                  price:"₦18,500.00", series:"STREET SERIES",   img:"image/pant15.png",  colors:["#808080|#0a0a0a"] },
  { id:"ranger-utility-short",      name:"Ranger Utility Short",        desc:"Tactical multi pocket cargo short. Active series",                        price:"₦10,000.00", series:"ACTIVE SERIES",   img:"image/short5.png",  colors:["#0a0a0a","#C2A46B","#808080"] },
  { id:"monarch-suit",              name:"Monarch Suit",                desc:"Outdoor fashion tracksuit for men. Premium edition",                      price:"₦25,000.00", series:"PREMIUM EDITION", img:"image/suit4.png",   colors:["#808080","#000033","#4b5320"] },
  { id:"district-tracksuit-transit",name:"District Tracksuit-Transit",  desc:"Outdoor tracksuit for men",                 price:"₦15,000.00", series:"PREMIUM EDITION", img:"image/suit9.jpeg",  colors:["#6f4e37","#5d1916","#3a5870","#4b5320"] },
  { id:"inferno-short",             name:"Inferno Short",               desc:"Outdoor flame print short for men. Statement series",                     price:"₦15,000.00", series:"STATEMENT",       img:"image/short7.png",  colors:["#f5f0e8","#0a0a0a","#ccff00","#4169e1"] },
  { id:"sandstorm-cargo-pant",      name:"Sandstorm Cargo Pant",        desc:"Outdoor multi pocket cargo pant for men",                                 price:"₦15,000.00", series:"TACTICAL SERIES", img:"image/pant7.png",   colors:["#C2A46B","#0a0a0a","#808080"] },
  { id:"valence-suit",              name:"Valence Suit",                desc:"Luxury fashion outdoor track dual for men. Premium edition",              price:"₦23,500.00", series:"PREMIUM EDITION", img:"image/suit13.png",  colors:["#3a5870","#2e0854","#b7410e","#6d071a"] },
  { id:"arc-pant",                  name:"Arc Pant",                    desc:"Outdoor curved piping track pant for men",                                price:"₦14,000.00", series:"CORE COLLECTION", img:"image/pant4.png",   colors:["#0a0a0a","#808080"] },
  { id:"prestige-quarter-zip-suit", name:"Prestige Quarter Zip Suit",   desc:"Outdoor winter suit for men",               price:"₦17,600.00", series:"WINTER EDITION",  img:"image/top17.png",   colors:["#f5f0e8","#0a0a0a","#C2A46B","#001f3f"] },
  { id:"haze-crewneck-sweater",     name:"Haze Crewneck Sweater",       desc:"Acid wash fleece sweatshirt. Limited edition",                            price:"₦10,500.00", series:"LIMITED EDITION", img:"image/top14.png",   colors:["#132a13","#c0c0c0","#4a90c2","#cc5500"] },
  { id:"blaze-hoodie",              name:"Blaze Hoodie",                desc:"Neon zip quarter hoodie with sleeve pocket. Active series",               price:"₦25,000.00", series:"ACTIVE SERIES",   img:"image/suit11.png",  colors:["#f5f0e8","#0a0a0a","#0000ff","#ff0000","#ffff00"] },
  { id:"edge-short",                name:"Edge Short",                  desc:"Casual street short for men",               price:"₦7,850.00",  series:"CORE COLLECTION", img:"image/short13.jpeg",colors:["#e8e4da","#808080","#0a0a0a"] },
  { id:"arctic-snow",               name:"Arctic Snow",                 desc:"Shell fabric wide leg cargo pant. Core collection",                       price:"₦27,000.00", series:"CORE COLLECTION", img:"image/pant11.png",  colors:["#f5f0e8","#0a0a0a","#8b4513"] },
  { id:"drift-suit",                name:"Drift Suit",                  desc:"Outdoor fashion tracksuit. Premium edition",                              price:"₦26,700.00", series:"PREMIUM EDITION", img:"image/suit3.png",   colors:["#6f4e37|#f5f1e8","#808080|#f5f1e8"] },
  { id:"contour-short",             name:"Contour Short",               desc:"Outdoor short. Active series",              price:"₦10,000.00", series:"ACTIVE SERIES",   img:"image/short8.png",  colors:["#e8e6df","#0a0a0a"] },
  { id:"duality-suit",              name:"Duality Suit",                desc:"Quality outdoor men tracksuit. Core collection",                          price:"₦24,870.00", series:"CORE COLLECTION", img:"image/suit7.png",   colors:["#0a0a0a|#f5f0e8","#0a0a0a|#808080"] },
  { id:"sprint-pant",               name:"Sprint Pant",                 desc:"Quality outdoor track pants for men. Core collection",                    price:"₦12,000.00", series:"CORE COLLECTION", img:"image/pant21.png",  colors:["#0a0a0a|#f5f0e8","#0a0a0a|#808080"] },
  { id:"harness-hoodie",            name:"Harness Hoodie",              desc:"Outdoor strap harness hoodie for men",                                    price:"₦17,000.00", series:"PREMIUM SERIES",  img:"image/top15.png",   colors:["#808080","#0a0a0a"] },
  { id:"stripe-suit",               name:"Stripe Suit",                 desc:"Quality outdoor men tracksuit. Core collection",                          price:"₦17,500.00", series:"CORE COLLECTION", img:"image/suit14.png",  colors:["#0a0a0a|#f5f0e8","#0a0a0a|#808080"] },
  { id:"varsity-sweatshirt",        name:"Varsity Sweatshirt",          desc:"Panel collar quarter zip sweatshirt for men. Signature line",             price:"₦13,500.00", series:"SIGNATURE LINE",  img:"image/top12.png",   colors:["#333333|#9a9080","#7b3f00|#ede3c8"] },
  { id:"rogue-pant",                name:"Rogue Pant",                  desc:"Utility tactical pant",                     price:"₦11,500.00", series:"TACTICAL SERIES", img:"image/pant18.png",  colors:["#0a0a0a","#f5f5f5"] },
];

// ════════════════════════════════════
//  REFERRAL SYSTEM
// ════════════════════════════════════
(function captureReferralParam() {
  var params = new URLSearchParams(window.location.search);
  var ref = params.get('ref');
  if (ref) sessionStorage.setItem('dx_pending_referral_code', ref);
})();

function attributeReferral(newEmail, newName) {
  var refCode = sessionStorage.getItem('dx_pending_referral_code');
  if (!refCode) return;
  sessionStorage.removeItem('dx_pending_referral_code');
  var accounts = getAccounts();
  var owner = null;
  for (var i=0;i<accounts.length;i++) {
    var code = localStorage.getItem('dx_referral_code_'+accounts[i].email);
    if (code === refCode) { owner = accounts[i].email; break; }
  }
  if (!owner || owner === newEmail) return;
  var key = 'dx_referral_history_'+owner;
  var history = [];
  try { history = JSON.parse(localStorage.getItem(key) || '[]'); } catch(e) { history = []; }
  history.push({ name: newName || 'New member', date: new Date().toLocaleDateString(), amount: 1000 });
  localStorage.setItem(key, JSON.stringify(history));
}

// ════════════════════════════════════
//  EMAILJS INITIALIZATION
// ════════════════════════════════════
// Guarded: if the EmailJS <script> tag from the CDN is missing, blocked,
// or hasn't finished loading yet when this file runs, calling emailjs.init()
// directly would throw a ReferenceError and silently stop EVERYTHING below
// it in this file from ever executing (categories, cart, wishlist, search,
// popups — all of it). Wrapping it means the rest of the store still works
// even if email verification itself can't be sent.
(function() {
  try {
    if (typeof emailjs !== 'undefined' && emailjs && typeof emailjs.init === 'function') {
      emailjs.init('jQTNLubmd2q18yMjP'); // Your Public Key
    } else {
      console.error('DYNAMICX: EmailJS SDK not found — check that the EmailJS <script> tag is present in the HTML BEFORE project.js, and loads successfully. Email verification will not work until this is fixed, but the rest of the store will.');
    }
  } catch (e) {
    console.error('DYNAMICX: EmailJS failed to initialize — email verification will be unavailable, but the rest of the store will still work.', e);
  }
})();

// ════════════════════════════════════
//  MULTI-ACCOUNT AUTH SYSTEM (data layer)
// ════════════════════════════════════
function getAccounts() {
  try { return JSON.parse(localStorage.getItem('dx_accounts') || '[]'); } catch(e) { return []; }
}
function saveAccounts(accounts) {
  localStorage.setItem('dx_accounts', JSON.stringify(accounts));
}
function findAccount(email) {
  var e = (email || '').toLowerCase().trim();
  return getAccounts().find(function(a) { return a.email === e; });
}
function isLoggedIn() {
  return !!(localStorage.getItem('dx_logged_in_email'));
}
function getCurrentAccount() {
  var email = localStorage.getItem('dx_logged_in_email');
  if (!email) return null;
  return findAccount(email);
}

// ════════════════════════════════════
//  EMAIL VALIDATION
// ════════════════════════════════════
function isValidEmail(email) {
  var e = (email || '').trim();
  var basicPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!basicPattern.test(e)) return false;
  if (/\.\./.test(e)) return false;
  if (/^\./.test(e) || /\.$/.test(e)) return false;
  if (/\.@/.test(e) || /@\./.test(e)) return false;
  var parts = e.split('@');
  if (parts.length !== 2) return false;
  var localPart = parts[0];
  var domainPart = parts[1];
  if (!/^[a-zA-Z0-9._%+-]+$/.test(localPart)) return false;
  if (!/^[a-zA-Z0-9.-]+$/.test(domainPart)) return false;
  if (!/\.[a-zA-Z]{2,}$/.test(domainPart)) return false;
  return true;
}

// ════════════════════════════════════
//  EMAIL VERIFICATION SYSTEM
// ════════════════════════════════════

function generateVerificationCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function getFormattedTime() {
  var now = new Date();
  var hours = String(now.getHours()).padStart(2, '0');
  var minutes = String(now.getMinutes()).padStart(2, '0');
  return hours + ':' + minutes;
}

function setPendingSignupVerification(email, code, password, fullName) {
  var pending = {
    email: email.toLowerCase().trim(),
    fullName: fullName,
    code: code,
    password: password,
    timestamp: Date.now(),
    expiresIn: 15 * 60 * 1000
  };
  sessionStorage.setItem('dx_pending_signup_verification', JSON.stringify(pending));
}

function getPendingSignupVerification() {
  try {
    var data = JSON.parse(sessionStorage.getItem('dx_pending_signup_verification') || 'null');
    if (!data) return null;
    if (Date.now() - data.timestamp > data.expiresIn) {
      sessionStorage.removeItem('dx_pending_signup_verification');
      return null;
    }
    return data;
  } catch(e) {
    return null;
  }
}

function clearPendingSignupVerification() {
  sessionStorage.removeItem('dx_pending_signup_verification');
}

function setPendingPasswordReset(email, code, newPassword) {
  var pending = {
    email: email.toLowerCase().trim(),
    code: code,
    newPassword: newPassword,
    timestamp: Date.now(),
    expiresIn: 15 * 60 * 1000
  };
  sessionStorage.setItem('dx_pending_password_reset', JSON.stringify(pending));
}

function getPendingPasswordReset() {
  try {
    var data = JSON.parse(sessionStorage.getItem('dx_pending_password_reset') || 'null');
    if (!data) return null;
    if (Date.now() - data.timestamp > data.expiresIn) {
      sessionStorage.removeItem('dx_pending_password_reset');
      return null;
    }
    return data;
  } catch(e) {
    return null;
  }
}

function clearPendingPasswordReset() {
  sessionStorage.removeItem('dx_pending_password_reset');
}

function sendSignupVerificationEmail(email, code) {
  if (typeof emailjs === 'undefined' || !emailjs || typeof emailjs.send !== 'function') {
    return Promise.reject(new Error('EmailJS is not available'));
  }
  return emailjs.send(
    'service_t8hkkun',
    'template_77l4zrn',
    {
      to_email: email,
      passcode: code,
      time: getFormattedTime()
    }
  );
}

function sendPasswordResetEmail(email, code) {
  if (typeof emailjs === 'undefined' || !emailjs || typeof emailjs.send !== 'function') {
    return Promise.reject(new Error('EmailJS is not available'));
  }
  return emailjs.send(
    'service_t8hkkun',
    'template_uvriq71',
    {
      to_email: email,
      passcode: code,
      time: getFormattedTime()
    }
  );
}

// ════════════════════════════════════
//  SIGN UP FLOW  (email verification required)
// ════════════════════════════════════

function doSignUp() {
  var fullName = document.getElementById('signup-name').value.trim();
  var email = document.getElementById('signup-email').value.trim();
  var password = document.getElementById('signup-password').value.trim();
  var referralInput = document.getElementById('signup-referral').value.trim();
if (referralInput) sessionStorage.setItem('dx_pending_referral_code', referralInput);
  var errorEl = document.getElementById('signup-error');
  errorEl.style.color = '#e74c3c';

  if (!fullName) { errorEl.textContent = 'Please enter your full name.'; return; }
  if (!email) { errorEl.textContent = 'Please enter your email address.'; return; }
  if (!isValidEmail(email)) { errorEl.textContent = 'Please enter a valid email address.'; return; }
  if (!password || password.length < 8) { errorEl.textContent = 'Password must be at least 8 characters.'; return; }
  if (!/[A-Z]/.test(password)) { errorEl.textContent = 'Password must contain at least one uppercase letter.'; return; }
  if (!/[0-9]/.test(password)) { errorEl.textContent = 'Password must contain at least one number.'; return; }
  if (!/[^A-Za-z0-9]/.test(password)) { errorEl.textContent = 'Password must contain at least one special character (!@#$...).'; return; }

  if (findAccount(email)) {
    errorEl.textContent = 'This email is already registered. Please log in.';
    return;
  }
  
  var code = generateVerificationCode();
  errorEl.style.color = '#666';
  errorEl.textContent = 'Sending verification email...';

  sendSignupVerificationEmail(email, code)
    .then(function() {
      setPendingSignupVerification(email, code, password, fullName);
      errorEl.textContent = '';
      switchToVerification();
      document.getElementById('verification-type').value = 'signup';
      document.getElementById('verification-code-input').value = '';
      document.getElementById('verification-message').textContent = 'A 6-digit code has been sent to ' + email;
    })
    .catch(function(error) {
      errorEl.style.color = '#e74c3c';
      errorEl.textContent = 'Failed to send verification email. Please check your connection and try again.';
      console.error(error);
    });
}

function doVerifySignupCode() {
  var enteredCode = document.getElementById('verification-code-input').value.trim();
  var errorEl = document.getElementById('verification-error');
  errorEl.style.color = '#e74c3c';

  if (!enteredCode) { errorEl.textContent = 'Please enter the verification code.'; return; }

  var pending = getPendingSignupVerification();
  if (!pending) { errorEl.textContent = 'Verification expired. Please sign up again.'; return; }

  if (enteredCode === pending.code) {
    var accounts = getAccounts();
    var newAccount = {
      email: pending.email,
      name: pending.fullName,
      displayName: pending.fullName,
      password: pending.password,
      avatar: null,
      createdAt: new Date().toISOString(),
      verified: true
    };
    accounts.push(newAccount);
    saveAccounts(accounts);
    attributeReferral(pending.email, pending.fullName);
    localStorage.setItem('dx_logged_in_email', pending.email);
    clearPendingSignupVerification();

    errorEl.style.color = '#4caf50';
    errorEl.textContent = '✓ Email verified! Welcome to DYNAMICX.';

    document.getElementById('signup-name').value = '';
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';

    setTimeout(function() { showProfileDashboard(); }, 700);
  } else {
    errorEl.textContent = 'Incorrect code. Please try again.';
  }
}

function doResendSignupCode() {
  var pending = getPendingSignupVerification();
  if (!pending) {
    document.getElementById('verification-error').textContent = 'Verification expired. Please sign up again.';
    return;
  }
  var code = generateVerificationCode();
  var errorEl = document.getElementById('verification-error');
  errorEl.style.color = '#666';
  errorEl.textContent = 'Resending code...';

  sendSignupVerificationEmail(pending.email, code)
    .then(function() {
      setPendingSignupVerification(pending.email, code, pending.password, pending.fullName);
      errorEl.style.color = '#4caf50';
      errorEl.textContent = 'New code sent! Check your email.';
    })
    .catch(function(error) {
      errorEl.style.color = '#e74c3c';
      errorEl.textContent = 'Failed to resend. Please try again.';
      console.error(error);
    });
}

// ════════════════════════════════════
//  LOG IN FLOW (no code needed — account already verified)
// ════════════════════════════════════

function doLogin() {
  var email = document.getElementById('login-email').value.trim();
  var password = document.getElementById('login-password').value.trim();
  var errorEl = document.getElementById('login-error');
  errorEl.style.color = '#e74c3c';

  if (!email) { errorEl.textContent = 'Please enter your email address.'; return; }
  if (!isValidEmail(email)) { errorEl.textContent = 'Please enter a valid email address.'; return; }
  if (!password) { errorEl.textContent = 'Please enter your password.'; return; }

  var account = findAccount(email);
  if (!account) { errorEl.textContent = 'No account found with that email.'; return; }
  if (account.password !== password) { errorEl.textContent = 'Incorrect password.'; return; }

  localStorage.setItem('dx_logged_in_email', account.email);
  errorEl.style.color = '#4caf50';
  errorEl.textContent = '✓ Welcome back, ' + (account.name || 'there') + '!';

  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';

  setTimeout(function() { showProfileDashboard(); }, 600);
}

// ════════════════════════════════════
//  PASSWORD RESET FLOW  (email verification required)
// ════════════════════════════════════

function doResetPasswordInit() {
  var email = document.getElementById('reset-email').value.trim();
  var errorEl = document.getElementById('reset-error');
  errorEl.style.color = '#e74c3c';

  if (!email) { errorEl.textContent = 'Please enter your email address.'; return; }
  if (!isValidEmail(email)) { errorEl.textContent = 'Please enter a valid email address.'; return; }

  var account = findAccount(email);
  if (!account) { errorEl.textContent = 'No account found with that email.'; return; }

  var code = generateVerificationCode();
  var newPassword = document.getElementById('reset-password').value.trim();

  errorEl.style.color = '#666';
  errorEl.textContent = 'Sending reset code to your email...';

  sendPasswordResetEmail(email, code)
    .then(function() {
      setPendingPasswordReset(email, code, newPassword);
      errorEl.textContent = '';
      switchToVerification();
      document.getElementById('verification-type').value = 'reset';
      document.getElementById('verification-code-input').value = '';
      document.getElementById('verification-message').textContent = 'A reset code has been sent to ' + email;
    })
    .catch(function(error) {
      errorEl.style.color = '#e74c3c';
      errorEl.textContent = 'Failed to send email. Please try again.';
      console.error(error);
    });
}

function doResetPassword() {
  var email = document.getElementById('reset-email').value.trim();
  var password = document.getElementById('reset-password').value.trim();
  var passwordConfirm = document.getElementById('reset-password-confirm').value.trim();
  var errorEl = document.getElementById('reset-error');
  errorEl.style.color = '#e74c3c';

  if (!email) { errorEl.textContent = 'Please enter your email address.'; return; }
  if (!isValidEmail(email)) { errorEl.textContent = 'Please enter a valid email address.'; return; }
  if (!password) { errorEl.textContent = 'Please enter a new password.'; return; }
  if (password.length < 6) { errorEl.textContent = 'Password must be at least 6 characters.'; return; }
  if (password !== passwordConfirm) { errorEl.textContent = 'Passwords do not match.'; return; }

  doResetPasswordInit();
}

function doVerifyResetCode() {
  var enteredCode = document.getElementById('verification-code-input').value.trim();
  var errorEl = document.getElementById('verification-error');
  errorEl.style.color = '#e74c3c';

  if (!enteredCode) { errorEl.textContent = 'Please enter the reset code.'; return; }

  var pending = getPendingPasswordReset();
  if (!pending) { errorEl.textContent = 'Reset code expired. Please try again.'; return; }

  if (enteredCode === pending.code) {
    var accounts = getAccounts();
    var account = accounts.find(function(a) { return a.email === pending.email; });
    if (account) { account.password = pending.newPassword; saveAccounts(accounts); }

    clearPendingPasswordReset();
    errorEl.style.color = '#4caf50';
    errorEl.textContent = '✓ Password reset! Redirecting to log in…';

    document.getElementById('reset-email').value = '';
    document.getElementById('reset-password').value = '';
    document.getElementById('reset-password-confirm').value = '';
    document.getElementById('verification-code-input').value = '';

    setTimeout(function() { switchToLogin(); }, 900);
  } else {
    errorEl.textContent = 'Incorrect code. Please try again.';
  }
}

function doResendResetCode() {
  var pending = getPendingPasswordReset();
  if (!pending) {
    document.getElementById('verification-error').textContent = 'Reset code expired. Please try again.';
    return;
  }
  var code = generateVerificationCode();
  var errorEl = document.getElementById('verification-error');
  errorEl.style.color = '#666';
  errorEl.textContent = 'Resending code...';

  sendPasswordResetEmail(pending.email, code)
    .then(function() {
      setPendingPasswordReset(pending.email, code, pending.newPassword);
      errorEl.style.color = '#4caf50';
      errorEl.textContent = 'New code sent! Check your email.';
    })
    .catch(function(error) {
      errorEl.style.color = '#e74c3c';
      errorEl.textContent = 'Failed to resend. Please try again.';
      console.error(error);
    });
}

function switchToVerification() {
  document.getElementById('auth-signup-form').style.display = 'none';
  document.getElementById('auth-login-form').style.display = 'none';
  document.getElementById('auth-reset-form').style.display = 'none';
  document.getElementById('auth-verification-form').style.display = 'block';
  document.getElementById('verification-error').textContent = '';
  ensureVerificationCodeLabel();
}

// Adds a small persistent label above the code input (placeholders vanish on
// focus on some mobile keyboards, so this keeps the instruction visible).
function ensureVerificationCodeLabel() {
  if (document.getElementById('verification-code-label')) return;
  var input = document.getElementById('verification-code-input');
  if (!input) return;
  var label = document.createElement('label');
  label.id = 'verification-code-label';
  label.setAttribute('for', 'verification-code-input');
  label.textContent = 'VERIFICATION CODE';
  label.style.cssText = 'display:block;font-family:var(--font-ui);font-size:11px;font-weight:700;letter-spacing:1.5px;color:var(--grey);text-transform:uppercase;margin-bottom:6px;';
  input.parentNode.insertBefore(label, input);
}

// ─── BUILD COLOR SWATCH ───
function buildSwatch(colorValue, index, isFirst) {
  var isSplit = colorValue.includes("|");
  var swatch  = document.createElement("button");
  swatch.className = "pop-color-swatch" + (isFirst ? " selected" : "");
  swatch.dataset.color = colorValue;
  if (isSplit) {
    var parts = colorValue.split("|");
    var c1 = parts[0], c2 = parts[1];
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 30 30" preserveAspectRatio="none"><polygon points="0,0 30,0 0,30" fill="'+c1+'"/><polygon points="30,0 30,30 0,30" fill="'+c2+'"/></svg>';
    swatch.innerHTML = svg;
    swatch.style.background = "none";
    swatch.style.overflow   = "hidden";
    swatch.style.padding    = "0";
  } else {
    swatch.style.background = colorValue;
    if (colorValue === "#f5f0e8" || colorValue === "#e8dfc8" || colorValue === "#faf7f2" || colorValue === "#fdf6ec") {
      swatch.style.borderColor = "#c8bfa8";
    }
  }
  swatch.addEventListener("click", function() {
    document.querySelectorAll(".pop-color-swatch").forEach(function(s) { s.classList.remove("selected"); });
    this.classList.add("selected");
  });
  return swatch;
}

var currentSection = sessionStorage.getItem('dx_current_section') || 'all';

function saveCurrentSection(type) {
  currentSection = type;
  sessionStorage.setItem('dx_current_section', type);
}

var searchInput = document.getElementById("searchInput");
var cancelBtn   = document.getElementById("cancelBtn");
var searchActive = false;

function enterSearchMode() {
  if (searchActive) return;
  searchActive = true;
  var slider     = document.querySelector(".slider");
  var categories = document.querySelector(".categories");
  var promoBar   = document.querySelector(".promo-bar");
  if (slider)     slider.style.display     = "none";
  if (categories) categories.style.display = "none";
  if (promoBar)   promoBar.style.display   = "none";
  var productsEl = document.querySelector(".products");
  if (productsEl)   productsEl.style.display = "grid";
  if (topSection)    topSection.style.display    = "none";
  if (pantsSection)  pantsSection.style.display  = "none";
  if (shortSection)  shortSection.style.display  = "none";
  if (hoodieSection) hoodieSection.style.display = "none";
  document.querySelectorAll(".products .product").forEach(function(p) { p.style.display = "flex"; });
}

function exitSearchMode() {
  if (!searchActive) return;
  searchActive = false;
  var slider     = document.querySelector(".slider");
  var categories = document.querySelector(".categories");
  var promoBar   = document.querySelector(".promo-bar");
  if (slider)     slider.style.display     = "block";
  if (categories) categories.style.display = "flex";
  if (promoBar)   promoBar.style.display   = "";
  document.querySelectorAll(".products .product").forEach(function(p) { p.style.display = "flex"; });
}

if (searchInput) {
  searchInput.addEventListener("input", function() {
    var val = this.value.toLowerCase().trim();
    if (cancelBtn) cancelBtn.classList.toggle("visible", val.length > 0);
    if (val.length > 0) {
      enterSearchMode();
      document.querySelectorAll(".products .product").forEach(function(product) {
        var name = (product.querySelector("h2") || {}).textContent || "";
        var desc = (product.querySelector("h4") || {}).textContent || "";
        product.style.display = (name.toLowerCase().includes(val) || desc.toLowerCase().includes(val)) ? "flex" : "none";
      });
    } else {
      exitSearchMode();
    }
  });
}
if (cancelBtn) {
  cancelBtn.addEventListener("click", function() {
    if (searchInput) searchInput.value = "";
    cancelBtn.classList.remove("visible");
    exitSearchMode();
  });
}

var slideIndex = 1;
function plusSlides(n)   { showSlides(slideIndex += n); }
function currentSlide(n) { showSlides(slideIndex = n); }
function showSlides(n) {
  var slides = document.getElementsByClassName("myslide");
  var dots   = document.getElementsByClassName("dot");
  if (n > slides.length) slideIndex = 1;
  if (n < 1)             slideIndex = slides.length;
  for (var i = 0; i < slides.length; i++) slides[i].style.display = "none";
  for (var i = 0; i < dots.length; i++)   dots[i].classList.remove("active");
  if (slides[slideIndex - 1]) slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1])   dots[slideIndex - 1].classList.add("active");
}
setInterval(function() { plusSlides(1); }, 4000);

function restartPromoAnimation() {
  var track = document.querySelector(".promo-track");
  if (!track) return;
  track.style.animation = "none";
  void track.offsetHeight;
  track.style.animation = "";
}

var allProducts   = document.querySelectorAll(".products .product");
var topSection    = document.querySelector(".top");
var pantsSection  = document.querySelector(".pants");
var shortSection  = document.querySelector(".short");
var hoodieSection = document.querySelector(".hoodie");

if (topSection && pantsSection && shortSection && hoodieSection) {
  allProducts.forEach(function(product) {
    var imgEl = product.querySelector("img");
    if (!imgEl) return;
    var img = imgEl.src;
    if      (img.includes("top"))   topSection.appendChild(product.cloneNode(true));
    else if (img.includes("pant"))  pantsSection.appendChild(product.cloneNode(true));
    else if (img.includes("short")) shortSection.appendChild(product.cloneNode(true));
    else if (img.includes("suit"))  hoodieSection.appendChild(product.cloneNode(true));
  });
}

function restoreSection(type) {
  var productsEl = document.querySelector(".products");
  if (productsEl)   productsEl.style.display   = "none";
  if (topSection)    topSection.style.display    = "none";
  if (pantsSection)  pantsSection.style.display  = "none";
  if (shortSection)  shortSection.style.display  = "none";
  if (hoodieSection) hoodieSection.style.display = "none";

  var catArr = document.querySelectorAll(".cat");
  var catMap = { all: 0, top: 1, pants: 2, short: 3, hoodie: 4 };
  catArr.forEach(function(c) { c.classList.remove("active-cat"); });
  var idx = catMap[type] !== undefined ? catMap[type] : 0;
  if (catArr[idx]) catArr[idx].classList.add("active-cat");

  if      (type === "all")    { if (productsEl)   productsEl.style.display   = "grid"; }
  else if (type === "top")    { if (topSection)    topSection.style.display    = "grid"; }
  else if (type === "pants")  { if (pantsSection)  pantsSection.style.display  = "grid"; }
  else if (type === "short")  { if (shortSection)  shortSection.style.display  = "grid"; }
  else if (type === "hoodie") { if (hoodieSection) hoodieSection.style.display = "grid"; }
}

function goHome() {
  showPage('home');
}

function showSection(type) {
  saveCurrentSection(type);
  showPage("home");
}

function showPage(page) {
  var header     = document.querySelector(".board");
  var categories = document.querySelector(".categories");
  var slider     = document.querySelector(".slider");
  var mainpage   = document.querySelector(".mainpage");
  var cartPage   = document.getElementById("cart-page");
  var wishPage   = document.getElementById("wishlist-page");
  var profPage   = document.getElementById("profile-page");
  var promoBar   = document.querySelector(".promo-bar");

  if (!header || !categories || !slider || !mainpage || !cartPage || !wishPage || !profPage) return;

  if (page !== "home") {
    searchActive = false;
    if (searchInput) searchInput.value = "";
    if (cancelBtn) cancelBtn.classList.remove("visible");
  }

  header.style.display     = "none";
  categories.style.display = "none";
  slider.style.display     = "none";
  mainpage.style.display   = "none";
  cartPage.style.display   = "none";
  wishPage.style.display   = "none";
  profPage.style.display   = "none";

  var allSubs = ['orders','address','payment','notifications','about','settings','support',
    'edit-profile','change-password','preferences','referrals','legal','privacy-policy','terms-of-use'];
  allSubs.forEach(function(id) {
    var el = document.getElementById(id + '-page');
    if (el) el.style.display = 'none';
  });

  if (page === "home") {
    header.style.display     = "block";
    categories.style.display = "flex";
    slider.style.display     = "block";
    mainpage.style.display   = "block";
    if (promoBar) {
      promoBar.style.display = "";
      restartPromoAnimation();
    }
    restoreSection(currentSection);
  } else if (page === "cart") {
    cartPage.style.display = "block";
    if (promoBar) promoBar.style.display = "none";
    renderCart();
  } else if (page === "wishlist") {
    wishPage.style.display = "block";
    if (promoBar) promoBar.style.display = "none";
    renderWishlist();
  } else if (page === "profile") {
    profPage.style.display = "block";
    if (promoBar) promoBar.style.display = "none";
    header.style.display = "none";
    if (isLoggedIn()) {
      showProfileDashboard();
    } else {
      showAuthGate();
    }
  }
}

var cart = [];
try {
  var fromLocal   = localStorage.getItem("dx_cart");
  var fromSession = sessionStorage.getItem("dx_cart");
  cart = JSON.parse(fromLocal || fromSession || "[]");
} catch(e) { cart = []; }

var wishlist = [];
try { wishlist = JSON.parse(localStorage.getItem("dx_wishlist") || "[]"); } catch(e) { wishlist = []; }

function saveCart() {
  var data = JSON.stringify(cart);
  sessionStorage.setItem("dx_cart", data);
  localStorage.setItem("dx_cart", data);
}
function saveWishlist() { localStorage.setItem("dx_wishlist", JSON.stringify(wishlist)); }

function imgMatch(srcA, srcB) {
  if (!srcA || !srcB) return false;
  var a = srcA.split("/").slice(-2).join("/");
  var b = srcB.split("/").slice(-2).join("/");
  return a === b;
}
function nameMatch(a, b) {
  if (!a || !b) return false;
  return a.trim().toLowerCase() === b.trim().toLowerCase();
}

function initAddButtons(scope) {
  var container = scope || document;
  container.querySelectorAll(".add-btn").forEach(function(btn) {
    if (btn.dataset.bound) return;
    btn.dataset.bound = "true";
    var card = btn.closest(".product");
    if (card) {
      var name   = card.querySelector("h2") ? card.querySelector("h2").textContent.trim() : "";
      var imgSrc = card.querySelector("img") ? card.querySelector("img").src : "";
      var item   = cart.find(function(i) { return nameMatch(i.name, name) && imgMatch(i.img, imgSrc); });
      if (item) { switchToQtyMode(btn, item); return; }
    }
    btn.addEventListener("click", function() {
      var card      = this.closest(".product");
      var name      = card.querySelector("h2").textContent.trim();
      var priceText = card.querySelector(".price").textContent;
      var price     = parseInt(priceText.replace(/[₦,]/g, ""));
      var imgSrc    = card.querySelector("img").src;
      var item = cart.find(function(i) { return nameMatch(i.name, name) && imgMatch(i.img, imgSrc); });
      if (!item) { item = { name: name, price: price, img: imgSrc, qty: 1 }; cart.push(item); }
      else { item.qty++; }
      saveCart();
      switchToQtyMode(this, item);
      updateCartBadge();
    });
  });
}

function switchToQtyMode(btn, item) {
  btn.innerHTML = '<span class="qty-controls" style="display:inline-flex;align-items:center;gap:6px;"><span class="qty-minus">−</span><span class="qty-num">'+item.qty+'</span><span class="qty-plus">＋</span></span>';
  btn.classList.add("qty-mode");
  btn.querySelector(".qty-minus").addEventListener("click", function(e) {
    e.stopPropagation();
    item.qty--;
    if (item.qty <= 0) {
      cart = cart.filter(function(i) { return !(nameMatch(i.name, item.name) && imgMatch(i.img, item.img)); });
      resetAllMatchingBtns(item.name, item.img);
    } else { updateAllMatchingBtns(item); }
    saveCart(); updateCartBadge();
  });
  btn.querySelector(".qty-plus").addEventListener("click", function(e) {
    e.stopPropagation();
    item.qty++;
    updateAllMatchingBtns(item);
    saveCart(); updateCartBadge();
  });
}

function updateAllMatchingBtns(item) {
  document.querySelectorAll(".product").forEach(function(card) {
    if (imgMatch(card.querySelector("img").src, item.img) && nameMatch(card.querySelector("h2").textContent, item.name)) {
      var num = card.querySelector(".qty-num");
      if (num) num.textContent = item.qty;
    }
  });
}

function resetAllMatchingBtns(name, img) {
  document.querySelectorAll(".product").forEach(function(card) {
    if (imgMatch(card.querySelector("img").src, img) && nameMatch(card.querySelector("h2").textContent, name)) {
      var btn = card.querySelector(".add-btn");
      if (!btn) return;
      btn.innerHTML = "+Add";
      btn.classList.remove("qty-mode");
      btn.dataset.bound = "";
    }
  });
  initAddButtons();
}

function updateCartBadge() {
  var total   = cart.reduce(function(sum, i) { return sum + i.qty; }, 0);
  var countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = total + " Item" + (total !== 1 ? "s" : "");
  var badge   = document.getElementById("cart-badge");
  var cartNav = document.querySelector('a[onclick="showPage(\'cart\')"]');
  if (!badge && cartNav) {
    badge = document.createElement("span");
    badge.id = "cart-badge";
    badge.style.cssText = "background:#ff3b3b;color:white;font-size:9px;font-weight:700;min-width:16px;height:16px;padding:0 4px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;position:absolute;top:0px;right:0px;line-height:1;pointer-events:none;";
    cartNav.appendChild(badge);
  }
  if (badge) { badge.textContent = total > 0 ? total : ""; badge.style.display = total > 0 ? "inline-flex" : "none"; }
}

function renderCart() {
  var cartItemsEl = document.getElementById("cart-items");
  var cartTotalEl = document.getElementById("cart-total");
  var countEl     = document.getElementById("cart-count");
  var total = cart.reduce(function(sum, i) { return sum + i.qty; }, 0);
  if (countEl) countEl.textContent = total + " Item" + (total !== 1 ? "s" : "");
  cartItemsEl.innerHTML = "";
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<div style="text-align:center;padding:40px;color:#888;"><div style="font-size:48px;margin-bottom:12px;">🛒</div><p style="font-size:16px;">Your cart is empty</p></div>';
    cartTotalEl.textContent = "0"; return;
  }
  var runningTotal = 0;
  cart.forEach(function(item) {
    var itemPrice = typeof item.price === "string" ? parseInt(item.price.replace(/[₦,]/g, "")) : (item.price || 0);
    runningTotal += itemPrice * item.qty;
    var colorPreview = "";
    if (item.color) {
      if (item.color.includes("|")) {
        var pts = item.color.split("|");
        colorPreview = '<p>Color: <span style="display:inline-block;width:14px;height:14px;background:linear-gradient(135deg,'+pts[0]+' 50%,'+pts[1]+' 50%);border-radius:3px;border:1px solid #ccc;vertical-align:middle;margin-right:4px;"></span></p>';
      } else {
        colorPreview = '<p>Color: <span style="display:inline-block;width:14px;height:14px;background:'+item.color+';border-radius:3px;border:1px solid #ccc;vertical-align:middle;margin-right:4px;"></span></p>';
      }
    }
    var div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = '<img src="'+item.img+'" alt="'+item.name+'"><div class="cart-info"><h4>'+item.name+'</h4>'+(item.size?'<p>Size: <strong>'+item.size+'</strong></p>':'')+colorPreview+'<p>₦'+itemPrice.toLocaleString()+' × '+item.qty+'</p><p><strong>₦'+(itemPrice*item.qty).toLocaleString()+'</strong></p></div><button class="remove-item" data-name="'+item.name+'" data-img="'+item.img+'"><i class="fas fa-trash"></i></button>';
    cartItemsEl.appendChild(div);
  });
  cartTotalEl.textContent = runningTotal.toLocaleString();
  document.querySelectorAll(".remove-item").forEach(function(btn) {
    btn.addEventListener("click", function() {
      var name = this.dataset.name, img = this.dataset.img;
      cart = cart.filter(function(i) { return !(nameMatch(i.name, name) && imgMatch(i.img, img)); });
      resetAllMatchingBtns(name, img);
      saveCart(); updateCartBadge(); renderCart();
    });
  });
  var checkoutBtn = document.querySelector(".checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.onclick = function() {
      if (cart.length === 0) return;
      window.location.href = "checkout.html";
    };
  }
}

document.addEventListener("click", function(e) {
  var heart = e.target.closest(".heart");
  if (!heart) return;
  if (heart.id === "popHeartBtn") return;
  var card = heart.closest(".product");
  if (!card) return;
  var name      = card.querySelector("h2").textContent.trim();
  var priceText = card.querySelector(".price").textContent;
  var price     = parseInt(priceText.replace(/[₦,]/g, ""));
  var imgSrc    = card.querySelector("img").src;
  var isLiked   = heart.dataset.liked === "true";
  if (!isLiked) {
    heart.dataset.liked = "true";
    heart.innerHTML     ='<span style="font-size:30px;">❤️‍🔥</</span>';
    if (!wishlist.find(function(i) { return nameMatch(i.name, name) && imgMatch(i.img, imgSrc); })) wishlist.push({ name: name, price: price, img: imgSrc });
    syncHearts(name, imgSrc, true);
  } else {
    heart.dataset.liked = "false";
    heart.innerHTML     = '<i class="fa-regular fa-heart"></i>';
    wishlist = wishlist.filter(function(i) { return !(nameMatch(i.name, name) && imgMatch(i.img, imgSrc)); });
    syncHearts(name, imgSrc, false);
  }
  saveWishlist(); updateWishBadge();
});

function syncHearts(name, img, liked) {
  document.querySelectorAll(".product").forEach(function(card) {
    if (imgMatch(card.querySelector("img").src, img) && nameMatch(card.querySelector("h2").textContent, name)) {
      var h = card.querySelector(".heart");
      if (!h) return;
      h.dataset.liked = liked ? "true" : "false";
      h.innerHTML     = liked ? '<span style="font-size:30px;">❤️‍🔥</</span>' : '<i class="fa-regular fa-heart"></i>';
    }
  });
}

function updateWishBadge() {
  var total   = wishlist.length;
  var wishNav = document.querySelector('a[onclick="showPage(\'wishlist\')"]');
  var badge   = document.getElementById("wish-badge");
  if (!badge && wishNav) {
    badge = document.createElement("span");
    badge.id = "wish-badge";
    badge.style.cssText = "background:#ff3b3b;color:white;font-size:9px;font-weight:700;min-width:16px;height:16px;padding:0 4px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;position:absolute;top:0px;right:0px;line-height:1;pointer-events:none;";
    wishNav.appendChild(badge);
  }
  if (badge) { badge.textContent = total > 0 ? total : ""; badge.style.display = total > 0 ? "inline-flex" : "none"; }
}

function clearWishlist() {
  wishlist.forEach(function(item) { syncHearts(item.name, item.img, false); });
  wishlist = [];
  saveWishlist(); updateWishBadge(); renderWishlist();
}

function renderWishlist() {
  var wishItemsEl = document.getElementById("wish-items");
  var wishCountEl = document.getElementById("wish-count");
  if (wishCountEl) wishCountEl.textContent = wishlist.length + " Item" + (wishlist.length !== 1 ? "s" : "");
  wishItemsEl.innerHTML = "";
  if (wishlist.length === 0) {
    wishItemsEl.innerHTML = '<div style="text-align:center;padding:40px;color:#888;"><div style="font-size:48px;margin-bottom:12px;">🗑️</div><p style="font-size:16px;">Your wishlist is empty</p></div>';
    return;
  }
  wishlist.forEach(function(item) {
    var itemPrice = typeof item.price === "string" ? parseInt(item.price.replace(/[₦,]/g, "")) : (item.price || 0);
    var colorPreview = "";
    if (item.color) {
      if (item.color.includes("|")) {
        var pts = item.color.split("|");
        colorPreview = '<span style="display:inline-block;width:14px;height:14px;background:linear-gradient(135deg,'+pts[0]+' 50%,'+pts[1]+' 50%);border-radius:3px;border:1px solid #555;vertical-align:middle;margin-left:4px;"></span>';
      } else {
        colorPreview = '<span style="display:inline-block;width:14px;height:14px;background:'+item.color+';border-radius:3px;border:1px solid #555;vertical-align:middle;margin-left:4px;"></span>';
      }
    }
    var div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = '<img src="'+item.img+'" alt="'+item.name+'"><div class="cart-info"><h4>'+item.name+'</h4>'+(item.size?'<p style="font-size:12px;color:#aaa;">Size: <strong style="color:#eee;">'+item.size+'</strong></p>':'')+(item.color?'<p style="font-size:12px;color:#aaa;display:flex;align-items:center;">Color: '+colorPreview+'</p>':'')+'<p>₦'+itemPrice.toLocaleString()+'</p></div><div style="display:flex;flex-direction:column;gap:6px;align-items:center;"><button class="wish-add-btn" data-name="'+item.name+'" data-img="'+item.img+'" data-price="'+itemPrice+'" data-size="'+(item.size||'')+'" data-color="'+(item.color||'')+'" style="background:linear-gradient(135deg,#444,#777);color:white;border:none;padding:6px 12px;border-radius:14px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;">+ Add to Cart</button><button class="wish-remove" data-name="'+item.name+'" data-img="'+item.img+'" style="background:red;color:white;border:none;padding:6px 12px;border-radius:14px;font-size:13px;cursor:pointer;"><i class="fas fa-trash"></i></button></div>';
    wishItemsEl.appendChild(div);
  });
  document.querySelectorAll(".wish-add-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      var name = this.dataset.name, img = this.dataset.img;
      var price = parseInt(this.dataset.price), size = this.dataset.size||"", color = this.dataset.color||"";
      var item = cart.find(function(i) { return nameMatch(i.name, name) && imgMatch(i.img, img) && i.size===size && i.color===color; });
      if (!item) {
        item = { name:name, price:price, img:img, size:size, color:color, qty:1 };
        cart.push(item);
        document.querySelectorAll(".product").forEach(function(card) {
          if (imgMatch(card.querySelector("img").src, img) && nameMatch(card.querySelector("h2").textContent, name)) {
            var addBtn = card.querySelector(".add-btn");
            if (addBtn && !addBtn.classList.contains("qty-mode")) { addBtn.dataset.bound = ""; switchToQtyMode(addBtn, item); }
          }
        });
      } else { item.qty++; updateAllMatchingBtns(item); }
      saveCart(); updateCartBadge();
      this.textContent = "✓ Added";
      this.style.background = "linear-gradient(135deg,#2a7a2a,#4caf50)";
      var self = this;
      setTimeout(function() { self.textContent = "✓ Added"; self.style.background = "linear-gradient(135deg,#444,#777)"; }, 1500);
    });
  });
  document.querySelectorAll(".wish-remove").forEach(function(btn) {
    btn.addEventListener("click", function() {
      var name = this.dataset.name, img = this.dataset.img;
      wishlist = wishlist.filter(function(i) { return !(nameMatch(i.name, name) && imgMatch(i.img, img)); });
      saveWishlist(); syncHearts(name, img, false); updateWishBadge(); renderWishlist();
    });
  });
}

function openPopup(pid) {
  var product = products.find(function(p) { return p.id === pid; });
  if (!product) return;
  document.getElementById("popTopTitle").textContent = product.name.toLowerCase().replace(/ /g, "-");
  document.getElementById("popImg").src              = product.img;
  document.getElementById("popImg").alt              = product.name;
  document.getElementById("popName").textContent     = product.name.toUpperCase();
  document.getElementById("popDesc").textContent     = product.desc;
  document.getElementById("popPrice").textContent    = product.price;
  document.getElementById("popSeries").textContent   = product.series;
  document.getElementById("zoomImg").src             = product.img;
  document.querySelectorAll(".pop-size-btn").forEach(function(b) { b.classList.remove("selected"); });
  var colorWrap = document.getElementById("popColors");
  colorWrap.innerHTML = "";
  product.colors.forEach(function(c, i) { colorWrap.appendChild(buildSwatch(c, i, i === 0)); });
  document.querySelectorAll(".pop-size-btn").forEach(function(btn) {
    btn.onclick = function() {
      document.querySelectorAll(".pop-size-btn").forEach(function(b) { b.classList.remove("selected"); });
      this.classList.add("selected");
    };
  });
  var heartBtn = document.getElementById("popHeartBtn");
  heartBtn.dataset.liked = "false";
  heartBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
  if (wishlist.find(function(i) { return nameMatch(i.name, product.name); })) {
    heartBtn.dataset.liked = "true";
    heartBtn.innerHTML = '<span style="font-size:30px;">❤️‍🔥</span>';
  }
  heartBtn.onclick = function() {
    var liked = this.dataset.liked === "true";
    this.dataset.liked = (!liked).toString();
    this.innerHTML = !liked ? '<span style="font-size:30px;">❤️‍🔥</span>' : '<i class="fa-regular fa-heart"></i>';
    if (!liked) {
      var priceNum     = parseInt(product.price.replace(/[₦,]/g, ""));
      var selSize      = document.querySelector(".pop-size-btn.selected");
      var selColor     = document.querySelector(".pop-color-swatch.selected");
      var size  = selSize  ? selSize.dataset.size   : "";
      var color = selColor ? (selColor.dataset.color || selColor.style.background) : "";
      if (!wishlist.find(function(i) { return nameMatch(i.name, product.name); }))
        wishlist.push({ name:product.name, price:priceNum, img:product.img, size:size, color:color });
      syncHearts(product.name, product.img, true);
    } else {
      wishlist = wishlist.filter(function(i) { return !nameMatch(i.name, product.name); });
      syncHearts(product.name, product.img, false);
    }
    saveWishlist(); updateWishBadge();
  };
  var addBtn = document.getElementById("popAddCart");
  var cartQty = 0;
  addBtn.textContent = "+Add";
  addBtn.style.background = "";
  var existingCart = cart.filter(function(i) { return nameMatch(i.name, product.name); });
  if (existingCart.length > 0) {
    cartQty = existingCart.reduce(function(s,i) { return s+i.qty; }, 0);
    addBtn.textContent = "+Add ("+cartQty+" in cart)";
  }
  addBtn.onclick = function() {
    var selSize  = document.querySelector(".pop-size-btn.selected");
    var selColor = document.querySelector(".pop-color-swatch.selected");
    if (!selSize) {
      this.textContent = "SELECT A SIZE FIRST";
      this.style.background = "#e03535";
      var self = this;
      setTimeout(function() { self.textContent = cartQty > 0 ? "+Add ("+cartQty+" in cart)" : "+Add"; self.style.background = ""; }, 1500);
      return;
    }
    var size = selSize.dataset.size;
    var color = selColor ? (selColor.dataset.color || selColor.style.background) : "";
    var priceNum = parseInt(product.price.replace(/[₦,]/g, ""));
    var match = cart.find(function(i) { return nameMatch(i.name, product.name) && i.size===size && i.color===color; });
    if (match) { match.qty++; cartQty = match.qty; }
    else { cartQty = 1; cart.push({ name:product.name, price:priceNum, img:product.img, size:size, color:color, qty:1 }); }
    saveCart(); updateCartBadge();
    var totalQty = cart.filter(function(i) { return nameMatch(i.name,product.name) && imgMatch(i.img,product.img); }).reduce(function(s,i){return s+i.qty;},0);
    document.querySelectorAll(".product").forEach(function(card) {
      var cImg  = card.querySelector("img") ? card.querySelector("img").src : "";
      var cName = card.querySelector("h2")  ? card.querySelector("h2").textContent.trim() : "";
      if (imgMatch(cImg,product.img) && nameMatch(cName,product.name)) {
        var storeBtn = card.querySelector(".add-btn");
        if (!storeBtn) return;
        if (!storeBtn.classList.contains("qty-mode")) {
          storeBtn.innerHTML = '<span class="qty-controls" style="display:inline-flex;align-items:center;gap:6px;"><span class="qty-minus">−</span><span class="qty-num">'+totalQty+'</span><span class="qty-plus">＋</span></span>';
          storeBtn.classList.add("qty-mode");
          storeBtn.querySelector(".qty-minus").addEventListener("click", function(e) {
            e.stopPropagation();
            var variants = cart.filter(function(i) { return nameMatch(i.name,product.name) && imgMatch(i.img,product.img); });
            if (!variants.length) return;
            var last = variants[variants.length-1]; last.qty--;
            if (last.qty<=0) cart = cart.filter(function(i) { return !(nameMatch(i.name,last.name)&&imgMatch(i.img,last.img)&&i.size===last.size&&i.color===last.color); });
            var nt = cart.filter(function(i){return nameMatch(i.name,product.name)&&imgMatch(i.img,product.img);}).reduce(function(s,i){return s+i.qty;},0);
            if (nt<=0) { resetAllMatchingBtns(product.name,product.img); }
            else { document.querySelectorAll(".product").forEach(function(c){if(c.querySelector("img")&&imgMatch(c.querySelector("img").src,product.img)&&c.querySelector("h2")&&nameMatch(c.querySelector("h2").textContent,product.name)){var n=c.querySelector(".qty-num");if(n)n.textContent=nt;}}); }
            saveCart(); updateCartBadge();
          });
          storeBtn.querySelector(".qty-plus").addEventListener("click", function(e) {
            e.stopPropagation();
            var variants = cart.filter(function(i){return nameMatch(i.name,product.name)&&imgMatch(i.img,product.img);});
            if (variants.length>0){variants[variants.length-1].qty++;}else{cart.push({name:product.name,price:priceNum,img:product.img,qty:1});}
            var nt = cart.filter(function(i){return nameMatch(i.name,product.name)&&imgMatch(i.img,product.img);}).reduce(function(s,i){return s+i.qty;},0);
            document.querySelectorAll(".product").forEach(function(c){if(c.querySelector("img")&&imgMatch(c.querySelector("img").src,product.img)&&c.querySelector("h2")&&nameMatch(c.querySelector("h2").textContent,product.name)){var n=c.querySelector(".qty-num");if(n)n.textContent=nt;}});
            saveCart(); updateCartBadge();
          });
        } else { var num=storeBtn.querySelector(".qty-num"); if(num) num.textContent=totalQty; }
      }
    });
    this.textContent = "✓ Added ("+cartQty+" in cart)";
    this.style.background = "linear-gradient(135deg,#2a7a2a,#4caf50)";
    var self = this;
    setTimeout(function() { self.textContent = "+Add ("+cartQty+" in cart)"; self.style.background = ""; }, 1500);
  };
  document.getElementById("popZoomBtn").onclick = function() { document.getElementById("zoomOverlay").classList.add("active"); };
  document.getElementById("popPage").style.display = "block";
  document.body.style.overflow = "hidden";
}

// ════════════════════════════════════
//  ORDER HISTORY SYSTEM
// ════════════════════════════════════
function getOrders() {
  try { return JSON.parse(localStorage.getItem('dx_orders') || '[]'); } catch (e) { return []; }
}

function saveOrders(orders) { localStorage.setItem('dx_orders', JSON.stringify(orders)); }

function renderOrdersPage() {
  var body = document.querySelector('#orders-page .subpage-body');
  if (!body) return;
  var orders = getOrders();
  if (!orders.length) {
    body.innerHTML = '<div class="orders-empty"><div class="orders-empty-icon">📦</div><h3>No Orders Yet</h3><p>Your completed orders will appear here once you checkout.</p><button class="subpage-cta" onclick="showPage(\'home\'); document.querySelector(\'.products\').style.display=\'grid\';">Shop Now</button></div>';
    return;
  }
  body.innerHTML = orders.slice().reverse().map(function(o) {
    var itemsHtml = o.items.map(function(i) {
      return '<div class="cart-item"><img src="' + i.img + '" alt="' + i.name + '"><div class="cart-info"><h4>' + i.name + '</h4>' + (i.size ? '<p>Size: <strong>' + i.size + '</strong></p>' : '') + '<p>₦' + i.price.toLocaleString() + ' × ' + i.qty + '</p></div></div>';
    }).join('');
    return '<div class="address-card" style="margin-bottom:14px;"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;"><span style="font-family:var(--font-display);letter-spacing:1px;color:var(--gold-pale);">#' + o.orderNum + '</span><span style="font-family:var(--font-ui);font-size:11px;color:var(--grey);">' + new Date(o.date).toLocaleDateString() + '</span></div>' + itemsHtml + '<div style="margin-top:10px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.12);display:flex;justify-content:space-between;"><span style="color:var(--grey);font-size:13px;">Total</span><strong style="color:var(--gold-pale);">₦' + o.total.toLocaleString() + '</strong></div></div>';
  }).join('');
}

function closePopup() { document.getElementById("popPage").style.display = "none"; document.body.style.overflow = ""; }
function closeCart() {
  showPage('home');
}
function closeWishlist() {
  showPage('home');
}
function closeProfile() {
  showPage('home');
}

function closeZoom()  { document.getElementById("zoomOverlay").classList.remove("active"); }

initAddButtons();
updateCartBadge();
updateWishBadge();
wishlist.forEach(function(item) { syncHearts(item.name, item.img, true); });
cart.forEach(function(item) {
  document.querySelectorAll(".product").forEach(function(card) {
    var cardImg  = card.querySelector("img") ? card.querySelector("img").src : "";
    var cardName = card.querySelector("h2")  ? card.querySelector("h2").textContent.trim() : "";
    if (imgMatch(cardImg, item.img) && nameMatch(cardName, item.name)) {
      var btn = card.querySelector(".add-btn");
      if (btn && !btn.classList.contains("qty-mode")) { btn.dataset.bound = ""; switchToQtyMode(btn, item); }
    }
  });
});

if (document.querySelector(".board")) {
  showPage("home");
  showSlides(slideIndex);
}

function showProfileSub(page) {
  var promoBar = document.querySelector(".promo-bar");
  var allSubs = ['orders','address','payment','notifications','about','settings','support',
    'edit-profile','change-password','preferences','referrals','legal','privacy-policy','terms-of-use'];
  allSubs.forEach(function(id) { var el=document.getElementById(id+'-page'); if(el) el.style.display='none'; });
  if (!page) { showPage('profile'); return; }
  var header=document.querySelector('.board'), categories=document.querySelector('.categories'),
      slider=document.querySelector('.slider'), mainpage=document.querySelector('.mainpage'),
      cartPage=document.getElementById('cart-page'), wishPage=document.getElementById('wishlist-page'),
      profPage=document.getElementById('profile-page');
  if(header)     header.style.display='none';
  if(categories) categories.style.display='none';
  if(slider)     slider.style.display='none';
  if(mainpage)   mainpage.style.display='none';
  if(cartPage)   cartPage.style.display='none';
  if(wishPage)   wishPage.style.display='none';
  if(profPage)   profPage.style.display='none';
  if(promoBar)   promoBar.style.display='none';
  var target = document.getElementById(page+'-page');
  if(target) { target.style.display='block'; target.scrollTop=0; }
  if(page==='referrals') { var codeEl=document.getElementById('referral-code-display'); if(codeEl) codeEl.textContent=generateReferralCode(); }
  if(page==='address') loadAddressIntoProfile();
  if(page==='orders') renderOrdersPage();

}

(function wireProfileMenu() {
  var menuMap = [
    { text:'my orders', page:'orders' },
    { text:'delivery address', page:'address' },
    { text:'payment methods', page:'payment' },
    { text:'notifications', page:'notifications' },
    { text:'about', page:'about' },
    { text:'settings', page:'settings' },
    { text:'customer support', page:'support' }
  ];
  document.querySelectorAll('.menu-item').forEach(function(item) {
    var label = item.textContent.trim().replace(/[^\w\s]/g,'').trim().toLowerCase();
    menuMap.forEach(function(m) { if(label.includes(m.text)) item.onclick = function() { showProfileSub(m.page); }; });
  });
})();

function toggleFaq(item) { item.classList.toggle('open'); }

function getSavedAddress() {
  try { return JSON.parse(localStorage.getItem('dx_delivery_address')||'null'); } catch(e) { return null; }
}
function saveAddress(addr) { localStorage.setItem('dx_delivery_address', JSON.stringify(addr)); }
function loadAddressIntoProfile() {
  var addr = getSavedAddress(); if(!addr) return;
  var map = {name:'addr-name',phone:'addr-phone',street:'addr-street',city:'addr-city',state:'addr-state',landmark:'addr-landmark'};
  Object.keys(map).forEach(function(key) { var el=document.getElementById(map[key]); if(el&&addr[key]) el.value=addr[key]; });
}
function saveProfileAddress() {
  var fb = document.getElementById('addr-save-feedback');
  var addr = {
    name:    (document.getElementById('addr-name')?document.getElementById('addr-name').value:'').trim(),
    phone:   (document.getElementById('addr-phone')?document.getElementById('addr-phone').value:'').trim(),
    street:  (document.getElementById('addr-street')?document.getElementById('addr-street').value:'').trim(),
    city:    (document.getElementById('addr-city')?document.getElementById('addr-city').value:'').trim(),
    state:   (document.getElementById('addr-state')?document.getElementById('addr-state').value:'').trim(),
    landmark:(document.getElementById('addr-landmark')?document.getElementById('addr-landmark').value:'').trim()
  };
  if(!addr.name||!addr.phone||!addr.street||!addr.city||!addr.state) {
    if(fb){fb.style.color='#e74c3c';fb.textContent='Please fill in all required fields.';} return;
  }
  var existing=getSavedAddress(); if(existing&&existing.note) addr.note=existing.note;
  saveAddress(addr);
  if(fb){fb.style.color='#4caf50';fb.textContent='✓ Address saved!';}
}

function applyProfileData() {
  var acc = getCurrentAccount();
  var name = (acc && acc.displayName) ? acc.displayName : (acc && acc.name ? acc.name : 'DYNAMICX Member');
  var nameEl = document.querySelector('.profile-name');
  if(nameEl) nameEl.textContent = name.toUpperCase();
  var avatar = acc ? acc.avatar : null;
  var avatarEl = document.querySelector('.avatar');
  if(avatarEl) {
    if(avatar) avatarEl.innerHTML='<img src="'+avatar+'" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" alt="avatar">';
    else avatarEl.textContent='👤';
  }
}
applyProfileData();

function showAuthGate() {
  var gate=document.getElementById('auth-gate'), dash=document.getElementById('profile-dashboard');
  if(gate) gate.style.display='flex'; if(dash) dash.style.display='none';
  switchToSignup(); clearAuthErrors();
}
function expandSignupForm() {
  document.getElementById('auth-signup-collapsed').style.display='none';
  document.getElementById('auth-signup-fields').style.display='flex';
}
function showProfileDashboard() {
  var gate=document.getElementById('auth-gate'), dash=document.getElementById('profile-dashboard');
  if(gate) gate.style.display='none'; if(dash) dash.style.display='block';
  applyProfileData();
  var statWish=document.getElementById('stat-wishlist'); if(statWish) statWish.textContent=wishlist.length;
  var statOrders=document.getElementById('stat-orders'); if(statOrders) statOrders.textContent=getOrders().length;

}

function switchToLogin() {
  document.getElementById('auth-signup-form').style.display='none';
  document.getElementById('auth-login-form').style.display='flex';
  document.getElementById('auth-reset-form').style.display='none';
  document.getElementById('auth-verification-form').style.display='none';
  clearAuthErrors();
}
function switchToSignup() {
  document.getElementById('auth-signup-form').style.display='flex';
  document.getElementById('auth-login-form').style.display='none';
  document.getElementById('auth-reset-form').style.display='none';
  document.getElementById('auth-verification-form').style.display='none';
  document.getElementById('auth-signup-collapsed').style.display='block';
  document.getElementById('auth-signup-fields').style.display='none';
  clearAuthErrors();
}
function switchToReset() {
  document.getElementById('auth-signup-form').style.display='none';
  document.getElementById('auth-login-form').style.display='none';
  document.getElementById('auth-reset-form').style.display='flex';
  document.getElementById('auth-verification-form').style.display='none';
  clearAuthErrors();
}
function clearAuthErrors() {
  ['signup-error','login-error','reset-error','verification-error'].forEach(function(id){
    var el=document.getElementById(id); if(el){el.textContent='';el.style.color='#e74c3c';}
  });
}

function confirmLogout() {
  document.getElementById('confirm-modal-icon').textContent='🚪';
  document.getElementById('confirm-modal-title').textContent='Log Out?';
  document.getElementById('confirm-modal-body').textContent='You will be returned to the sign-in screen.';
  var btn=document.getElementById('confirm-action-btn');
  btn.textContent='Log Out'; btn.className='confirm-action-btn'; btn.onclick=doLogout;
  document.getElementById('confirm-modal-overlay').style.display='flex';
}
function doLogout() {
  closeConfirmModal();
  localStorage.removeItem('dx_logged_in_email');
  clearPendingSignupVerification();
  clearPendingPasswordReset();
  var allSubs=['orders','address','payment','notifications','about','settings','support','edit-profile','change-password','preferences','referrals','legal','privacy-policy','terms-of-use'];
  allSubs.forEach(function(id){var el=document.getElementById(id+'-page');if(el)el.style.display='none';});
  showPage('profile');
}
function confirmDeleteAccount() {
  document.getElementById('confirm-modal-icon').textContent='❌';
  document.getElementById('confirm-modal-title').textContent='Delete Account?';
  document.getElementById('confirm-modal-body').textContent='This will permanently erase your account. This cannot be undone.';
  var btn=document.getElementById('confirm-action-btn');
  btn.textContent='Delete'; btn.className='confirm-action-btn danger-delete'; btn.onclick=doDeleteAccount;
  document.getElementById('confirm-modal-overlay').style.display='flex';
}
function doDeleteAccount() {
  closeConfirmModal();
  var email = localStorage.getItem('dx_logged_in_email');
  if (email) {
    var accounts = getAccounts().filter(function(a){ return a.email !== email; });
    saveAccounts(accounts);
    localStorage.removeItem('dx_logged_in_email');
  }
  wishlist=[]; saveWishlist(); updateWishBadge();
  var allSubs=['orders','address','payment','notifications','about','settings','support','edit-profile','change-password','preferences','referrals','legal','privacy-policy','terms-of-use'];
  allSubs.forEach(function(id){var el=document.getElementById(id+'-page');if(el)el.style.display='none';});
  showPage('profile');
}
function closeConfirmModal() { var o=document.getElementById('confirm-modal-overlay');if(o)o.style.display='none'; }

function togglePrefChannel(type) {
  var inputArea=document.getElementById(type+'-input-area'), toggle=document.getElementById(type+'-toggle');
  if(!inputArea||!toggle) return;
  var willShow=inputArea.style.display==='none';
  inputArea.style.display=willShow?'flex':'none'; toggle.checked=willShow;
}
function onPrefToggle(type,checked) { var inputArea=document.getElementById(type+'-input-area');if(inputArea)inputArea.style.display=checked?'flex':'none'; }

function savePrefContact(type) {
  if(type==='sms') {
    var val=(document.getElementById('sms-phone-input')?document.getElementById('sms-phone-input').value:'').trim();
    var fb=document.getElementById('sms-feedback');
    if(!val||val.length<8){if(fb){fb.style.color='#e74c3c';fb.textContent='Please enter a valid phone number.';}return;}
    localStorage.setItem('dx_sms_phone',val); if(fb){fb.style.color='#4caf50';fb.textContent='✓ Phone saved!';}
  } else {
    var val=(document.getElementById('pref-email-field')?document.getElementById('pref-email-field').value:'').trim();
    var fb=document.getElementById('email-pref-fb');
    if(!isValidEmail(val)){if(fb){fb.style.color='#e74c3c';fb.textContent='Please enter a valid email address.';}return;}
    localStorage.setItem('dx_pref_email',val); if(fb){fb.style.color='#4caf50';fb.textContent='✓ Email saved!';}
  }
}
function saveAllPreferences() {
  document.querySelectorAll('.pref-save-changes-btn').forEach(function(btn) {
    btn.textContent='✓ Saved!'; btn.style.background='linear-gradient(135deg,#2a7a2a,#4caf50)';
    setTimeout(function(){btn.textContent='Save changes';btn.style.background='';},1600);
  });
}

function generateReferralCode() {
  var email = localStorage.getItem('dx_logged_in_email') || 'guest';
  var key = 'dx_referral_code_' + email;
  var code=localStorage.getItem(key);
  if(!code){
    var chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    var part=Array.from({length:6},function(){return chars[Math.floor(Math.random()*chars.length)];}).join('');
    code='DX-'+part;
    localStorage.setItem(key,code);
  }
  return code;
}
function copyReferralCode() {
  var code=document.getElementById('referral-code-display')?document.getElementById('referral-code-display').textContent:'';
  navigator.clipboard.writeText(code).then(function(){
    var box=document.querySelector('.referral-code-box');
    if(box){box.style.background='#e8d08a';setTimeout(function(){box.style.background='';},1200);}
  }).catch(function(){
    var el=document.getElementById('referral-code-display');
    if(el){var r=document.createRange();r.selectNode(el);window.getSelection().removeAllRanges();window.getSelection().addRange(r);}
  });
}
function shareReferralCode() {
  var code=document.getElementById('referral-code-display')?document.getElementById('referral-code-display').textContent:'';
  var link = new URL('project.html?ref='+code, window.location.href).href;
  var text='Shop DYNAMICX — premium men\'s streetwear. Use my referral code '+code+' and get ₦1000 off your first order! 🔥\n'+link;
  if(navigator.share){navigator.share({title:'DYNAMICX Referral',text:text});}
  else{navigator.clipboard.writeText(text).then(function(){alert('Referral message copied!');});}
}

function toggleReferralHistory() {
  var arrow=document.getElementById('referral-history-arrow'),content=document.getElementById('referral-history-content');
  if(!arrow||!content) return;
  var opening=!content.classList.contains('open');
  arrow.classList.toggle('open',opening); content.classList.toggle('open',opening);
  if(opening) loadReferralHistory();
}

function loadReferralHistory() {
  var content = document.getElementById('referral-history-content');
  if (!content) return;
  var email = localStorage.getItem('dx_logged_in_email') || 'guest';
  var history = JSON.parse(localStorage.getItem('dx_referral_history_' + email) || '[]');
  if (!history.length) { content.innerHTML = '<div class="referral-history-empty">No referrals yet. Start inviting friends!</div>'; return; }
  content.innerHTML = history.map(function(ref) { return '<div class="referral-history-item"><span class="referral-history-name">' + ref.name + '</span><span class="referral-history-date">' + ref.date + '</span><span class="referral-history-amount">₦' + ref.amount + '</span></div>'; }).join('');
}

function openEditProfile() {
  var acc = getCurrentAccount();
  var currentName = acc ? (acc.displayName || acc.name) : 'DYNAMICX Member';
  document.getElementById('edit-name-input').value = currentName;
  var savedAvatar = acc ? acc.avatar : null;
  var imgTag=document.getElementById('edit-avatar-img-tag'), fallback=document.getElementById('edit-avatar-fallback');
  if(savedAvatar){imgTag.src=savedAvatar;imgTag.style.display='block';fallback.style.display='none';}
  else{imgTag.style.display='none';fallback.style.display='block';}
  document.getElementById('edit-save-feedback').textContent='';
  window._pendingAvatarDataUrl=null;
  showProfileSub('edit-profile');
}
function handleAvatarUpload(event) {
  var file=event.target.files[0]; if(!file) return;
  var reader=new FileReader();
  reader.onload=function(e){
    var dataUrl=e.target.result;
    document.getElementById('edit-avatar-img-tag').src=dataUrl;
    document.getElementById('edit-avatar-img-tag').style.display='block';
    document.getElementById('edit-avatar-fallback').style.display='none';
    window._pendingAvatarDataUrl=dataUrl;
  };
  reader.readAsDataURL(file);
}
function saveProfileEdits() {
  var newName=document.getElementById('edit-name-input').value.trim();
  var feedback=document.getElementById('edit-save-feedback');
  if(!newName){feedback.style.color='#e74c3c';feedback.textContent='Name cannot be empty.';return;}

  var email = localStorage.getItem('dx_logged_in_email');
  if (email) {
    var accounts = getAccounts();
    var idx = accounts.findIndex(function(a){ return a.email===email; });
    if (idx !== -1) {
      accounts[idx].displayName = newName;
      if (window._pendingAvatarDataUrl) {
        accounts[idx].avatar = window._pendingAvatarDataUrl;
        window._pendingAvatarDataUrl = null;
      }
      saveAccounts(accounts);
    }
  }
  applyProfileData();
  feedback.style.color='#4caf50'; feedback.textContent='✓ Profile updated!';
  setTimeout(function(){showProfileSub('settings');},1200);
}

function openChangePassword() {
  ['pw-current','pw-new','pw-confirm'].forEach(function(id){var input=document.getElementById(id);if(input){input.value='';input.type='password';}});
  document.querySelectorAll('.pw-eye').forEach(function(btn){btn.innerHTML='<i class="fas fa-eye"></i>';});
  var feedback=document.getElementById('pw-save-feedback'); if(feedback)feedback.textContent='';
  var strengthWrap=document.getElementById('pw-strength-wrap'); if(strengthWrap)strengthWrap.style.display='none';
  ['req-length','req-upper','req-number','req-special'].forEach(function(id){var el=document.getElementById(id);if(el)el.classList.remove('met');});
  showProfileSub('change-password');
}
function togglePw(inputId,btn) {
  var input=document.getElementById(inputId), hidden=input.type==='password';
  input.type=hidden?'text':'password';
  btn.innerHTML=hidden?'<i class="fas fa-eye-slash"></i>':'<i class="fas fa-eye"></i>';
}
function checkPwStrength(val) {
  var wrap=document.getElementById('pw-strength-wrap'),fill=document.getElementById('pw-strength-fill'),label=document.getElementById('pw-strength-label');
  if(!val){if(wrap)wrap.style.display='none';return;} if(wrap)wrap.style.display='flex';
  var hasLength=val.length>=8,hasUpper=/[A-Z]/.test(val),hasNumber=/[0-9]/.test(val),hasSpecial=/[^A-Za-z0-9]/.test(val);
  var reqLength=document.getElementById('req-length'),reqUpper=document.getElementById('req-upper'),reqNumber=document.getElementById('req-number'),reqSpecial=document.getElementById('req-special');
  if(reqLength)reqLength.classList.toggle('met',hasLength); if(reqUpper)reqUpper.classList.toggle('met',hasUpper);
  if(reqNumber)reqNumber.classList.toggle('met',hasNumber); if(reqSpecial)reqSpecial.classList.toggle('met',hasSpecial);
  var score=[hasLength,hasUpper,hasNumber,hasSpecial].filter(Boolean).length;
  var levels=[{pct:'25%',color:'#e74c3c',text:'WEAK'},{pct:'50%',color:'#e67e22',text:'FAIR'},{pct:'75%',color:'#f1c40f',text:'GOOD'},{pct:'100%',color:'#4caf50',text:'STRONG'}];
  var lvl=levels[score-1]||levels[0];
  if(fill){fill.style.width=lvl.pct;fill.style.background=lvl.color;} if(label){label.style.color=lvl.color;label.textContent=lvl.text;}
}
function checkSignupPwStrength(val) {
  var wrap=document.getElementById('signup-pw-strength-wrap'),fill=document.getElementById('signup-pw-strength-fill'),label=document.getElementById('signup-pw-strength-label');
  if(!val){if(wrap)wrap.style.display='none';return;} if(wrap)wrap.style.display='flex';
  var hasLength=val.length>=8,hasUpper=/[A-Z]/.test(val),hasNumber=/[0-9]/.test(val),hasSpecial=/[^A-Za-z0-9]/.test(val);
  var reqLength=document.getElementById('signup-req-length'),reqUpper=document.getElementById('signup-req-upper'),reqNumber=document.getElementById('signup-req-number'),reqSpecial=document.getElementById('signup-req-special');
  if(reqLength)reqLength.classList.toggle('met',hasLength); if(reqUpper)reqUpper.classList.toggle('met',hasUpper);
  if(reqNumber)reqNumber.classList.toggle('met',hasNumber); if(reqSpecial)reqSpecial.classList.toggle('met',hasSpecial);
  var score=[hasLength,hasUpper,hasNumber,hasSpecial].filter(Boolean).length;
  var levels=[{pct:'25%',color:'#e74c3c',text:'WEAK'},{pct:'50%',color:'#e67e22',text:'FAIR'},{pct:'75%',color:'#f1c40f',text:'GOOD'},{pct:'100%',color:'#4caf50',text:'STRONG'}];
  var lvl=levels[score-1]||levels[0];
  if(fill){fill.style.width=lvl.pct;fill.style.background=lvl.color;} if(label){label.style.color=lvl.color;label.textContent=lvl.text;}
}
function saveNewPassword() {
  var current=document.getElementById('pw-current').value.trim();
  var newPw=document.getElementById('pw-new').value;
  var confirm=document.getElementById('pw-confirm').value;
  var feedback=document.getElementById('pw-save-feedback');
  function setError(msg){feedback.style.color='#e74c3c';feedback.textContent=msg;}
  if(!current) return setError('Please enter your current password.');
  if(!newPw)   return setError('Please enter a new password.');
  if(newPw.length<8) return setError('Password must be at least 8 characters.');
  if(newPw!==confirm) return setError('Passwords do not match.');
  if(!/[A-Z]/.test(newPw)||!/[0-9]/.test(newPw)||!/[^A-Za-z0-9]/.test(newPw)) return setError('Password does not meet all requirements.');

  var email = localStorage.getItem('dx_logged_in_email');
  var acc = getCurrentAccount();
  if (!acc) return setError('No account found.');
  if (acc.password !== current) return setError('Current password is incorrect.');

  var accounts = getAccounts();
  var idx = accounts.findIndex(function(a){ return a.email===email; });
  if (idx !== -1) { accounts[idx].password = newPw; saveAccounts(accounts); }

  feedback.style.color='#4caf50'; feedback.textContent='✓ Password updated successfully!';
  setTimeout(function(){showProfileSub('settings');},1400);
}

(function initPrefFields() {
  var savedPhone=localStorage.getItem('dx_sms_phone'),savedEmail=localStorage.getItem('dx_pref_email');
  if(savedPhone){var el=document.getElementById('sms-phone-input');if(el)el.value=savedPhone;}
  if(savedEmail){var el=document.getElementById('pref-email-field');if(el)el.value=savedEmail;}
})();

function openWhatsApp(message) {
  var phone  = '2348068360427';
  var appUrl = 'whatsapp://send?phone='+phone+(message?'&text='+encodeURIComponent(message):'');
  var webUrl = 'https://wa.me/'+phone+(message?'?text='+encodeURIComponent(message):'');
  var start  = Date.now();
  window.location.href = appUrl;
  setTimeout(function() { if(Date.now()-start < 1500) window.open(webUrl,'_blank'); }, 1000);
}

function openInstagram() {
  var appUrl = 'instagram://user?username=dynamicx';
  var webUrl = 'https://www.instagram.com/dynamicx/';
  var start  = Date.now();
  window.location.href = appUrl;
  setTimeout(function() { if(Date.now()-start < 1500) window.open(webUrl,'_blank'); }, 1000);
}

function openXTwitter() {
  var appUrl = 'twitter://user?screen_name=dynamicx';
  var webUrl = 'https://x.com/dynamicx';
  var start  = Date.now();
  window.location.href = appUrl;
  setTimeout(function() { if(Date.now()-start < 1500) window.open(webUrl,'_blank'); }, 1000);
}

function openEmail(subject) {
  window.location.href = 'mailto:dynamicx@gmail.com'+(subject?'?subject='+encodeURIComponent(subject):'');
}

var coSelectedPayment = null;
function checkoutCartCount() { return cart.reduce(function(s,i){return s+(i.qty||1);},0); }
function checkoutCartTotal() {
  return cart.reduce(function(s,i){var p=typeof i.price==="string"?parseInt(i.price.replace(/[₦,]/g,"")):i.price||0;return s+p*(i.qty||1);},0);
}
function checkoutDeliveryFee() {
  var subtotal=checkoutCartTotal(),fee=subtotal>=50000?0:2500;
  if(coSelectedPayment==='pod') fee+=500; return fee;
}

function renderCheckoutSummary() {
  var countEl=document.getElementById('co-summary-count'),totalEl=document.getElementById('co-summary-total'),itemsEl=document.getElementById('co-summary-items');
  var count=checkoutCartCount(),subtotal=checkoutCartTotal();
  if(countEl) countEl.textContent=count+' item'+(count!==1?'s':'');
  if(totalEl) totalEl.textContent='₦'+subtotal.toLocaleString();
  if(itemsEl){
    itemsEl.innerHTML=cart.map(function(item){
      var price=typeof item.price==="string"?parseInt(item.price.replace(/[₦,]/g,"")):item.price||0;
      var meta=[item.size?'Size: '+item.size:'',item.qty?'Qty: '+item.qty:''].filter(Boolean).join(' · ');
      return '<div class="co-summary-item"><img class="co-summary-thumb" src="'+item.img+'" alt="'+item.name+'"><div class="co-summary-info"><div class="co-summary-name">'+item.name+'</div><div class="co-summary-meta">'+meta+'</div></div><div class="co-summary-price">₦'+(price*(item.qty||1)).toLocaleString()+'</div></div>';
    }).join('');
  }
}
function toggleSummaryBar() {
  var itemsEl=document.getElementById('co-summary-items'),chevron=document.getElementById('co-summary-chevron');
  if(!itemsEl) return; var show=itemsEl.style.display==='none';
  itemsEl.style.display=show?'block':'none'; if(chevron)chevron.style.transform=show?'rotate(180deg)':'rotate(0deg)';
}

function goToStep(n) {
  [1,2,3].forEach(function(i){
    var panel=document.getElementById('co-panel-'+i);
    if(panel){panel.style.display=i===n?'block':'none';panel.classList.toggle('active',i===n);}
    var dot=document.getElementById('step-dot-'+i);
    if(dot){dot.classList.remove('active','done');if(i<n)dot.classList.add('done');if(i===n)dot.classList.add('active');}
  });
  var line1=document.getElementById('co-line-1'),line2=document.getElementById('co-line-2');
  if(line1)line1.classList.toggle('done',n>1); if(line2)line2.classList.toggle('done',n>2);
  window.scrollTo({top:0,behavior:'smooth'});
}

function prefillDeliveryFromSaved() {
  var addr=getSavedAddress(); if(!addr) return;
  var map={name:'co-name',phone:'co-phone',street:'co-street',city:'co-city',state:'co-state',landmark:'co-landmark',note:'co-note'};
  Object.keys(map).forEach(function(key){var el=document.getElementById(map[key]);if(el&&addr[key])el.value=addr[key];});
}

function validateDelivery() {
  var name  =(document.getElementById('co-name')  ?document.getElementById('co-name').value  :'').trim();
  var phone =(document.getElementById('co-phone') ?document.getElementById('co-phone').value :'').trim();
  var street=(document.getElementById('co-street')?document.getElementById('co-street').value:'').trim();
  var city  =(document.getElementById('co-city')  ?document.getElementById('co-city').value  :'').trim();
  var state =(document.getElementById('co-state') ?document.getElementById('co-state').value :'').trim();
  var errEl =document.getElementById('co-error-1');
  if(!name||!phone||!street||!city||!state){if(errEl)errEl.textContent='Please fill in all required fields.';return;}
  if(phone.length<8){if(errEl)errEl.textContent='Please enter a valid phone number.';return;}
  if(errEl)errEl.textContent='';
  saveAddress({
    name:name,phone:phone,street:street,city:city,state:state,
    landmark:(document.getElementById('co-landmark')?document.getElementById('co-landmark').value:'').trim(),
    note:(document.getElementById('co-note')?document.getElementById('co-note').value:'').trim()
  });
  goToStep(2);
}

function selectPayment(type) {
  coSelectedPayment=type;
  ['card','transfer','pod'].forEach(function(t){
    var opt=document.getElementById('pay-'+t),detail=document.getElementById('co-detail-'+t);
    if(opt)opt.classList.toggle('selected',t===type); if(detail)detail.style.display=t===type?'flex':'none';
  });
  var errEl=document.getElementById('co-error-2'); if(errEl)errEl.textContent='';
}
function formatCardNum(input) { var d=input.value.replace(/\D/g,'').slice(0,16);input.value=d.replace(/(.{4})/g,'$1 ').trim(); }
function formatExpiry(input)  { var d=input.value.replace(/\D/g,'').slice(0,4);if(d.length>2)d=d.slice(0,2)+' / '+d.slice(2);input.value=d; }
function copyAccountNumber() {
  var acct=document.getElementById('co-bank-acct')?document.getElementById('co-bank-acct').textContent:'';
  var btn=document.querySelector('.co-copy-btn');
  navigator.clipboard.writeText(acct).then(function(){if(btn){var orig=btn.innerHTML;btn.innerHTML='<i class="fas fa-check"></i> Copied!';setTimeout(function(){btn.innerHTML=orig;},1500);}});
}
function validatePayment() {
  var errEl=document.getElementById('co-error-2');
  if(!coSelectedPayment){if(errEl)errEl.textContent='Please select a payment method.';return;}
  if(coSelectedPayment==='card'){
    var num =(document.getElementById('co-card-num')   ?document.getElementById('co-card-num').value   :'').replace(/\s/g,'');
    var exp =(document.getElementById('co-card-expiry')?document.getElementById('co-card-expiry').value:'').trim();
    var cvv =(document.getElementById('co-card-cvv')   ?document.getElementById('co-card-cvv').value   :'').trim();
    var cname=(document.getElementById('co-card-name') ?document.getElementById('co-card-name').value  :'').trim();
    if(num.length<16||!exp||cvv.length<3||!cname){if(errEl)errEl.textContent='Please fill in all card details.';return;}
  }
  if(errEl)errEl.textContent=''; renderReview(); goToStep(3);
}

function renderReview() {
  var itemsEl=document.getElementById('co-review-items');
  if(itemsEl){
    itemsEl.innerHTML=cart.map(function(item){
      var price=typeof item.price==="string"?parseInt(item.price.replace(/[₦,]/g,"")):item.price||0;
      var meta=[item.size?'Size: '+item.size:'',item.qty?'Qty: '+item.qty:''].filter(Boolean).join(' · ');
      return '<div class="co-review-item-row"><img class="co-review-thumb" src="'+item.img+'" alt="'+item.name+'"><div class="co-review-item-info"><div class="co-review-item-name">'+item.name+'</div><div class="co-review-item-meta">'+meta+'</div><div class="co-review-item-price">₦'+(price*(item.qty||1)).toLocaleString()+'</div></div></div>';
    }).join('');
  }
  var addrEl=document.getElementById('co-review-addr');
  if(addrEl){var addr=getSavedAddress()||{};addrEl.innerHTML='<strong>'+(addr.name||'')+'</strong><br>'+(addr.street||'')+', '+(addr.city||'')+', '+(addr.state||'')+'<br>'+(addr.landmark?addr.landmark+'<br>':'')+(addr.phone||'');}
  var payEl=document.getElementById('co-review-pay-text');
  if(payEl){var labels={card:'Debit / Credit Card',transfer:'Bank Transfer',pod:'Pay On Delivery'};payEl.textContent=labels[coSelectedPayment]||'';}
  var subtotal=checkoutCartTotal(),delivery=checkoutDeliveryFee();
  var subEl=document.getElementById('co-price-subtotal'),delEl=document.getElementById('co-price-delivery'),totEl=document.getElementById('co-price-total');
  if(subEl)subEl.textContent='₦'+subtotal.toLocaleString();
  if(delEl)delEl.textContent=delivery===0?'FREE':'₦'+delivery.toLocaleString();
  if(totEl)totEl.textContent='₦'+(subtotal+delivery).toLocaleString();
}

function placeOrder() {
  var errEl=document.getElementById('co-error-3');
  if(cart.length===0){if(errEl)errEl.textContent='Your cart is empty.';return;}
  if(!getSavedAddress()){if(errEl)errEl.textContent='Please add a delivery address first.';goToStep(1);return;}
  if(!coSelectedPayment){if(errEl)errEl.textContent='Please select a payment method.';goToStep(2);return;}
  var orderNum='DX'+Date.now().toString().slice(-8);
  var orderNumEl=document.getElementById('co-order-num'); if(orderNumEl)orderNumEl.textContent='#'+orderNum;

  var waLink=document.getElementById('co-whatsapp-link');
  if(waLink){
    var total=checkoutCartTotal()+checkoutDeliveryFee();
    var addr=getSavedAddress()||{};
    var items=cart.map(function(i){return '• '+i.name+(i.size?' ('+i.size+')':'')+' x'+(i.qty||1);}).join('\n');
    var payLabel={card:'Card',transfer:'Bank Transfer',pod:'Pay on Delivery'}[coSelectedPayment]||coSelectedPayment;
    var msg='Hi DYNAMICX! 👋\n\nNew order placed!\n\nOrder No: #'+orderNum+'\n\nItems:\n'+items+'\n\nDeliver to: '+(addr.name||'')+', '+(addr.street||'')+', '+(addr.city||'')+', '+(addr.state||'')+'\nPhone: '+(addr.phone||'')+'\n\nTotal: ₦'+total.toLocaleString()+'\nPayment: '+payLabel+'\n\nPlease confirm my order. Thank you!';
    var phone  = '2348068360427';
    var appUrl = 'whatsapp://send?phone='+phone+'&text='+encodeURIComponent(msg);
    var webUrl = 'https://wa.me/'+phone+'?text='+encodeURIComponent(msg);
    waLink.href = appUrl;
    waLink.onclick = function(e) {
      e.preventDefault();
      var start = Date.now();
      window.location.href = appUrl;
      setTimeout(function() { if(Date.now()-start < 1500) window.open(webUrl,'_blank'); }, 1000);
    };
  }
  var storeBtn=document.querySelector('.co-success-store-btn');
  if(storeBtn) { storeBtn.href='project.html'; storeBtn.onclick=null; }
  var orderObj = {
  orderNum: orderNum,
  date: new Date().toISOString(),
  items: cart.map(function(i){return {name:i.name,img:i.img,size:i.size||'',color:i.color||'',qty:i.qty||1,price:(typeof i.price==="string"?parseInt(i.price.replace(/[₦,]/g,"")):i.price||0)};}),
  subtotal: checkoutCartTotal(),
  delivery: checkoutDeliveryFee(),
  total: checkoutCartTotal()+checkoutDeliveryFee(),
  payment: coSelectedPayment,
  address: getSavedAddress()||{},
  status: 'Processing'
};
var orders = getOrders();
orders.push(orderObj);
saveOrders(orders);

  cart=[]; saveCart(); updateCartBadge();
  var successEl=document.getElementById('co-success'); if(successEl)successEl.style.display='flex';
}

function initCheckoutPage() {
  if(!document.getElementById('co-panel-1')) return;
  if(cart.length===0){alert('Your cart is empty. Add something before checking out!');window.location.href='project.html';return;}
  renderCheckoutSummary(); prefillDeliveryFromSaved(); goToStep(1);
}
initCheckoutPage();
