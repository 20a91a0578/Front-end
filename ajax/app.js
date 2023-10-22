const api_url='https://dummyjson.com/products';
const table=document.getElementById("phone");
async function get_api(url){
    const response=await fetch(url);
    var data=await response.json();
    console.log(data);
    show(data);
}
get_api(api_url);
function show(data)
{
    let tab=
    `
    <tr>
    <td>ID</td>
    <td>Title</td>
    <td>Images</td>
    <td>Brand</td>
    <td>Price</td>
    <td>Description</td>
    </tr>
    `;
    for(let r of data.products){
        tab+=`
        <tr>
        <td>${r.id}</td>
        <td>${r.title}</td>
        <td> <img src="${r.images[0]}"/></td>
        <td>${r.brand}</td>
        <td>${r.price}</td>
        <td>${r.description}</td>
        </tr>
        `;
    }
    table.innerHTML=tab;
}

