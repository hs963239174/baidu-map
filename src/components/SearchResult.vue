<template>
	<div id="searchResult">
    <aside  id="searchContent" class="perfectScrollbar">
      <div id="solso-sidebar" style="top:0px;">
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

          <div class="row">
            <div class="modal-body">
              <img src="/src/assets/logo.png">
              <img src="/src/assets/logo.png">
              <img src="/src/assets/logo.png">
              <img src="/src/assets/logo.png">
              <img src="/src/assets/logo.png">
              <img src="/src/assets/logo.png">
              <img src="/src/assets/logo.png">
              <img src="/src/assets/logo.png">
              <img src="/src/assets/logo.png">
              <img src="/src/assets/logo.png">
            </div>
          </div>

        </div>
      </div>
    </aside>
	</div>
</template>

<script>
  export default {
    mounted: function() {
      $("#searchContent").css("right","0px");
      this.show();
      //this.hide();
    },
    methods:{
      show:function () {
        $("#searchContent").animate({"width":"30%"},500);
      },
      hide:function () {
        $("#searchContent").animate({width:"0px"},500);
      }
    }
  }

</script>

