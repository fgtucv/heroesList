import heroestamlade from "../temeplades/heroes.hbs";
import heroes from "../dataHeroes.json";

const heroesList = heroestamlade({heroes});

document.body.insertAdjacentHTML("beforeend", heroesList)