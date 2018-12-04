// JavaScript Document

// PFEILE RECHTS
$( F_pf_r_01).click(function(){	
	$( F_02).css("display", "block");	
	$( "#F_pf_l_01,#F_pf_r_01").css("display", "none");
	$( "#F_pf_l_02,#F_pf_r_02").css("display", "block");
	setTimeout(function(){	
	$( F_02).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( F_01).css("display", "none");
	},500);			
 });
 
 $( F_pf_r_02).click(function(){	
	$( F_03).css("display", "block");	
	$( "#F_pf_l_02,#F_pf_r_02").css("display", "none");
	$( "#F_pf_l_03,#F_pf_r_03").css("display", "block");	
	setTimeout(function(){	
	$( F_03).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( F_02).css("display", "none");
	},500);			
 });
 
 $( F_pf_r_03).click(function(){	
	$( F_04).css("display", "block");	
	$( "#F_pf_l_03,#F_pf_r_03").css("display", "none");
	$( "#F_pf_l_04,#F_pf_r_04").css("display", "block");	
	setTimeout(function(){	
	$( F_04).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( F_03).css("display", "none");
	},500);			
 });
 
 $( F_pf_r_04).click(function(){	
	$( F_05).css("display", "block");	
	$( "#F_pf_l_04,#F_pf_r_04").css("display", "none");
	$( "#F_pf_l_05,#F_pf_r_05").css("display", "block");	
	setTimeout(function(){	
	$( F_05).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( F_04).css("display", "none");
	},500);			
 });
 
 $( F_pf_r_05).click(function(){	
	$( F_06).css("display", "block");	
	$( "#F_pf_l_05,#F_pf_r_05").css("display", "none");
	$( "#F_pf_l_06,#F_pf_r_06").css("display", "block");	
	setTimeout(function(){	
	$( F_06).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( F_05).css("display", "none");
	},500);			
 });
 
 $( F_pf_r_06).click(function(){	
	$( F_07).css("display", "block");	
	$( "#F_pf_l_06,#F_pf_r_06").css("display", "none");
	$( "#F_pf_l_07,#F_pf_r_07").css("display", "block");	
	setTimeout(function(){	
	$( F_07).css("opacity", "1");
	},50);
	setTimeout(function(){	
	$( F_06).css("display", "none");
	},500);			
 });
 
// PFEILE LINKS 
 $( F_pf_l_02).click(function(){
	$( F_01).css("display", "block");
	$( F_02).css("opacity", "0");	
	$( "#F_pf_l_02,#F_pf_r_02").css("display", "none");
	$( "#F_pf_l_01,#F_pf_r_01").css("display", "block");		
	setTimeout(function(){	
	$( F_02).css("display", "none");
	},500);		
 });

$( F_pf_l_03).click(function(){
	$( F_02).css("display", "block");
	$( F_03).css("opacity", "0");	
	$( "#F_pf_l_03,#F_pf_r_03").css("display", "none");
	$( "#F_pf_l_02,#F_pf_r_02").css("display", "block");		
	setTimeout(function(){	
	$( F_03).css("display", "none");
	},500);		
 });
 
 $( F_pf_l_04).click(function(){
	$( F_03).css("display", "block");
	$( F_04).css("opacity", "0");	
	$( "#F_pf_l_04,#F_pf_r_04").css("display", "none");
	$( "#F_pf_l_03,#F_pf_r_03").css("display", "block");		
	setTimeout(function(){	
	$( F_04).css("display", "none");
	},500);		
 });
 
 $( F_pf_l_05).click(function(){
	$( F_04).css("display", "block");
	$( F_05).css("opacity", "0");	
	$( "#F_pf_l_05,#F_pf_r_05").css("display", "none");
	$( "#F_pf_l_04,#F_pf_r_04").css("display", "block");		
	setTimeout(function(){	
	$( F_05).css("display", "none");
	},500);		
 });
 
  $( F_pf_l_06).click(function(){
	$( F_05).css("display", "block");
	$( F_06).css("opacity", "0");	
	$( "#F_pf_l_06,#F_pf_r_06").css("display", "none");
	$( "#F_pf_l_05,#F_pf_r_05").css("display", "block");		
	setTimeout(function(){	
	$( F_06).css("display", "none");
	},500);		
 });
 
 $( F_pf_l_07).click(function(){
	$( F_06).css("display", "block");
	$( F_07).css("opacity", "0");	
	$( "#F_pf_l_07,#F_pf_r_07").css("display", "none");
	$( "#F_pf_l_06,#F_pf_r_06").css("display", "block");		
	setTimeout(function(){	
	$( F_07).css("display", "none");
	},500);		
 });
 
// CLOSE 
  $( close_F).click(function(){
	$( F_all).css("opacity", "0");
	setTimeout(function(){	
	$( F_all).css("display", "none");	
	$( F_01).css("display", "block");	
	$( F_02).css("opacity", "0");
	$( F_03).css("opacity", "0");
	$( F_04).css("opacity", "0");
	$( F_05).css("opacity", "0");
	$( F_06).css("opacity", "0");
	$( F_07).css("opacity", "0");	
	$( F_02).css("display", "none");
	$( F_03).css("display", "none");
	$( F_04).css("display", "none");
	$( F_05).css("display", "none");
	$( F_06).css("display", "none");
	$( F_07).css("display", "none");	
	$( F_pf_l_01).css("display", "block");
	$( F_pf_r_01).css("display", "block");	
	$( F_pf_l_02).css("display", "none");
	$( F_pf_r_02).css("display", "none");
	$( F_pf_l_03).css("display", "none");
	$( F_pf_r_03).css("display", "none");
	$( F_pf_l_04).css("display", "none");
	$( F_pf_r_04).css("display", "none");
	$( F_pf_l_05).css("display", "none");
	$( F_pf_r_05).css("display", "none");
	$( F_pf_l_06).css("display", "none");
	$( F_pf_r_06).css("display", "none");
	$( F_pf_l_07).css("display", "none");
	$( F_pf_r_07).css("display", "none");	
	},500);			
 });