document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Coffee Beans Arabica",
        img: "product1.jpg",
        price: 50000,
      },
      {
        id: 2,
        name: "Coffee Beans Robusta",
        img: "product2.jpg",
        price: 45000,
      },
      {
        id: 3,
        name: "Coffee Beans Liberika",
        img: "product3.jpg",
        price: 42000,
      },
      { id: 4, name: "Coffee Beans Gayo", img: "product4.jpg", price: 40000 },
      {
        id: 5,
        name: "Coffee Beans Java Preanger",
        img: "product5.jpg",
        price: 40000,
      },
      {
        id: 6,
        name: "Coffee Beans Mandailing",
        img: "product6.jpg",
        price: 35000,
      },
    ],
  }));
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // cek apakah item tersebut sama dengan yang ada dalam cart
      const cartItem = this.items.find((item) => item.id === newItem.id);
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
        // console.log (this.total)
      } else {
        // cek apakah item yang ditambahkan sama atau tidak dengan yang ada di cart
        this.items = this.items.map((item) => {
          if (item.id != newItem.id) {
            return item;
          } else {
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);
      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// Konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
