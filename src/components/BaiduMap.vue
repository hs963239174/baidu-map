<template>

  <div id="mainPage" class="container-fluid">
      <div id="mapContent" class="userMap" style="z-index: 0;"></div>
      <TypeSelector></TypeSelector>
      <SearchResult></SearchResult>
      <DeviceInfo ref="newCamera"></DeviceInfo>
  </div>
</template>

<script>
  import DeviceInfo from "@/components/DeviceInfo"
  import TypeSelector from '@/components/TypeSelector'
  import SearchResult from '@/components/SearchResult'


  export default {
    name: 'baiduMap',
    components: {
      DeviceInfo,
      TypeSelector,
      SearchResult
    },
    mounted:function () {
      var map = new BMap.Map("mapContent",{enableMapClick:false});          // 创建地图实例
      var point = new BMap.Point(114.328428,22.994956);  // 创建点坐标
      map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
      map.clearOverlays();

      map.addControl(new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_RIGHT}));//设置标尺
      map.addControl(new BMap.MapTypeControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT }));//设置地图类型切换按钮
      map.setCurrentCity("惠州市");

      var html = this.$refs.newCamera.initIconStyle("id1");
      var square = this.$refs.newCamera.initIconClass(html,map,point);//初始化摄像头对象
      //this.$refs.newCamera.showIcon(square);//通过覆盖物实体显示对象
      //this.$refs.newCamera.hideIcon(square);


      ////-------------------------------------TEST----------------------------------------------------------////
      var html1 = this.$refs.newCamera.initIconStyle("id2");
      var html2 = this.$refs.newCamera.initIconStyle("id3");
      var square1 = this.$refs.newCamera.initIconClass(html1,map,new BMap.Point(114.356995,23.014017));//初始化摄像头对象
      var square2 = this.$refs.newCamera.initIconClass(html2,map,new BMap.Point(114.316995,23.014017));//初始化摄像头对象
      ////-------------------------------------TEST----------------------------------------------------------////
    }
  }
</script>

