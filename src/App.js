import React from 'react';
import './App.css';
import './components/Heroes.css'
import Heroes from './components/heroes';


const hero = [
  {name:"Человек-паук", 
  img: "https://games.mail.ru/hotbox/content_files/news/2020/04/06/51670058f67147dc8d7f268ca3b6f95d.jpg", 
  universe: "Вселенная: Marvel Comics",
  alterego: "Альтер эго: Питер Паркер",
  occupation: "Род деятельности: борец за справедливость, студент, фотограф",
  friends: "Друзья: Мстители, Фантастическая четверка, Люди Икс",
  powers:"Суперисилы: сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины"},
  {name:"Бэтмен", 
  img: "https://image.api.playstation.com/vulcan/img/rnd/202010/2621/H9v5o8vP6RKkQtR77LIGrGDE.png", 
  universe: "Вселенная: DC Comics",
  alterego: "Альтер эго: Брюс Уэйн",
  occupation: "Род деятельности: борец с преступностью, филантроп, миллиардер",
  friends: "Друзья: Робин, Бэтгерл",
  powers:"Суперсилы: интеллект, обширные познания, знания боевых искусств, ловкость"},
  {name: "Капитан Америка",
  universe: "Вселенная: Marvel Comics",
  alterego: "Альтер эго: Стивен Роджерс",
  occupation: "Род деятельности: супер-солдат",
  friends: "Друзья: Мстители",
  img : "https://klike.net/uploads/posts/2019-02/1551165939_1.jpg",
  powers: "Суперсила: сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя"},
  {name: "Тор",
  universe: "Веленная: Marvel Comics",
  alterego: "Альтер эго: нет; полное имя — Тор Одинсон",
  occupation: "Род едятельности: борец за справедливость, скандинавский бог",
  friends: "Друзья: Мстители",
  img : "https://static.okko.tv/images/v2/7164277?scale=1&quality=80",
  powers: "Суперсила: все, что может бог, плюс молот Мьелнир",}
]
 class App extends React.Component {
  render() {
    return (
      <div className='App'>
 {
   hero.map((hero) =>
   <Heroes  name={hero.name}
   img={hero.img}
   universe={hero.universe}
   alterego={hero.alterego}
   occupation={hero.occupation}
   friends={hero.friends} />)
 }
</div>
    );
  }
}

export default App;
