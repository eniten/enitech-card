ENITECH SMART DIGITAL BUSINESS CARD
===================================

YOUR LIVE CARD URL AFTER GITHUB PAGES DEPLOYMENT
https://eniten.github.io/enitech-card/

FILES
- index.html: the card
- style.css: design
- script.js: photo upload, PWA install and interactions
- manifest.webmanifest + service-worker.js: makes it installable like an app
- assets/enitech-logo.png: company logo
- assets/profile-placeholder.svg: default profile image
- Ernest_Tendon.vcf: Save Contact file
- enitech-card-qr.png: real QR code for the intended live URL

HOW TO ADD YOUR PHOTO FROM YOUR PHONE GALLERY
1. Open the digital card on your phone.
2. Tap “Add your photo.”
3. Select a picture from your gallery.
4. It will remain saved in that phone/browser.

IMPORTANT:
That gallery selection is local to your phone. Other visitors will not see it.
To make your photo visible to everyone:
1. Tap “Card owner tools.”
2. Tap “Download selected photo.”
3. Put the downloaded image in the assets folder.
4. Name it profile-photo.jpg.
5. In index.html, replace:
   assets/profile-placeholder.svg
   with:
   assets/profile-photo.jpg
6. Republish through GitHub Pages.

HOW TO ADD YOUR RESUME
Place your PDF in this main folder and name it:
resume.pdf
The Resume button will automatically appear.

GITHUB PAGES DEPLOYMENT
1. Sign in to GitHub.
2. Create a PUBLIC repository named: enitech-card
3. Upload every file and folder from this package.
4. Open repository Settings > Pages.
5. Under “Build and deployment,” choose “Deploy from a branch.”
6. Select branch “main” and folder “/(root),” then Save.
7. Wait a few minutes and visit:
   https://eniten.github.io/enitech-card/

QR CODE
The included QR code is genuine and points to:
https://eniten.github.io/enitech-card/
It will begin opening the card after GitHub Pages is published at that address.
