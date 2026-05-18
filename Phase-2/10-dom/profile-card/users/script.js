const params = new URLSearchParams(window.location.search)
const user = params.get('q')
if(!user) window.location.href = '../'

const avatarImg = document.getElementById('avatar-img')
const fullName = document.getElementById('FullName')
const userName = document.getElementById('user_name')
const bio = document.getElementById('bio')

const email = document.getElementById('email')
const emailLi = document.getElementById('email-li')
const address = document.getElementById('location')
const website = document.getElementById('website')
const repo = document.getElementById('repo-count')
const profileBtn = document.getElementById('profile-btn')

async function fetchUserDetails() {
    const data = (await axios.get(`https://api.github.com/users/${user}`)).data
    console.log(data);
    avatarImg.src = data.avatar_url
    fullName.textContent = data.name
    userName.textContent = data.login
    bio.textContent = data.bio
    if(!data.email) emailLi.remove()
    else email.textContent = data.email
    repo.textContent = data.public_repos + ' repositories'
    address.textContent = data.location
    website.textContent = 'Portfolio'
    website.href = data.blog
    profileBtn.addEventListener('click', ()=>{
        console.log('something');
        window.location.href = data.html_url
    })

}
fetchUserDetails()