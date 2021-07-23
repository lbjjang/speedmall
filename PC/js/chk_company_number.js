/**
* 사업자등록번호 체크하는곳
*/ 
function chk_company_number(saup1,saup2,saup3)
{
 var checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);
 var bizID = ""+ saup1 + saup2 + saup3;
 var i, Sum=0, c2, remander;
 
 for (i=0; i<=7; i++) Sum += checkID[i] * bizID.charAt(i);

 c2 = "0" + (checkID[8] * bizID.charAt(8));
 c2 = c2.substring(c2.length - 2, c2.length);

 Sum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1));

 remander = (10 - (Sum % 10)) % 10 ;
 
 if (Math.floor(bizID.charAt(9)) != remander){
  return false;
 }else{

return true;

}
}
