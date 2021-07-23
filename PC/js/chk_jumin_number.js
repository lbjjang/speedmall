/**
* 주민등록번호 무결성 체크하는곳
*/ 
function chk_jumin_number(jumin1,jumin2)
{
	if ((jumin1.length != 6) || (jumin2.length != 7))
	{
		return false;
	}
	else
	{
		a = jumin1.substring( 0, 1) * 2;
		b = jumin1.substring( 1, 2) * 3;
		c = jumin1.substring( 2, 3) * 4;
		d = jumin1.substring( 3, 4) * 5;
		e = jumin1.substring( 4, 5) * 6;
		f = jumin1.substring( 5, 6) * 7;
		g = jumin2.substring(0, 1) * 8;
		h = jumin2.substring(1, 2) * 9;
		i = jumin2.substring(2, 3) * 2;
		j = jumin2.substring(3, 4) * 3;
		k = jumin2.substring(4, 5) * 4;
		l = jumin2.substring(5, 6) * 5;

		pivot = jumin2.substring(6,7);
		sum = a + b + c + d + e + f + g + h + i + j + k + l;
		modulus = sum % 11;
		end_number = 11 - modulus;

		if (end_number == 11)
		{
			end_number = 1;
		}
		else if (end_number == 10)
		{
			end_number = 0;
		}
		else
		{
			end_number = end_number;
		}

		if (pivot != end_number)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
}