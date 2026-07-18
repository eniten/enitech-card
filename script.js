const photo = document.getElementById('profilePhoto');
const input = document.getElementById('photoInput');
const toast = document.getElementById('toast');
const savedPhoto = localStorage.getItem('enitechProfilePhoto');
let deferredPrompt;

function notify(message){
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),2200);
}

if(savedPhoto) photo.src = savedPhoto;

input.addEventListener('change', event => {
  const file = event.target.files?.[0];
  if(!file) return;
  if(!file.type.startsWith('image/')) return notify('Please choose an image file.');
  if(file.size > 5 * 1024 * 1024) return notify('Please choose an image smaller than 5 MB.');

  const reader = new FileReader();
  reader.onload = () => {
    photo.src = reader.result;
    try {
      localStorage.setItem('enitechProfilePhoto', reader.result);
      notify('Photo added on this device.');
    } catch {
      notify('Photo displayed, but could not be saved in this browser.');
    }
  };
  reader.readAsDataURL(file);
});

document.getElementById('removePhotoBtn').addEventListener('click', () => {
  localStorage.removeItem('enitechProfilePhoto');
  photo.src = 'assets/profile-placeholder.svg';
  input.value = '';
  notify('Local photo removed.');
});

document.getElementById('downloadPhotoBtn').addEventListener('click', () => {
  const data = localStorage.getItem('enitechProfilePhoto');
  if(!data) return notify('Choose a photo first.');
  const a = document.createElement('a');
  a.href = data;
  a.download = 'profile-photo.jpg';
  a.click();
});

document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('load', () => {
  setTimeout(()=>document.getElementById('splash').classList.add('hide'), 850);
  fetch('resume.pdf', {method:'HEAD'}).then(r => {
    if(!r.ok) document.getElementById('resumeBtn').classList.add('hidden');
  }).catch(()=>document.getElementById('resumeBtn').classList.add('hidden'));
});

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredPrompt = event;
  document.getElementById('installBtn').classList.remove('hidden');
});

document.getElementById('installBtn').addEventListener('click', async () => {
  if(!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  document.getElementById('installBtn').classList.add('hidden');
});

if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>navigator.serviceWorker.register('service-worker.js'));
}
