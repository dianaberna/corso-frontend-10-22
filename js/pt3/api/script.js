async function showAvatar() {
    let username = 'dianaberna';
    let githubResponse = await fetch(`https://api.github.com/users/${username}`);
    console.log(githubResponse)
    let githubUser = await githubResponse.json();
    console.log(githubUser)
    let img = document.createElement('img');
    img.src = githubUser["avatar_url"];
    document.getElementById("github").appendChild(img);
    return githubUser; 
}

showAvatar();
