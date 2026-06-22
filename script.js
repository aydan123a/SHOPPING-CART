let products=[
{name:"Laptop",price:1000},
{name:"Phone",price:500},
{name:"Mouse",price:50}
];

let cart=[];

function showProducts(){
let div=document.getElementById("products");
div.innerHTML="";

products.forEach((product,index)=>{
div.innerHTML+=`
<div class="product">
${product.name} - $${product.price}
<button onclick="addCart(${index})">Add</button>
</div>`;
});
}

function addCart(index){
let product=products[index];
let item=cart.find(p=>p.name==product.name);

if(item){
item.quantity++;
}else{
cart.push({
name:product.name,
price:product.price,
quantity:1
});
}

renderCart();
}

function renderCart(){
let table=document.getElementById("cart");

table.innerHTML=`
<tr>
<th>Product</th>
<th>Price</th>
<th>Quantity</th>
<th>Action</th>
</tr>`;

let total=0;

cart.forEach((item,index)=>{
total+=item.price*item.quantity;

table.innerHTML+=`
<tr>
<td>${item.name}</td>
<td>$${item.price}</td>
<td>
<button onclick="changeQuantity(${index},-1)">-</button>
${item.quantity}
<button onclick="changeQuantity(${index},1)">+</button>
</td>
<td>
<button onclick="removeProduct(${index})">Delete</button>
</td>
</tr>`;
});

document.getElementById("total").innerHTML="Total: $"+total;
}

function changeQuantity(index,value){
cart[index].quantity+=value;

if(cart[index].quantity<=0){
cart.splice(index,1);
}

renderCart();
}

function removeProduct(index){
cart.splice(index,1);
renderCart();
}

showProducts();
