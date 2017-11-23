<template>
  <div id="cameraIcon" style="z-index: -1;">
  </div>
</template>



<script>
  export default {
    name: 'DeviceInfo',
    data () {
      return {

      }
    },
    mounted: function() {

    },
    methods:{
      //初始化覆盖物风格
      initIconStyle(iconID){
        var div = document.createElement("div");
        div.id=iconID;
        div.innerHTML="<span class='label badge-important'>摄像头："+iconID+"</span>\
                      <i class='icon-facetime-video icon-3x'></i>";
        div.style.position="absolute";
        return div;
      },

      //初始化覆盖物对象
      initIconClass(html,map,center){
        // 定义自定义覆盖物的构造函数
        function SquareOverlay(center){
          this._center = center;
        }

        SquareOverlay.prototype = new BMap.Overlay();// 继承API的BMap.Overlay

        // 实现初始化方法
        SquareOverlay.prototype.initialize = function(map){
          this._map = map;
          this._html = html;
          map.getPanes().markerPane.appendChild(this._html);
          this._div = html;
          this._id = html.id;
          return html;
        }

        // 实现绘制方法
        SquareOverlay.prototype.draw = function(){
          // 根据地理坐标转换为像素坐标，并设置给容器
          var position = this._map.pointToOverlayPixel(this._center);
          $("#"+this._id).css("left",position.x - 43 / 2 + "px");
          $("#"+this._id).css("top",position.y - 42 / 2 + "px");
        }

        SquareOverlay.prototype.show = function(){
          if (this._div){
            this._div.style.display = "";
          }
        }

        SquareOverlay.prototype.hide = function(){
          if (this._div){
            this._div.style.display = "none";
          }
        }

        var mySquare = new SquareOverlay(center);
        map.addOverlay(mySquare);
        return mySquare;
      },

      showIcon(mySquare)
      {
        mySquare.show();
      },

      hideIcon(mySquare)
      {
        mySquare.hide();
      }
    }
  }
</script>

