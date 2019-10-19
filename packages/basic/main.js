const listRepos = async username => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  ).then(res => res.json());

  const content = document.getElementById('content');
  const markup = repos.map(
    repo => `
    <li>
      <a href="${repo.html_url}">${repo.name}</a> 
      (⭐️ ${repo.stargazers_count})
    </li>
  `
  );

  content.innerHTML = `<ul>${markup.join('')}</ul>`;
};

listRepos('jlengstorf');
