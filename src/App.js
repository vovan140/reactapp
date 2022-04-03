import { MenuItem } from "./components/MenuItem";
import LiveMenu from "./components/LiveMenu";


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
  return <div className="wrapper">
   <header>
     <div className="headerLeft">
       <img width={40} height={40} src="/img/logo.png" alt="logo" />
       <div className="headerInfo">
         <h3>КУЛЬТУРНЫЙ</h3>
         <h3>РЕГИОН</h3>
       </div>
     </div>


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
    

     <LiveMenu />
      

   </header>
 


  </div>
}
export default App;
