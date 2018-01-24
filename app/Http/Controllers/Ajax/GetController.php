<?php
namespace App\Http\Controllers\Ajax;

use App\Http\Controllers\Controller;

/**
 *
 */
class GetController extends Controller
{

  public function index()
  {
    if (!isset($_GET['get'])) {
      echo "该接口调用不存在！请查看详细文档！";
      exit;
    }
    switch ($_GET['get']) {
      case 'getclassinfo':
        $data = array(array('id' => 1001, 'name' => '图书', 'pid' => 0),array('id' => 1002, 'name' => '少儿图书', 'pid' => 1001),array('id' => 1003, 'name' => '手机', 'pid' => 0),);
        $jdata = json_encode($data);
        echo $jdata;
        break;
      case 'getgoodsinfo':
        echo $this->getgoodsinfo($_GET['class'],$_GET['order'],$_GET['search']);
        break;
      default:
        # code...
        break;
    }
  }

  static function getgoodsinfo($class,$order,$search)
  {

  }
}
