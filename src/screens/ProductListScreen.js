import React, { useLayoutEffect } from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function ProductListScreen({ navigation }) {
  const cartItems = useSelector(state => state.cart.items);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text style={{ color: '#007AFF' }}>Keranjang ({cartItems.length})</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, cartItems.length]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <Text style={styles.title}>Daftar Produk</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        ListEmptyComponent={() => <Text>Tidak ada produk</Text>}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  listContent: {
    paddingBottom: 16,
  },
});
