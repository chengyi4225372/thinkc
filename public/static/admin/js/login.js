
//login
$(function(){
   $('#login').click(function(){
      var user = $.trim($('#user').val());
      var pwd  = $.trim($('#pwd').val());

      if(user == '' || user == undefined || user== 'undefined'){
          layer.msg('用户名不能为空');
          return false;
      }

      if(pwd== '' || pwd == undefined || pwd == 'undefinded'){
          layer.msg('请输入密码');
          return false;
      }

      var url = $(this).attr('data-url');

      $.post(url,{'user':user,'pwd':pwd},function(){
          if(ret.code  == 200){
                layer.msg(ret.msg,{icon:6},function(){
                    parent.location.href="{:url('index/index')}";
                })
            }

           if(ret.code  == 400){
              layer.msg(ret.msg,{icon:5},function(){
                  parent.location.reload();
              })
          }

      },'json')

   })

});