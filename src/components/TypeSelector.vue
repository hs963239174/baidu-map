
<template>
  <div id="typeSelector" >
    <div class="col-lg-12 col-md-12 col-sm-12" style="background-color:Rgba(0,0,0,0.1);">

      <div class="panel-heading" role="tab" id="heading2"  >
        <a data-toggle="collapse" data-parent="" href="" aria-expanded="false"
           aria-controls="collapse3" class="collapsed">
          <i id="selectLeft"  class="icon-chevron-left icon-2x"></i>
          <i id="selectRight" class="icon-chevron-right icon-2x"></i>
        </a>
      </div>

    <aside  id="selectControl" class="sidebar">
      <div id="solso-sidebar" style="top:0px;">
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

          <div class="panel panel-default">

            <div class="panel-heading" role="tab" id="typeHead1">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="###"
                   aria-expanded="false" aria-controls="collapse3" class="collapsed">
                  <i class="icon-eye-open icon-large "></i> 机动车检索
                </a>
              </h4>
            </div>

            <div class="panel-heading" role="tab" id="typeHead2">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="###"
                   aria-expanded="false" aria-controls="collapse3" class="collapsed">
                  <i class="icon-eye-open icon-large "></i> 行人检索
                </a>
              </h4>
            </div>

            <div class="panel-heading" role="tab" id="typeHead3">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="###"
                   aria-expanded="false" aria-controls="collapse3" class="collapsed">
                  <i class="icon-eye-open icon-large "></i> 布控结果
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </aside>
    </div>
  </div>
</template>

<script>

  export default {
    mounted: function() {

      //日期插件初始化
      $(".form_datetime").datetimepicker({
        format: "yyyy-mm-dd hh:ii:ss"
      });


      //选择栏初始化
      $("#selectControl").css("left","0px");
      $("#selectLeft").show();
      $("#selectRight").hide();

      //隐藏选择栏
      $("#selectLeft").click (function(){
        $("#selectLeft").hide();
        $("#selectRight").show();
        $("#selectControl").css("left","-300px");
      });

      //显示选择栏
      $("#selectRight").click (function(){
        $("#selectLeft").show();
        $("#selectRight").hide();
        $("#selectControl").css("left","0px");
      });
    },

    data () {
      return {
        isShow: false,
        showMSG:'hide'
      }
    },

    methods:{
      motorShow() {
        this.showMSG = "motorShow";
        this.$emit('showComponent',this.searchMSG);
        this.showMSG = "motorHide";
      },
      passShow() {
        this.showMSG = "passShow";
        this.$emit('showComponent',this.searchMSG);
        this.showMSG = "passHide";
      },
      depolyShow() {
        this.showMSG = "depolyShow";
        this.$emit('showComponent',this.searchMSG);
        this.showMSG = "depolyHide";
      },


    }
  }

</script>

<style>


</style>
