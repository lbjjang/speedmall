<%@ page contentType="text/html;charset=euc-kr"%>
<%
	request.setCharacterEncoding("euc-kr");
%>
<%@ page import="java.sql.*"%>
<%@page import="util.OkMroUtil"%>
<%@ page import="util.MroComUtil"%>
<%@ page import="java.util.Date" %>
<%@ page import="java.text.*" %>
<%@ include file="/small/include/session_chk.jsp"%>
<%
	final String prog_nm = "leejk_" + request.getRequestURI();
	final int LOG_FLAG = 0; // 1: log 출력 0: log 출력안함.
%>
<%@ include file="/small/comm/comm_db_use.jsp"%>

<%
	String pstr_path_gubun = request.getParameter("in_path_gubun"); // 가입경로
	String pstr_gubun_txt = request.getParameter("in_gubun_txt").substring(2,request.getParameter("in_gubun_txt").length()); // 가입경로 기타값
	String in_path_gubun[] = {"","인터넷","전단지","소개","기타"};
	pstr_path_gubun = in_path_gubun[Integer.parseInt(request.getParameter("in_gubun_txt").substring(0,1))];
	
	String cust_id = request.getParameter("cust_id")==null?"":request.getParameter("cust_id");
	String pstr_new_mem_ini = request.getParameter("pstr_new_mem_ini")==null?"":request.getParameter("pstr_new_mem_ini");
	String pstr_yy_day = request.getParameter("pstr_yy_day")==null?"":request.getParameter("pstr_yy_day");
	String pstr_mm_day = request.getParameter("pstr_mm_day")==null?"":request.getParameter("pstr_mm_day");
	String pstr_dd_day = request.getParameter("pstr_dd_day")==null?"":request.getParameter("pstr_dd_day");
	String pstr_sex = request.getParameter("pstr_sex")==null?"":request.getParameter("pstr_sex");
	String pstr_calendar = request.getParameter("pstr_calendar")==null?"":request.getParameter("pstr_calendar");
	String return_msg = request.getParameter("return_msg")==null?"":request.getParameter("return_msg");
	
	/**
	 * 가입경로 입력지점
	 */
	 String s_cust_id = return_msg;
	
	try {
		

		qry = "insert into speed_cust_join_path(cust_id, path_gubun, gubun_txt, reg_dati) "
				+ "values (?,?,?,sysdate) ";

		db.prepareStatement(qry);
		db.PsetString(1, return_msg);
		db.PsetString(2, pstr_path_gubun);
		db.PsetString(3, pstr_gubun_txt);

		if (db.PexecuteUpdate() < 0) {
		}
		db.commit();
		//db.rollback();

		qry = "insert into speed_cust_business_path(cust_id, path_gubun, gubun_txt, reg_dati ) "
				+ "values (?,? ,?,sysdate) ";
		db.prepareStatement(qry);

		//업종선택
		
		String[] in_business_txt = request.getParameterValues("business"); //
		String in_business_etc = request.getParameter("in_business_txt"); //관심카테고리
		String business_txt = "";
		String business_gubun_txt="";
		String txt ="";
		String business_gubun[] = {"","제조","건설","서비스","기타","개인소모"};
		int business_count = 0;
		//log.Write(prog_nm, "=> in_business_txt.length============" + in_business_txt.length);
		String etc="";
		
		for (int i = 0; i < in_business_txt.length; i++) {
			if (!in_business_txt[i].equals("")) {					
					business_txt = in_business_txt[i];
					//log.Write(prog_nm, "=> business_txt==========" + business_txt);
					business_count++;
					
					if("pro_etc".equals(business_txt)){
						etc = request.getParameter("business0");								
						business_txt="1-"+etc;
					}else if("con_etc".equals(business_txt)){
						etc = request.getParameter("business1");								
						business_txt="2-"+etc;
					}else if("serv_etc".equals(business_txt)){
						etc = request.getParameter("business2");								
						business_txt="3-"+etc;
					}else if("another_etc".equals(business_txt)){
						etc = request.getParameter("business3");								
						business_txt="4-"+etc;
					}else if("person_etc".equals(business_txt)){
						etc = request.getParameter("business4");								
						business_txt="5-"+etc;
					}				
					//log.Write(prog_nm, "=> business_txt==========" + business_txt);
					
					txt = business_txt.substring(2,business_txt.length()); //업종선택
					business_gubun_txt = business_gubun[Integer.parseInt(business_txt.substring(0,1))];

					db.PsetString(1, return_msg);
					db.PsetString(2, business_gubun_txt);
					db.PsetString(3, txt);

					if (db.PexecuteUpdate() < 0) {
					}
				
					//log.Write(prog_nm, "=> qry=2" + qry);
			}
		}


		//관심 카테고리 설정
		String[] intercategory = request
				.getParameterValues("intercategory"); //관심카테고리
		String incategory = "";
		int cate_count = 0;
		for (int i = 0; i < intercategory.length; i++) {
			if (!intercategory[i].equals("")) {
				if (cate_count == 0) {
					incategory = intercategory[i];
					cate_count++;
				} else {
					incategory = incategory + ","
							+ intercategory[i];
				}
			}
		}

		qry = " INSERT into speed_my_cata(CUST_ID, PRD_CD, MEMO,REG_DATI, STAT_FLAG, GROUP_SEQ) "
				+ " values(?,'INTER',?,sysdate,'001',0) ";

		db.prepareStatement(qry);
		db.PsetString(1, return_msg);
		db.PsetString(2, incategory);

		
		if (db.PexecuteUpdate() < 0) {
		}
		
		//sjjang 20150817 R20150812-0012
		/*qry = "insert into speed_event_cust(CUST_ID, GUBUN, GUBUN_DATI, REG_DATI, MEMO,  ORDS_NUM) "
				+ "values (?, 'SpeedRecommendPerID', 'EVENT', Sysdate, '스피드몰 회원가입 추천인ID', ?) ";
		db.prepareStatement(qry);
		db.PsetString(1, return_msg);
		db.PsetString(2, OkMroUtil.checkNull(request.getParameter("recommend_per_id")));
		if (db.PexecuteUpdate() < 0) {
		}*/

		db.commit();
		//db.rollback();
		
	} catch (Exception e) {
		db.rollback();
		db.DB_DisConn();
		System.out.print(" 설문조사 Exception");
		log.Write(prog_nm, "=> QRY_ERR=2" + e);
	} finally {
		db.DB_DisConn();
	}

%>
<script>
	alert("설문조사에 응해 주셔서 감사합니다.");
	/* location.href ="/small/index.jsp"; */
	location.href ="/small/join/join_result.jsp";
</script>
