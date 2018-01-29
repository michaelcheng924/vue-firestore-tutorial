<template>
  <div>
    <h3>Products</h3>

    <div
      v-for="product in sortedProducts"
      v-bind:key="product.product_id"
      class="collection"
    >
      <div
        v-if="editId === product.product_id"
        class="collection-item products__list-item"
        v-bind:class="{ 'yellow lighten-4': editId === product.product_id }"
      >
        <div>{{product.product_id}}</div>
        <div>
          <input
            class="validate"
            v-model="editProductData.name"
          />  
        </div>
        <div>
          <input
            class="validate"
            v-model="editProductData.price"
          />  
        </div>
        <div>
          <i
            @click="onEditSubmit"
            class="material-icons"
          >
            check
          </i>
          <i
            @click="onCancel"
            class="material-icons"
          >
            cancel
          </i>
        </div>
      </div>
      <div
        v-else
        class="collection-item products__list-item"
      >
        <div>{{product.product_id}}</div>
        <div>{{product.name}}</div>
        <div>{{product.price}}</div>
        <div>
          <i
            @click="onEdit(product)"
            class="material-icons"
          >
            mode_edit
          </i>
          <i
            @click="onDelete(product.product_id)"
            class="material-icons"
          >
            delete
          </i>
          <router-link
            :to="{
              name: 'ProductPage',
              params: { product_id: product.product_id }
            }"
          >
            <i
              class="material-icons"
            >
              search
            </i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsList',
  props: [
    'editId',
    'editProductData',
    'onCancel',
    'onDelete',
    'onEdit',
    'onEditSubmit',
    'sortedProducts'
  ]
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
