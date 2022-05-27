const BASE_URL = 'https://dog.ceo/api/breeds/image/random';
const catBtn = document.getElementById('change-dog');
const catImg = document.getElementById('dog');

const getDogs = async () => {
	try{
		const data = await fetch(BASE_URL)
	const json = await data.json();

	 return json.message;
	 } catch (erro) {
		 console.log(erro.message)
	 }
};

const loadImg = async () => {
	catImg.src = await getDogs();
}

catBtn.addEventListener('click', loadImg);

loadImg();