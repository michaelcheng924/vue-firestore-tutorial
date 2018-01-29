<template>
  <div>
    <div v-if="loaded">
      <h1>{{name}}</h1>
      <h2>${{price}}</h2>
      <button class="btn">Buy</button>
    </div>
    <div v-else>
      <h1>Loading...</h1>
    </div>
  </div>
</template>

<script>
import db from '@/db'

export default {
  name: 'ProductPage',
  data () {
    return {
      name: '',
      price: '',
      loaded: false
    }
  },
  beforeCreate () {
    db.collection('Products')
      .where('product_id', '==', this.$route.params.product_id).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const { name, price } = doc.data()

          this.name = name
          this.price = price
        })

        this.loaded = true
      })
  }
}
</script>

<style scoped>

</style>
