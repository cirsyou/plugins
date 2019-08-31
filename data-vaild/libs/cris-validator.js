(function (global, factory, plug) {
  return factory.call(global, global.jQuery, plug);
})(this, function ($, plug) {
  // 默认参数
  var __DEFS__ = {
    raise: 'change'
  }
  // 规则引擎
  var __RULES__ = {
    "require": function () {
      return !!this.val();
    },
    "email": function () {
      return /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/.test(this.val())
    }
  }
  // 在jQuery基础上扩展一个plug的方法 $.fn = $.prototype
  $.fn[plug] = function (ops) {
    // 遍历选择器
    this.each(function () {
      var $this = $(this);
      $.extend($this, ops);
      // 设置事件触发方式
      $this.raise = $this.data("cv-raise") || $this.raise || __DEFS__.raise;
      var $fileds = $this.find("[data-cv=true]");
      $fileds.on(ops.raise, function () {
        var $fild = $(this); // 当前校验元素
        var $group = $fild.parents(".form-group").removeClass("has-success has-error");
        $group.find(".help-block").remove();
        var result = true; // 校验结果
        var error = null; // 报错提示
        // 遍历规则
        $.each(__RULES__, function (rule, vaild) {
          // 查询配置的规则
          if ($fild.data("cv-" + rule)) {
            result = vaild.call($fild);
            // 如果校验失败
            if (!result) {
              error = $fild.data("cv-" + rule + "-error");
              $fild.after("<span class=\"help-block\">" + error + "</span>")
            }
            return result;
          }

        })
        $group.addClass(result ? "has-success" : "has-error");
      })
    })
  }
}, "dataValidator")