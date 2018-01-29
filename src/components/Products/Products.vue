<template>
  <div>
    <add-product
      v-bind:addProductData="addProductData"
      v-bind:onAdd="onAdd"
    />

    <products-list
      v-bind:editId="editId"
      v-bind:editProductData="editProductData"
      v-bind:onCancel="onCancel"
      v-bind:onDelete="onDelete"
      v-bind:onEdit="onEdit"
      v-bind:onEditSubmit="onEditSubmit"
      v-bind:sortedProducts="sortedProducts"
    />
  </div>
</template>

<script>
import db from '@/db'
import AddProduct from './AddProduct'
import ProductsList from './ProductsList'

export default {
  name: 'Products',
  data () {
    return {
      products: [],
      addProductData: {
        product_id: '',
        name: '',
        price: ''
      },
      editId: '',
      editProductData: {
        product_id: '',
        name: '',
        price: ''
      }
    }
  },
  components: {
    AddProduct,
    ProductsList
  },
  computed: {
    sortedProducts () {
      return this.products.slice().sort((a, b) => {
        return a.product_id - b.product_id
      })
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      db.collection('Products').get().then(querySnapshot => {
        const products = []

        querySnapshot.forEach(doc => {
          products.push(doc.data())
        })

        this.products = products
      })
    },
    onAdd () {
      db.collection('Products').add(this.addProductData).then(this.getProducts)
    },
    onDelete (product_id) {
      db.collection('Products')
        .where('product_id', '==', product_id).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete().then(this.getProducts)
          })
        })
    },
    onEdit (product) {
      this.editId = product.product_id
      this.editProductData.name = product.name
      this.editProductData.price = product.price
    },
    onCancel () {
      this.editId = ''
      this.editProductData.name = ''
      this.editProductData.price = ''
    },
    onEditSubmit () {
      db.collection('Products')
        .where('product_id', '==', this.editId).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.set({
              product_id: this.editId,
              name: this.editProductData.name,
              price: this.editProductData.price
            }).then(this.getProducts)
          })

          this.onCancel()
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products__list-item {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.products__add-product {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.material-icons {
  cursor: pointer;
}
</style>
