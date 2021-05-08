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

//
    public function updateCategory(Request $req,$id){      
        $category=Category::find($id);
        $category->cname=$req->input('cname');
        $category->sname=$req->input('sname');
        $category->save();
        }
        

        
    public function deleteCategory($id){
            $result= DB::table('categories')->where('id',$id)->delete();
            if($result){
                   return['result'=>"Category has been deleted"];
            }
        }


public function storebrand(Request $req){      
        $data=array();
        $data['name']=$req->name;
        $image=$req->file('file');
        if($image){
         $image_name=hexdec(uniqid());
         $ext=strtolower($image->getClientOriginalExtension());
         $image_fullname=$image_name.'.'.$ext;
         $path='Brand/';
         $image_url=$path.$image_fullname;
         $success=$image->move($path,$image_fullname);
         $data['logo']= $image_url;
         DB::table('brands')->insert($data);
   }else{
     DB::table('brands')->insert($data);
     
    }
}

public function showBrand(){
        $brand=DB::table('brands')->get();
        return response()->json($brand);
    }


public function deleteBrand($id){
        $brand= DB::table('brands')->where('id',$id)->first();
             $image=$brand->logo;
             $delete= DB::table('brands')->where('id',$id)->delete();
             if($delete){
                 unlink($image);     
             }     
    }

    

    public function getBrand($id){    
       return Brand::find($id);
    }
    public function getCategory($id){    
        return Category::find($id);
     }

       

public function updateBrand(Request $req,$id){          
   $brand=Brand::find($id);
   $brand->name=$req->name;
   $image=$req->file('file');
   if($image){
    $image_name=hexdec(uniqid());
    $ext=strtolower($image->getClientOriginalExtension());
    $image_fullname=$image_name.'.'.$ext;
    $path='Brand/';
    $image_url=$path.$image_fullname;
    $success=$image->move($path,$image_fullname);
    $brand->logo= $image_url;
    $brand->save();    
}else{
    $brand->save();
}
}
   
        


    //product
public function Product(Request $req){      
        $data =array();
        $data['product_name']=$req->name;
        $data['category_id']=$req->category;
        $data['brand_id']=$req->brand;
        $image=$req->file('file');
        if($image){
         $image_name=hexdec(uniqid());
         $ext=strtolower($image->getClientOriginalExtension());
         $image_fullname=$image_name.'.'.$ext;
         $path='product/';
         $image_url=$path.$image_fullname;
         $success=$image->move($path,$image_fullname);
         $data['image']= $image_url;
         DB::table('products')->insert($data);
   }else{
     DB::table('products')->insert($data);     
    }
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
        $pro= DB::table('products')->where('id',$id)->first();
        $image=$pro->image;
        $delete= DB::table('products')->where('id',$id)->delete();
        if($delete){
            unlink($image);     
        }   
    }

}