function controlSidebar() {
    this.introduce = "控制左边导航样式", this.dom = $("#sidebar"),
    this.domScrollTop = $("#sidebar-scrollTop"),
    this.sidebarTop = 0, this.windowHeight = 0,
    this.SidebarScrollTopHeight = 0,
    this.windowWidth = 0, this.scrollTop = 0,
    this.copyright = $(".lbsyun-g-footer"),
    this.footerTop = 0,
    this.titleNav = this.dom.find(".title"),
    this.submore = this.dom.find(".submore"),
    this.mbody = $("#mbody"), this.init()
}
function interiorStyle() {
  this.introduce = "控制内部导航样式", this.dom = $(".labels"), this.labelsTop = 0, this.windowHeight = 0, this.scrollTop = 0, this.init()
}
function interiorNav() {
  this.introduce = "控制内部导航切换", this.mwrapper = $(".mwrapper"), this.domBtn = $(".labels"), this.domContents = $(".contents"), this.labelsTop = this.domBtn.offset().top, this.titleBtn = this.domBtn.find(".interiorLI"), this.contents = this.domContents.find(".txtstyle2"), this.showIndex = 0, this.anchor = {}, this.up = {}, this.down = {}, this.anchorDiv = {}, this.scrollTop = 0, this.allAnchor = {}, this.allAnchorHight = 0, this.hoverAnchorDom = {}, this.postionAnchor = {}, this.postionAnchorWidth = 0, this.postionAnchorHeight = 0, this.windowWidth = $(window).width(), this.windowScrollTop = 0, this.mbodyTop = $("#mbody").offset().top, this.defaultStatus = !0, this.init()
}
function updateDemo() {
  this.introduce = "控制内部导航样式", this.dom = $(".updatedemo"), this.titleBtn = this.dom.find(".uptitle .timeversions"), this.contents = this.dom.find(".updatecenter .updatebox"), this.titleBtnWidth = this.titleBtn.eq(0).width(), this.controlshow = $(".controlshow"), this.intro = this.dom.find(".uptitle .intro"), this.nextBtn = this.dom.find(".next"), this.prveBtn = this.dom.find(".prve"), this.updateRight = 0, this.index = 0, this.init()
}
function jsapiDemoBtn() {
  this.introduce = "多个地图DEMO按钮宽度", this.mapDemo = $(".demo_area"), this.demoControl = $(".demo_control"), this.mapBtn = this.demoControl.find(".demo_btn"), this.demoControlWidth = this.demoControl.width(), this.mapSrc = "", this.init()
}
function controlPreHeight() {
  this.introduce = "控制代码块高度效果-超出高度显示滚动条", this.pre = $("pre.codestyle"), this.init()
}
function sdkShowMap() {
  this.introduce = "控制内部导航样式", this.dom = $(".sdkshowmap"), this.titleBtn = this.dom.find(".mapfunction .functioncontent"), this.contents = this.dom.find(".functionimg .functionDemo"), this.infor = this.dom.find(".mapfunction .infor"), this.defaultIndex = 0, this.init()
}
function usageScenario() {
  this.introduce = "常见使用场景--左边LOGO-右边介绍", this.dom = $(".usagescenario"), this.titleBtn = this.dom.find(".scenelogo > li"), this.contents = this.dom.find(".scenecontent .scenecontentbox"), this.infor = this.dom.find(".scenelogo li.infor"), this.defaultIndex = 0, this.twoTitleBtn = Array(), this.twoContents = Array(), this.twoInfor = Array(), this.twoDefaultIndex = 0, this.init()
}
function serviceDocument() {
  this.introduce = "控制内部导航样式", this.dom = $(".second"), this.titleBtn = this.dom.find(".secondlevel .apidocument"), this.contents = this.dom.find(".secondlevelbox .apidocumentbox"), this.infor = this.dom.find(".secondlevel .infor"), this.defaultIndex = 0, this.init()
}
function addPageAnchor() {
  this.introduce = "添加页面锚点--独立页面", this.dom = $(".mwrapper"), this.anchor = this.dom.find(".service-page-anchor"), this.up = {}, this.down = {}, this.anchorDiv = {}, this.scrollTop = 0, this.hoverAnchorDom = {}, this.postionAnchor = {}, this.allAnchor = {}, this.allAnchorHight = 0, this.postionAnchorWidth = 0, this.postionAnchorHeight = 0, this.windowWidth = $(window).width(), this.windowScrollTop = 0, this.mbodyTop = $("#mbody").offset().top, this.defaultStatus = !0, this.init()
}
function scenarioTemplate() {
  this.introduce = "常见使用场景（新模板）", this.logoBtn = $(".scenario-logo").find(".scenario-btn"), this.defaultLogo = $(".scenario-logo").find(".action"), this.actionIndex = this.logoBtn.index(this.defaultLogo) || 0, this.contentBox = $(".scenario-content").find(".scenario-box"), this.interiorBtn = {}, this.interiorContent = {}, this.interiorSelect = {}, this.interiorPrev = {}, this.interiorNext = {}, this.interiorIndex = 0, this.init()
}
function ControlDevguideBg() {
  this.introduce = "常见使用场景（新模板）", this.domObj = $(".devguide"), this.bg = this.domObj.find(".leftborderbg"), this.devguideorder = this.domObj.find(".devguideorder"), this.lastTitle = this.devguideorder.eq(this.devguideorder.length - 1), this.topHeight = 0, this.init()
}
function servebgstyle() {
  var t = $(".servetopbg"),
    o = $(".servetitle");
  if (t.length > 0) {
    t.hide();
    var i = $(".servetopbg img").attr("src"),
      n = t.height() - 5;
    o.css("background", "url(" + i + ") no-repeat right center"), o.css("height", n + "px")
  }
}
controlSidebar.prototype = {
  constructor: controlSidebar,
  init: function() {
    this.getDomData(), this.changeHeight(), this.controlHeight(), this.controlStyle(), this.defaultShowSidebar(), this.controlSelectedStyle(), this.changeResize(), this.controlSidebarScrollTop(), this.changescrollt()
  },
  changescrollt: function() {
    var t = navigator.userAgent.match(/MSIE (\d)/i);
    t = t ? t[1] : void 0;
    var o = /FireFox/i.test(navigator.userAgent),
      i = document.getElementById("sidebar-scrollTop");
    t < 9 ? i.attachEvent("onmousewheel", function(t) {
      var o = $("#sidebar-scrollTop").scrollTop() - t.wheelDelta;
      return $("#sidebar-scrollTop").scrollTop(o), !1
    }) : o ? i.addEventListener("DOMMouseScroll", function(t) {
      var o = 0;
      o = t.detail >= 0 ? 30 : -30;
      var i = $("#sidebar-scrollTop").scrollTop() + o;
      $("#sidebar-scrollTop").scrollTop(i), t.preventDefault()
    }, !1) : i.addEventListener("mousewheel", function(t) {
      var o = $("#sidebar-scrollTop").scrollTop() - t.wheelDelta;
      $("#sidebar-scrollTop").scrollTop(o), t.preventDefault()
    }, !1)
  },
  controlScrollTopDefault: function() {
    var t = this,
      o = document.documentElement.scrollTop || document.body.scrollTop,
      i = $(".nav-list li").eq(0).find(".selected");
    if (o < t.sidebarTop && 0 === i.length) var n = setInterval(function() {
      (document.documentElement.scrollTop || document.body.scrollTop) !== t.sidebarTop ? $("html,body").scrollTop(t.sidebarTop) : clearTimeout(n)
    }, 200)
  },
  controlSidebarScrollTop: function() {
    if (this.domScrollTop.find(".selected").length > 0) {
      var t = this.domScrollTop.find(".selected").position().top;
      if (t > this.domScrollTop.height()) {
        var o = t - this.domScrollTop.height() + 160;
        this.domScrollTop.scrollTop(o)
      }
    }
  },
  controlSelectedStyle: function() {
    for (var t = 0; t < this.submore.length; t++) this.submore.eq(t).find(".selected").length > 0 && this.submore.eq(t).prev(".title").css({
      background: 'url("./skins/MySkin/resources/img/icon/graymorearrow-up.png") no-repeat 175px 20px'
    });
    $(".first-sidebar-nav li").eq(0).css("border-top", "none")
  },
  getDomData: function() {
    this.sidebarTop = this.dom.offset().top,
      this.windowHeight = $(window).height(),
      this.windowWidth = $(window).width(),
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
      this.footerTop = this.copyright.offset().top
  },
  changeResize: function() {
    var t = this,
      o = !0;
    $(".mbody").bind("resize.mbody", function() {
      o ? (t.getFooterTop(), t.controlHeight(), o = !1) : (t.getFooterTop(), t.controlHeight(), o = !0)
    })
  },
  defaultShowSidebar: function() {
    if ("true" === $(".servename").attr("data")) for (var t = 0; t < this.submore.length; t++) 0 != t && this.submore.eq(t).is(":visible") && this.submore.eq(0).hide()
  },
  controlStyle: function() {
    var t = this;
    t.titleNav.click(function() {
      $(this).next(".submore").is(":visible") ? ($(this).next(".submore").slideUp(200), $(this).css({
        background: 'url("./skins/MySkin/resources/img/icon/graymorearrow.png") no-repeat 175px 20px'
      })) : ($(this).css({
        background: 'url("./skins/MySkin/resources/img/icon/graymorearrow-up.png") no-repeat 175px 20px'
      }), $(this).next(".submore").slideDown(200)), t.hideSubmore(t.titleNav.index($(this)))
    })
  },
  hideSubmore: function(t) {
    if (this.submore.length > 1) for (var o = 0; o < this.submore.length; o++) o !== t && (this.submore.eq(o).slideUp(200), this.submore.eq(o).prev(".title").css({
      background: 'url("./skins/MySkin/resources/img/icon/graymorearrow.png") no-repeat 175px 20px'
    }))
  },
  changeHeight: function() {
    var t = this;
    $(window).scroll(function() {
      t.getScrollTop(), t.controlHeight()
    }), $(window).resize(function() {
      t.getWindowHeight(), t.controlHeight()
    })
  },
  getWindowHeight: function() {
    this.windowHeight = $(window).height(), this.windowWidth = $(window).width()
  },
  getScrollTop: function() {
    this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  },
  getFooterTop: function() {
    this.footerTop = this.copyright.offset().top
  },
  controlHeight: function() {
    if (this.controlSidebarScrollTopStyle(), this.scrollTop < this.sidebarTop) this.footerTop < this.windowHeight ? (this.addHeight(this.footerTop - this.sidebarTop, 0), this.controlservename(2, this.footerTop - this.sidebarTop)) : this.scrollTop + this.windowHeight > this.footerTop ? (this.addHeight(this.footerTop - this.sidebarTop, 0), this.controlservename(2, this.footerTop - this.sidebarTop)) : (this.addHeight(this.windowHeight - this.sidebarTop + this.scrollTop, 0), this.controlservename(2, this.windowHeight - this.sidebarTop + this.scrollTop));
    else if (this.footerTop < this.windowHeight) this.addHeight(this.footerTop - this.sidebarTop, 1);
    else if (this.scrollTop + this.windowHeight > this.footerTop) {
      var t = this.scrollTop + this.windowHeight - this.footerTop;
      this.addHeight(this.windowHeight, 1, t), this.controlservename(0, this.windowHeight, t)
    } else this.addHeight(this.windowHeight, 1)
  },
  addHeight: function(t, o, i) {
    var i = i || 0;
    0 === o ? this.dom.css({
      position: "absolute",
      left: "0",
      height: t + "px",
      top: "0",
      margin: "0"
    }) : (this.dom.css({
      position: "fixed",
      left: "50%",
      height: t + "px",
      top: "-" + i + "px"
    }), this.controlservename(1, t, i), this.windowWidth > 1200 ? this.dom.css({
      margin: "0px 0px 0px -600px"
    }) : this.dom.css({
      left: "0",
      margin: "0"
    }))
  },
  controlservename: function(t, o, i) {
    var i = i || 0;
    1 === t ? $(".servename").css({
      position: "fixed",
      top: "0px"
    }) : 2 === t ? $(".servename").css({
      position: "absolute",
      top: "0"
    }) : $(".servename").css({
      position: "fixed",
      top: "-" + i + "px"
    })
  },
  controlSidebarScrollTopStyle: function() {
    $(".servename").length > 0 ? this.domScrollTop.css({
      top: "55px"
    }) : this.domScrollTop.css({
      top: "0"
    })
  }
}, interiorStyle.prototype = {
  constructor: interiorStyle,
  init: function() {
    this.getLabelsTop(), this.getScrollTop(), this.changeHeight(), this.controlLocation()
  },
  changeHeight: function() {
    var t = this;
    $(window).scroll(function() {
      t.getScrollTop(), t.controlLocation()
    })
  },
  getLabelsTop: function() {
    var t = this.dom.offset().top;
    this.labelsTop = t
  },
  getScrollTop: function() {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    this.scrollTop = t
  },
  controlLocation: function() {
    this.scrollTop > this.labelsTop ? (this.dom.attr("id", "labels"), $(".contents").css("margin-top", "52px")) : ($(".contents").css("margin-top", "0"), this.dom.removeAttr("id"))
  }
}, interiorNav.prototype = {
  constructor: interiorNav,
  init: function() {
    this.contentsDefaultShow(), this.changeTitleBtn(), this.devguideHeight()
  },
  devguideHeight: function() {
    var t = this.contents.eq(this.showIndex).find(".devguide");
    if (t.length > 0) if (t.length > 1) for (var o = 0; o < t.length; o++) {
      var i = t.eq(o).find(".leftborderbg"),
        n = (e = t.eq(o).find(".devguideorder")).eq(e.length - 1);
      i.css("height", n.position().top + "px")
    } else {
      var i = t.find(".leftborderbg"),
        e = t.find(".devguideorder"),
        n = e.eq(e.length - 1);
      i.css("height", n.position().top + "px")
    }
  },
  contentsDefaultShow: function() {
    var t = this.getUrlTable(window.location.hash);
    if (0 !== t) this.showIndex = t, this.showContents();
    else {
      var o = this.domBtn.find("infor");
      1 === o.length ? (this.showIndex = this.domBtn.index(o), this.showContents()) : this.showContents()
    }
  },
  getUrlTable: function(t) {
    if ("" === t) return 0;
    var o = t.split("#");
    if (o[1] && o[1].indexOf("table=") >= 0) {
      var i = parseInt(o[1].charAt(o[1].length - 1));
      return i < this.titleBtn.length ? i : 0
    }
    return 0
  },
  changeTitleBtn: function() {
    var t = this;
    t.titleBtn.click(function() {
      t.controlScrollTop(), t.showIndex = t.titleBtn.index($(this)), t.showContents(), t.devguideHeight(), t.windowWidth <= 1520 && t.anchor.length > 0 && (t.defaultShow(), t.hoverAnchor())
    })
  },
  controlScrollTop: function() {
    (document.documentElement.scrollTop || document.body.scrollTop) > this.labelsTop && $("html,body").stop(!0, !0).animate({
      scrollTop: this.labelsTop
    }, 100)
  },
  showContents: function() {
    for (var t = 0; t < this.contents.length; t++) t === this.showIndex ? (this.titleBtn.eq(t).addClass("infor"), this.contents.eq(t).show()) : (this.titleBtn.eq(t).removeClass("infor"), this.contents.eq(t).hide());
    this.labelsAddAnchor()
  },
  labelsAddAnchor: function() {
    this.anchor = this.contents.eq(this.showIndex).find(".service-page-anchor"), this.anchor.length > 0 ? (this.checkWindowWeight(), this.checkWindowsScrollTop(), this.addAnchorID(), this.addAnchorHtml(), this.addAnchorBtn(), this.getUpDownDom(), this.getPostionAnchor(), this.controlAnchor(), this.onUpDownScrollTop(), this.controlUpDown(), this.checkUpDown()) : (this.mwrapper.find(".hover-anchor").remove(), this.mwrapper.find(".postion-anchor").remove())
  },
  getPostionAnchor: function() {
    this.postionAnchorHeight = this.postionAnchor.height(), this.postionAnchorWidth = this.postionAnchor.width(), this.windowScrollTop = document.documentElement.scrollTop || document.body.scrollTop
  },
  checkWindowsScrollTop: function() {
    var t = this;
    $(window).scroll(function() {
      t.windowScrollTop = document.documentElement.scrollTop || document.body.scrollTop, t.controlAnchor()
    })
  },
  checkWindowWeight: function() {
    var t = this;
    $(window).resize(function() {
      t.windowWidth = $(window).width(), t.controlAnchor()
    })
  },
  anchorDivScrollTop: function() {
    this.anchorDiv.stop(!0, !0).animate({
      scrollTop: this.scrollTop
    }, 200)
  },
  resumeScrollTop: function() {
    this.anchorDiv.scrollTop(0)
  },
  onUpDownScrollTop: function() {
    var t = this;
    t.anchorDiv.scroll(function() {
      t.scrollTop = $(this).scrollTop(), t.controlUpDown()
    })
  },
  checkUpDown: function() {
    var t = this;
    t.up.click(function() {
      t.scrollTop -= 410, t.scrollTop < 0 && (t.scrollTop = 0), t.anchorDivScrollTop()
    }), t.down.click(function() {
      t.scrollTop += 410, t.anchorDivScrollTop()
    })
  },
  anchorDivScrollTop: function() {
    this.anchorDiv.animate({
      scrollTop: this.scrollTop
    }, 200)
  },
  hoverAnchor: function() {
    var t = this;
    t.hoverAnchorDom.unbind(), t.postionAnchor.unbind(), t.hoverAnchorDom.mouseover(function() {
      $(this).hide(), t.postionAnchor.css("border", "1px solid #ededed"), t.postionAnchor.stop(!0, !0).animate({
        height: t.postionAnchorHeight + "px",
        width: t.postionAnchorWidth + "px"
      }, 200)
    }), t.postionAnchor.mouseleave(function() {
      $(this).stop(!0, !0).animate({
        height: "0px",
        width: "0px",
        border: "0"
      }, 200), setTimeout(function() {
        t.hoverAnchorDom.fadeIn()
      }, 200)
    })
  },
  defaultShow: function() {
    var t = this;
    t.hoverAnchorDom.hide(), t.resumeScrollTop(), setTimeout(function() {
      t.postionAnchor.stop(!0, !0).animate({
        height: "0px",
        width: "0px",
        border: "0px"
      }, 200)
    }, 1500), setTimeout(function() {
      t.hoverAnchorDom.fadeIn()
    }, 1700)
  },
  getUpDownDom: function() {
    this.anchorDiv = $(".anchor-div"), this.up = $(".anchor-up"), this.down = $(".anchor-down"), this.scrollTop = this.anchorDiv.scrollTop(), this.hoverAnchorDom = $(".hover-anchor"), this.postionAnchor = $(".postion-anchor"), this.allAnchor = $("ul.all-anchor"), this.allAnchorHight = this.allAnchor.height()
  },
  addAnchorID: function() {
    for (var t = 0; t < this.anchor.length; t++) this.anchor.eq(t).attr("id", "service-page-anchor-" + this.showIndex + "-" + t)
  },
  addAnchorHtml: function() {
    this.mwrapper.find(".hover-anchor").remove(), this.mwrapper.find(".postion-anchor").remove(), this.mwrapper.append('<div class="hover-anchor" style="top:72px;"></div><div id ="postion-anchor" class="postion-anchor" style="top:72px;"><div class="anchor-div"><ul class="all-anchor"></ul></div><div class="anchor-up"></div><div class="anchor-down"></div></div>')
  },
  addAnchorBtn: function() {
    for (var t = $(".all-anchor"), o = 0; o < this.anchor.length; o++) t.append('<li><a href="#' + this.anchor.eq(o).attr("id") + '">' + this.anchor.eq(o).text() + "</a></li>")
  },
  controlAnchor: function() {
    var t = this;
    t.windowScrollTop <= t.mbodyTop ? t.windowWidth >= 1520 ? (t.defaultStatus = !0, t.controlAbsoluteRight()) : (t.defaultStyle(), t.defaultStatus && (t.defaultShow(), t.hoverAnchor(), t.defaultStatus = !1)) : t.windowWidth >= 1520 ? (t.defaultStatus = !0, t.controlFixedRight()) : (t.FixedTop(), t.defaultStatus && (t.defaultShow(), t.hoverAnchor(), t.defaultStatus = !1))
  },
  defaultStyle: function() {
    this.hoverAnchorDom.removeClass("anchor-fixed"), this.hoverAnchorDom.addClass("anchor-absolute"), this.commonRemoveClass(), this.postionAnchor.removeClass("anchor-fixed"), this.postionAnchor.addClass("anchor-absolute")
  },
  FixedTop: function() {
    this.hoverAnchorDom.removeClass("anchor-absolute"), this.hoverAnchorDom.addClass("anchor-fixed"), this.commonRemoveClass(), this.postionAnchor.removeClass("anchor-absolute"), this.postionAnchor.addClass("anchor-fixed")
  },
  controlAbsoluteRight: function() {
    this.commonRemoveClassRight(), this.postionAnchor.removeClass("anchor-fixed-right"), this.postionAnchor.addClass("anchor-absolute-right"), this.postionAnchor.css({
      border: "1px solid #ededed",
      width: this.postionAnchorWidth + "px",
      height: this.postionAnchorHeight + "px"
    })
  },
  controlFixedRight: function() {
    this.commonRemoveClassRight(), this.postionAnchor.removeClass("anchor-absolute-right"), this.postionAnchor.addClass("anchor-fixed-right"), this.postionAnchor.css({
      border: "1px solid #ededed",
      width: this.postionAnchorWidth + "px",
      height: this.postionAnchorHeight + "px"
    })
  },
  commonRemoveClassRight: function() {
    this.hoverAnchorDom.hide(), this.postionAnchor.unbind("mouseleave"), this.postionAnchor.removeClass("anchor-fixed"), this.postionAnchor.removeClass("anchor-absolute")
  },
  commonRemoveClass: function() {
    this.postionAnchor.removeClass("anchor-fixed-right"), this.postionAnchor.removeClass("anchor-absolute-right")
  },
  controlUpDown: function() {
    if (this.allAnchorHight > 300) {
      var t = this.allAnchorHight - this.postionAnchorHeight - 30;
      this.scrollTop < 30 ? (this.up.fadeOut(), this.down.fadeIn()) : this.scrollTop > t ? (this.up.fadeIn(), this.down.fadeOut()) : (this.up.fadeIn(), this.down.fadeIn())
    } else this.up.hide(), this.down.hide()
  }
}, updateDemo.prototype = {
  constructor: updateDemo,
  init: function() {
    this.controlBtnWidth(), this.defaultPositionRight(), this.controlPstyle(), this.contentsDefaultShow(), this.onNextPrve(), this.changeTitleBtn(), this.devguideHeight()
  },
  controlPstyle: function() {
    for (var t = 0; t < this.titleBtn.length; t++) this.titleBtn.eq(t).find("p").eq(0).css({
      "font-size": "14px",
      margin: "0 0 5px 0"
    })
  },
  devguideHeight: function() {
    var t = this.contents.eq(this.index).find(".devguide");
    if (t.length > 0) if (t.length > 1) for (var o = 0; o < t.length; o++) {
      var i = t.eq(o).find(".leftborderbg"),
        n = (e = t.eq(o).find(".devguideorder")).eq(e.length - 1);
      i.css("height", n.position().top + "px")
    } else {
      var i = t.find(".leftborderbg"),
        e = t.find(".devguideorder"),
        n = e.eq(e.length - 1);
      i.css("height", n.position().top + "px")
    }
  },
  onNextPrve: function() {
    if (this.titleBtn.length > 4) {
      0 === this.index ? this.controlClass(4) : this.index === this.titleBtn.length - 1 ? this.controlClass(2) : (this.controlClass(1), this.controlClass(3)), this.updateRight = parseInt(this.controlshow.css("right"), 10);
      var t = this;
      this.nextBtn.click(function() {
        t.controlRoll("next")
      }), this.prveBtn.click(function() {
        t.controlRoll("prve")
      })
    } else this.controlClass(2), this.controlClass(4)
  },
  controlRoll: function(t) {
    var o = (this.titleBtn.length - 4) * this.titleBtnWidth;
    "next" === t ? o > this.updateRight && (o - this.updateRight >= 4 * this.titleBtnWidth ? (this.updateRight += 4 * this.titleBtnWidth, this.controlClass(1), 0 !== this.updateRight && this.controlClass(3), this.updateRight === o && this.controlClass(2)) : (this.updateRight = o, this.controlClass(2), this.controlClass(3))) : this.updateRight >= 4 * this.titleBtnWidth ? (this.updateRight -= 4 * this.titleBtnWidth, this.controlClass(3), this.updateRight !== o && this.controlClass(1), 0 === this.updateRight && this.controlClass(4)) : (this.updateRight = 0, this.controlClass(4), this.controlClass(1)), this.controlshow.animate({
      right: this.updateRight + "px"
    }, 200)
  },
  controlClass: function(t) {
    switch (t) {
      case 1:
        this.nextBtn.removeClass("nextBak"), this.nextBtn.addClass("next");
        break;
      case 2:
        this.nextBtn.removeClass("next"), this.nextBtn.addClass("nextBak");
        break;
      case 3:
        this.prveBtn.removeClass("prveBak"), this.prveBtn.addClass("prve");
        break;
      case 4:
        this.prveBtn.removeClass("prve"), this.prveBtn.addClass("prveBak")
    }
  },
  controlBtnWidth: function() {
    var t = this.titleBtnWidth * this.titleBtn.length;
    this.controlshow.css("width", t + "px")
  },
  defaultPositionRight: function() {
    if (this.titleBtn.index(this.intro) > 3) {
      var t = (this.titleBtn.index(this.intro) - 3) * this.titleBtnWidth;
      this.controlshow.css("right", t + "px")
    }
  },
  contentsDefaultShow: function() {
    1 === this.intro.length ? (this.index = this.titleBtn.index(this.intro), this.showUpdatebox()) : this.showUpdatebox()
  },
  changeTitleBtn: function() {
    var t = this;
    t.titleBtn.click(function() {
      t.index = t.titleBtn.index($(this)), t.showUpdatebox(), t.devguideHeight()
    })
  },
  showUpdatebox: function() {
    for (var t = 0; t < this.contents.length; t++) t === this.index ? (this.titleBtn.eq(t).addClass("intro"), this.contents.eq(t).show()) : (this.titleBtn.eq(t).removeClass("intro"), this.contents.eq(t).hide())
  }
}, jsapiDemoBtn.prototype = {
  constructor: jsapiDemoBtn,
  init: function() {
    this.defaultShowMap(), this.controlBtnWidth(), this.changeBtn(), this.updateMap()
  },
  defaultShowMap: function() {
    var t = this.demoControl.find("opt");
    t.length > 0 ? this.mapSrc = t.find("a").attr("href") : (this.mapBtn.eq(0).addClass("opt"), this.mapSrc = this.mapBtn.eq(0).find("a").attr("href"))
  },
  controlBtnWidth: function() {
    for (var t = Math.floor(this.demoControlWidth / this.mapBtn.length), o = 0; o < this.mapBtn.length; o++) {
      if (o === this.mapBtn.length - 1) {
        var i = this.demoControlWidth - (t + 1) * (this.mapBtn.length - 1) - 1;
        this.mapBtn.eq(o).css({
          width: i + "px"
        })
      } else this.mapBtn.eq(o).css({
        width: t + "px"
      });
      this.mapBtn.eq(o).find("a").attr("target", "show_demo")
    }
  },
  changeBtn: function() {
    var t = this;
    this.mapBtn.click(function() {
      t.mapBtn.removeClass("opt"), $(this).addClass("opt")
    })
  },
  updateMap: function() {
    this.mapDemo.html('<iframe src="' + this.mapSrc + '" name="show_demo" width="100%" scrolling="auto" height="100%" frameborder="0"></iframe>')
  }
}, controlPreHeight.prototype = {
  constructor: controlPreHeight,
  init: function() {
    if (this.pre.length > 0) for (var t = 0; t < this.pre.length; t++) this.pre.eq(t).height() > 300 && this.pre.eq(t).css("height", "300px")
  }
}, sdkShowMap.prototype = {
  constructor: sdkShowMap,
  init: function() {
    this.addIcon(), this.contentsDefaultShow(), this.changeTitleBtn()
  },
  addIcon: function() {
    for (var t = 0; t < this.titleBtn.length; t++) this.titleBtn.eq(t).append('<b class="right"><i class="right-arrow3"></i><i class="right-arrow4"></i></b>')
  },
  contentsDefaultShow: function() {
    1 === this.infor.length ? (this.defaultIndex = this.titleBtn.index(this.infor), this.showDemoImg()) : this.showDemoImg()
  },
  changeTitleBtn: function() {
    var t = this;
    t.titleBtn.click(function() {
      t.defaultIndex = t.titleBtn.index($(this)), t.showDemoImg()
    })
  },
  showDemoImg: function() {
    for (var t = 0; t < this.contents.length; t++) t === this.defaultIndex ? (this.titleBtn.eq(t).addClass("infor"), this.contents.eq(t).show()) : (this.titleBtn.eq(t).removeClass("infor"), this.contents.eq(t).hide())
  }
}, usageScenario.prototype = {
  constructor: usageScenario,
  init: function() {
    this.contentsDefaultShow(), this.controlTwoTable(), this.changeTitleBtn()
  },
  contentsDefaultShow: function() {
    1 === this.infor.length ? (this.defaultIndex = this.titleBtn.index(this.infor), this.showDemoImg()) : this.showDemoImg()
  },
  changeTitleBtn: function() {
    var t = this;
    t.titleBtn.click(function() {
      t.defaultIndex = t.titleBtn.index($(this)), t.showDemoImg(), t.controlTwoTable()
    })
  },
  showDemoImg: function() {
    for (var t = 0; t < this.contents.length; t++) t === this.defaultIndex ? (this.titleBtn.eq(t).addClass("infor"), this.contents.eq(t).show()) : (this.titleBtn.eq(t).removeClass("infor"), this.contents.eq(t).hide())
  },
  controlTwoTable: function() {
    this.getTwoDom(), this.changeTowTitleBtn()
  },
  getTwoDom: function() {
    0 === this.defaultIndex ? (this.twoTitleBtn = this.contents.eq(this.defaultIndex).find(".soufangscenebtn li"), this.twoContents = this.contents.eq(this.defaultIndex).find(".soufangscene li"), this.twoInfor = this.contents.eq(this.defaultIndex).find(".soufangscenebtn li.infor")) : 1 === this.defaultIndex ? (this.twoTitleBtn = this.contents.eq(this.defaultIndex).find(".onehundredscenebtn li"), this.twoContents = this.contents.eq(this.defaultIndex).find(".onehundredscene li"), this.twoInfor = this.contents.eq(this.defaultIndex).find(".onehundredscenebtn li.infor")) : (this.twoTitleBtn = this.contents.eq(this.defaultIndex).find(".douyuscenebtn li"), this.twoContents = this.contents.eq(this.defaultIndex).find(".douyuscene li"), this.twoInfor = this.contents.eq(this.defaultIndex).find(".douyuscenebtn li.infor")), this.contentsTwoDefaultShow()
  },
  contentsTwoDefaultShow: function() {
    if (1 === this.twoInfor.length) {
      var t = this.twoTitleBtn.index(this.twoInfor);
      this.twoDefaultIndex = t, this.showTowContents()
    }
  },
  changeTowTitleBtn: function() {
    var t = this;
    t.twoTitleBtn.click(function() {
      var o = t.twoTitleBtn.index($(this));
      t.twoDefaultIndex = o, t.showTowContents()
    })
  },
  showTowContents: function() {
    for (var t = 0; t < this.twoContents.length; t++) t === this.twoDefaultIndex ? (this.twoTitleBtn.eq(t).addClass("infor"), this.twoContents.eq(t).show()) : (this.twoTitleBtn.eq(t).removeClass("infor"), this.twoContents.eq(t).hide())
  }
}, serviceDocument.prototype = {
  constructor: serviceDocument,
  init: function() {
    this.contentsDefaultShow(), this.changeTitleBtn()
  },
  contentsDefaultShow: function() {
    1 === this.infor.length ? (this.defaultIndex = this.titleBtn.index(this.infor), this.showDemoImg()) : this.showDemoImg()
  },
  changeTitleBtn: function() {
    var t = this;
    t.titleBtn.click(function() {
      t.defaultIndex = t.titleBtn.index($(this)), t.showDemoImg()
    })
  },
  showDemoImg: function() {
    for (var t = 0; t < this.contents.length; t++) t === this.defaultIndex ? (this.titleBtn.eq(t).addClass("infor"), this.contents.eq(t).show()) : (this.titleBtn.eq(t).removeClass("infor"), this.contents.eq(t).hide())
  }
}, addPageAnchor.prototype = {
  constructor: addPageAnchor,
  init: function() {
    this.anchor.length > 0 && (this.checkWindowWeight(), this.checkWindowsScrollTop(), this.addAnchorID(), this.addAnchorHtml(), this.addAnchorBtn(), this.getUpDownDom(), this.getPostionAnchor(), this.controlAnchor(), this.onUpDownScrollTop(), this.controlUpDown(), this.checkUpDown())
  },
  getPostionAnchor: function() {
    this.postionAnchorHeight = this.postionAnchor.height(), this.postionAnchorWidth = this.postionAnchor.width(), this.windowScrollTop = document.documentElement.scrollTop || document.body.scrollTop
  },
  checkWindowWeight: function() {
    var t = this;
    $(window).resize(function() {
      t.windowWidth = $(window).width(), t.controlAnchor()
    })
  },
  checkWindowsScrollTop: function() {
    var t = this;
    $(window).scroll(function() {
      t.windowScrollTop = document.documentElement.scrollTop || document.body.scrollTop, t.controlAnchor()
    })
  },
  controlAnchor: function() {
    var t = this;
    t.windowScrollTop <= t.mbodyTop ? t.windowWidth >= 1520 ? (t.defaultStatus = !0, t.controlAbsoluteRight()) : (t.defaultStyle(), t.defaultStatus && (t.defaultShow(), t.defaultStatus = !1), t.hoverAnchor()) : t.windowWidth >= 1520 ? (t.defaultStatus = !0, t.controlFixedRight()) : (t.FixedTop(), t.defaultStatus && (t.defaultShow(), t.defaultStatus = !1), t.hoverAnchor())
  },
  defaultStyle: function() {
    this.hoverAnchorDom.removeClass("anchor-fixed"), this.hoverAnchorDom.addClass("anchor-absolute"), this.commonRemoveClass(), this.postionAnchor.removeClass("anchor-fixed"), this.postionAnchor.addClass("anchor-absolute")
  },
  FixedTop: function() {
    this.hoverAnchorDom.removeClass("anchor-absolute"), this.hoverAnchorDom.addClass("anchor-fixed"), this.commonRemoveClass(), this.postionAnchor.removeClass("anchor-absolute"), this.postionAnchor.addClass("anchor-fixed")
  },
  controlAbsoluteRight: function() {
    this.resumeScrollTop(), this.commonRemoveClassRight(), this.postionAnchor.removeClass("anchor-fixed-right"), this.postionAnchor.addClass("anchor-absolute-right"), this.postionAnchor.css({
      border: "1px solid #ededed",
      width: this.postionAnchorWidth + "px",
      height: this.postionAnchorHeight + "px"
    })
  },
  controlFixedRight: function() {
    this.resumeScrollTop(), this.commonRemoveClassRight(), this.postionAnchor.removeClass("anchor-absolute-right"), this.postionAnchor.addClass("anchor-fixed-right"), this.postionAnchor.css({
      border: "1px solid #ededed",
      width: this.postionAnchorWidth + "px",
      height: this.postionAnchorHeight + "px"
    })
  },
  commonRemoveClassRight: function() {
    this.hoverAnchorDom.hide(), this.postionAnchor.unbind("mouseleave"), this.postionAnchor.removeClass("anchor-fixed"), this.postionAnchor.removeClass("anchor-absolute")
  },
  commonRemoveClass: function() {
    this.postionAnchor.removeClass("anchor-fixed-right"), this.postionAnchor.removeClass("anchor-absolute-right")
  },
  defaultShow: function() {
    var t = this;
    t.resumeScrollTop(), setTimeout(function() {
      t.postionAnchor.stop(!0, !0).animate({
        height: "0px",
        width: "0px",
        border: "0px"
      }, 150)
    }, 1e3), setTimeout(function() {
      t.hoverAnchorDom.fadeIn()
    }, 1200)
  },
  getUpDownDom: function() {
    this.anchorDiv = $(".anchor-div"), this.up = $(".anchor-up"), this.down = $(".anchor-down"), this.scrollTop = this.anchorDiv.scrollTop(), this.hoverAnchorDom = $(".hover-anchor"), this.postionAnchor = $(".postion-anchor"), this.allAnchor = $("ul.all-anchor"), this.allAnchorHight = this.allAnchor.height()
  },
  checkUpDown: function() {
    var t = this;
    t.up.click(function() {
      t.scrollTop -= t.postionAnchorHeight, t.scrollTop < 0 && (t.scrollTop = 0), t.anchorDivScrollTop()
    }), t.down.click(function() {
      t.scrollTop += t.postionAnchorHeight, t.anchorDivScrollTop()
    })
  },
  anchorDivScrollTop: function() {
    this.anchorDiv.stop(!0, !0).animate({
      scrollTop: this.scrollTop
    }, 200)
  },
  resumeScrollTop: function() {
    this.anchorDiv.scrollTop(0)
  },
  onUpDownScrollTop: function() {
    var t = this;
    t.anchorDiv.scroll(function() {
      t.scrollTop = $(this).scrollTop(), t.controlUpDown()
    })
  },
  controlUpDown: function() {
    if (this.allAnchorHight > 300) {
      var t = this.allAnchorHight - this.postionAnchorHeight - 30;
      this.scrollTop < 30 ? (this.up.fadeOut(), this.down.fadeIn()) : this.scrollTop > t ? (this.up.fadeIn(), this.down.fadeOut()) : (this.up.fadeIn(), this.down.fadeIn())
    } else this.up.hide(), this.down.hide()
  },
  addAnchorID: function() {
    for (var t = 0; t < this.anchor.length; t++) this.anchor.eq(t).attr("id", "service-page-anchor" + t)
  },
  addAnchorHtml: function() {
    this.dom.find(".hover-anchor").remove(), this.dom.find(".postion-anchor").remove(), this.dom.append('<div class="hover-anchor" id="hover-anchor"></div><div id ="postion-anchor" class="postion-anchor"><div class="anchor-div"><ul class="all-anchor"></ul></div><div class="anchor-up"></div><div class="anchor-down"></div></div>')
  },
  addAnchorBtn: function() {
    var t = $(".all-anchor");
    t.html("");
    for (var o = 0; o < this.anchor.length; o++) t.append('<li><a href="#' + this.anchor.eq(o).attr("id") + '">' + this.anchor.eq(o).text() + "</a></li>")
  },
  hoverAnchor: function() {
    var t = this;
    t.hoverAnchorDom.unbind("mouseover"), t.postionAnchor.unbind("mouseleave"), t.hoverAnchorDom.mouseover(function() {
      $(this).fadeOut(), t.postionAnchor.css("border", "1px solid #ededed"), t.postionAnchor.stop(!0, !0).animate({
        height: t.postionAnchorHeight + "px",
        width: t.postionAnchorWidth + "px"
      }, 150)
    }), t.postionAnchor.mouseleave(function() {
      $(this).stop(!0, !0).animate({
        height: "0px",
        width: "0px",
        border: "0"
      }, 200), setTimeout(function() {
        t.hoverAnchorDom.fadeIn()
      }, 200)
    })
  }
}, scenarioTemplate.prototype = {
  constructor: scenarioTemplate,
  init: function() {
    this.changeLogoBtn(), this.showContents(), this.checkInterior()
  },
  changeLogoBtn: function() {
    var t = this;
    this.logoBtn.click(function() {
      t.actionIndex = $(this).index(), t.showContents(), t.checkInterior()
    })
  },
  showContents: function() {
    for (var t = 0; t < this.logoBtn.length; t++) t === this.actionIndex ? (this.logoBtn.eq(t).addClass("action"), this.contentBox.eq(t).fadeIn()) : (this.logoBtn.eq(t).removeClass("action"), this.contentBox.eq(t).hide())
  },
  checkInterior: function() {
    this.contentBox.eq(this.actionIndex).find(".scenario-interior-btn").length > 0 && (this.getInteriorDom(), this.interiorContentShow(), this.checkInteriorBtn(), this.checkPrevNext())
  },
  getInteriorDom: function() {
    this.interiorBtn = this.contentBox.eq(this.actionIndex).find(".interior-btn"), this.interiorContent = this.contentBox.eq(this.actionIndex).find(".interior-content"), this.interiorSelect = this.contentBox.eq(this.actionIndex).find(".select"), this.interiorPrev = this.contentBox.eq(this.actionIndex).find(".interior-prev"), this.interiorNext = this.contentBox.eq(this.actionIndex).find(".interior-next"), this.interiorIndex = this.interiorBtn.index(this.interiorSelect) || 0
  },
  checkInteriorBtn: function() {
    var t = this;
    t.interiorBtn.unbind("click"), t.interiorBtn.click(function() {
      t.interiorIndex = $(this).index(), t.interiorContentShow()
    })
  },
  checkPrevNext: function() {
    var t = this;
    t.interiorPrev.unbind("click"), t.interiorPrev.click(function() {
      t.interiorIndex < t.interiorBtn.length && 0 !== t.interiorIndex && (t.interiorIndex -= 1), t.interiorContentShow()
    }), t.interiorNext.unbind("click"), t.interiorNext.click(function() {
      t.interiorIndex < t.interiorBtn.length - 1 && (t.interiorIndex += 1), t.interiorContentShow()
    })
  },
  interiorContentShow: function() {
    for (var t = 0; t < this.interiorBtn.length; t++) t === this.interiorIndex ? (this.interiorBtn.eq(t).addClass("select"), this.interiorContent.eq(t).fadeIn()) : (this.interiorBtn.eq(t).removeClass("select"), this.interiorContent.eq(t).hide())
  }
}, ControlDevguideBg.prototype = {
  constructor: ControlDevguideBg,
  init: function() {
    this.getHightData()
  },
  getHightData: function() {
    if (this.domObj.length > 1) for (var t = 0; t < this.domObj.length; t++) {
      var o = this.domObj.eq(t).find(".leftborderbg"),
        i = this.domObj.eq(t).find(".devguideorder"),
        n = i.eq(i.length - 1).position().top;
      o.css("height", n + "px")
    } else this.topHeight = this.lastTitle.position().top, this.controlHeight()
  },
  controlHeight: function() {
    this.bg.css("height", this.topHeight + "px")
  }
}, $(document).ready(function() {
  if ($(".labels").length > 0) new interiorStyle, new interiorNav;
  if ($(".updatedemo").length > 0) new updateDemo;
  if ($(".jsapidemo_template").length > 0) new jsapiDemoBtn;
  if ($("pre.codestyle").length > 0) new controlPreHeight;
  if ($(".sdkshowmap").length > 0) new sdkShowMap;
  if ($(".usagescenario").length > 0) new usageScenario;
  if ($(".second").length > 0) new serviceDocument;
  if ($(".service-page-anchor").length > 0 && 0 === $(".labels").length) new addPageAnchor;
  if ($(".scenario-template").length > 0) new scenarioTemplate;
  if ($(".devguide").length > 0 && 0 === $(".labels").length && 0 === $(".updatedemo").length) new ControlDevguideBg;
  if ($("#sidebar").length > 0) new controlSidebar;
  servebgstyle()
});
