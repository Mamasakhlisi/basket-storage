### აღწერა

- პაკეტი გამოგადგებათ "კალათა"-ს აწყობაში მას გააჩნია რამოდენიმე ფუნქცია რაც დაგეხმარებათ მცირე დროში ააწყოთ თქვენთვის სასურველი კალათა.

### იმპორტი
```javascript
import useBasketStorage from 'basket-storage'
```

### Hook-ის მეთოდის თანმიმდევრობა
```javascript
  const [basket,setBasketItem,removeBasketItem,findBasketItem,clearBasket] = useBasketStorage();

```
### Hook-ის მეთოდები
1. basket - კალათაში მოთავსებული ნივთების წამოსაღებად.
2. setBasketItem - კალათაში ნივთის დამატება.
3. removeBasketItem - კალათიდან კონკრეტული ნივთის ამოღება.
4. findBasketItem - კალათაში კონკრეტული ნივთის მოძიება.
5. clearBasket - კალათის გასუფთავება.

### მეთოდის პარამეტრები



```javascript
 setBasketItem({id:unique,...})  // ამ მეთოდს უნდა გადავცეთ პროდუქტიდან წამოღებული ინფორმაცია "object"
  removeBasketItem(1) // ამ მეთოდს უნდა გადავცეთ პროდუქტიდან წამოღებული უნიკალური ID
  findBasketItem(1) // ამ მეთოდს უნდა გადავცეთ პროდუქტიდან წამოღებული უნიკალური ID
```
