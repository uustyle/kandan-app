<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

    <table id="example" class="display" cellspacing="0" width="100%"></table>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: 'Welcome to Your Vue.js App2222',
      info: null
    };
  },
  mounted() {
    console.log("mounted");


    var columns = [
      {
        title: "",
        target: 0,
        className: "treegrid-control",
        data: function(item) {
          if (item.children) {
            // return "&ltspan&gt++&lt/span&gt";

            return "<span>+</span>";

          }
          return "";
        }
      },
      {
        title: "Name",
        target: 1,
        data: function(item) {
          return item.name;
        }
      },
      {
        title: "Position",
        target: 2,
        data: function(item) {
          return item.position;
        }
      },
      {
        title: "Office",
        target: 3,
        data: function(item) {
          return item.office;
        }
      },
      {
        title: "Extn.",
        target: 4,
        data: function(item) {
          return item.extn;
        }
      },
      {
        title: "Start date",
        target: 5,
        data: function(item) {
          return item.start;
        }
      },
      {
        title: "Salary",
        target: 6,
        data: function(item) {
          return item.salary;
        }
      }
    ];

    $("#example").DataTable({
      columns: columns,
      ajax: "/arrays",
      treeGrid: {
        left: 10,
        // expandIcon: "&lt;span&gt;+&lt;/span&gt;",
        // collapseIcon: "&lt;span&gt;-&lt;/span&gt;"

        expandIcon: "<span>+</span>",
        collapseIcon: "<span>-</span>"

      }
    });



    // axios.post('/auth/login').then(response => (this.info = response))
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
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
