
<template>
  <div id="typeSelector">
    <div class="col-lg-1 col-md-1 col-sm-4" >
      <div class="panel-heading" role="tab" id="heading2"  >
        <a data-toggle="collapse" data-parent="" href="" aria-expanded="false"
           aria-controls="collapse3" class="collapsed">
          <i id="selectLeft"  class="icon-chevron-left icon-2x"></i>
          <i id="selectRight" class="icon-chevron-right icon-2x"></i>
        </a>
      </div>
    <aside  id="selectControl" class="sidebar  perfectScrollbar">
      <div id="solso-sidebar" style="top:0px;">
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

          <div class="panel panel-default">



            <div class="panel-heading" role="tab" id="typeHead1">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#typeBody1"
                   aria-expanded="false" aria-controls="collapse3" class="collapsed">
                  <i class="icon-eye-open icon-large "></i> 颜色
                </a>
              </h4>
            </div>

            <div id="typeBody1" class="panel-collapse collapse" role="tabpanel"
                 aria-labelledby="heading3" aria-expanded="false">
              <div>
                <span class="list-group-item">红色
                  <i id="colorType1" class="addType icon-plus icon-large" flag="0" value="红色"></i></span>
                <span class="list-group-item">黄色
                  <i id="colorType2" class="addType icon-plus icon-large" flag="0" value="黄色"></i></span>
                <span class="list-group-item">黑色
                  <i id="colorType3" class="addType icon-plus icon-large" flag="0" value="黑色"></i></span>
              </div>
            </div>
          </div>

          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="typeHead2">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#typeBody2"
                   aria-expanded="false" aria-controls="collapse4" class="collapsed">
                  <i class="icon-ambulance icon-large"></i> 车牌号
                </a>
              </h4>
            </div>

            <div id="typeBody2" class="panel-collapse collapse" role="tabpanel"
                 aria-labelledby="heading4" aria-expanded="false">
              <div>
                <form class="form-search list-group-item">
                  <input class="input-medium search-query" type="text" value="請輸入車牌"/>
                  <button class="btn">确定</button>
                </form>
              </div>
            </div>
          </div>

          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="typeHead3">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#typeBody3"
                   aria-expanded="false" aria-controls="collapse5" class="collapsed">
                  <i class=" icon-time icon-large"></i> 时间段
                </a>
              </h4>
            </div>

            <div id="typeBody3" class="panel-collapse collapse" role="tabpanel"
                 aria-labelledby="heading5" aria-expanded="false">
              <div>
                <div class="input-append date form_datetime list-group-item">
                  <input size="16" type="text" value="开始时间" readonly>
                  <span class="add-on"><i class="icon-th"></i></span>
                </div>
                <div class="input-append date form_datetime list-group-item">
                  <input size="16" type="text" value="结束时间" readonly>
                  <span class="add-on"><i class="icon-th"></i></span>
                </div>
              </div>
            </div>
          </div>


          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="typeHead4">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#typeBody5"
                   aria-expanded="false" aria-controls="collapse7" class="collapsed">
                  <i class="icon-cloud icon-large"></i> 其他标签
                </a>
              </h4>
            </div>

            <div id="typeBody5" class="panel-collapse collapse" role="tabpanel"
                 aria-labelledby="heading7" aria-expanded="false" style="height: 0px;">
              <div>
                <span class="list-group-item">其他标签1
                  <i id="otherType1" class="addType icon-plus icon-large" flag="0" value="其他标签1"></i></span>
                <span class="list-group-item">其他标签2
                  <i id="otherType2" class="addType icon-plus icon-large" flag="0" value="其他标签2"></i></span>
                <span class="list-group-item">其他标签3
                  <i id="otherType3" class="addType icon-plus icon-large" flag="0" value="其他标签3"></i></span>
              </div>
            </div>
            <div class="panel-heading" role="tab" id="">
              <button class="btn btn-danger  btn-block" type="button" data-toggle="modal" data-target="#searchCommit">
                <i class="glyphicon glyphicon-search"></i></button>
            </div>
          </div>
        </div>
      </div>
    </aside>
      <div class="modal fade" id="searchCommit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">确认你的搜索条件</h4>
            </div>
            <div id="searchBy" class="modal-body">

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    mounted: function() {

      $(".form_datetime").datetimepicker({
        format: "yyyy-mm-dd hh:ii"
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

      //选择类型
      $(".addType").click (function(){
        var id = event.target.id;
        var obj = document.getElementById(id);
        var targetID = id+"_1";
        if(obj.getAttribute("flag") == 0)//未添加
        {
          obj.setAttribute("style","color:red");
          obj.setAttribute("flag","1");
        }
        else if(obj.getAttribute("flag") == 1)//已添加
        {
          obj.setAttribute("style","color:white");
          obj.setAttribute("flag","0");
        }
      });

      $('#searchCommit').on('shown.bs.modal', function () {
      })

    }
  }

</script>

<style>


</style>
