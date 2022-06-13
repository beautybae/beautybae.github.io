var bookServices = ["consultation", "botox", "dermal", "body", "microneedle", "chem", "hair"];

var selectedProvider;
var selectedService;

let form = {
    cofirmation:"A3B4NMD3",
    name: "",
    provider:"",
    service:"",
    date:"",
    time:"",
    promo:"",
    cost:""
};

function initBook(){
    hideServices();
}

function hideServices(){
    for(let i = 0; i < services.length; i++){
    document.getElementById(services[i]).style.display = "none";        
    }
    hideDateTimeRow();
}

function selectProvider(id){
    hideServices();
    for(let i = 0; i < services.length; i ++){
        focusElementById(services[i]);
    }
    defocusElementById("julia");
    defocusElementById("sammy");
    defocusElementById("ken");
    defocusElementById("mazzy");
    
    focusElementById(id);
    
    selectedProvider = id;
    selectedService = null;
    
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
        document.getElementById(service[i]).style.display = "block";  
    }
}

function bookService(id){
    for(let i = 0; i < services.length; i ++){
        defocusElementById(services[i]);
    }
    selectedService = id;
    focusElementById(id);
    showDateTimeRow();
}

function close(){
    return;
}

function hideDateTimeRow(){
    document.getElementById("date-time-container").style.display = "none";  
}
function showDateTimeRow(){
    document.getElementById("date-time-container").style.display = "block";  
}

