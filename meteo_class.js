export default class Meteo{
    constructor(){
        this.api_keys="4470bb28f22c2e76dc1ef686a906369f";
        this.icon= document.querySelector("#meteo-photo");
        this.submit= document.querySelector(".my_button");
        this.meteo_app=document.querySelector(".meteo-app");
        this.input=document.querySelector(".input");
        this.weather=document.querySelector("#weather");
        this.meteo;

    }
    addEvent(){
        this.submit.addEventListener("click", (e)=>{
            e.preventDefault();
            const text=this.input.value;
            this.findZone(text);


        })
    }
    async findZone(text){
        let value=this.apiCall(text);
        [...this.meteo]=await value;
        await this.print_photo(this.meteo[1]);
        this.weather.textContent=this.meteo[0];
        

        
    }
    apiGeo(text){
        return new Promise(async (resolve,reject)=>{
            try{
                let geo=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=${5}&appid=${this.api_keys}`);
                let json= await geo.json();
                let lat= json[0].lat;
                let lon= json[0].lon;
                resolve([lat,lon]);
                

            }catch(e){
                console.error("An error occured");
            }
        })
    }
    apiCall(text){
        return new Promise(async (resolve,reject)=>{
            try{
                let array;
                let x= this.apiGeo(text);
                [...array]=await x;
                let meteo= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${array[0]}&lon=${array[1]}&appid=${this.api_keys}`);
                let meteo_json= await meteo.json();
                let meteo_information= meteo_json.weather[0].main;
                let icon=meteo_json.weather[0].icon;
                resolve([meteo_information,icon]);
              
                
            }catch(e){
                throw new Error(e);

            }
        })
    }
    async print_photo(icon){
        try{
            let photo=await fetch(`https://openweathermap.org/img/wn/${icon}@2x.png`);
            let photo_blob=await photo.blob();
            let url= URL.createObjectURL(photo_blob);
            this.icon.src=url;
        }catch(e){
            throw new Error(e);
        }
        

    }
    

}
