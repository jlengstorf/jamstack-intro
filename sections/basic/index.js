const listRepos = async (username) => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?typo=owners&sort=updated`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  const markups = repos
    .map(
      (repo) => `
    <li>
      <a href="${repo.html_url}">${repo.name}</a>
      (⭐️ ${repo.stargazers_count})
    </li>
  `
    )
    .join(" ");

  const content = document.getElementById("content");
  content.innerHTML = `<ul>${markups}</ul>`;
};

listRepos("Ramchaik");
