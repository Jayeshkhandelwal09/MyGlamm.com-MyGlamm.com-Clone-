let product = document.getElementById("products")

let Hairproduct = document.getElementById("hairproducts")

FETCHDATA();

async function FETCHDATA(){
    try {
        let url = "test.json";
        let promise = await fetch(url);
        let data = await promise.json();
        console.log(data.makeup)
        displayproduct(data.makeup)
        console.log(data.haircare)
        displayhair(data.haircare)
    } catch (error) {
        
    }
}

// makeup page
function displayproduct(data){
    data.forEach((element) => {
        let cont = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute( "src" , element.image );
        let name = document.createElement("h3");
        name.innerText= element.name;
        let description = document.createElement("p");
        description.innerText = element.description;
        let price = document.createElement("h4");
        price.innerText = element.price;

        cont.append(image , name , description , price)
        product.append(cont)
    });
}

// hair care page

function displayhair(data){
    data.forEach((element) => {
        let cont = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute( "src" , element.image );
        let name = document.createElement("h3");
        name.innerText= element.name;
        let description = document.createElement("h4");
        description.innerText = element.description;
        let price = document.createElement("h4");
        price.innerText = element.price;

        cont.append(image , name , description , price)
        Hairproduct.append(cont)
    });
}

