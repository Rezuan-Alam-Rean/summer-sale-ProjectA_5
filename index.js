let total = 0;

function handleClickCards(target){

    const detailsContainer = document.getElementById("details");


    const itemName = target.parentNode.childNodes[3].innerText ;
    const li = document.createElement("li");
    li.innerText = itemName;
    detailsContainer.appendChild(li);

    const prize =  target.parentNode.childNodes[5].innerText.split(" ")[0];

    total = parseInt(total) + parseInt(prize);
  
      document.getElementById("total").innerText = total;


      

}


function handleDiscount (){

  const couponCode = document.getElementById("coupon").value;
  const totalPrice = document.getElementById("total").innerText;
  if(couponCode === "SELL200"){
    const totalDiscountPrice = (20 / 100) * totalPrice;
    document.getElementById("discount").innerText = totalDiscountPrice;
    document.getElementById("total-price").innerText = totalPrice - totalDiscountPrice;
    
  }
  
  
}