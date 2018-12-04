// JavaScript Document

// PFEILE RECHTS
$( D_pf_r_01).click(function(){	
	$( D_02).css("display", "block");	
	$( "#D_pf_l_01,#D_pf_r_01").css("display", "none");
	$( "#D_pf_l_02,#D_pf_r_02").css("display", "block");
	setTimeout(function(){	
	$( D_02).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( D_01).css("display", "none");
	},500);			
 });
 
 $( D_pf_r_02).click(function(){	
	$( D_03).css("display", "block");	
	$( "#D_pf_l_02,#D_pf_r_02").css("display", "none");
	$( "#D_pf_l_03,#D_pf_r_03").css("display", "block");	
	setTimeout(function(){	
	$( D_03).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( D_02).css("display", "none");
	},500);			
 });
 
 $( D_pf_r_03).click(function(){	
	$( D_04).css("display", "block");	
	$( "#D_pf_l_03,#D_pf_r_03").css("display", "none");
	$( "#D_pf_l_04,#D_pf_r_04").css("display", "block");	
	setTimeout(function(){	
	$( D_04).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( D_03).css("display", "none");
	},500);			
 });
 
 $( D_pf_r_04).click(function(){	
	$( D_05).css("display", "block");	
	$( "#D_pf_l_04,#D_pf_r_04").css("display", "none");
	$( "#D_pf_l_05,#D_pf_r_05").css("display", "block");	
	setTimeout(function(){	
	$( D_05).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( D_04).css("display", "none");
	},500);			
 });
 
 $( D_pf_r_05).click(function(){	
	$( D_06).css("display", "block");	
	$( "#D_pf_l_05,#D_pf_r_05").css("display", "none");
	$( "#D_pf_l_06,#D_pf_r_06").css("display", "block");	
	setTimeout(function(){	
	$( D_06).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( D_05).css("display", "none");
	},500);			
 });
 
// PFEILE LINKS 
 $( D_pf_l_02).click(function(){
	$( D_01).css("display", "block");
	$( D_02).css("opacity", "0");	
	$( "#D_pf_l_02,#D_pf_r_02").css("display", "none");
	$( "#D_pf_l_01,#D_pf_r_01").css("display", "block");		
	setTimeout(function(){	
	$( D_02).css("display", "none");
	},500);		
 });

$( D_pf_l_03).click(function(){
	$( D_02).css("display", "block");
	$( D_03).css("opacity", "0");	
	$( "#D_pf_l_03,#D_pf_r_03").css("display", "none");
	$( "#D_pf_l_02,#D_pf_r_02").css("display", "block");		
	setTimeout(function(){	
	$( D_03).css("display", "none");
	},500);		
 });
 
 $( D_pf_l_04).click(function(){
	$( D_03).css("display", "block");
	$( D_04).css("opacity", "0");	
	$( "#D_pf_l_04,#D_pf_r_04").css("display", "none");
	$( "#D_pf_l_03,#D_pf_r_03").css("display", "block");		
	setTimeout(function(){	
	$( D_04).css("display", "none");
	},500);		
 });
 
 $( D_pf_l_05).click(function(){
	$( D_04).css("display", "block");
	$( D_05).css("opacity", "0");	
	$( "#D_pf_l_05,#D_pf_r_05").css("display", "none");
	$( "#D_pf_l_04,#D_pf_r_04").css("display", "block");		
	setTimeout(function(){	
	$( D_05).css("display", "none");
	},500);		
 });
 
  $( D_pf_l_06).click(function(){
	$( D_05).css("display", "block");
	$( D_06).css("opacity", "0");	
	$( "#D_pf_l_06,#D_pf_r_06").css("display", "none");
	$( "#D_pf_l_05,#D_pf_r_05").css("display", "block");		
	setTimeout(function(){	
	$( D_06).css("display", "none");
	},500);		
 });
 
// CLOSE 
  $( close_D).click(function(){
	$( D_all).css("opacity", "0");
	setTimeout(function(){	
	$( D_all).css("display", "none");	
	$( D_01).css("display", "block");	
	$( D_02).css("opacity", "0");
	$( D_03).css("opacity", "0");
	$( D_04).css("opacity", "0");
	$( D_05).css("opacity", "0");
	$( D_06).css("opacity", "0");	
	$( D_02).css("display", "none");
	$( D_03).css("display", "none");
	$( D_04).css("display", "none");
	$( D_05).css("display", "none");
	$( D_06).css("display", "none");	
	$( D_pf_l_01).css("display", "block");
	$( D_pf_r_01).css("display", "block");	
	$( D_pf_l_02).css("display", "none");
	$( D_pf_r_02).css("display", "none");
	$( D_pf_l_03).css("display", "none");
	$( D_pf_r_03).css("display", "none");
	$( D_pf_l_04).css("display", "none");
	$( D_pf_r_04).css("display", "none");
	$( D_pf_l_05).css("display", "none");
	$( D_pf_r_05).css("display", "none");
	$( D_pf_l_06).css("display", "none");
	$( D_pf_r_06).css("display", "none");	
	},500);			
 });