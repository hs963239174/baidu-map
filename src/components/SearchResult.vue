<template>
	<div id="searchResult" >
    <aside  id="searchContent" class="perfectScrollbar" v-show="isSearchShow">
      <div id="sidebar" style="position: absolute; left: 0px; height: 90%; width:30%; top: 0; margin: 0px;">
        <div id="sidebar-scrollTop" style="top: 55px;">

          <ul class="">
            <li class="result">
              <img src="../assets/blur-bg.jpg" style="height:100%;width:100%;">
            </li>
            <li class="result">
              <img src="../assets/blur-bg.jpg" style="height:100%;width:100%;">
            </li>
            <li class="result">
              <img src="../assets/blur-bg.jpg" style="height:100%;width:100%;">
            </li>
            <li class="result">
              <img src="../assets/blur-bg.jpg" style="height:100%;width:100%;">
            </li>
            <li class="result">
              <img src="../assets/blur-bg.jpg" style="height:100%;width:100%;">
            </li>
            <li class="result">
              <img src="../assets/blur-bg.jpg" style="height:100%;width:100%;">
            </li>
          </ul>
        </div>
      </div>
    </aside>
	</div>
</template>

<script>
  export default {
    mounted: function() {
      $("#searchContent").css("right","0px");
      //this.show();
      //this.hide();
    },

    props: ['isSearch'],

    methods:{

      show:function () {
        $("#searchContent").animate({width:"300px"},500);
      },

      hide:function () {
        $("#searchContent").animate({width:"0px"},500);
      }
    },

    computed: {
      isSearchShow () {
        if (this.isSearch == 'true') {
          this.show();
          return true;
        } else {
          this.hide();
          return false;
        }
      }
    }
  }

</script>


<style>
  li{
    padding: 5px;
  }
  .result:hover
  {
    CUrsor: pointer;
    background: #f5533d;
  }
</style>
