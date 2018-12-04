// JavaScript Document

// PFEILE RECHTS
$( C_pf_r_01).click(function(){	
	$( C_02).css("display", "block");	
	$( "#C_pf_l_01,#C_pf_r_01").css("display", "none");
	$( "#C_pf_l_02,#C_pf_r_02").css("display", "block");
	setTimeout(function(){	
	$( C_02).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( C_01).css("display", "none");
	},500);			
 });
 
 $( C_pf_r_02).click(function(){	
	$( C_03).css("display", "block");	
	$( "#C_pf_l_02,#C_pf_r_02").css("display", "none");
	$( "#C_pf_l_03,#C_pf_r_03").css("display", "block");	
	setTimeout(function(){	
	$( C_03).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( C_02).css("display", "none");
	},500);			
 });
 
 $( C_pf_r_03).click(function(){	
	$( C_04).css("display", "block");	
	$( "#C_pf_l_03,#C_pf_r_03").css("display", "none");
	$( "#C_pf_l_04,#C_pf_r_04").css("display", "block");	
	setTimeout(function(){	
	$( C_04).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( C_03).css("display", "none");
	},500);			
 });
  
// PFEILE LINKS 
 $( C_pf_l_02).click(function(){
	$( C_01).css("display", "block");
	$( C_02).css("opacity", "0");	
	$( "#C_pf_l_02,#C_pf_r_02").css("display", "none");
	$( "#C_pf_l_01,#C_pf_r_01").css("display", "block");		
	setTimeout(function(){	
	$( C_02).css("display", "none");
	},500);		
 });

$( C_pf_l_03).click(function(){
	$( C_02).css("display", "block");
	$( C_03).css("opacity", "0");	
	$( "#C_pf_l_03,#C_pf_r_03").css("display", "none");
	$( "#C_pf_l_02,#C_pf_r_02").css("display", "block");		
	setTimeout(function(){	
	$( C_03).css("display", "none");
	},500);		
 });
 
 $( C_pf_l_04).click(function(){
	$( C_03).css("display", "block");
	$( C_04).css("opacity", "0");	
	$( "#C_pf_l_04,#C_pf_r_04").css("display", "none");
	$( "#C_pf_l_03,#C_pf_r_03").css("display", "block");		
	setTimeout(function(){	
	$( C_04).css("display", "none");
	},500);		
 });
 
// CLOSE 
  $( close_C).click(function(){
	$( C_all).css("opacity", "0");
	setTimeout(function(){	
	$( C_all).css("display", "none");	
	$( C_01).css("display", "block");	
	$( C_02).css("opacity", "0");
	$( C_03).css("opacity", "0");
	$( C_04).css("opacity", "0");	
	$( C_02).css("display", "none");
	$( C_03).css("display", "none");
	$( C_04).css("display", "none");	
	$( C_pf_l_01).css("display", "block");
	$( C_pf_r_01).css("display", "block");	
	$( C_pf_l_02).css("display", "none");
	$( C_pf_r_02).css("display", "none");
	$( C_pf_l_03).css("display", "none");
	$( C_pf_r_03).css("display", "none");
	$( C_pf_l_04).css("display", "none");
	$( C_pf_r_04).css("display", "none");	
	},500);			
 });