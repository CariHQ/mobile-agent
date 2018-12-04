// JavaScript Document

// PFEILE RECHTS
$( E_pf_r_01).click(function(){	
	$( E_02).css("display", "block");	
	$( "#E_pf_l_01,#E_pf_r_01").css("display", "none");
	$( "#E_pf_l_02,#E_pf_r_02").css("display", "block");
	setTimeout(function(){	
	$( E_02).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( E_01).css("display", "none");
	},500);			
 });
 
 $( E_pf_r_02).click(function(){	
	$( E_03).css("display", "block");	
	$( "#E_pf_l_02,#E_pf_r_02").css("display", "none");
	$( "#E_pf_l_03,#E_pf_r_03").css("display", "block");	
	setTimeout(function(){	
	$( E_03).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( E_02).css("display", "none");
	},500);			
 });
  
// PFEILE LINKS 
 $( E_pf_l_02).click(function(){
	$( E_01).css("display", "block");
	$( E_02).css("opacity", "0");	
	$( "#E_pf_l_02,#E_pf_r_02").css("display", "none");
	$( "#E_pf_l_01,#E_pf_r_01").css("display", "block");		
	setTimeout(function(){	
	$( E_02).css("display", "none");
	},500);		
 });

$( E_pf_l_03).click(function(){
	$( E_02).css("display", "block");
	$( E_03).css("opacity", "0");	
	$( "#E_pf_l_03,#E_pf_r_03").css("display", "none");
	$( "#E_pf_l_02,#E_pf_r_02").css("display", "block");		
	setTimeout(function(){	
	$( E_03).css("display", "none");	
	},500);		
 });
 
// CLOSE 
  $( close_E).click(function(){
	$( E_all).css("opacity", "0");
	setTimeout(function(){	
	$( E_all).css("display", "none");	
	$( E_01).css("display", "block");	
	$( E_02).css("opacity", "0");
	$( E_03).css("opacity", "0");
	$( E_02).css("display", "none");
	$( E_03).css("display", "none");	
	$( E_pf_l_01).css("display", "block");
	$( E_pf_r_01).css("display", "block");	
	$( E_pf_l_02).css("display", "none");
	$( E_pf_r_02).css("display", "none");
	$( E_pf_l_03).css("display", "none");
	$( E_pf_r_03).css("display", "none");	
	},500);			
 });