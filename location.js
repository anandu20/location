async function search(){
    try {
        const a=document.getElementById("txt").value
        const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=d82dce617113dc86ab2408e76df76adb`)
        console.log(res);     
        if(res.status==404){
            console.log("Location not found");
        }
        else{
            const weather= await res.json();
            console.log("weather update");
            document.getElementById("print").innerHTML=`
              <div class="print1" id="print1">
            <h1 class="m1">${weather.name}</h1>
            <h2 class="m2">${(weather.main.temp-263.165).toString().substring(0,4)} <sup>°C</sup></h2>
            <h4 class="m3">${weather.weather[0].main}</h4>
            <h2 id="h">Weather Details</h2><img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png" alt="icon">
            
            <table >
                <tr>              
                    <td >
                        <p>Feels like</p>
                        <h3>${weather.main.feels_like}</h3> 
                    </td>
                    <td>
                        <p>Condition</p>
                         <h3 class="m4">${weather.weather[0].main}</h3>
                    </td>
                </tr>  
                <tr>
                    <td>
                        <p>Wind</p>
                        <h3>${weather.wind.speed}km/h</h3>
                    </td>
                    <td>
                        <p>Humdity</p>
                        <h3>${weather.main.humidity}°C</h3>
                    </td>

                </tr>
                <tr>
                    <td>
                        <p>Visibility</p>
                        <h3>${weather.visibility}</h3>
                    </td>
                    <td>
                        <p>Air pressure</p>
                        <h3>${weather.main.pressure}</h3>
                    </td>
                </tr>
            </table>
        </div>`
        }
    } catch (error) {       
        console.log("error"); 
    } 
}