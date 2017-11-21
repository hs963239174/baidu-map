
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
                  <input id="carLisence" class="input-medium search-query" type="text" flag="0" value="车牌号"/>
                  <i id="addCarLisence" class="addType icon-plus icon-large" flag="0"></i>
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
                  <input id="startTime" size="16" type="text" flag="0" value="开始时间" readonly>
                  <span class="add-on"><i class="icon-th"></i></span>
                  <i id="addStartTime" class="addType icon-plus icon-large" flag="0"></i>
                </div>
                <div class="input-append date form_datetime list-group-item">
                  <input id="endTime" size="16" type="text" flag="0" value="结束时间" readonly>
                  <span class="add-on"><i class="icon-th"></i></span>
                  <i id="addEndTime" class="addType icon-plus icon-large" flag="0"></i>
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
              <h4 class="modal-title" id="myModalLabel">确认搜索条件(点击标签可删除)</h4>
            </div>
            <div class="modal-body">
              <div id="searchBy" class="row"></div>
            </div>
            <div class="modal-footer">
              <button id="searchClose" type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
              <button id="searchBegin" type="button" class="btn btn-primary">搜索</button>
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

      //点击可删除搜索标签
      $("#searchBy").on("click","span",function () {
        var targetID = event.target.id;
        $("#"+targetID).remove();
        var id = targetID.split("_")[0];
        var obj = $("#"+id);
        obj.attr("style","color:white");
        obj.attr("flag","0");

      });

      //添加搜索类型
      $(".addType").click (function(){
        var id = event.target.id;
        var obj =  $("#"+id);
        var targetID = id+"_1";
        var value = "";

        if(obj.attr("flag") == 0)//未添加
        {
          obj.attr("style","color:red");
          obj.attr("flag","1");

          //添加搜索条件标签
          if(id == "addStartTime")
          {
            value = "<span id='"+targetID+"' class='label badge-important'>"+$("#startTime").val()+"</span>";
            $("#searchBy").append(value);
          }
          else if(id == "addEndTime")
          {
            value = "<span id='"+targetID+"' class='label badge-important'>"+$("#endTime").val()+"</span>";
            $("#searchBy").append(value);
          }
          else if(id == "addCarLisence")
          {
            value = "<span id='"+targetID+"' class='label badge-important'>"+$("#carLisence").val()+"</span>";
            $("#searchBy").append(value);
          }
          else
          {
            value = "<span id='"+targetID+"' class='label badge-important'>"+$("#"+id).attr("value")+"</span>";
            $("#searchBy").append(value);
          }
        }
        else if(obj.attr("flag") == 1)//已添加
        {
          obj.attr("style","color:white");
          obj.attr("flag","0");

          //移除搜索条件标签
          $("#"+targetID).remove();
        }
      });

      //开始搜索
      $("#searchBegin").click(function () {
        var searchFlag = $("#searchBy").children().length;
        if(searchFlag <= 0)
        {
          var value = '<div id="alert-search" class="alert-search row alert alert-danger alert-dismissible fade in" role="alert">\
                          <button type="button" class="close"  aria-label="Close" data-dismiss="alert">\
                          <span aria-hidden="true">×</span></button>\
                        <strong>提示：</strong> 未选择任何标签.\
                        </div>';
          $(".modal-footer").prepend(value);
          $("#alert-search").animate({opacity:"0.3"},5000,"swing",function () {
            $("#alert-search").remove();
          });
        }
        else
        {
          //启动搜索

        }
      });

      //显示模态框回调
      $('#searchCommit').on('shown.bs.modal', function () {

      });

      //关闭模态框回调
      $('#searchCommit').on('hidden.bs.modal', function () {
        //清除警告信息
        $(".alert-search").stop(true,true);
        $(".alert-search").remove();
      })
    }
  }

</script>

<style>


</style>
