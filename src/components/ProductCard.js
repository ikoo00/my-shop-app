import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <View style={styles.productCard}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDesc}>{product.description}</Text>
      <Text style={styles.productPrice}>Rp {product.price.toLocaleString('id-ID')}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(addItem(product))}
      >
        <Text style={styles.buttonText}>Tambah ke Keranjang</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.13,
    shadowRadius: 4,
    elevation: 4,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
  },
  productDesc: {
    color: '#555',
    marginVertical: 6,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});