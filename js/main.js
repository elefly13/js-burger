
let btnCalcola = document.getElementById("btnCalcola");

btnCalcola.addEventListener('click',
    
    function myFunction() {
        // funzione di convalida dell'input nome del burgher
        let x = document.forms["myForm"]["name"].value;
        if (x == "") {
        alert("Scrivi il nome del tuo burger");
        return false;
        } 
        // ciclo per sommare il prezzo degli ingredienti selezionati
        
        for (var i = 0; i < listArray.length; i ++) {
            var totale = somma += listArray[i];
            console.log(totale);
        }   

        // controllo discount coupon e calcolo del prezzo 
        var coupon = document.getElementById('coupon').value;
        // console.log(coupon);
        var arrayCoupon = ["sconto10", "sconto20", "sconto30" ];
        var controlloCoupon = false;
        // for (var i = 0; i < arrayCoupon.length; i++) {
        
            
            if (coupon !== arrayCoupon[i]){
                controlloCoupon = false;
                burgerPrezzo = totale;
                console.log(burgerPrezzo);
            }
            if (coupon === arrayCoupon[0]) {
                controlloCoupon = true;
                burgerPrezzo = totale - (totale * 10 / 100);
                console.log(burgerPrezzo);
            }
            if (coupon === arrayCoupon[1]) {
                controlloCoupon = true;
                burgerPrezzo = totale - (totale * 20 / 100);
                console.log(burgerPrezzo);
            }
            else if (coupon === arrayCoupon[2]) {
                controlloCoupon = true;
                burgerPrezzo = totale - (totale * 30 / 100);
                console.log(burgerPrezzo);
            }
            document.getElementById('prezzo').innerHTML = "$ " + burgerPrezzo.toFixed(2);
        // }
    }
)

// sezione Funzioni
var listArray = [];
var somma = 0;
var checkboxses = document.querySelectorAll('.food');
console.log(checkboxses);
for(var checkbox of checkboxses) {
    checkbox.addEventListener('click', function() {
        if (this.checked == true) {
        listArray.push(parseInt(this.value));
        } 
        return console.log(listArray);   
    })
} 




// let ingredients = [
//     {
//         food : "cheese",
//         price : 5 
//     },
//     {
//         food : "fried-egg",
//         price : 3
//     },
//     {
//         food : "mustard",
//         price : 2 
//     },
//     {
//         food : "tomato",
//         price : 3 
//     },
//     {
//         food : "lettuce",
//         price : 3 
//     },
//     {
//         food : "ketchup",
//         price : 3 
//     },  
// ]