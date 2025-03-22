---
title: "hello there"
date: 2024-10-23
# weight: 1
# aliases: ["/first"]
# tags: ["first"]
author: "jul"
# author: ["Me", "You"] # multiple authors
showToc: false
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "making website? pff... easy! or not? check how i made this website by myself!"
# canonicalURL: "https://canonical.url/to/page"
disableHLJS: true # to disable highlightjs
disableShare: true
hideSummary: true
searchHidden: true
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: false
cover:
    image: "/assets/media/hello-there/cover.gif" # image path/url
    alt: "waving hand" # alt text
    caption: "waving hand" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: false # only hide on current single page
# editPost:
#     URL: "https://github.com/<path_to_repo>/content"
#     Text: "Suggest Changes" # edit text
#     appendFilePath: true # to append file path to Edit link
---
wow, setting up this site was an amazing experience. i love that feeling when from classic, boring site you create your own, customized one.

## style of this site

this site is not a normal site. i wanted it to stand out from the others, i didnt want it to be too boring, but i also didnt want it to be too stuffed up. it is distinguished by the style of writing (i dont use capital letters and i try to write “youthful”)

i want to write on this site about various things that interest me, because unfortunately irl not many people have the same interests as me.

someone may also notice that this site is only in english (im from poland and normally speak polish but i wanted this site to be for everyone not just poles)

<video autoplay="" loop="" muted="" playsinline="" style="display: block; max-width: 100%; height: auto; margin: 0 auto;">
  <source src="/assets/media/hello-there/ilovepoland.webm" type="video/webm">
  your browser does not support this format go tell your mom about it
</video>

## custom cursor
update 08.03.2025

i decided to disable custom cursor due to compatibility issues

sorry 🙁

<details>
<summary>here is the code for this if you want it on your website</summary>

<pre>
<code>&lt;!-- start of custom cursor code --&gt;
&lt;div class=&quot;circle&quot;&gt;&lt;/div&gt;

&lt;style&gt;
* {
  cursor: none;
}

.circle {
  --circle-size: 40px;
  position: fixed;
  height: var(--circle-size);
  width: var(--circle-size);
  border: 1px solid white;
  border-radius: 100%;
  top: calc(var(--circle-size) / 2 * -1);
  left: calc(var(--circle-size) / 2 * -1);
  pointer-events: none;
  z-index: 9999;
}

body.default-cursor * {
  cursor: auto;
}

body.default-cursor .circle {
  display: none;
}

body.touch-device .circle {
  display: none;
}

body.touch-device * {
  cursor: auto;
}
&lt;/style&gt;

&lt;script&gt;
document.addEventListener(&quot;DOMContentLoaded&quot;, () =&gt; {
  console.clear();

  const circleElement = document.querySelector('.circle');
  const toggleCursorBtn = document.getElementById('toggle-cursor-btn');
  const body = document.body;

  const isTouchDevice = () =&gt; {
    return 'ontouchstart' in window || navigator.maxTouchPoints &gt; 0;
  };

  if (isTouchDevice()) {
    body.classList.add('touch-device');
  } else {
    const mouse = { x: 0, y: 0 };
    const previousMouse = { x: 0, y: 0 };
    const circle = { x: 0, y: 0 };

    let currentScale = 0;
    let currentAngle = 0;

    window.addEventListener('mousemove', (e) =&gt; {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const speed = 0.69;

    const tick = () =&gt; {
      circle.x += (mouse.x - circle.x) * speed;
      circle.y += (mouse.y - circle.y) * speed;
      const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

      const deltaMouseX = mouse.x - previousMouse.x;
      const deltaMouseY = mouse.y - previousMouse.y;
      previousMouse.x = mouse.x;
      previousMouse.y = mouse.y;
      const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4, 150);
      const scaleValue = (mouseVelocity / 150) * 0.5;
      currentScale += (scaleValue - currentScale) * speed;
      const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

      const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
      if (mouseVelocity &gt; 20) {
        currentAngle = angle;
      }
      const rotateTransform = `rotate(${currentAngle}deg)`;

      circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

      window.requestAnimationFrame(tick);
    };

    tick();
  }

  const toggleCursor = () =&gt; {
    body.classList.toggle('default-cursor');
    setCookie('customCursor', body.classList.contains('default-cursor') ? 'enabled' : 'disabled', 365);
  };

  const cursorState = getCookie('customCursor');
  if (cursorState === 'enabled') {
    body.classList.add('default-cursor');
  }

  if (toggleCursorBtn) {
    toggleCursorBtn.addEventListener('click', toggleCursor);
  }

  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // expiration time
    const expires = &quot;expires=&quot; + d.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  function getCookie(name) {
    const nameEQ = name + &quot;=&quot;;
    const ca = document.cookie.split(';');
    for (let i = 0; i &lt; ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return &quot;&quot;;
  }
});
&lt;/script&gt;
&lt;!-- end of custom cursor code --&gt;

&lt;!-- optional toggle cursor button --&gt;
&lt;figure class=&quot;wp-block-image size-full is-resized&quot;&gt;&lt;img src=&quot;https://juljeryt.pl/wp-content/uploads/2024/11/cursorr.webp&quot; alt=&quot;toggle cursor&quot; width=&quot;25&quot; height=&quot;25&quot; class=&quot;wp-image-426&quot; style=&quot;width:25px; cursor: pointer;&quot; id=&quot;toggle-cursor-btn&quot;/&gt;&lt;/figure&gt;
</code>
</pre>

</details>

if you are on a pc you couldve noticed that the cursor on this page is animated. such a cool animated ball

youre probably asking how i did it? actually, i didnt. im not that smart to make such a cursor (i wish)

the other day on the youtube homepage i noticed this video
<a href="https://youtu.be/wG_5453Vq98" target="_blank">
![Award Winning Elastic Cursor Follow Animation by Gusev Digital](/assets/media/hello-there/Screenshot_20250109_214019.png)
</a>
<figcaption>you can click on this image, it will redirect you to this video</figcaption>
this project fascinated me so much that i decided that i want that cursor at my site

well, as i wished, so i did

[here is the link to the official code of this project](https://codepen.io/gusevdigital/full/MWxyXRa)

of course its not like i just copied and pasted this code into my site

i made some changes like, hiding the system cursor, fixing the slow response, hiding it completely on phones and tablets, and improving animation a bit to make it look better

unfortunately, there are several problems such as disappearance of it, behind pictures or captchas (for example next to forms)

but im a lazy ass so instead of fixing it i put a button on the header that restores the system cursor

update 16.02.2025

its 2025 already and i finally fixed that problem with disappearance of custom cursor, behind pictures or captchas

(i just added z-index: 9999; to css)

## eastereggs
1. trolling wappalyzer users

update 08.03.2025

i disabled this easter egg cuz it displays a lot of errors in console

<details>
<summary>here is the code for this if you want it on your website</summary>
<pre>
<code>&lt;!-- start of trolling wappalyzer users --&gt;
&lt;script src=&quot;/wp-content/plugins/get_the_fuck_out.js&quot;&gt;&lt;/script&gt; &lt;!-- wordpress --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;/embeds/animate.min.css&quot;&gt; &lt;!-- animatecss --&gt;
&lt;script src=&quot;components/com_balls.js&quot;&gt;&lt;/script&gt; &lt;!-- joomla --&gt;
&lt;script src=&quot;bigcommerce/script.js&quot;&gt;&lt;/script&gt; &lt;!-- bigcommerce --&gt;
&lt;script&gt; var shopifyTag = true; &lt;/script&gt; &lt;!-- shopify --&gt;
&lt;script src=&quot;typo3conf/script.js&quot;&gt;&lt;/script&gt; &lt;!-- typo3 --&gt;
&lt;script src=&quot;react-69.69.69.js&quot;&gt;&lt;/script&gt; &lt;!-- react --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;/svelte/styles.css&quot;&gt; &lt;!-- svelte --&gt;
&lt;script&gt;ng.coreTokens={APP_INITIALIZER:&quot;app_initializer_token&quot;,PLATFORM_ID:&quot;platform_id_token&quot;};&lt;/script&gt; &lt;!-- angular --&gt;
&lt;script&gt;var __NEXT_DATA__={props:{pageProps:{}},page:&quot;/home&quot;,buildId:&quot;12345&quot;,isFallback:false};&lt;/script&gt; &lt;!-- nextjs --&gt;
&lt;script&gt;Vue.version=&quot;3.2.25&quot;;&lt;/script&gt; &lt;!-- vuejs --&gt;
&lt;script src=&quot;/_nuxt/nuxt.js&quot;&gt;&lt;/script&gt; &lt;!-- nuxtjs --&gt;
&lt;script&gt;var __remixContext = { loaderContext: {}, routeModules: [] };&lt;/script&gt; &lt;!-- remix --&gt;
&lt;script src=&quot;backbone.js&quot;&gt;&lt;/script&gt; &lt;!-- backbonejs --&gt;
&lt;script&gt;Ember.VERSION = &quot;69.69.69&quot;;&lt;/script&gt; &lt;!-- ember --&gt;
&lt;script src=&quot;/alpine.js&quot;&gt;&lt;/script&gt; &lt;!-- alpine --&gt;
&lt;script src=&quot;/etc/designs/example-site/js/main.js&quot;&gt;&lt;/script&gt; &lt;!-- adobe experience manager --&gt;
&lt;script src=&quot;/assets/scripts/lib-franklin.js&quot;&gt;&lt;/script&gt; &lt;!-- adobe experience manager franklin --&gt;
&lt;script&gt;var Altis = {};&lt;/script&gt; &lt;!-- altis --&gt;
&lt;script&gt;var APOS_DIALOGS = { dialogAttributes: {} };&lt;/script&gt; &lt;!-- apostrophecms --&gt;
&lt;script&gt;var AryaCMS = { version: &quot;4.2.0&quot; };&lt;/script&gt; &lt;!-- arya cms --&gt;
&lt;script src=&quot;//js.fw.azko.fr/script.js&quot;&gt;&lt;/script&gt; &lt;!-- azko cms --&gt;
&lt;script&gt;var Backdrop = {};&lt;/script&gt; &lt;!-- backdrop --&gt;
&lt;script&gt;var banno = { site: {} };&lt;/script&gt; &lt;!-- banno banking --&gt;
&lt;script&gt;var BigTreeMatrix = {};&lt;/script&gt; &lt;!-- bigtree cms --&gt;
&lt;script src=&quot;/script.cue.cloud&quot;&gt;&lt;/script&gt; &lt;!-- cue --&gt;
&lt;script&gt;var Chorus = { AddScript: function() {} };&lt;/script&gt; &lt;!-- chorus --&gt;
&lt;!-- end of trolling wappalyzer users --&gt;
</code>
</pre>
</details>

[wappalyzer](https://www.wappalyzer.com/) is a tool that detects the technologies used on websites, like cms, frameworks, and analytics tools. its available as a browser extension. its very useful, i use it myself. i was curious how it all worked and saw that in the files of this extension there was a folder “technologies”

![llist of all known technologies by wappalyzer, sorted alphabetically!](/assets/media/hello-there/Screenshot_20250109_211057-1.png)
<figcaption>list of all known technologies by wappalyzer, sorted alphabetically!</figcaption>

![way(s) how wappalyzer detects technologies (here as an example wordpress)](/assets/media/hello-there/Screenshot_20250109_211456.png)
<figcaption>way(s) how wappalyzer detects technologies (here as an example wordpress)</figcaption>

and then i thought
>*"what if i would add code elements by which the wappalyzer (erroneously) thinks the page is based on some technology"* ~julek 2024

and i have added it!

even now you can install this extension and then youll see that it displays a lot of different technologies (which i dont actually use)

(a bit too many of these cms and js frameworks, isnt it?)
<div style="display: flex; flex-wrap: nowrap; justify-content: space-between">
<img height="350px" width="auto" alt="fake technologies 1" src="/assets/media/hello-there/Screenshot_20250109_212849.png">
<img height="350px" width="auto" alt="fake technologies 2" src="/assets/media/hello-there/Screenshot_20250109_212859.png">
</div>

## more eastereggs coming soon!