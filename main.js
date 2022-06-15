const profile = document.querySelector('.card__profile');
const shareIcons = document.querySelector('.card__share-icons');
const shareBtn = document.querySelector('.card__button');

shareBtn.addEventListener('click', ()=>{
	console.log('click')
	profile.classList.toggle('hidden');
	shareIcons.classList.toggle('show');
});