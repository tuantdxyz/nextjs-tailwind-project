// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from '../../store';
// import { toast } from 'react-toastify';


// interface Product {
//   id: string;
//   slug: string;  // Thêm thuộc tính slug
//   name: string;
//   price: number;
//   description: string;  // Thêm thuộc tính description
//   quantity: number;
// }

// interface CartState {
//   items: Product[];
//   totalAmount: number;
// }

// const initialState: CartState = {
//   items: [],
//   totalAmount: 0,
// };

// const productSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addProduct(state, action: PayloadAction<Product>) {
//       const existingProduct = state.items.find(item => item.id === action.payload.id);
      
//       if (existingProduct) {
//         // Chỉ thêm sản phẩm nếu nó không tồn tại trong giỏ hàng
//         // Nếu sản phẩm đã có trong giỏ hàng, thông báo cho người dùng
//         // toast.info(`${action.payload.name}} is already in the cart!`);
//         return; // Không làm gì nếu sản phẩm đã tồn tại
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 }); // Thêm sản phẩm mới với số lượng 1
//         // toast.success(`${action.payload.name} was successfully added.`);
//       }
      
//       state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
//     },
//     updateProductQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
//       const existingProduct = state.items.find(item => item.id === action.payload.id);
      
//       if (existingProduct) {
//         existingProduct.quantity = action.payload.quantity; // Cập nhật số lượng theo tham số
//       }
//       state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
//     },
//     removeProduct(state, action: PayloadAction<string>) {
//       const existingProduct = state.items.find(item => item.id === action.payload);
//       if (existingProduct) {
//         state.totalAmount -= existingProduct.price * existingProduct.quantity;
//         state.items = state.items.filter(item => item.id !== action.payload);
//       }
//     },
//     clearCart(state) {
//       state.items = [];
//       state.totalAmount = 0;
//     },
//   },
// });

// // Selector để lấy giỏ hàng
// export const selectCart = (state: RootState) => state.cart;

// export const { addProduct, updateProductQuantity, removeProduct, clearCart } = productSlice.actions;
// export default productSlice.reducer;