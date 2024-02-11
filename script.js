  const btnToPay = document.getElementById("btn");
// const para =document.getElementById("para") 
const aPI_key = "rzp_live_f1v5UXQv4lyT8j";
// const aPI_key = "rzp_test_KDCmPZnKzRfJs4";

  
  btnToPay.onclick = function () {
    let amountInRupee = document.getElementById("Amount").value;
    let amountInPaise  = amountInRupee * 100;
    let nameofdonar = document.getElementById("Name").value;
    if(nameofdonar == "" || amountInRupee == ""){
      alert("Both are mandatory. Please enter your name and amount");
    }
    else{
    let options = {
      "key": aPI_key, // Enter the Key ID generated from the Dashboard
      "amount": amountInPaise, // Amount in Paise
      "currency": "INR",
      "description": nameofdonar,
      "image": "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
      "prefill":
      {
        "email": "donation@gmail.com",
        "contact": +919900000000,
        
        
      },
      config: {
        display: {
          blocks: {
            banks: { //name for Axis block
              name: "Pay using all Bank",
              instruments: [
                {
                  method: "card",
                  // issuers: ["UTIB"]
                },
                {
                  method: "netbanking",
                  // banks: ["UTIB"]
                },
              ]
            },
            other: { //  name for other block
              name: "Other Payment modes",
              instruments: [
                {
                  method: "card",
                  // issuers: ["ICIC"]
                },
                {
                  method: 'netbanking',
                }
              ]
            }
          },
          other: [
            {
            method: "upi"
            }
          ],
          sequence: ["block.banks", "block.other"],
          preferences: {
            show_default_blocks: true // Should Checkout show its default blocks?
          }
        }
      },
      "handler": function (response) {
        alert(response.razorpay_payment_id);
      },
      "modal": {
        "ondismiss": function () {
          if (confirm("Are you sure, you want to close the form?")) {
            txt = "You pressed OK!";
            console.log("Checkout form closed by the user");
          } else {
            txt = "You pressed Cancel!";
            console.log("Complete the Payment")
          }
        }
      }
    };

    let rzp1 = new Razorpay(options);
    rzp1.open();
  }
   nameofdonar = " ";
   amountInRupee = " ";

  }