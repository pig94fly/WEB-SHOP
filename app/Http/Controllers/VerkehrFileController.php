<?php

namespace App\Http\Controllers;

/**
 *
 */
class VerkehrFileController extends Controller
{

  public function verk_dir($dir)
  {
    $files =array();
    if(@$handle = opendir($dir)){
      while ($file = readdir($handle)) {
        if ($file == '.'||$file == '..') {
          continue;
        }
        if (is_dir($dir.'/'.$file)) {
          $files[$file] = $this->verk_dir($dir.'/'.$file);
        }else {
          $files[] = $file;
        }
      }
    }
    return $files;
  }

}
