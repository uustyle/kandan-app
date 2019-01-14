<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    {{selected}}
    <!-- <multiselect v-model="building" :options="buildings" track-by="value" label="text" :show-labels="false" :select-label="''" :disabled="buildingDisabled" placeholder="- 未選択 -" :max-height="200" style="width:500px;"> -->
    <!-- <multiselect :selected="selected" :options="options" :multiple="true" ></multiselect> -->
    <div style="width:500px">
      <!-- <multiselect
        v-model="selected"
        :options="options"
        :multiple="true"
        :max-height="200"
        style="width:500px;"
      ></multiselect>-->
      <!-- <multiselect
        v-model="building"
        :options="buildings"
        track-by="value"
        label="text"
        :show-labels="false"
        :select-label="''"
        :disabled="buildingDisabled"
        placeholder="- 未選択 -"
        :max-height="200"
        style="width:500px;"
      >
        <span slot="noResult">該当するレコードがありません。</span>
      </multiselect> -->

      <multiselect
        v-model="building"
        :options="buildings"
        track-by="value"
        label="text"
        :disabled="buildingDisabled"
        placeholder="- 未選択 -"
        :max-height="200"
        style="width:500px;"
      >
        <span slot="noResult">該当するレコードがありません。</span>
      </multiselect>



    </div>
  </div>
</template>


<script>
// import axios from 'axios'
import Vue from "vue";

import Multiselect from "vue-multiselect";

// register globally
Vue.component("multiselect", Multiselect);

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App32",
      info: null,
      selected: "うま",
      options: [
        "ねこ11111111111111111111: 11111111111111111111111111111111111122222222222222222211111111111111111111111111111111111111111166666666666",
        "うし",
        "いぬ",
        "ぞう",
        "とら",
        "うま"
      ],

      buildings: [],
      building: "2",
      buildingDisabled: false
    };
  },

  mounted() {
    this.buildings.push(
      {
        value: 1,
        text:
          "001" +
          " : " +
          "ああああああああああ" +
          " | " +
          " いいいいいいいいいいいいいいいいいいいいい" +
          " いいいいいいいいいいいいいいいいいいいいい" +
          " いいいいいいいいいいいいいいいいいいいいい" +
          " いいいいいいいいいいいいいいいいいいいいい" +
          " いいいいいいいいいいいいいいいいいいいいい" +
          " 1111111111111111111111111111111111"
      },
      {
        value: 2,
        text:
          "002" +
          " : " +
          "ああああああああああ" +
          " | " +
          " いいいいいいいいいいいいいいいいいいいいい"
      }
    );
  },

  methods: {
    updateSelected(newSelected) {
      this.selected = newSelected;
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
