import { computed, ref } from 'vue';

export default function useBasket() {
  const basket = ref([]);

  function addToBasket(item, option) {
    const pizzaExists = basket.value.find(function (pizza) {
      return pizza.name === item.name && pizza.size === option.size;
    });

    if (pizzaExists) {
      pizzaExists.quantity++;
      return;
    }

    basket.value.push({
      name: item.name,
      price: option.price,
      size: option.size,
      quantity: 1,
    });
  }

  function removeFromBasket(item) {
    basket.value.splice(basket.value.indexOf(item), 1);
  }

  function increaseQuantity(item) {
    item.quantity++;
  }

  function decreaseQuantity(item) {
    item.quantity--;

    if (item.quantity === 0) {
      removeFromBasket(item);
    }
  }

  const total = computed(function () {
    let totalCost = 0;

    basket.value.forEach(function (item) {
      totalCost += Math.round(item.price * item.quantity * 100) / 100;
    });
    return totalCost;
  });

  return {
    basket,
    addToBasket,
    increaseQuantity,
    decreaseQuantity,
    total,
  };
}
