
// styling the hover effect for links

let link = document.getElementsByTagName("li").length;


for(let i = 0; i < link; i++) {
    document.getElementsByTagName("li")[i].addEventListener("mouseenter", function() {

        function bbb() {
            document.getElementsByTagName("section")[i].style.display = "block";
        }

        setTimeout(bbb, 1400);


    })

    document.getElementsByTagName("li")[i].addEventListener("mouseleave", function() {

        function bbb() {
            document.getElementsByTagName("section")[i].style.display = "none";
        }

        setTimeout(bbb, 1500);
    
    })
    
}


// styling the remove bar
document.getElementById("remove").addEventListener("click", function() {

    run_first();

    for(let i = 0; i < link; i++) {
        document.getElementsByTagName("li")[i].style.transition = "font-size 0.9s ease-in";

    }


    for(let i = 0; i < link; i++) {
        document.getElementsByTagName("li")[i].style.fontSize = "0";



        document.getElementsByTagName("li")[i].style.paddingBottom = "0";


        document.getElementsByTagName("li")[i].style.paddingTop = "0";

    }


    this.style.transition = "margin-left 0.9s ease-in";

    this.style.marginLeft = "10px";


    this.setAttribute("onclick", "click_only()");

    
})


function run_first() {
    document.getElementsByTagName("ul")[0].style.transition = "flex-basis 0.8s ease-in";

    document.getElementsByTagName("ul")[0].style.flexBasis = "0";

    document.getElementsByTagName("ul")[0].style.paddingLeft = "0";

    document.getElementsByClassName("img_only")[0].style.transition = "flex-basis 0.8s ease-in";

    document.getElementsByClassName("img_only")[0].style.flexBasis = "100%";


    document.getElementsByTagName("h1")[0].style.transition = "font-size 0.8s ease-in";

    document.getElementsByTagName("h1")[0].style.fontSize = "0";
}


function click_only() {

    

    document.getElementsByTagName("ul")[0].style.transition = "flex-basis 0.8s ease-in";

    document.getElementsByTagName("ul")[0].style.flexBasis = "25%";
    
    document.getElementsByTagName("ul")[0].style.paddingLeft = "20px";

    document.getElementsByClassName("img_only")[0].style.transition = "flex-basis 0.8s ease-in";

    document.getElementsByClassName("img_only")[0].style.flexBasis = "75%";

    document.getElementsByTagName("h1")[0].style.transition = "font-size 0.8s ease-in";

    document.getElementsByTagName("h1")[0].style.fontSize = "2em";

    
    for(let i = 0; i < link; i++) {
        document.getElementsByTagName("li")[i].style.transition = "font-size 0.9s ease-in";
    }

    for(let i = 0; i < link; i++) {
        document.getElementsByTagName("li")[i].style.fontSize = "30px";

        document.getElementsByTagName("li")[i].style.marginTop = "60px";


        document.getElementsByTagName("li")[i].style.paddingBottom = "10px";


        document.getElementsByTagName("li")[i].style.paddingTop = "10px";
    }


    document.getElementById("remove").style.transition = "margin-left 0.9s ease-in";

    document.getElementById("remove").style.marginLeft = "300px";


    document.getElementById("remove").removeAttribute("onclick");

}


let link_only = document.getElementsByTagName("li").length;



for(let i = 0; i < link_only; i++) {
    document.getElementsByTagName("li")[i].addEventListener("click", function() {

        document.getElementsByClassName("img_only")[0].style.backgroundImage = 'url(image/img'+i+".jpg)";
        document.getElementsByClassName("img_only")[0].style.backgroundPosition = "center";
        document.getElementsByClassName("img_only")[0].style.backgroundOrigin = "border-box";
        document.getElementsByClassName("img_only")[0].style.backgroundSize = "cover";
        document.getElementsByClassName("img_only")[0].style.backgroundRepeat = "no-repeat";

    })
}



let link_ancho = 4;

for(let i = 0; i < link_ancho; i++) {

    document.getElementById(`buy_ok${i}`).style.cursor = "pointer";

    document.getElementById(`buy_ok${i}`).addEventListener("click", function() {
        
        document.getElementById(`buy_ok${i}`).style.cursor = "pointer";

        let dad = document.getElementById(`buy_ok${i}`).parentNode;

        let image = dad.childNodes[1].currentSrc;

        let productName = dad.childNodes[3].innerText;

        let productPrice = dad.childNodes[5].innerText;

        let store = {
            nameItem : productName,
            priceItem : productPrice,
            imageItem : image
        }

        localStorage.setItem("store", JSON.stringify(store));

        window.location.href = "buy.html";
    })


}