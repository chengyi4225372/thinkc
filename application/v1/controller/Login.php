<?php

namespace app\v1\controller;

use app\v1\controller\AdminBase;
use think\session;
class Login extends  AdminBase
{
    //登录
    public function index(){
        if($this->get){
            return $this->fetch();
        }
    }


    public function checklogin(){
        if($this->ajax || $this->post){
            $user = input('post.user','','trim');
            $pwd  = input('post.pwd','','trim');


        }
        return false;
   }


   //退出
    public function logout(){
        session();
        $this->redirect('login/index');
    }

}