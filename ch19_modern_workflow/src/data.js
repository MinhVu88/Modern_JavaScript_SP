const users = [
    {name: 'Elliot Alderson', alive: true},
    {name: 'Darlene Alderson', alive: true},
    {name: 'Dominique DiPierro', alive: true},
    {name: 'Angela Moss', alive: false},
    {name: 'Tyrell Wellick', alive: false}
];

/*export*/ const aliveUsers = users.filter(user => user.alive);

// export default users; // only 1 default export per file

export {aliveUsers, users as default};