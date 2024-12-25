import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: Product[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const productSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      const existingProduct = state.items.find(item => item.id === action.payload.id);
      
      if (existingProduct) {
        // Nếu sản phẩm đã tồn tại, không tăng số lượng mà chỉ có thể hiển thị thông báo
        // Ví dụ: Có thể thêm một thuộc tính để theo dõi thông báo
        existingProduct.quantity += 1; // Tăng số lượng mỗi khi thêm vào
      } else {
        // Nếu không, thêm sản phẩm mới vào danh sách
        state.items.push({ ...action.payload, quantity: 1 });
      }
      
      // Cập nhật tổng số tiền
      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    removeProduct(state, action: PayloadAction<string>) {
      const existingProduct = state.items.find(item => item.id === action.payload);
      if (existingProduct) {
        state.totalAmount -= existingProduct.price * existingProduct.quantity;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addProduct, removeProduct, clearCart } = productSlice.actions;
export default productSlice.reducer;