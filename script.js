console.log("Welcome to Veggie Haven");

const menuItems = [
  {
    id: "1",
    itemName: "Butter Paneer",
    image: "https://t4.ftcdn.net/jpg/05/82/28/65/360_F_582286506_Kji3X5NrZBHMTFSqwG9gADXWMsjrtEjL.jpg",
    price: "₹250",
    category: "Veg",
  },
  {
    id: "2",
    itemName: "Masala Dosa",
    image: "https://media-cdn2.greatbritishchefs.com/media/cqfbszpf/pali-hill0064-selects.whqc_768x512q80.jpg",
    price: "₹150",
    category: "Veg",
  },
  {
    id: "3",
    itemName: "Vegetable Pulao",
    image: "https://t4.ftcdn.net/jpg/04/18/22/71/360_F_418227121_mGoGy7ZE2jAkq07OnN599QU7PVuhVT57.jpg",
    price: "₹200",
    category: "Veg",
  },
  {
    id: "4",
    itemName: "Butter Naan",
    image: "https://www.shutterstock.com/image-photo/indian-naan-bread-herbs-garlic-600nw-2255100041.jpg",
    price: "₹50",
    category: "Veg",
  },
  {
    id: "7",
    itemName: "Gulab Jamun",
    image: "https://t3.ftcdn.net/jpg/04/40/62/60/360_F_440626064_ghxwEM9hM70aVObUUYObrNS4g8qor3yX.jpg",
    price: "₹100",
    category: "Veg",
  },
  {
    id: "9",
    itemName: "Aloo Paratha",
    image: "https://t3.ftcdn.net/jpg/01/15/62/02/360_F_115620221_5XL4MzVoXrHGJdhHXrVVNL0WUHdJLCPH.jpg",
    price: "₹120",
    category: "Veg",
  },
  {
    id: "13",
    itemName: "Chole Bhature",
    image: "https://t4.ftcdn.net/jpg/05/97/41/05/360_F_597410510_aVWxjkToHzErUYm3Ammrvm4od2Fjxl1w.jpg",
    price: "₹180",
    category: "Veg",
  },
  {
    id: "15",
    itemName: "Palak Paneer",
    image: "https://t4.ftcdn.net/jpg/04/12/57/33/360_F_412573389_1Jp8J0hA4fc1VjxR8D2SPQbdQpTfYkJP.jpg",
    price: "₹220",
    category: "Veg",
  },
  {
    id: "17",
    itemName: "Rajma Chawal",
    image: "https://t3.ftcdn.net/jpg/07/28/71/10/360_F_728711034_H1fTB6GI74c1icXZY1NBODNqXAky5IO8.jpg",
    price: "₹200",
    category: "Veg",
  },
  {
    id: "19",
    itemName: "Veg Hakka Noodles",
    image: "https://as1.ftcdn.net/v2/jpg/03/86/85/64/1000_F_386856433_UTNRrviaDxUsLJfEpVp24bdr3xqgQXjl.jpg",
    price: "₹180",
    category: "Veg",
  },
  {
    id: "20",
    itemName: "Mango Lassi",
    image: "https://t4.ftcdn.net/jpg/03/26/17/71/360_F_326177134_sPYEaYBMKsScGsOGbV45FAjaTZueL093.jpg",
    price: "₹80",
    category: "Veg",
  },
  {
    id: "21",
    itemName: "Special Thali",
    image: "https://media.istockphoto.com/id/1158578874/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=ZHAsJ9sJJoeAmwD3iU1Oo2YSKn_BG6JoE7zuG1frxwg=",
    price: "₹140",
    category: "Veg",
  },
];

// Render vegetarian menu items dynamically
let itemsDiv = document.querySelector(".items");
function addItem() {
  menuItems.filter(item => item.category === "Veg").forEach((item) => {
    let div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
      <img src=${item.image} alt="image" class="items-image"/>
      <p class="item-img">${item.itemName}<img src="./images/veg.png" class="veg-nonveg"/></p>
      <p>${item.price}</p>
      <button class="cart-btn">Add to cart</button>
    `;
    itemsDiv.appendChild(div);
  });
}

addItem();