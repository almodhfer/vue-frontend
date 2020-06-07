<template>
  <v-container>
    <!-- <Plotly :data="d" :layout="l" :display-mode-bar="false"></Plotly> -->
    <v-card>
      <v-tabs>
        <v-tab href="#tab-chart">tab1</v-tab>
        <v-tab href="#tab-query">tab2</v-tab>
        <v-tab-item value="tab-chart"></v-tab-item>
      </v-tabs>
      <div v-bind:id="id"></div>
      <v-card-actions>
        <v-btn primary>note</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";
import Plotly from "plotly.js";
@Component
export default class Chart extends Vue {
  @Prop()
  public c_id: any;
  @Prop()
  public data: any;
  @Prop()
  public layout: any;

  public get id() {
    return this.c_id + "w";
  }
  private plot() {
    Plotly.newPlot(this.id, this.data, this.layout);
  }
  public mounted() {
    if (this.c_id === null) return;
    if (this.id) this.plot();
  }
}
</script>

