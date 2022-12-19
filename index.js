let product = document.getElementById("products")

let Hairproduct = document.getElementById("hairproducts")

FETCHDATA();

async function FETCHDATA(){
    try {
        let url = "test.json";
        let promise = await fetch(url);
        let data = await promise.json();
        // console.log(data.makeup)
        displayproduct(data.makeup)
        // displayhair(data.haircare)
        // console.log(data.haircare)
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

        let add= document.createElement("button");
        add.innerText = "ADD TO BAG"

        add.addEventListener("click" , ()=>{
            let cartdata = JSON.parse(localStorage.getItem("cart"));
            if(cartdata == null){
                cartdata = []
            }
            let isalreadyincart = false;
            for(let i=0;i<cartdata.length;i++){
                if(cartdata[i].id === element.id){
                    isalreadyincart = true;
                    break;
                };
            }

            if(isalreadyincart === true){
                alert("Product Already in the Cart")
            }else{
                cartdata.push({...element , Quantity:1});
                localStorage.setItem("cart" , JSON.stringify(cartdata));
                alert("Product added to the Cart")
            }
         
        })

        image.addEventListener("click" , ()=>{
            window.location.href = "/product.html";
        })


        cont.append(image , name , description , price , add)
        product.append(cont)
    });
}





// function displayhair(data){
//     // console.log(data)
//     data.forEach((element) => {
//         console.log(element.name)
//         let cont = document.createElement("div");

      
//         let image = document.createElement("img");
//         image.setAttribute( "src" , element.image );

       

//         let name = document.createElement("h3");
//         name.innerText= element.name;
//         let description = document.createElement("p");
//         description.innerText = element.description;
//         let price = document.createElement("h4");
//         price.innerText = element.price;

//         let add= document.createElement("button");
//         add.innerText = "ADD TO BAG"

//         add.addEventListener("click" , ()=>{
//             let cartdata = JSON.parse(localStorage.getItem("cart"));
//             if(cartdata == null){
//                 cartdata = []
//             }
//             let isalreadyincart = false;
//             for(let i=0;i<cartdata.length;i++){
//                 if(cartdata[i].id === element.id){
//                     isalreadyincart = true;
//                     break;
//                 };
//             }

//             if(isalreadyincart === true){
//                 alert("Product Already in the Cart")
//             }else{
//                 cartdata.push({...element , Quantity:1});
//                 localStorage.setItem("cart" , JSON.stringify(cartdata));
//                 alert("Product added to the Cart")
//             }
         
//         })

//         image.addEventListener("click" , ()=>{
//             window.location.href = "/product.html";
//         })


//         cont.append(image , name , description , price , add)
//         Hairproduct.append(cont)
//     });
// }
// hair care page

// function displayhair(data){
//     data.forEach((element) => {
//         let cont = document.createElement("div");
//         let image = document.createElement("img");
//         image.setAttribute( "src" , element.image );
//         let name = document.createElement("h3");
//         name.innerText= element.name;
//         let description = document.createElement("h4");
//         description.innerText = element.description;
//         let price = document.createElement("h4");
//         price.innerText = element.price;

//         cont.append(image , name , description , price)
//         Hairproduct.append(cont)
//     });
// }

