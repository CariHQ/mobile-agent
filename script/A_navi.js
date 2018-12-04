// JavaScript Document

// PFEILE RECHTS
$( A_pf_r_01).click(function(){	
	$( A_02).css("display", "block");	
	$( "#A_pf_l_01,#A_pf_r_01").css("display", "none");
	$( "#A_pf_l_02,#A_pf_r_02").css("display", "block");
	setTimeout(function(){	
	$( A_02).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( A_01).css("display", "none");
	},500);			
 });
 
 $( A_pf_r_02).click(function(){	
	$( A_03).css("display", "block");	
	$( "#A_pf_l_02,#A_pf_r_02").css("display", "none");
	$( "#A_pf_l_03,#A_pf_r_03").css("display", "block");	
	setTimeout(function(){	
	$( A_03).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( A_02).css("display", "none");
	},500);			
 });
 
 $( A_pf_r_03).click(function(){	
	$( A_04).css("display", "block");	
	$( "#A_pf_l_03,#A_pf_r_03").css("display", "none");
	$( "#A_pf_l_04,#A_pf_r_04").css("display", "block");	
	setTimeout(function(){	
	$( A_04).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( A_03).css("display", "none");
	},500);			
 });
 
 $( A_pf_r_04).click(function(){	
	$( A_05).css("display", "block");	
	$( "#A_pf_l_04,#A_pf_r_04").css("display", "none");
	$( "#A_pf_l_05,#A_pf_r_05").css("display", "block");	
	setTimeout(function(){	
	$( A_05).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( A_04).css("display", "none");
	},500);			
 });
 
// PFEILE LINKS 
 $( A_pf_l_02).click(function(){
	$( A_01).css("display", "block");
	$( A_02).css("opacity", "0");	
	$( "#A_pf_l_02,#A_pf_r_02").css("display", "none");
	$( "#A_pf_l_01,#A_pf_r_01").css("display", "block");		
	setTimeout(function(){	
	$( A_02).css("display", "none");
	},500);		
 });

$( A_pf_l_03).click(function(){
	$( A_02).css("display", "block");
	$( A_03).css("opacity", "0");	
	$( "#A_pf_l_03,#A_pf_r_03").css("display", "none");
	$( "#A_pf_l_02,#A_pf_r_02").css("display", "block");		
	setTimeout(function(){	
	$( A_03).css("display", "none");
	},500);		
 });
 
 $( A_pf_l_04).click(function(){
	$( A_03).css("display", "block");
	$( A_04).css("opacity", "0");	
	$( "#A_pf_l_04,#A_pf_r_04").css("display", "none");
	$( "#A_pf_l_03,#A_pf_r_03").css("display", "block");		
	setTimeout(function(){	
	$( A_04).css("display", "none");
	},500);		
 });
 
 $( A_pf_l_05).click(function(){
	$( A_04).css("display", "block");
	$( A_05).css("opacity", "0");	
	$( "#A_pf_l_05,#A_pf_r_05").css("display", "none");
	$( "#A_pf_l_04,#A_pf_r_04").css("display", "block");		
	setTimeout(function(){	
	$( A_05).css("display", "none");
	},500);		
 });
 
// CLOSE 
  $( close_A).click(function(){
	$( A_all).css("opacity", "0");
	setTimeout(function(){	
	$( A_all).css("display", "none");
	$( A_01).css("display", "block");	
	$( A_02).css("opacity", "0");
	$( A_03).css("opacity", "0");
	$( A_04).css("opacity", "0");
	$( A_05).css("opacity", "0");
	$( A_02).css("display", "none");
	$( A_03).css("display", "none");
	$( A_04).css("display", "none");
	$( A_05).css("display", "none");	
	$( A_pf_l_01).css("display", "block");
	$( A_pf_r_01).css("display", "block");	
	$( A_pf_l_02).css("display", "none");
	$( A_pf_r_02).css("display", "none");
	$( A_pf_l_03).css("display", "none");
	$( A_pf_r_03).css("display", "none");
	$( A_pf_l_04).css("display", "none");
	$( A_pf_r_04).css("display", "none");
	$( A_pf_l_05).css("display", "none");
	$( A_pf_r_05).css("display", "none");		
	},500);			
 });