<template>
  <div>
        <div class="input-append date form_datetime">
          <input size="16" type="text" value="输入时间" readonly>
          <span class="add-on"><i class="icon-th"></i></span>
        </div>
  </div>
</template>
<script>
  export default {
    mounted: function() {
      $(".form_datetime").datetimepicker({
        format: "dd MM yyyy - hh:ii"
      });
    }
  }

</script>
