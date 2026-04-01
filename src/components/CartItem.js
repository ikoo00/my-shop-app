import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../store/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <View style={styles.cartItem}>
      <View style={styles.cartDetails}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text>Rp {(item.price * item.quantity).toLocaleString('id-ID')}</Text>
      </View>

      <View style={styles.counter}>
        <TouchableOpacity
          style={styles.counterButton}
          onPress={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
        >
          <Text style={styles.counterButtonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.counterText}>{item.quantity}</Text>

        <TouchableOpacity
          style={styles.counterButton}
          onPress={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
        >
          <Text style={styles.counterButtonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => dispatch(removeItem(item.id))}>
          <Text style={{ color: '#FF3B30', marginLeft: 10 }}>Hapus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  cartDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: '600',
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  counterButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
  counterText: {
    marginHorizontal: 12,
    fontSize: 16,
  },
});
