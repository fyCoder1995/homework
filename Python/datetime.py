# 输入某年某月某日，判断这一天是这一年的第几天
import datetime

dtstr = "20181206"
dt = datetime.datetime.strptime(dtstr, "%Y%m%d")
another_dtstr = dtstr[:4] + '0101'
another_dt = datetime.datetime.strptime(another_dtstr, "%Y%m%d")
print(int((dt-another_dt).days) + 1)
