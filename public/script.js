const users = [
    {
        name: 'Michael',
        address: 'Miami',
        projects: ['Capital One Bank Site', 'Babysitting Business Site'],
        module: 2,
        tech: ['JS', 'HTML', "Express"],
        id: 0
    },
    {
        name: 'Kyle',
        address: 'Homestead',
        projects: ['Lending Tree Site', 'Dog Grooming Site'],
        module: 2,
        tech: ['JS', 'HTML', 'Express', 'CSS'],
        id: 1
    }
];






window.addEventListener('load', () => {
    const url = window.location.pathname;
    const container = document.querySelector('.user-data-container');
    let userData = Number(url.split('/')[2]);
    let elem = document.createElement('div');
    elem.setAttribute('class', 'user-data center-content');

    if (url.includes('about')) {
        const link = document.getElementById('works-link');
        console.log({link})
        link.href = `${link.origin}/works/${userData}`;
        link.innerHTML = `${users[userData].name}'s Projects`;

        elem.innerHTML = `
            <div class="user-data center-content">
                <h3>Name: ${users[userData].name}</h3>
                <h4>Address: ${users[userData].address}</h4>
                <h4>Tech: <ul>${users[userData].tech.map(userTech => `<li>${userTech}</li>`)}</ul></h4>
            </div>
        `;
         container.appendChild(elem);
    } else if (url.includes('works')) {
        elem.innerHTML = `
            <div class="user-data center-content">
                <h3>Name: ${users[userData].name}</h3>
                <h4>Projects: <ul>${users[userData].projects.map(userProjects => `<li>${userProjects}</li>`)}</ul></h4>
            </div>
        `;
         container.appendChild(elem);
    }

    


})