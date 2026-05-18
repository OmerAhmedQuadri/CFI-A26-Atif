const dogImg = document.getElementById('dog-img')
const dogName = document.getElementById('dog-name')

const breedGroup = document.getElementById('breed-group')
const breedFor = document.getElementById('breed-for')
const lifeSpan = document.getElementById('life-span')
const temp = document.getElementById('temp')
const height = document.getElementById('Height')
const weight = document.getElementById('Weight')
const submitBtn = document.getElementById('dog-btn')


submitBtn.addEventListener('click',getDogDetails)

async function getDogDetails(){
    const result = (await axios.get("https://api.freeapi.app/api/v1/public/dogs/dog/random")).data
    const data = result.data
    console.log(data);
    dogImg.src = data.image.url || 'NA'
    dogName.textContent = data.name || 'NA'
    breedGroup.textContent = data.breed_group || 'NA'
    breedFor.textContent = data.bred_for || 'NA'
    lifeSpan.textContent = data.life_span || 'NA'
    temp.textContent = data.temperament || 'NA'
    height.textContent = data.height.metric || 'NA'
    weight.textContent = data.weight.metric || 'NA'
}
getDogDetails()