
const container=document.getElementById('container');

const f1=()=>{
       fetch("https://dummyjson.com/products").then(res=>{
            return res.json()
       }).then(data=>{
         data.products.forEach((prod)=>{
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
          container.innerHTML+=card
         })
         
             console.log(data)
       })
}