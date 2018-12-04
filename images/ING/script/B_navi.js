// JavaScript Document

// PFEILE RECHTS
$( B_pf_r_01).click(function(){	
	$( B_02).css("display", "block");	
	$( "#B_pf_l_01,#B_pf_r_01").css("display", "none");
	$( "#B_pf_l_02,#B_pf_r_02").css("display", "block");
	setTimeout(function(){	
	$( B_02).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( B_01).css("display", "none");
	},500);			
 });
 
 $( B_pf_r_02).click(function(){	
	$( B_03).css("display", "block");	
	$( "#B_pf_l_02,#B_pf_r_02").css("display", "none");
	$( "#B_pf_l_03,#B_pf_r_03").css("display", "block");	
	setTimeout(function(){	
	$( B_03).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( B_02).css("display", "none");
	},500);			
 });
  
// PFEILE LINKS 
 $( B_pf_l_02).click(function(){
	$( B_01).css("display", "block");
	$( B_02).css("opacity", "0");	
	$( "#B_pf_l_02,#B_pf_r_02").css("display", "none");
	$( "#B_pf_l_01,#B_pf_r_01").css("display", "block");		
	setTimeout(function(){	
	$( B_02).css("display", "none");
	},500);		
 });

$( B_pf_l_03).click(function(){
	$( B_02).css("display", "block");
	$( B_03).css("opacity", "0");	
	$( "#B_pf_l_03,#B_pf_r_03").css("display", "none");
	$( "#B_pf_l_02,#B_pf_r_02").css("display", "block");		
	setTimeout(function(){	
	$( B_03).css("display", "none");
	},500);		
 });
 
// CLOSE 
  $( close_B).click(function(){
	$( B_all).css("opacity", "0");
	setTimeout(function(){	
	$( B_all).css("display", "none");	
	$( B_01).css("display", "block");	
	$( B_02).css("opacity", "0");
	$( B_03).css("opacity", "0");	
	$( B_02).css("display", "none");
	$( B_03).css("display", "none");	
	$( B_pf_l_01).css("display", "block");
	$( B_pf_r_01).css("display", "block");	
	$( B_pf_l_02).css("display", "none");
	$( B_pf_r_02).css("display", "none");
	$( B_pf_l_03).css("display", "none");
	$( B_pf_r_03).css("display", "none");	
	},500);			
 });