<template>
  <v-container>
    <!-- <Plotly :data="d" :layout="l" :display-mode-bar="false"></Plotly> -->
    <v-row dense>
      <v-col cols="12" md="4" lg="3">
        <v-switch v-model="filtersValid" label="Valid" readonly></v-switch>
      </v-col>
      <v-col cols="12" md="4" lg="3">
        <v-switch v-model="filtersLazy" label="Lazy"></v-switch>
      </v-col>

      <v-col cols="12" md="4" lg="3">
        <v-combobox
          v-model="filterItems"
          :items="items"
          label="www"
          item-text="name"
          hide-selected
          multiple
          persistent-hint
          small-chips
          deletable-chips
        ></v-combobox>
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
      <v-col cols="12" md="6">
        <Chart :c_id="id1" :data="pie1_data" :layout="pie1_layout" />
      </v-col>
      <v-col cols="12" md="6">
        <Chart :c_id="id2" :data="pie1_data" :layout="pie1_layout" />
      </v-col>

      <v-col cols="12" md="12">
        <Chart :c_id="id3" :data="pie1_data" :layout="pie1_layout" />
      </v-col>

      <!-- <v-col cols="12" md="12">
        <Chart :c_id="id4" :data="data" />
      </v-col>-->
    </v-row>
  </v-container>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import Chart from "@/components/Chart.vue";
@Component({
  components: {
    Chart
  }
})
export default class Plot extends Vue {
  public id1 = "www";
  public id2 = "www2";
  public id3 = "www32";
  public id4 = "www325";
  public pie1_data = [
    {
      values: [19, 26, 55],
      labels: ["اليمن", "Non-Residential", "Utility"],
      type: "pie"
    }
  ];
  public pie1_layout = [];
  public values = [
    ["Salaries", "Office", "Merchandise", "Legal", "<b>TOTAL</b>"],
    [1200000, 20000, 80000, 2000, 12120000],
    [1300000, 20000, 70000, 2000, 130902000],
    [1300000, 20000, 120000, 2000, 131222000],
    [1400000, 20000, 90000, 2000, 14102000]
  ];
  public filtersValid = false;
  public filtersLazy = true;
  public filtersItem = "item2";
  public filtersName = "";
  public filtersEmail = "";
  public filtersCheckbox = 0;
  public filterItems = [];
  public items = [
    { name: "mm", id: 1 },
    { name: "mm2", id: 2 }
  ];

  public reset() {
    this.filtersValid = false;
    this.filtersLazy = true;
    this.filtersItem = "item2";
    this.filtersName = "";
    this.filtersEmail = "";
    this.filtersCheckbox = 0;
  }
}
</script>

