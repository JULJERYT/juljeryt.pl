---
title: "i use arch btw"
date: 2024-12-14
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
description: "you know what the biggest thing you can flex with is? using arch linux (with your friends... which you dont have)"
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
  image: "/assets/media/i-use-arch-btw/cover.gif" # image path/url
  alt: "arch linux logo" # alt text
  caption: "arch linux logo" # display caption under cover
  relative: false # when using page bundles set this to true
  hidden: false # only hide on current single page
# editPost:
#     URL: "https://github.com/<path_to_repo>/content"
#     Text: "Suggest Changes" # edit text
#     appendFilePath: true # to append file path to Edit link
---

when i started my “adventure” with computers i used my grandmas laptop which had windows 7. later my dad gave me his old laptop which had windows 8 (i upgraded it to windows 10). and now i have my computer which has windows 11.

well, windows 11

from the beginning after installing this system something didnt feel right to me

![bloated windows 11 start menu](/assets/media/i-use-arch-btw/win11-start-menu.jpg)

<style>
  img[alt="bloated windows 11 start menu"] { width: 500px; }
</style>

when i saw this, i thought

> _"what the fuck microsoft? why is there picsart, twitter, netflix and other shit preinstalled on a clean install of windows"_ ~julek 2024

on top of that:

too strict hardware requirements

- built-in trackers
- you need to log in to your microsoft account
- you cant uninstall edge without destroying your system
- annoying context menu
- and much more
- yet somehow i lived with it - until today

when i heard that windows 11 will introduce “recall” feature that will take screenshot every few seconds and send it the fuck knows where

i said **enough**

and thats how i decided to move to linux

<hr>

however, i didnt choose distribution for noobs like linux mint, ubuntu, fedora etc

i chose...
<span class="hidden-text" id="hidden-text">arch linux!!! (i feel the pain)</span>
<audio id="sound-effect" src="/assets/media/i-use-arch-btw/yay.mp3"></audio>

so i get up in the morning i plug the usb with the arch into my computer and install it (i used `archinstall` command, because im not a masochist to install it manually)

once the arch was installed i started discovering what programs are preinstalled

i couldnt believe my eyes

the only software ive found were settings, some kind of text editor, file explorer, console and some other system software like emoji selector

there wasn't even a preinstalled browser

it was such an awesome feeling

<hr>

this is how my desktop looks like:
![my desktop](/assets/media/i-use-arch-btw/Screenshot_20241216_160710-1536x864.png)
simple, clean - just how i like it

<details>
<summary>apps that i use (most of them):</summary>

- brave - perfect browser if you care about privacy and you dont want to sacrifice browsing speed
- burp suite - tool for pentesting websites
- clamav (+clamtk as a gui) - the best antivirus for linux
- cloudflare warp - the best free, fast and privacy-respecting vpn
- discord - comunicator
- discover - gui for flatpak
- disk usage analyzer - program to analyze what files/folders use the most disk space
- fish - friendly&nbsp;interactive&nbsp;shell
- flatseal - set permissions for flatpak apps
- github desktop - gui for git
- handbrake - video compressor
- httptoolkit - tool for intercepting http traffic
- kde connect - connect your phone to computer
- kde partition manager - partition manager
- obs - screen recorder
- octopi - pacman (package manager) gui
- onlyoffice - best alternative for microsoft (🤢) office
- peazip - archive manager
- prism launcher - minecraft launcher but better (sometimes i get urge to play mc)
- scrcpy - remote control your phone
- spectacle - screenshot utility
- spotify - music player
- termius - ssh client
- virt manager - managing virtual machines
- visual studio code - ide for coding
- vlc - video player

</details>

<hr>

# cool tips i wish i knew sooner
<details>
<summary>how to disable webcam system-wide</summary>

as i also have a laptop on which i have arch installed i didnt want someone to watch me while i was being hacked (i know its better to put a tape on the camera but im afraid of breaking something lmao)

on windows i could just go into the device manager and disable webcam
on linux just use this simple command:

```shell
echo 'blacklist uvcvideo' | sudo tee /etc/modprobe.d/blacklist.conf && sudo rmmod uvcvideo
```

this command adds the module that handles webcam to the blacklist and disables it
</details>

<details>
<summary>how to solve the problem with installing some applications using the linux-hardened kernel</summary>
i love to have the feeling that i have a well-secured system, so i use linux-harnened kernel

unfortunately using it i encountered a problem with installing/launching some applications (such as browser or vsc)

after an hour of searching the internet i found the answer on github ([link](https://github.com/flatpak/flatpak/issues/4107#issuecomment-2424099343))

```shell
sudo sysctl kernel.unprivileged_userns_clone=1
```

well, if you want to be safe, you sometimes have to spend (a lot of) time solving problems
</details>

<details>
<summary>my customization setup</summary>

i use kde plasma 6, so i have a lot of options for customizing the system
heres my setup:

colors & themes:

global theme - install win11os-dark (click get new, search it and install) but do not apply it, instead apply 

breeze dark (we will use win11os-dark later)

application style - breeze

plasma style - win11os-dark (it should appear after installing it as global theme)

window decorations - willow dark (no blur, alt or shaders just willow dark)

icons - kora

cursor - bibata-modern-ice

system sounds - ocean

splash screen - kuro the cat (i love cats btw)

login screen (sddm) - suave dark

windows management > desktop effects > blur > set blur strenght in the middle and noise strenght left as far as possible

</details>

<hr>

# conclusion: i use arch btw

![thumbs up](/assets/media/i-use-arch-btw/thumbsup.png)

<script>
  // i use arch btw confetti

// elements
const hiddenText = document.getElementById('hidden-text');
const soundEffect = document.getElementById('sound-effect');

// func to show hidden text and play sound
hiddenText.addEventListener('click', () => {
  hiddenText.classList.add('revealed');
  hiddenText.removeAttribute('style');
  soundEffect.play();
  showConfetti(); // shows confetti
});

// func to show confetti
function showConfetti() {
  const confettiContainer = document.createElement('div');
  confettiContainer.classList.add('confetti');
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 100; i++) {
    const confetto = document.createElement('div');
    confetto.classList.add('confetto');
    confetto.style.left = `${Math.random() * 100}%`;
    confetto.style.animationDelay = `${Math.random() * 2}s`;
    confetto.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
    confettiContainer.appendChild(confetto);
  }

  setTimeout(() => {
    confettiContainer.remove();
  }, 4150); // delete confetti after 4.15s
}
</script>