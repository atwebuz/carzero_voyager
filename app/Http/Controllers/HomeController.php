<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use TCG\Voyager\Models\Post;

class HomeController extends Controller
{
    public function index(){
        $posts = Post::all();
        return view('frontend.pages.home', compact('posts'));
    }
}
