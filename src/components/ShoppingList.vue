<template>
    <div class="my-2">
      <input type="text" placeholder="ne alacaksın?" @keydown.enter="onSave" />
    </div>
    <ul>
      <li
        v-for="item in itemList"
        :key="item.id"
        class="d-flex justify-content-between align-items-center"
      >
        <span>{{ item.title }}</span>
        <button @click="onDelete(item)" class="sm red">Sil</button>
      </li>
    </ul>
    <div class="bg-blue text-white">Herhangi bir ürün yoktur..</div>
    <small class="mt-2 text-red d-flex justify-content-end align-items-center">
    {{ itemCount }}  adet alınacak ürün vardır..</small
    >
</template>

<script>

export default {
  data() {
    return {
      itemList:[],
    }
  },
  mounted(){
    this.$appAxios.get("/items")
   .then(item_response =>{
    console.log(item_response);
    this.itemList = item_response.data || [];
    console.log('this.itemList :>> ', this.itemList);
   })
  },
  methods: {
    onSave(e) {
      const saveObject = {
        title: e.target.value,
        created_at: new Date(),
        completed: false,
      };
      this.$appAxios.post("/items", saveObject)
        .then((save_response) => {
          console.log(save_response);
          this.itemList.push(save_response.data);
          console.log('this.itemList :>> ', this.itemList);
          e.target.value = "";
          e.target.focus();
        });
    },
    onDelete(item) {
      this.$appAxios.delete(`/items/${item.id}`).then(delete_response => {
        console.log(delete_response);
        this.itemList = this.itemList.filter(i => i.id !== item.id);
      });
    }
  },
  computed:{
    itemCount(){
     return this.itemList.length || 0;
    }
  }
};
</script>
