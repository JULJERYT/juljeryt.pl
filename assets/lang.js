var currentLang = localStorage.getItem("language");
if (!currentLang) currentLang = "en";

const lang = {

    "en": {
        "typedTitle": [
            'Certified sigma!',
            'Helps when you have a problem with something!',
            'Likes programming, editing, modding phones and a bit of hacking!'
        ],

        "intro": {

            "adblockInfo": "Please turn off adblocker to see the intro.\n\nThis site is not a virus, you can rest easy :)\n\nInfo in the intro is taken from your IP and may not be correct.",
            "usernamePrompt": 'What is your name / nickname? (You can skip this, just click OK)',

            "loading": "Loading...",
            "loadingAccess": "Granting %username access to <span style='font-size: 14px; color: #06d;'>[juljeryt.pl]</span>...",
            "accessGranted": "Access granted! <span style='font-size: 14px; color: #0f0;'>[success]</span>",

            "welcomeBack": "Welcome back, <i style='color: #0f0'>%ip</i>! By the way, nice to see someone from %country, %city here!",
            "clipboardSuccess": "copied to Clipboard",
            "clipboardFailure": "failed to copy",        

            "defaultCountry": "your country",
            "defaultCity": "your city",

            "skipIntro": "Skip intro"

        },

        "username": {

            "variants": ["user", "dude"],
            "formats": {
                "personalMatch": {
                    "color": "FF0000",
                    "text": "nuh uh you are not me"
                },
                "profanityMatch": {
                    "color": "FF0000",
                    "text": "wtf your name is so weird"
                },
                "success": {
                    "color": "00FF00",
                    "text": "%a"
                }
            }
        },
        
        "portfolio": {
            "description": "My real name is <b>Julek</b>. \
                            I am interested in programming, editing videos, modding phones, experimenting with the raspberry pi (i have 3 of them), \
                            exploring cities and spending time with friends. In my free time I often listen to music, write on discord or telegram and play various games :) \
                            I live in Poland (yes, this is the country where memes such as Polish cow, O cholera fredy fazber come from).",

            "whoamiTitle": "Who Am I?",
            "socialTitle": "Social media / Contakt",
            "clickToCopy": "/\\ click to copy /\\",
            "copyright": "© JULJERYT.PL | Credits (he is sigma): arbitrarycodeexecution"

        },

    },

    "pl": {
        "typedTitle": [
            'Certyfiokowany sigma!',
            'Pomaga w potrzebie!',
            'Lubi programowanie, edytowanie, modyfikowanie telefonów i hakowanie!'
        ],

        "intro": {

            "adblockInfo": "Wyłącz adblockera, aby zobaczyć intro.\n\nTa strona to nie wirus, możesz spać spokojnie :)\n\nInformacje w intro są z adresu IP i mogą być nieprawidłowe.",
            "usernamePrompt": "Jakie jest twoje imie / nick? (Możesz to pominąć, po prostu kliknij OK)",

            "loading": "Ładowanie...",
            "loadingAccess": "Przyznawanie  %username dostępu do <span style='font-size: 14px; color: #06d;'>[juljeryt.pl]</span>...",
            "accessGranted": "Przyznano dostęp! <span style='font-size: 14px; color: #0f0;'>[sukces]</span>",

            "welcomeBack": "Witaj, <i style='color: #0f0'>%ip</i>! Miło widzieć kogoś z %country, %city!",
            "clipboardSuccess": "skopiowano do Schowka",
            "clipboardFailure": "wystąpił błąd",        

            "defaultCountry": "twojego kraju",
            "defaultCity": "twojego miasta",

            "skipIntro": "Pomiń intro"

        },

        "username": {
            
            "variants": ["user", "dude"],
            "formats": {
                "personalMatch": {
                    "color": "FF0000",
                    "text": "nuh uh you nie jesteś mną"
                },
                "profanityMatch": {
                    "color": "FF0000",
                    "text": "wtf masz dziwne imie"
                },
                "success": {
                    "color": "00FF00",
                    "text": "%a"
                }
            }
        },

        "portfolio": {
            "description": "Moje prawdziwe imię to <b>Julek</b>.\
                            Interesuje się programowaniem, montowaniem filmów, modowaniem telefonów, eksperymentowaniem z Raspberry pi (mam ich 3), \
                            zwiedzaniem dużych miast and i spędzaniem czasu ze znajomymi. W wolnym czasie często słucham muzyki, pisze na discordzie lub telegramie i gram w różne gry :)",

            "whoamiTitle": "Kim Jestem?",
            "socialTitle": "Social media / Kontakt",
            "clickToCopy": "/\\ kliknij żeby skopiować /\\",
            "copyright": "© JULJERYT.PL | Credits: arbitrarycodeexecution"

        }        
    }


}