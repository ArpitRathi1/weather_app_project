const userTab=document.querySelector("[data-userWeather]");
const searchTab=document.querySelector("[data-searchWeather]");
const userContainer=document.querySelector(".weather-container");

const grantAccessContainer=document.querySelector(".grant-location-container");

const searchForm=document.querySelector("[data-searchForm]");
const loadingScreen=document.querySelector(".loading-container");
const userInfoContainer=document.querySelector(".user-info-container");


let currentTab=userTab;//by default
const API_KEY="e03935d1a4968e4047097d2db1b7b47e";
currentTab.classList.add("current-tab");
getfromSessionStorage()