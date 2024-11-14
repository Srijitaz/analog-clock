setInterval(() =>{
   d = new Date();
   Hourtime= d.getHours();
   Minutetime = d.getMinutes();
   Secondtime = d.getSeconds();
   hourRotation = 30*Hourtime + Minutetime/2;
   minuteRotation = 6*Minutetime;
   secondRotation = 6*Secondtime;
   hour.style.transform = `rotate(${hourRotation}deg)`;
   minute.style.transform = `rotate(${minuteRotation}deg)`;
   second.style.transform = `rotate(${secondRotation}deg)`;
},1000);