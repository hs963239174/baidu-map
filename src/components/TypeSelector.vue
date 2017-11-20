
<template>
  <div id="typeSelector">
    <div class="col-lg-1 col-md-1 col-sm-4" >
      <div class="panel-heading" role="tab" id="heading2"  >
        <a data-toggle="collapse" data-parent="" href="" aria-expanded="false" aria-controls="collapse3" class="collapsed">
          <i id="selectLeft"  class="icon-chevron-left icon-2x"></i>
          <i id="selectRight" class="icon-chevron-right icon-2x"></i>
        </a>
      </div>
    <aside  id="selectControl" class="sidebar  perfectScrollbar">
      <div id="solso-sidebar">
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

          <div class="panel panel-default">



            <div class="panel-heading" role="tab" id="heading3">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="false" aria-controls="collapse3" class="collapsed">
                  <i class="icon-eye-open icon-large "></i> 颜色
                </a>
              </h4>
            </div>

            <div id="collapse3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3" aria-expanded="false">
              <div>
                <span class="list-group-item">红色</span>
                <span class="list-group-item">黄色</span>
                <span class="list-group-item">黑色</span>
              </div>
            </div>
          </div>

          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="heading4">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="false" aria-controls="collapse4" class="collapsed">
                  <i class="icon-ambulance icon-large"></i> 车牌号
                </a>
              </h4>
            </div>

            <div id="collapse4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4" aria-expanded="false">
              <div>
                <form class="form-search list-group-item">
                  <input class="input-medium search-query" type="text" value="請輸入車牌"/>
                  <button type="submit" class="btn">确定</button>
                </form>
              </div>
            </div>
          </div>

          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="heading5">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="false" aria-controls="collapse5" class="collapsed">
                  <i class=" icon-time icon-large"></i>开始时间
                </a>
              </h4>
            </div>

            <div id="collapse5" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5" aria-expanded="false">
              <div>
                <div class="input-append date form_datetime list-group-item">
                  <input size="16" type="text" value="输入时间" readonly>
                  <span class="add-on"><i class="icon-th"></i></span>
                </div>
              </div>
            </div>
          </div>

          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="heading6">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse6" aria-expanded="false" aria-controls="collapse6" class="collapsed">
                  <i class="icon-time icon-large"></i> 结束时间
                </a>
              </h4>
            </div>

            <div id="collapse6" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading6" aria-expanded="false">
              <div>
                <div class="input-append date form_datetime list-group-item">
                  <input size="16" type="text" value="输入时间" readonly>
                  <span class="add-on"><i class="icon-th"></i></span>
                </div>
              </div>
            </div>
          </div>

          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="heading7">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse7" aria-expanded="false" aria-controls="collapse7" class="collapsed">
                  <i class="icon-cloud icon-large"></i> 其他标签
                </a>
              </h4>
            </div>

            <div id="collapse7" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading7" aria-expanded="false" style="height: 0px;">
              <div>
                <span class="list-group-item">其他标签1</span>
                <span class="list-group-item">其他标签2</span>
                <span class="list-group-item">其他标签3</span>
              </div>
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

      $(".form_datetime").datetimepicker({
        format: "dd MM yyyy - hh:ii"
      });

      $("#selectControl").css("left","0px");
      $("#selectLeft").show();
      $("#selectRight").hide();

      $("#selectLeft").click (function(){
        $("#selectLeft").hide();
        $("#selectRight").show();
        $("#selectControl").css("left","-300px");
      });

      $("#selectRight").click (function(){
        $("#selectLeft").show();
        $("#selectRight").hide();
        $("#selectControl").css("left","0px");
      });
    }
  }

</script>

<style>


</style>
