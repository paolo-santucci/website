# paolosantucci.com — Tema Jekyll in stile GNOME

Tema Jekyll per un sito personale, ispirato alle [linee guida di GNOME (HIG)](https://developer.gnome.org/hig/) e al design system **libadwaita** / Adwaita.

**Caratteristiche**

- 🎨 Look libadwaita: header bar, *boxed list*, *preference group*, card arrotondate
- 🌓 Tema chiaro/scuro con rispetto della preferenza di sistema (memorizzato)
- 🌐 Bilingue **IT/EN** con switch istantaneo (nessun plugin richiesto)
- ✍️ Blog opzionale, **attivabile/disattivabile** da configurazione — i post **non mostrano la data**
- 📱 Sezione **App** con griglia di card per i tuoi progetti
- 🎯 Colore accento configurabile (palette Adwaita)

---

## Avvio rapido

Servono [Ruby](https://www.ruby-lang.org/) e [Bundler](https://bundler.io/).

```bash
bundle install
bundle exec jekyll serve
```

Poi apri `http://localhost:4000`.

---

## Configurazione — `_config.yml`

```yaml
accent: blue          # blue | teal | green | purple | orange | red
default_lang: it      # lingua mostrata per prima (it | en)
blog: false           # true per attivare il blog
```

### Attivare / disattivare il blog

Imposta `blog: true` in `_config.yml` e riavvia il server. Quando è `false`:
la voce **Blog** sparisce dal menu, la sezione blog non appare in home e la pagina
`/blog/` mostra un avviso "blog disattivato".

### Cambiare il colore accento

Modifica `accent` in `_config.yml` con uno tra: `blue`, `teal`, `green`,
`purple`, `orange`, `red`. I colori derivano dalla palette ufficiale Adwaita.

---

## Contenuti

### Le tue informazioni
- **Identità e social**: `_config.yml` → `author` e `social`.
- **Testi dell'interfaccia (IT/EN)**: `_data/i18n.yml`.

### Aggiungere un'app
Crea un file in `_apps/`, ad esempio `_apps/nome-app.md`:

```yaml
---
name: Nome App
tagline_it: "Descrizione in italiano."
tagline_en: "Description in English."
url: "https://esempio.com"
icon: ring          # icona simbolica (vedi _includes/icon.html) — opzionale
color: pink         # pink | blue | teal | green | purple | orange
chips: [GTK4, Linux]
---
```

### Aggiungere un post (se il blog è attivo)
Crea un file in `_posts/` con il nome `AAAA-MM-GG-titolo.md`.
La data nel nome serve solo a Jekyll per l'ordinamento: **non viene mostrata** sul sito.

```markdown
---
title_it: "Titolo in italiano"
title_en: "Title in English"
excerpt_it: "Sommario breve in italiano."
excerpt_en: "Short summary in English."
---
<div class="lang-it" markdown="1">
Testo del post in italiano…
</div>
<div class="lang-en" markdown="1">
Post text in English…
</div>
```

### Modificare le pagine
- **Chi sono**: `about.md`
- **Contatti**: `contact.html` (usa la lista `social` di `_config.yml`)

---

## Struttura

```
_config.yml          Configurazione + opzioni del tema
_data/i18n.yml       Stringhe UI in IT/EN
_layouts/            default, home, page, post
_includes/           head, header, footer, icon, card, righe, helper t
_apps/               Le tue app (collezione)
_posts/              Articoli del blog (data nel nome = solo ordinamento)
assets/css/main.scss Stile (token Adwaita + accento via Liquid)
assets/js/site.js    Toggle tema + lingua
index.html           Home
apps.html            Pagina App
blog.html            Pagina Blog
about.md             Chi sono
contact.html         Contatti
404.html             Pagina non trovata
```

---

## Pubblicazione su GitHub Pages

Nel `Gemfile`, commenta `gem "jekyll"` e scommenta `gem "github-pages"`,
poi `bundle install`. Imposta correttamente `url` e `baseurl` in `_config.yml`.

---

Realizzato con cura, seguendo lo spirito di GNOME. Buon hacking! 🐧
