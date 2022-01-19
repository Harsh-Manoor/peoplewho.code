import React from 'react'
import "./Tabs.css"

const Tabs = () => {

  const openCity = (evt, cityName)=>{
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  } 

    return (
        <>
          {/* Tab Links */}
          <div className="tab">
            <button className="tablinks" onclick={()=>openCity(event, 'London')}>London</button>
            <button className="tablinks" onclick={()=>openCity(event, 'Paris')}>Paris</button>
            <button className="tablinks" onclick={()=>openCity(event, 'Tokyo')}>Tokyo</button>
          </div>

          {/* Tab content */}
          <div id="London" className="tabcontent">
            <p>London is the capital city of England.</p>
          </div>

          <div id="Paris" className="tabcontent">
            <p>Paris is the capital of France.</p>
          </div>

          <div id="Tokyo" className="tabcontent">
            <p>Tokyo is the capital of Japan.</p>
          </div>
        </>
    )
}

export default Tabs
