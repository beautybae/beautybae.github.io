var providers = ["julia", "sammy", "ken", "mazzy"];
var services = ["botox", "dermal", "body", "microneedle", "chem", "hair", "consultation"];

var botox_providers = [providers[0], providers[1]];
var dermal_providers = [providers[0], providers[2], providers[3]];
var body_providers = [providers[1], providers[2], providers[3]];
var microneedle_providers = [providers[0], providers[1], providers[3]];
var chem_providers = [providers[0], providers[1], providers[2], providers[3]];
var hair_providers = [providers[1], providers[2], providers[3]];
var consultation_providers = [providers[0], providers[1], providers[2], providers[3]];

var julia_services = [services[0], services[1], services[3], services[4], services[6]];

// 0,2,3,4,5
var sammy_services = [services[0], services[2], services[3], services[4], services[5], services[6]];

// 1, 4, 5
var ken_services = [services[1],services[4],services[5], services[6]];

// 1, 2, 3, 5
var mazzy_services = [services[1],services[2],services[3],services[5], services[6]];

function init(){
    selectService("botox");
}

function selectService(elem){
    clearSelection();
    showElementById(elem);
}

function clearSelection(){
    hideElementById("botox");
    hideElementById("dermal");
    hideElementById("body");
    hideElementById("microneedle");
    hideElementById("chem");
    hideElementById("hair");
    
    for(let i = 0; i < providers.length; i++){
        defocusElementById(providers[i]);
    }
}

function hideElementById(id){
        defocusElementById(id);
        document.getElementById(id + "-card").style.display = "none";
}

function showElementById(id){
        focusElementById(id);
        document.getElementById(id+"-card").style.display = "block";
    
    var provider;
        switch(id){
            case "botox":
            provider = botox_providers;
                break;
            case "dermal":
                provider = dermal_providers;
                break;
            case "body":
                provider = body_providers;
                break;
            case "microneedle":
                provider = microneedle_providers;
                break;
            case "chem":
                provider = chem_providers;
                break;
            case "hair":
                provider = hair_providers;
                break;
            default:
                provider = providers;
                break;
        }
        for(let i = 0; i < provider.length; i++){
        focusElementById(provider[i]);
    }
    
}

function defocusElementById(id){
            document.getElementById(id + "-image").style.filter = "grayscale(100%)  brightness(85%) blur(1px)";
}

function focusElementById(id){
    if(id === "consultation"){
        return;
    }
    document.getElementById(id+"-image").style.filter = "grayscale(0%) brightness(100%)";
}

function showProviderServices(id){
    clearSelection();
    
    var service;
    switch(id) {
        case "julia":
            service = julia_services;
            break;
        case "sammy":
            service = sammy_services;
            break;
        case "ken":
            service = ken_services;
            break;
        case "mazzy":
            service = mazzy_services;
            break;
        default:
            service = services;
            break;
    }

    for(let i = 0; i < service.length; i++){
        focusElementById(service[i]);
    }
    showServiceCard(service[0]);
    focusElementById(id);
    
}

function showServiceCard(id){
            document.getElementById(id+"-card").style.display = "block";
}