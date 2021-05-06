<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Models\Brand;
use App\Models\Category;
use App\Models\product;


class homeController extends Controller
{
    public function index(){
        return response()->json('shaon');
    }


    function login(Request $request){
    if( $request->input('email')=='shaon@gmail.com' && $request->input('password')=='123'){
        return ["status"=>"success", "msg"=>"Login Successfully"];
    }
    else{
        return ["status"=>"failed", "msg"=>"Login failed!! Try again sometimes latter"];

    }
    }

    //category
    public function store(Request $request){
        $data =array();
        $data['cname']=$request->cname;
        $data['sname']=$request->sname;
        DB::table('categories')->insert($data);
        return response([
         'msg' => "Category Successfully  Inserted"
        ],200);
    }

    public function showCategory(){
        $category=DB::table('categories')->get();
        return response()->json($category);
    }


    public function storebrand(Request $req){      
        $data =array();
        $data['name']=$req->name;
        $data['logo']=$req->file('file')->store('Brand');
        DB::table('brands')->insert($data);
        return response([
         'msg' => "Brand Successfully  Inserted"
        ],200);

    }

    public function showBrand(){
        $brand=DB::table('brands')->get();
        return response()->json($brand);
    }


    public function deleteBrand($id){
        $result= DB::table('brands')->where('id',$id)->delete();
        if($result){
               return['result'=>"Brand has been deleted"];
        }
    }

    public function deleteCategory($id){
        $result= DB::table('categories')->where('id',$id)->delete();
        if($result){
               return['result'=>"Category has been deleted"];
        }
    }

    public function getBrand($id){    
       return Brand::find($id);
    }
    public function getCategory($id){    
        return Category::find($id);
     }

    public function updateBrand(Request $req,$id){      
        $data =array();
        $data['name']=$req->name;
        $data['logo']=$req->file('file')->store('Brand');
        DB::table('brands')->where('id',$id)->update($data);
        return response([
         'msg' => "Brand Successfully  Updated"
        ],200);

    }
    

    //product
    public function Product(Request $req){      
        $data =array();
        $data['product_name']=$req->name;
        $data['category_id']=$req->category;
        $data['brand_id']=$req->brand;
        $data['image']=$req->file('file')->store('Brand');

        DB::table('products')->insert($data);
        return response([
         'msg' => "Product Successfully  Inserted"
        ],200);

    }

    public function showProduct(){
        $brand=Product::
                join('categories','products.category_id','categories.id')
               ->join('brands','products.brand_id','brands.id')
               ->select('products.*','categories.cname','brands.name')            
               ->get();
        return response()->json($brand);
    }

    public function deleteProduct($id){
        $result= Product::where('id',$id)->delete();
        if($result){
               return['result'=>"Brand has been deleted"];
        }
    }

}
