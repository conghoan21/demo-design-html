let productList = ["iPhone", "Samsung", "Nokia"];

function showAllProduct() {
    let data = "<table border='1px'>";
    data += "<tr>" +
        "<td>Product Name</td>" +
        "<td>Action</td>" +
        "</tr>";
    for (let i = 0; i < productList.length; i++) {
        data += "<tr>" +
            "<td id='productName" + i + "'>" + productList[i] + "</td>" +
            "<td>" +
            "<button onclick='editProduct(" + i + ")'>Edit</button>" +
            "<button onclick='deleteProduct(" + i + ")'>Delete</button>" +
            "<td>" +
            "</tr>";
    }
    data += "</table>"
    document.getElementById("listProduct").innerHTML = data;
}

// tạo chức năng thêm sản phẩm mới
function addNewProduct() {
    let newProuctName = document.getElementById("newProduct").value;
    productList.push(newProuctName);
    showAllProduct();
}

// tạo chức năng xóa sản phẩm
function deleteProduct(index) {
    if (confirm('Are you sure?')) {
        productList.splice(index, 1);
        showAllProduct()
    }
}

// tạo chức năng chỉnh sửa
function editProduct(i) {
    //let newName=prompt("Moi ban nhap ten moi", productList[index]);
    //productList[index]=newName;
    //showAllProduct();
    let eProduct = "productName" + i;
    let oldProductName = productList[i];
    //let data = "<input onchange='confirmEditProduct(" + i + ",editProduct(i))'/>";
    let data = `<input onchange='confirmEditProduct(${i},this)'/>`;
    document.getElementById(eProduct).innerHTML = data;
}
function confirmEditProduct(index, e){
    productList[index] = e.value;
    showAllProduct();
}