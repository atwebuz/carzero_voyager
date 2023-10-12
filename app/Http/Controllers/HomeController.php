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

    public function show($id){
        $post = Post::find($id);
        // dd($post);
        return view('frontend.pages.show', compact('post'));
    }
}
