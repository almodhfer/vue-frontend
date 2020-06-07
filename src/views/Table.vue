<template>
  <v-container class="table-style1">
    <v-row dense>
      <v-col cols="12" md="4" lg="3">
        <v-switch v-model="filtersValid" label="Valid" readonly></v-switch>
      </v-col>
      <v-col cols="12" md="4" lg="3">
        <v-switch v-model="filtersLazy" label="Lazy"></v-switch>
      </v-col>

      <v-col cols="12" md="4" lg="3">
        <v-text-field v-model="filtersName" label="Name"></v-text-field>
      </v-col>

      <v-col cols="12" md="4" lg="3">
        <v-text-field v-model="filtersEmail" label="E-mail"></v-text-field>
      </v-col>
      <v-col cols="12" md="4" lg="3">
        <v-select v-model="filtersItem" :items="items" label="Item"></v-select>
      </v-col>

      <v-col cols="12" md="4" lg="3">
        <v-checkbox v-model="filtersCheckbox" label="Do you agree?" dense outlined></v-checkbox>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn color="warning" class="mr-4" @click="reset">تفريغ</v-btn>
        <v-btn color="success" class="mr-4" @click="reset">بحث</v-btn>
      </v-col>
    </v-row>
    <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1">
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>

    <EditorContent :editor="editor" />
  </v-container>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { Editor, EditorContent } from "tiptap";
@Component({
  components: EditorContent
})
export default class Table extends Vue {
  public filtersValid = false;
  public filtersLazy = true;
  public filtersItem = "item2";
  public filtersName = "";
  public filtersEmail = "";
  public filtersCheckbox = 0;
  public editor: Editor = null;

  public headers = [
    {
      text: "Dessert (100g serving)",
      align: "start",
      sortable: false,
      value: "name"
    },
    { text: "Calories", value: "calories" },
    { text: "Fat (g)", value: "fat" },
    { text: "Carbs (g)", value: "carbs" },
    { text: "Protein (g)", value: "protein" },
    { text: "Iron (%)", value: "iron" }
  ];
  desserts = [
    {
      name: "Frozen Yogurt",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: "1%"
    },
    {
      name: "Ice cream sandwich",
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      iron: "1%"
    },
    {
      name: "Eclair",
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      iron: "7%"
    },
    {
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      iron: "8%"
    },
    {
      name: "Gingerbread",
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      iron: "16%"
    },
    {
      name: "Jelly bean",
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      iron: "0%"
    },
    {
      name: "Lollipop",
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
      iron: "2%"
    },
    {
      name: "Honeycomb",
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      iron: "45%"
    },
    {
      name: "Donut",
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      iron: "22%"
    },
    {
      name: "KitKat",
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7,
      iron: "6%"
    }
  ];

  public items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  public reset() {
    this.filtersValid = false;
    this.filtersLazy = true;
    this.filtersItem = "item2";
    this.filtersName = "";
    this.filtersEmail = "";
    this.filtersCheckbox = 0;
  }
  public mounted() {
    this.editor = new Editor({
      content: "<p>This is just a boring paragraph</p>"
    });
  }
  public beforeDestroy() {
    this.editor.destory();
  }
}
</script>

<style>
.table-style1 tbody tr:nth-of-type(odd) {
  background-color: azure;
}
.table-style1 thead {
  background-color: blue;
}
.table-style1 th {
  font-size: 22px !important;
  color: white !important;
}
.table-style1 td {
  font-size: 22px !important;
}
</style>