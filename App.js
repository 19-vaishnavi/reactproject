import {useState} from 'react';
// usestate is only used inside component
// usestate is always used in the top level function 
import './App.css';
import Banner from './Component/Banner/Banner.js';
import TabMenu from './Component/Tab_menu.js';
import {Services} from './Component/Service_data.js';
import Education from './Component/images/edu.jpeg'

function App() {
// badalti hui value aur badalne k baad vala value
  const [changedText,setChangedText] = useState('Web_Dev')

    function handleClick(services){
      console.log(services);
      setChangedText(services);
    }

  return (
    <div>
      <div id="nav">
        <h1>SJCEM</h1>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Course</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
      </div>

      <Banner/>

      <section>
        <div id="service_tabs"> 
          <TabMenu command={()=> handleClick('Web_Dev')}>Web_Dev</TabMenu>
          <TabMenu command={()=> handleClick('App_Dev')}>App_Dev</TabMenu>
          <TabMenu command={()=> handleClick('Cloud')}>Cloud</TabMenu>
          <TabMenu command={()=> handleClick('IOT')}>IOT</TabMenu>
        </div>


        <div class="ServiceDetailBox">
          <div id="service-head">{Services[changedText].ServiceName}</div>
          <div id="service-count">Total Project- {Services[changedText].Count}</div>
          <div id="service-body">{Services[changedText].Description}</div>
        </div>

        <div class="row">

          <div class="big">
            <div class="button">
            <button>Sports</button>
            <button>Science</button>
            <button>Arts</button>
            <button>Technology</button>

            </div>
          <div class="small" >
              <image src={Education} alt="eduction" className='image' height="50px"/>
           </div>
            
            </div>
        </div>

      </section>

      </div>
  );
}
export default App;