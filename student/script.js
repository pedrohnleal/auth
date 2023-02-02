var url = new URLSearchParams(window.location.search);
var github = url.get('github');

fetch('https://api.github.com/users/' + github, {
    method: 'GET'
})
    .then(function (response) {
        response.json()
            .then(function (data) {
                document.getElementById('image').src = data.avatar_url
                document.getElementById('name').textContent = data.login
                document.getElementById('repositories').textContent = 'Repositórios: ' + data.public_repos
                document.getElementById('following').textContent = 'Seguindo: ' + data.following
                document.getElementById('followers').textContent = 'Seguidores: ' + data.followers
            })
    })
