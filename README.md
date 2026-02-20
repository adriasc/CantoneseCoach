# Cantonese Coach

Mobile-first web app for learning basic Cantonese with:
- Chinese characters (Traditional)
- English meaning
- Jyutping romanization
- Audio playback (Cantonese voice when available)
- Sentence pattern drills
- Listening quiz
- Local progress tracking
- Import/export your own vocabulary JSON

## Run locally

```bash
cd CantoneseCoach
python3 -m http.server 8080
```

Open: `http://localhost:8080`

## Install on iPhone (no App Store needed)

1. Push this folder to GitHub.
2. Enable GitHub Pages for the repo.
3. Open your GitHub Pages URL in Safari on iPhone.
4. Tap Share -> Add to Home Screen.

This installs it like an app icon.

## Use your PDF vocabulary

The app currently includes starter basic Cantonese content.
To load your exact document list:
1. Open the `Content` tab.
2. Tap `Import JSON`.
3. Import your custom JSON file with words/patterns/quiz.

## Notes on audio

The app uses iPhone/browser Text-to-Speech.
If Cantonese voice is missing, install additional Cantonese/Chinese voices in iOS settings:
`Settings -> Accessibility -> Spoken Content -> Voices`.
