import { MenuItem } from "./components/MenuItem";
// import { LiveMenu } from "./components/LiveMenu";
// import { AccountMenuItem } from "./components/AccountMenuItem";
// import { NavigationMenuItem } from "./components/NavigationMenuItem";


// добавить фейк апи, где мы будем получать с фэйк бэка все меню айтемы, если сможешь
// ЗАменить а на реакт роутинг и дальше буем работать через реакт роутинг

const menuItems = [
  {
    title: "События",
    link: "/events"
  },
  {
    title: "Места",
    link: "/overviews"
  },
  {
    title: "Маршруты",
    link: "/routes"
  },
  {
    title: "Обзоры",
    link: "/overviews"
  },
  {
    title: "Гостинницы и рестораны",
    link: "/events",
    subPages: [
      {title: "Гостинницы",
      link: "/hotels"},
      {title: "рестораны",
      link: "/restaraunts"}
    ]
  },
  {
    title: "Районы",
    link: "/regions"
  },
  {
    title: "Спецпроекты",
    link: "/projects"
  },
    
];


function App() {
  // return (<Layout>{Children}</Layout>)
  return <div className="wrapper">
   <header>
     <div className="headerLeft">
       <img width={40} height={40} src="/img/logo.png" alt="logo" />
       <div className="headerInfo">
         <h3>КУЛЬТУРНЫЙ</h3>
         <h3>РЕГИОН</h3>
       </div>
     </div>
{/* Сделатть базовый компонент menuItems, на основании его выделить 2 компонента "navigationMenuItem", "accountMenuItems"*/}



<div className="menuNavigation">
    {
      menuItems.length > 0? menuItems.map(item => {
      return (
      <MenuItem
        key={item.title}
        item={item}
      />
      )
    }) : <div>Загружаем...</div>
    }
    </div>
    

{/* Изменить с ul на div и сделать отдельный компонент */}


      
      <div className="headerRight">
      <li className="live">
         <img width={55} height={26} src="/img/live.png" alt="live" />
       </li>
       <li>
       <img width={18} height={18} src="/img/src.svg" alt="src"/>
       </li>
       <li className="liRight">
       <img width={18} height={18} src="/img/qt.svg" alt="qt"/>
       </li>
      </div>
  

   </header>
 


  </div>
}
export default App;
