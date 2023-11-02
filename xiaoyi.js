/*
易截图2：https://apps.apple.com/app/id1633186528

[rewrite_local]
^https?:\/\/(jietu6|1jietu)\.com\/apiv2\/user url script-response-body https://raw.githubusercontent.com/1739201011/xiaoyu/main/xiaoyi.js
[MITM]
hostname = jietu6.com, 1jietu.com

*/
var xiaoyi = JSON.parse($response.body);
xiaoyi.info.group_id = "8";
xiaoyi.info.vip = "3";
xiaoyi.info.group = "小易的破解会员";
xiaoyi.info.nickname = "小易";
$done({ body: JSON.stringify(guding) });
