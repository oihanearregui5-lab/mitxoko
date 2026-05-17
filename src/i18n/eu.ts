// NOTE: Itzulpenak euskara hiztun batek berrikusi behar ditu argitaratu aurretik.
export const eu = {
  nav: {
    home: "Hasiera",
    services: "Zerbitzuak",
    templates: "Txantiloiak",
    projects: "Proiektuak",
    about: "Niri buruz",
    contact: "Harremana",
    cta: "Eskatu aurrekontua",
  },
  hero: {
    eyebrow: "Web diseinua · Iruñea",
    titlePre: "Webguneak",
    rotating: ["ile-apaindegientzat", "fisioentzat", "kafetegientzat", "jatetxeentzat", "zure negoziorako"],
    titlePost: "Iruñean",
    subtitle:
      "Pertsona batek eginak, ez agentzia batek. 2 astetan entregatuak. 300 €, kuotarik gabe, ezustekorik gabe.",
    primary: "Eskatu aurrekontua",
    secondary: "Ikusi txantiloiak",
  },
  how: {
    kicker: "Nola lan egiten dudan",
    title: "Hiru urrats. Bi aste. Pertsona bat.",
    steps: [
      { title: "Hitz egin dezagun", body: "20 minutuko deia edo kafe bat. Zure negozioa kontatuko didazu eta bat datozela ikusiko dugu." },
      { title: "Zure weba diseinatu", body: "Testuak eta argazkiak emango dizkidazu. Nik maketatuko dut eta aste batean erakutsiko dizut." },
      { title: "Argitaratuko dut", body: "Aldaketak, azken doikuntzak eta zure weba sarean. Dena bi astetan materiala jasotzen dudanetik." },
    ],
  },
  includes: {
    kicker: "Zer dago barne 300 €-ren truke",
    title: "Komertzio batek webean hasteko behar duen guztia.",
    items: [
      "5 atal arte (Hasiera, Zerbitzuak, Guri buruz, Galeria, Harremana)",
      "Mugikorrera egokituta",
      "Harremanetarako formularioa eta WhatsApp botoia",
      "Kokapena Google Maps-ekin integratuta",
      "15 argazki arte optimizatuta",
      "Google-rako konfigurazioa (oinarrizko SEO)",
      "Lege-oharra eta cookien politika",
      "Hilabeteko aldaketa libreak entregatu ondoren",
      "WhatsApp bidezko laguntza nirekin zuzenean",
    ],
  },
  templatesTeaser: {
    kicker: "Txantiloiak sektoreka",
    title: "Ikusi nola gera daitekeen zure negozioa.",
    cta: "Ikusi txantiloi guztiak",
  },
  faq: {
    kicker: "Ohiko galderak",
    title: "Jendeak hasi aurretik egiten dizkidan galderak.",
    items: [
      { q: "Hilero zerbait gehiago ordaindu behar dut?", a: "Ez. 300 € behin bakarrik. Domeinua bakarrik (10–15 €/urte) zuk ordainduko diozu erregistratzen duenari." },
      { q: "Ondoren aldaketak nahi baditut?", a: "Entregatu ondorengo lehen hilabetean, aldaketa txikiak doan. Ondoren, 20 € aldaketa bakoitza edo 60 €-ko urteko paketea 5 aldaketagatik." },
      { q: "Zenbat denbora behar du?", a: "2 aste zure testu eta argazki guztiak ditudanetik." },
      { q: "Edukirik ez badut edo zer idatzi ez badakit?", a: "Lasai, galdera-txantiloi bat bidaliko dizut errazteko. Testuak idaztea behar baduzu, 80 €-ren truke egingo dut." },
      { q: "Webguneak mugikorrean funtzionatzen du?", a: "Bai, egiten ditudan webgune guztiak mugikorrera egokitzen dira. Ez da aukerakoa." },
      { q: "Google-n agertuko naiz?", a: "Webgunea Googlek aurki dezan konfiguratuta entregatzen da. Lehen postuetan agertzea hainbat faktoreren araberakoa da eta denbora behar du, baina oinarria ondo egongo da." },
      { q: "Zein eremutan lan egiten duzu?", a: "Iruñea eta inguruak: Iturrama, Donibane, Alde Zaharra, Arrotxapea, Txantrea, Burlata, Atarrabia, Antsoain… Eremutik kanpo bazaude, idatzi berdin." },
    ],
  },
  finalCta: {
    title: "Hitz egin dezagun?",
    body: "Kontatu zure negozioaz. Lehen elkarrizketa doakoa eta konpromisorik gabea da.",
    primary: "Eskatu aurrekontua",
    whatsapp: "Edo idatzi WhatsApp bidez",
  },
  footer: {
    tagline: "Web profesionalak Iruñerriko komertzioentzat.",
    madeIn: "Maitasunez egina Iruñean",
    legal: "Lege-oharra",
    privacy: "Pribatutasuna",
    cookies: "Cookieak",
  },
} as const;