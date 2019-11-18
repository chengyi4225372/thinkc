<?php
namespace app\v1\controller;

use app\v1\controller\AdminBase;

class Index extends AdminBase
{
    //后台首页
    public function index(){
        if($this->get){
            return $this->fetch();
        }

    }


    public function welcome(){

        if($this->get){
            return $this->fetch();
        }
    }


}