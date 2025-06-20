const Url = "https://api.github.com/users/";

async function fetchData(name) {
    try {
        const userResponse = await fetch(`${Url}${name}`);
        if (!userResponse.ok) throw new Error(`HTTP error! status: ${userResponse.status}`);
        const userData = await userResponse.json();
        console.log("User Data:", userData);
        await getRepos(name);
        return userData;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}

async function getRepos(name) {
    try {
        const repoResponse = await fetch(`${Url}${name}/repos`);
        if (!repoResponse.ok) throw new Error(`HTTP error! status: ${repoResponse.status}`);
        const repoData = await repoResponse.json();
        console.log("Repositories:", repoData);
        return repoData;
    } catch (error) {
        console.error("Error fetching repositories:", error);
        throw error; 
    }
}


const input = document.getElementById("display");
const button = document.getElementById("Click");
const imageContainer = document.getElementById("Change");
const followers = document.getElementById("F")
const following = document.getElementById("FO");
const Repo = document.getElementById("Repo")
const Toview = document.getElementById("View")
const profile = document.getElementById("profile")
            


document.addEventListener("DOMContentLoaded", () => {
    button.addEventListener("click", async () => {
        const username = input.value.trim();
        if (username === "") {
            alert("Please enter a username");
            return false;
        }

        try {
            const userData = await fetchData(username);
            imageContainer.innerHTML= `
              <img src="${userData.avatar_url}" alt="${userData.name}"class="w-[10rem] h-[9rem]  rounded-[50%] ml-20 mt-2">
              <p class="text-center font-bold"> ${userData.name} </p>
              <p class="text-center font-bold">${userData.type}</p>`
            followers.innerHTML= `
               <span>${userData.followers} </span>`
            following.innerHTML = `
               <span>${userData.following} </span>`
            profile.innerHTML = `<a  class="bg-[#FF6F61] p-1 rounded-2xl cursor-pointer" href="${userData.html_url}"> View Profile</a>`

            
            input.value = "";   
            } catch (error) {
            alert("Error fetching user data. Please check the username or try again later.");
            console.error("Error in button click:", error);
        }
        try{
            const repoData = await getRepos(username);
            Repo.innerHTML = repoData.map(repo => `<li class="font-semibold text-[0.8rem] flex  mt-2"><a class="bg-[#A2D5C1] " href="${repo.html_url}">${repo.name}</a></li>`).join('');

        }catch(error){
            console.error("Error fetching repositories:", error);
        }
       
       
    });
});

    
