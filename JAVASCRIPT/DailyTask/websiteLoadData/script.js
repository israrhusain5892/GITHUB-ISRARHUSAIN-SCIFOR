// gettting container div
const container=document.getElementById('container');
// calling loadDataByfetch function
const loadDataByFetch= async ()=>{
          container.innerHTML=""
        // make api call  by using async and await
          const res= await fetch("https://dummyjson.com/products")
        //   convert response data into json
           const data= await res.json()
        //    calling function for displaying products
          displayData(data)
      
         
             console.log(data)
            
}

// calling funtion for ajax 
const loadDataByAjax=()=>{
    // window.location.load();
      container.innerHTML=""
    // creating xml http request object
    const xhr = new XMLHttpRequest();
    // make api call
    xhr.open('GET', 'https://dummyjson.com/products', true); // Replace with your API URL

    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data)
            displayData(data);
        } else {
            console.error('Error:', xhr.statusText);
        }
    };

    xhr.onerror = function() {
        console.error('Request failed');
    };

    xhr.send();
}


function displayData(data){
    // iterating on product list
     
    data.products.forEach((prod)=>{
        // make card dynamically 
        var card=`
    
        <div class="card">
                      <img src=${prod.images[0]}/>
                      <div class="card-body">
                          <h5>${prod.title}</h5>
                          <!-- <p>Experience the future of mobile photography with our 50 MP telephoto portrait camera, co-developed with ZEISS.</p> -->
                          <div style="display: flex; width: 100%;  align-items: center; gap: 7px;">
                              <button>Buy Now</button>
                              <span style=" color: green;">10% off</span>
                              <span style="">₹ ${prod.price}</span>
                          </div>
                      </div>
                </div>
  
  ` 
    //    appending card to main div
      container.innerHTML+=card
     })
}

