const listOfProducts = [
    {
      banner:
        "https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/shop-image-1-600x600.jpg",
      name: "FACE IT",
      price: 219,
      address: "action"
    },
    {
      banner:
        "https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/shop-image-2-600x600.jpg",
      name: "K-27",
      price: 99,
      address: "esports"
    },
    {
      banner:
        "https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/shop-image-3-600x600.jpg",
      name: "UCONIC",
      price: 69,
      address: "dota2"
    },
    {
      banner:
        "https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/shop-image-5-600x600.jpg",
      name: "HEADPHONES",
      price: 69,
      address: "tournaments"
    },
    {
      banner:
        "https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/shop-image-6-600x600.jpg",
      name: "SEZAM",
      price: 99,
      address: "esports"
    },
    {
      banner:
        "https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/shop-image-7-600x600.jpg",
      name: "R12 CASE",
      price: 990,
      address: "videogames"
    },
    {
      banner:
        "https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/shop-image-8-600x600.jpg",
      name: "M-LAPTOP",
      price: 79,
      address: "esports"
    },
    {
      banner:
        "https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/shop-image-9-600x600.jpg",
      name: "MICROPHONE",
      price: 2500,
      address: "tournaments"
    },
    {
      banner:
        "https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/shop-image-10-600x600.jpg",
      name: "R-678",
      price: 119,
      address: "dota2"
    },
    {
      banner:
        "https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/shop-image-11-600x600.jpg",
      name: "S-BLACK89",
      price: 59,
      address: "esports"
    },
    {
      banner:
        "https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/shop-image-12-600x600.jpg",
      name: "LH-MOUSE",
      price: 3200,
      address: "esports"
    },
    {
      banner:
        "https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/shop-image-14-600x600.jpg",
      name: "NEU-9",
      price: 79,
      address: "dota2"
    }
  ];
  
  let str = "";
  listOfProducts.forEach((item) => {
    str += `
      <div class="list_item">
        <img src="${item.banner}" alt="" class="banner">
        <div class="content-list-item">
          <h2 class="title">${item.name}</h2>
          <div class="content-price">$<span class="price">${item.price}</span></div>
        </div>
        <span class="addresss">${item.address}</span>
      </div>
    `;
  });
  
  function nonAccentVietnamese(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
    str = str.replace(/\u02C6|\u0306|\u031B/g, "");
    return str;
  }
  
  //search = name
  const listOfProductsElement = document.getElementsByClassName("list_products");
  listOfProductsElement[0].innerHTML = str;
  const inputElment = document.getElementById("input_search");
  inputElment.addEventListener("input", function (event) {
    const userEnterName = event.target.value;
    const listProduct = document.getElementsByClassName("list_item");
    for (let i = 0; i < listProduct.length; i++) {
      const item = listProduct[i];
      const productName = document.getElementsByClassName("title");
      const name = productName[i].textContent;
      if (
        nonAccentVietnamese(name).includes(nonAccentVietnamese(userEnterName))
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  });
  
  
  
  //search = address
  const filterAddress = document.getElementsByClassName("click-button");
  for (let i = 0; i < filterAddress.length; i++) {
    const elementOne = filterAddress[i];
    elementOne.addEventListener("click", function(event){
      for (let i = 0; i < filterAddress.length; i++) {
        filterAddress[i].classList.remove('active-list-button');
      }
      event.target.classList.add('active-list-button');
      const addressName = document.getElementsByClassName("click-button")[i].textContent;
      const listProduct = document.getElementsByClassName("list_item");
      for (let i = 0; i < listProduct.length; i++) {
        const item = listProduct[i];
        const addresss = document.getElementsByClassName("addresss")[i].textContent;
        if (addresss === addressName) {
          item.style.display = "block";
        }else if(addressName==='all') {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  };
  