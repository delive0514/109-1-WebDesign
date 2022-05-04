// Start you JavaScript code here.

// TODO: Use data from DataBase(db) to Render Product List
db
    .collection("productList")
    .orderBy("createDay","desc")
    .get()
    //success
    .then(function(collection){
        console.log("Get data!!!!", collection)
        // loop the docs
        collection.forEach(function(doc){
            //console.log('[doc]', doc)
            //console.log('[product]', doc.data())
            var product = doc.data()
            console.log('[product]', product);
            var col = `
            <div class = "col-md-4">
                <div class = "card mb-3">
                    <img src = "${product.image}" class ="card-img-top">
                    <div class = "card-body">
                        <h4>${product.name}</h4> 
                        <p>$${product.price}</p>
                    </div>
                </div>
            </div>`;
            $("#productRow").append(col)
        })
    })
    //failed
    .catch(function(err){
        console.log("error", error)
        
    })
// TODO: id="createProductForm" submit event
$("#createProductForm").submit( function(event){
    //prevent browser to refresh the page
    event.preventDefault();
    //when user submit this form
    console.log("form submitted")
    // create a data structure for a product (Object)
    var product ={
        name: $("#createProductName").val(),
        price: $("#createProductPrice").val(),
        category: $("#createProductCategory").val(),
        image: $("#createProductImage").val(),
        createDay: new Date()
    }
    console.log("[product]",product)
    //save product to database(cloud firestore)
    //save product to "productList" collection of db
    db
        .collection("productList")
        .add(product)
        //success
        .then(function(){
            alert("product created!!!")
        })
        //failed
        .catch(function(){
            console.log('[error:]', err)
            alert("something wrong!")
        })
        
})
// TODO: id="loginForm" submit event
$("#loginForm").submit(function(event){
    // prevent the reload action
    event.preventDefault();
    // get user email & password
    var email = $("#loginEmail").val();
    var password = $("#loginPassword").val();
    console.log(email, password);
    // use Firebase Auth Login API
    firebase.auth().signInWithEmailAndPassword(email, password)
    // function(res){} : res => {} arrow function
    .then( res => {
        console.log("Response from Firebase Server",res);
        alert("Login Successful");
    })
    .catch( err => {
        console.log("Error object from Firebase Server", err);
        alert(err.message);
    });
})

// TODO: id="signUpForm" submit event
