var e=document.querySelector(".header__nav"),a=document.querySelector(".header__toggle");e.classList.remove("header__nav--nojs");a.addEventListener("click",()=>{e.classList.toggle("header__nav--closed"),e.classList.toggle("header__nav--opened")});var o=new Swiper(".slider",{direction:"horizontal",loop:!0,pagination:{el:".slider__pagination",clickable:!0,bulletClass:"slider__bullet",bulletActiveClass:"slider__bullet--active"},navigation:{nextEl:".slider__button--next",prevEl:".slider__button--prev"}}),t=L.map("map").setView([59.968142,30.316425],18),i=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(t),n=L.icon({iconUrl:"images/map-pin.svg",iconSize:[38,50]});L.marker([59.968142,30.316425],{icon:n}).addTo(t);
