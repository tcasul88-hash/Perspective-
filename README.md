<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Perspective Publications</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Newsreader:ital,opsz,wght@0,6..72,200..600;1,6..72,200..600&display=swap" rel="stylesheet">
<style>
  :root{
    --paper:#f4ecdd;--paper-2:#ece0cb;--paper-3:#e3d3b8;
    --ink:#221d16;--ink-soft:#5b5044;
    --forest:#26302a;--forest-2:#1c241f;
    --terracotta:#bf4a29;--terracotta-deep:#9c3a1f;--ochre:#cf963f;
    --cream:#f0e7d6;--rule:rgba(34,29,22,.16);
  }
  *{margin:0;padding:0;box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{background:var(--paper);color:var(--ink);font-family:"Newsreader",Georgia,serif;font-optical-sizing:auto;font-size:18px;line-height:1.6;overflow-x:hidden;position:relative}
  body::before{content:"";position:fixed;inset:0;pointer-events:none;z-index:9999;opacity:.045;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
  h1,h2,h3,h4{font-family:"Fraunces",Georgia,serif;font-weight:380;line-height:1.02;letter-spacing:-.015em}
  em{font-style:italic}
  ::selection{background:var(--terracotta);color:var(--paper)}
  .wrap{max-width:1180px;margin:0 auto;padding:0 32px}
  .eyebrow{font-family:"Newsreader",serif;font-size:12.5px;font-weight:500;text-transform:uppercase;letter-spacing:.32em;color:var(--terracotta)}

  nav{position:sticky;top:0;z-index:100;background:rgba(244,236,221,.82);backdrop-filter:blur(10px);border-bottom:1px solid var(--rule)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;height:70px;position:relative}
  .brand{font-family:"Fraunces",serif;font-size:23px;font-weight:500;letter-spacing:-.02em;text-decoration:none;color:var(--ink);background:none;border:none;cursor:pointer}
  .brand b{color:var(--terracotta);font-weight:500}
  .nav-links{display:flex;gap:34px;align-items:center}
  .nav-links a{color:var(--ink);text-decoration:none;font-size:15.5px;position:relative;cursor:pointer}
  .nav-links a:not(.btn)::after{content:"";position:absolute;left:0;bottom:-4px;height:1.5px;width:0;background:var(--terracotta);transition:width .3s ease}
  .nav-links a:not(.btn):hover::after,.nav-links a:not(.btn).active::after{width:100%}
  .nav-links a.active{color:var(--terracotta)}
  .btn{display:inline-block;background:var(--terracotta);color:var(--paper)!important;padding:11px 22px;border-radius:2px;font-size:15px;letter-spacing:.01em;text-decoration:none;border:none;cursor:pointer;transition:background .25s ease,transform .25s ease;font-family:"Newsreader",serif}
  .btn:hover{background:var(--terracotta-deep);transform:translateY(-1px)}
  .nav-toggle{display:none;background:none;border:none;cursor:pointer;font-family:"Fraunces",serif;font-size:15px;color:var(--ink);letter-spacing:.04em}

  .page{display:none}
  .page.active{display:block}

  .page-hero{padding:78px 0 64px;border-bottom:1px solid var(--rule);position:relative}
  .page-hero .eyebrow{display:block;margin-bottom:22px}
  .page-hero h1{font-size:clamp(40px,7.5vw,92px);font-weight:300;max-width:15ch;margin-bottom:26px}
  .page-hero h1 em{color:var(--terracotta)}
  .page-hero .lede{max-width:50ch;font-size:21px;color:var(--ink-soft);line-height:1.55}

  .hero{position:relative;padding:88px 0 96px}
  .hero-meta{display:flex;justify-content:space-between;align-items:baseline;border-bottom:1px solid var(--rule);padding-bottom:18px;margin-bottom:54px;flex-wrap:wrap;gap:12px}
  .hero-meta .right{font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-soft)}
  .hero h1{font-size:clamp(46px,9vw,118px);font-weight:300;max-width:14ch;margin-bottom:34px}
  .hero h1 em{font-weight:340;color:var(--terracotta)}
  .hero-bottom{display:flex;justify-content:space-between;align-items:flex-end;gap:40px;flex-wrap:wrap}
  .hero-lede{max-width:46ch;font-size:21px;color:var(--ink-soft);line-height:1.55}
  .hero-lede strong{color:var(--ink);font-weight:500}
  .hero-cta{display:flex;flex-direction:column;gap:14px;align-items:flex-start}
  .hero-cta .note{font-size:13.5px;color:var(--ink-soft);font-style:italic}

  .seal{position:absolute;top:64px;right:24px;width:128px;height:128px;animation:spin 26s linear infinite}
  @keyframes spin{to{transform:rotate(360deg)}}
  .seal text{font-family:"Newsreader",serif;font-size:11.6px;letter-spacing:.18em;fill:var(--forest);text-transform:uppercase;font-weight:500}
  .seal .star{font-family:"Fraunces",serif;font-size:26px;fill:var(--terracotta)}

  .way{padding:96px 0}
  .way-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:46px}
  .way-card{display:block;text-decoration:none;color:var(--ink);background:var(--paper-2);padding:38px 36px;border-radius:3px;transition:transform .3s ease,background .3s ease;position:relative;overflow:hidden;cursor:pointer}
  .way-card:hover{transform:translateY(-3px);background:var(--paper-3)}
  .way-card .num{font-size:13px;color:var(--terracotta);letter-spacing:.1em}
  .way-card h3{font-size:30px;font-weight:380;margin:14px 0 8px}
  .way-card p{font-size:16.5px;color:var(--ink-soft)}
  .way-card .go{margin-top:20px;display:inline-block;font-size:14px;text-transform:uppercase;letter-spacing:.16em;color:var(--terracotta)}
  .way-card .go::after{content:" →";transition:margin .25s ease}
  .way-card:hover .go::after{margin-left:5px}

  .reveal{opacity:0;transform:translateY(26px);transition:opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)}
  .reveal.in{opacity:1;transform:none}

  .dark{background:var(--forest);color:var(--cream);padding:104px 0;position:relative}
  .dark .eyebrow{color:var(--ochre)}
  .split{display:grid;grid-template-columns:1fr 1.55fr;gap:60px;align-items:start}
  .dark h2{font-size:clamp(30px,4vw,46px);font-weight:300;color:var(--cream);line-height:1.06}
  .dark h2 em{color:var(--ochre)}
  .bodytext p{font-size:20px;line-height:1.66;color:#d8cdb8;margin-bottom:22px;max-width:56ch}
  .bodytext p:last-child{margin-bottom:0}
  .dropcap::first-letter{font-family:"Fraunces",serif;float:left;font-size:78px;line-height:.78;padding:8px 14px 0 0;color:var(--ochre);font-weight:400}

  .genres,.looking,.way{padding:104px 0}
  .section-head{display:flex;justify-content:space-between;align-items:flex-end;gap:30px;margin-bottom:54px;flex-wrap:wrap}
  .section-head h2{font-size:clamp(32px,5vw,58px);font-weight:300;max-width:16ch}
  .section-head p{max-width:34ch;color:var(--ink-soft);font-size:17px}

  .genre-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:0;border-top:1px solid var(--rule)}
  .genre{padding:40px 32px 46px;border-bottom:1px solid var(--rule);border-right:1px solid var(--rule);transition:background .35s ease;position:relative}
  .genre:nth-child(2n){border-right:none}
  .genre:hover{background:var(--paper-2)}
  .genre .num{font-size:13px;color:var(--terracotta);letter-spacing:.1em;display:block;margin-bottom:24px}
  .genre h3{font-size:30px;font-weight:380;margin-bottom:12px;transition:transform .35s ease}
  .genre:hover h3{transform:translateX(4px)}
  .genre p{font-size:17px;color:var(--ink-soft)}
  .genre p .lead{font-style:italic;color:var(--ink);display:block;margin-bottom:8px;font-size:18px}

  .process{padding:104px 0}
  .proc-list{margin-top:50px;border-top:1px solid var(--rule)}
  .proc-row{display:grid;grid-template-columns:90px 1fr auto;gap:36px;align-items:start;padding:38px 0;border-bottom:1px solid var(--rule)}
  .proc-row .n{font-family:"Fraunces",serif;font-size:56px;color:var(--terracotta);font-weight:300;line-height:.8}
  .proc-row h3{font-size:26px;font-weight:400;margin-bottom:8px}
  .proc-row p{font-size:17px;color:var(--ink-soft);max-width:54ch}
  .proc-row .tag{justify-self:end;align-self:center;font-size:12px;text-transform:uppercase;letter-spacing:.14em;color:var(--terracotta);border:1px solid var(--terracotta);padding:5px 12px;border-radius:99px;white-space:nowrap}

  .phase-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:46px}
  .phase{background:#2f3a33;padding:30px 26px;border-radius:3px;border-top:3px solid var(--terracotta)}
  .phase span{font-size:12px;text-transform:uppercase;letter-spacing:.18em;color:var(--ochre)}
  .phase h4{font-family:"Fraunces",serif;font-size:21px;font-weight:400;margin:10px 0 8px;color:var(--cream)}
  .phase p{font-size:15.5px;color:#cabda7}

  .look-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:48px}
  .look-card{background:var(--paper-2);padding:34px 32px;border-radius:3px}
  .look-card h4{font-family:"Fraunces",serif;font-size:22px;font-weight:400;margin-bottom:10px}
  .look-card p{font-size:16.5px;color:var(--ink-soft)}
  .look-card .lbl{font-size:12px;text-transform:uppercase;letter-spacing:.2em;color:var(--terracotta);display:block;margin-bottom:14px}

  .submit-guide{padding:96px 0 40px}
  .guide-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:44px}
  .guide{background:var(--paper-2);padding:28px 24px;border-radius:3px}
  .guide .num{font-family:"Fraunces",serif;font-size:38px;color:var(--terracotta);font-weight:300;line-height:1}
  .guide h4{font-family:"Fraunces",serif;font-size:19px;font-weight:420;margin:12px 0 7px}
  .guide p{font-size:15px;color:var(--ink-soft)}

  .submit{background:var(--forest);color:var(--cream);padding:96px 0 110px}
  .submit .eyebrow{color:var(--ochre)}
  .submit-head{text-align:center;max-width:32ch;margin:0 auto 18px}
  .submit-head h2{font-size:clamp(32px,5vw,58px);font-weight:300;color:var(--cream);line-height:1.04}
  .submit-head h2 em{color:var(--ochre)}
  .submit-sub{text-align:center;color:#cabda7;max-width:52ch;margin:0 auto 52px;font-size:18px}
  form{max-width:720px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:22px}
  .field{display:flex;flex-direction:column;gap:8px}
  .field.full{grid-column:1/-1}
  label{font-size:13px;text-transform:uppercase;letter-spacing:.16em;color:#b7aa92}
  input,select,textarea{background:transparent;border:none;border-bottom:1.5px solid #4a5249;color:var(--cream);font-family:"Newsreader",serif;font-size:18px;padding:9px 2px;transition:border-color .3s ease}
  textarea{resize:vertical;min-height:62px;line-height:1.5}
  input:focus,select:focus,textarea:focus{outline:none;border-color:var(--ochre)}
  select option{background:var(--forest);color:var(--cream)}
  input::placeholder,textarea::placeholder{color:#7c8378}
  form .btn{grid-column:1/-1;justify-self:center;margin-top:14px;padding:15px 46px;font-size:17px}
  .form-note{grid-column:1/-1;text-align:center;font-size:14px;color:#9aa090;font-style:italic;margin-top:-2px}

  .cta-strip{padding:80px 0;text-align:center;border-top:1px solid var(--rule)}
  .cta-strip h2{font-size:clamp(30px,4.5vw,52px);font-weight:300;max-width:18ch;margin:0 auto 26px}
  .cta-strip h2 em{color:var(--terracotta)}

  footer{background:var(--forest-2);color:var(--cream);padding:72px 0 40px}
  .foot-top{display:flex;justify-content:space-between;align-items:flex-start;gap:40px;flex-wrap:wrap;border-bottom:1px solid rgba(240,231,214,.14);padding-bottom:40px}
  .foot-brand{font-family:"Fraunces",serif;font-size:34px;font-weight:400}
  .foot-brand b{color:var(--ochre);font-weight:400}
  .foot-tag{color:#a9ad9d;font-style:italic;margin-top:8px;font-size:18px}
  .foot-cols{display:flex;gap:64px;flex-wrap:wrap}
  .foot-col h5{font-size:12px;text-transform:uppercase;letter-spacing:.2em;color:var(--ochre);margin-bottom:16px}
  .foot-col a{display:block;color:var(--cream);text-decoration:none;font-size:16px;margin-bottom:9px;opacity:.85;transition:opacity .25s;cursor:pointer}
  .foot-col a:hover{opacity:1}
  .foot-bottom{display:flex;justify-content:space-between;padding-top:26px;color:#8f9486;font-size:13.5px;flex-wrap:wrap;gap:8px}

  @media (max-width:860px){
    .nav-toggle{display:block}
    .nav-links{position:absolute;top:70px;left:-32px;right:-32px;width:100vw;background:var(--paper);border-bottom:1px solid var(--rule);flex-direction:column;gap:0;padding:6px 0;display:none}
    .nav-links.open{display:flex}
    .nav-links a{padding:15px 32px;width:100%;font-size:17px}
    .nav-links a:not(.btn)::after{display:none}
    .nav-links a.btn{margin:12px 32px 16px;width:auto;text-align:center}
    .split,.genre-grid,.proc-row,.look-grid,.way-grid,.phase-grid,.guide-grid,form{grid-template-columns:1fr}
    .genre{border-right:none}
    .proc-row{gap:10px}
    .proc-row .n{font-size:44px}
    .proc-row .tag{justify-self:start;margin-top:6px}
    .seal{display:none}
    .field.full,form .btn{grid-column:1}
    .hero{padding:54px 0 64px}
    .wrap{padding:0 22px}
  }
  @media (prefers-reduced-motion:reduce){
    *{animation:none!important;transition:none!important}
    .reveal{opacity:1;transform:none}
  }
</style>
</head>
<body>

<nav>
  <div class="wrap nav-inner">
    <button class="brand" data-route="home">Perspective<b>.</b></button>
    <button class="nav-toggle" aria-expanded="false" aria-label="Toggle menu">Menu</button>
    <div class="nav-links">
      <a data-route="mission">Mission</a>
      <a data-route="publish">What We Publish</a>
      <a data-route="process">Process</a>
      <a class="shop-link" target="_blank" rel="noopener">Shop Books ↗</a>
      <a data-route="submit" class="btn">Submit Your Story</a>
    </div>
  </div>
</nav>

<main>

  <!-- ============ HOME ============ -->
  <div class="page" id="page-home">
    <header class="hero">
      <div class="wrap">
        <div class="hero-meta reveal">
          <span class="eyebrow">An independent press for untold voices</span>
          <span class="right">Est. MMXXVI &nbsp;·&nbsp; Now open for submissions</span>
        </div>
        <svg class="seal" viewBox="0 0 128 128" aria-hidden="true">
          <defs><path id="circle" d="M64,64 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"/></defs>
          <text><textPath href="#circle" startOffset="0">· Challenge · Heal · Transform </textPath></text>
          <text class="star" x="64" y="74" text-anchor="middle">✦</text>
        </svg>
        <h1 class="reveal">Stories that challenge, heal <em>&amp;</em> transform.</h1>
        <div class="hero-bottom">
          <p class="hero-lede reveal">We are a boutique press built for the manuscripts traditional publishing overlooks — <strong>authentic, courageous, and clear</strong> voices, with something true to say.</p>
          <div class="hero-cta reveal">
            <a class="btn" data-route="submit">Submit your manuscript</a>
            <span class="note">Reviewed within 3–4 weeks. Real humans. Every time.</span>
          </div>
        </div>
      </div>
    </header>
    <section class="way">
      <div class="wrap">
        <div class="section-head reveal" style="margin-bottom:0">
          <h2>Where to begin</h2>
          <p>Four doors into Perspective. Step through whichever one calls you.</p>
        </div>
        <div class="way-grid">
          <a class="way-card reveal" data-route="mission"><span class="num">01</span><h3>Our Mission</h3><p>Why we started, and the gatekeeper problem we exist to solve.</p><span class="go">Read the why</span></a>
          <a class="way-card reveal" data-route="publish"><span class="num">02</span><h3>What We Publish</h3><p>The four genres we champion — and the voice we look for.</p><span class="go">See the list</span></a>
          <a class="way-card reveal" data-route="process"><span class="num">03</span><h3>The Process</h3><p>A clear, humane path from your inbox to a bound book.</p><span class="go">How it works</span></a>
          <a class="way-card reveal" data-route="submit"><span class="num">04</span><h3>Submit Your Story</h3><p>Guidelines and a query form, ready when you are.</p><span class="go">Open the door</span></a>
        </div>
      </div>
    </section>
    <section class="cta-strip">
      <div class="wrap">
        <h2 class="reveal">We are opening our doors to new voices. <em>Is one of them yours?</em></h2>
        <a class="btn reveal" data-route="submit">Submit your manuscript</a>
      </div>
    </section>
  </div>

  <!-- ============ MISSION ============ -->
  <div class="page" id="page-mission">
    <header class="page-hero">
      <div class="wrap">
        <span class="eyebrow reveal">The Why</span>
        <h1 class="reveal">Publishing has a <em>gatekeeper</em> problem.</h1>
        <p class="lede reveal">We exist to open the door — to find the necessary stories that never make it past the threshold, and give them the room they deserve.</p>
      </div>
    </header>
    <section class="dark">
      <div class="wrap split">
        <div class="reveal">
          <span class="eyebrow">The Perspective Promise</span>
          <h2>The story you're most <em>afraid</em> to tell is usually the one the world most needs to read.</h2>
        </div>
        <div class="bodytext reveal">
          <p class="dropcap">The most necessary stories — the ones that quietly change a life — too often never make it into the world. They sit in drawers and draft folders, written by people who were told their perspective wasn't marketable enough, polished enough, or familiar enough.</p>
          <p>We disagree. We prioritize manuscripts that offer a view we haven't heard — particularly from voices underrepresented in traditional publishing. Our work is to find those voices, sit with them, and shape raw journal pages into a book that someone, somewhere, will hold like a lifeline.</p>
          <p>No anonymous slush pile. No cold form rejections. Just a small team that reads closely and partners deeply — from first edit to bound book.</p>
        </div>
      </div>
    </section>
    <section class="looking">
      <div class="wrap">
        <div class="section-head reveal" style="margin-bottom:0">
          <h2>What we believe</h2>
          <p>Four convictions that shape every book we take on.</p>
        </div>
        <div class="look-grid">
          <div class="look-card reveal"><span class="lbl">Conviction I</span><h4>Voice over polish.</h4><p>A true sentence beats a clever one. We'd rather develop a raw, honest manuscript than publish a safe, forgettable one.</p></div>
          <div class="look-card reveal"><span class="lbl">Conviction II</span><h4>Partnership over transaction.</h4><p>An author isn't a line item. From the first edit to launch day, you have a team beside you — not a queue ahead of you.</p></div>
          <div class="look-card reveal"><span class="lbl">Conviction III</span><h4>Access over exclusivity.</h4><p>The door should be open. We read every query that follows our guidelines, and we tell you what we think.</p></div>
          <div class="look-card reveal"><span class="lbl">Conviction IV</span><h4>Stories that do work.</h4><p>We publish books that challenge, heal, and transform — for the writer and the reader both.</p></div>
        </div>
      </div>
    </section>
    <section class="cta-strip">
      <div class="wrap">
        <h2 class="reveal">Ready to tell the story you've been holding? <em>We're listening.</em></h2>
        <a class="btn reveal" data-route="submit">Submit your manuscript</a>
      </div>
    </section>
  </div>

  <!-- ============ PUBLISH ============ -->
  <div class="page" id="page-publish">
    <header class="page-hero">
      <div class="wrap">
        <span class="eyebrow reveal">The List</span>
        <h1 class="reveal">True stories, told with <em>nerve.</em></h1>
        <p class="lede reveal">Four homes for the books we love to make. If your manuscript lives here, we want to read it.</p>
      </div>
    </header>
    <section class="genres">
      <div class="wrap">
        <div class="genre-grid">
          <div class="genre reveal"><span class="num">01</span><h3>Memoir</h3><p><span class="lead">The shape of a life, told true.</span> The moments that made you — rendered with honesty, craft, and the courage to leave nothing safe on the page.</p></div>
          <div class="genre reveal"><span class="num">02</span><h3>Personal Growth</h3><p><span class="lead">Hard-won wisdom, made useful.</span> Not platitudes — lived insight that hands the reader something they can actually carry forward.</p></div>
          <div class="genre reveal"><span class="num">03</span><h3>Narrative Non-fiction</h3><p><span class="lead">Real events with the pull of a novel.</span> Rigorously true, beautifully told — the kind of book a reader can't put down and can't stop thinking about.</p></div>
          <div class="genre reveal"><span class="num">04</span><h3>Transformative Essays</h3><p><span class="lead">Ideas that don't leave you where they found you.</span> Collections and long-form pieces that reframe how a reader sees the world.</p></div>
        </div>
      </div>
    </section>
    <section class="dark">
      <div class="wrap">
        <div class="section-head reveal" style="margin-bottom:46px">
          <h2 style="color:var(--cream)">What we're looking for</h2>
          <p style="color:#cabda7">A few things that help us say yes.</p>
        </div>
        <div class="look-grid">
          <div class="look-card reveal" style="background:#2f3a33"><span class="lbl" style="color:var(--ochre)">Voice</span><h4 style="color:var(--cream)">Authentic, courageous, clear.</h4><p style="color:#cabda7">We'd rather read a true sentence than a clever one. Write like it matters.</p></div>
          <div class="look-card reveal" style="background:#2f3a33"><span class="lbl" style="color:var(--ochre)">Status</span><h4 style="color:var(--cream)">Complete, or nearly there.</h4><p style="color:#cabda7">We prefer finished manuscripts — or at least 75% drafted — for an initial query.</p></div>
          <div class="look-card reveal" style="background:#2f3a33"><span class="lbl" style="color:var(--ochre)">Perspective</span><h4 style="color:var(--cream)">A view we haven't heard.</h4><p style="color:#cabda7">We prioritize voices underrepresented in traditional publishing.</p></div>
          <div class="look-card reveal" style="background:#2f3a33"><span class="lbl" style="color:var(--ochre)">Purpose</span><h4 style="color:var(--cream)">A reader in mind.</h4><p style="color:#cabda7">Know who your book is for — and what it will give them.</p></div>
        </div>
      </div>
    </section>
    <section class="cta-strip">
      <div class="wrap">
        <h2 class="reveal">Think your book belongs on this list? <em>Show us.</em></h2>
        <a class="btn reveal" data-route="submit">Submit your manuscript</a>
      </div>
    </section>
  </div>

  <!-- ============ PROCESS ============ -->
  <div class="page" id="page-process">
    <header class="page-hero">
      <div class="wrap">
        <span class="eyebrow reveal">How It Works</span>
        <h1 class="reveal">From your inbox <em>to a bound book.</em></h1>
        <p class="lede reveal">A clear, humane path. No mystery, no months of silence — here's exactly what happens after you hit send.</p>
      </div>
    </header>
    <section class="process">
      <div class="wrap">
        <span class="eyebrow reveal">Getting in</span>
        <div class="proc-list">
          <div class="proc-row reveal"><span class="n">1</span><div><h3>Submit your query</h3><p>Send your hook, a 500-word synopsis, your target audience, and the first 15 pages of your manuscript.</p></div><span class="tag">5 minutes</span></div>
          <div class="proc-row reveal"><span class="n">2</span><div><h3>We read closely</h3><p>Every submission gets a careful read from a real person on our team. No anonymous slush pile.</p></div><span class="tag">3–4 weeks</span></div>
          <div class="proc-row reveal"><span class="n">3</span><div><h3>Discovery session</h3><p>If we see potential, we'll invite you to a virtual conversation about your vision and our editorial approach.</p></div><span class="tag">30 minutes</span></div>
          <div class="proc-row reveal"><span class="n">4</span><div><h3>We build it together</h3><p>Sign with us and you receive your "Welcome to Perspective" packet — your roadmap for everything that follows.</p></div><span class="tag">The beginning</span></div>
        </div>
      </div>
    </section>
    <section class="dark">
      <div class="wrap">
        <div class="section-head reveal" style="margin-bottom:10px">
          <h2 style="color:var(--cream)">After "yes": your roadmap</h2>
          <p style="color:#cabda7">Once you sign, the real work begins. Four phases take you from manuscript to launch.</p>
        </div>
        <div class="phase-grid">
          <div class="phase reveal"><span>Phase 1</span><h4>Editorial Deep Dive</h4><p>We set dates and dig into first-round edits together.</p></div>
          <div class="phase reveal"><span>Phase 2</span><h4>Visual Concept</h4><p>A questionnaire shapes the direction of your book cover design.</p></div>
          <div class="phase reveal"><span>Phase 3</span><h4>Production &amp; Logistics</h4><p>ISBN, print-on-demand setup, and the technical groundwork.</p></div>
          <div class="phase reveal"><span>Phase 4</span><h4>Launch Strategy</h4><p>We plan the countdown and take your book out into the world.</p></div>
        </div>
      </div>
    </section>
    <section class="cta-strip">
      <div class="wrap">
        <h2 class="reveal">It starts with one email. <em>Take the first step.</em></h2>
        <a class="btn reveal" data-route="submit">Submit your manuscript</a>
      </div>
    </section>
  </div>

  <!-- ============ SUBMIT ============ -->
  <div class="page" id="page-submit">
    <header class="page-hero">
      <div class="wrap">
        <span class="eyebrow reveal">Open Door</span>
        <h1 class="reveal">Submit your <em>story.</em></h1>
        <p class="lede reveal">Four things to include, and a form that does the formatting for you. We review every submission within 3–4 weeks.</p>
      </div>
    </header>
    <section class="submit-guide">
      <div class="wrap">
        <span class="eyebrow reveal">What to include</span>
        <div class="guide-grid">
          <div class="guide reveal"><span class="num">1</span><h4>The Hook</h4><p>A 1–2 sentence pitch of your story.</p></div>
          <div class="guide reveal"><span class="num">2</span><h4>The Synopsis</h4><p>A ~500-word overview of the narrative arc.</p></div>
          <div class="guide reveal"><span class="num">3</span><h4>The Audience</h4><p>Who is this book for?</p></div>
          <div class="guide reveal"><span class="num">4</span><h4>Sample Pages</h4><p>The first 15 pages, as a PDF or Word doc.</p></div>
        </div>
      </div>
    </section>
    <section class="submit">
      <div class="wrap">
        <div class="submit-head reveal">
          <span class="eyebrow">Your Query</span>
          <h2>Is yours one of the voices <em>we've been waiting for?</em></h2>
        </div>
        <p class="submit-sub reveal">Fill this out and hit send — we'll open a pre-addressed email so you can attach your first 15 pages and fire it off, formatted exactly the way we like to receive it.</p>
        <form id="subForm" class="reveal">
          <div class="field"><label for="name">Your name</label><input id="name" type="text" placeholder="Jordan Rivers" required></div>
          <div class="field"><label for="email">Email</label><input id="email" type="email" placeholder="you@email.com" required></div>
          <div class="field"><label for="title">Book title</label><input id="title" type="text" placeholder="The Long Way Home" required></div>
          <div class="field"><label for="genre">Genre</label><select id="genre" required><option value="" disabled selected>Choose one…</option><option>Memoir</option><option>Personal Growth</option><option>Narrative Non-fiction</option><option>Transformative Essays</option></select></div>
          <div class="field full"><label for="hook">The hook — 1 to 2 sentences</label><textarea id="hook" placeholder="The single sentence that makes someone need to read your book." required></textarea></div>
          <div class="field full"><label for="synopsis">Synopsis — the narrative arc</label><textarea id="synopsis" placeholder="A short overview of where the story begins, turns, and lands." style="min-height:96px" required></textarea></div>
          <div class="field full"><label for="audience">Who is this book for?</label><textarea id="audience" placeholder="The reader you picture holding it." required></textarea></div>
          <button type="submit" class="btn">Compose my submission</button>
          <p class="form-note">Don't forget to attach your first 15 pages (PDF or Word) before sending.</p>
        </form>
      </div>
    </section>
  </div>

</main>

<footer>
  <div class="wrap">
    <div class="foot-top">
      <div>
        <div class="foot-brand">Perspective<b>.</b></div>
        <div class="foot-tag">Every voice deserves a page.</div>
      </div>
      <div class="foot-cols">
        <div class="foot-col">
          <h5>Explore</h5>
          <a data-route="mission">Our Mission</a>
          <a data-route="publish">What We Publish</a>
          <a data-route="process">The Process</a>
          <a data-route="submit">Submit</a>
          <a class="shop-link" target="_blank" rel="noopener">Shop Books ↗</a>
        </div>
        <div class="foot-col">
          <h5>Connect</h5>
          <a href="mailto:submissions@perspectivepublications.com">Email us</a>
          <a href="#">Instagram</a>
          <a href="#">Substack</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© <span id="yr"></span> Perspective Publications</span>
      <span>Reading new voices, one true page at a time.</span>
    </div>
  </div>
</footer>

<script>
  // ============================================================
  //  YOUR SHOPIFY STORE URL — change this one line if your
  //  store address changes (e.g. to your custom domain).
  // ============================================================
  var STORE_URL = "https://ct0bxn-bf.myshopify.com";

  // apply it to every "Shop Books" link
  document.querySelectorAll('.shop-link').forEach(function (a) {
    a.setAttribute('href', STORE_URL);
  });

  document.getElementById('yr').textContent = new Date().getFullYear();

  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.textContent = open ? 'Close' : 'Menu';
    toggle.setAttribute('aria-expanded', open);
  });

  var routes = ['home', 'mission', 'publish', 'process', 'submit'];

  function show(route) {
    if (routes.indexOf(route) === -1) route = 'home';
    document.querySelectorAll('.page').forEach(function (p) { p.classList.remove('active'); });
    var page = document.getElementById('page-' + route);
    page.classList.add('active');

    document.querySelectorAll('.nav-links a[data-route]').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-route') === route);
    });

    window.scrollTo(0, 0);

    // replay reveal animations for the active page
    page.querySelectorAll('.reveal').forEach(function (el, i) {
      el.classList.remove('in');
      void el.offsetWidth;
      el.style.transitionDelay = Math.min(i * 0.06, 0.42) + 's';
      requestAnimationFrame(function () { el.classList.add('in'); });
    });

    links.classList.remove('open');
    toggle.textContent = 'Menu';
  }

  // route on any [data-route] click
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-route]');
    if (!t) return;
    e.preventDefault();
    var r = t.getAttribute('data-route');
    if (('#' + r) !== location.hash) { location.hash = r; }
    else { show(r); }
  });

  window.addEventListener('hashchange', function () {
    show((location.hash || '#home').replace('#', ''));
  });

  show((location.hash || '#home').replace('#', ''));

  document.getElementById('subForm').addEventListener('submit', function (ev) {
    ev.preventDefault();
    var v = function (id) { return (document.getElementById(id).value || '').trim(); };
    var subject = 'SUBMISSION: ' + v('title') + ' by ' + v('name');
    var body =
      'Name: ' + v('name') + '\n' +
      'Email: ' + v('email') + '\n' +
      'Genre: ' + v('genre') + '\n\n' +
      'THE HOOK\n' + v('hook') + '\n\n' +
      'SYNOPSIS\n' + v('synopsis') + '\n\n' +
      'TARGET AUDIENCE\n' + v('audience') + '\n\n' +
      '— Attached: first 15 pages of the manuscript (PDF or Word).';
    window.location.href = 'mailto:submissions@perspectivepublications.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
</script>
</body>
</html>
