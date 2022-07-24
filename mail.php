<?php
$telephone = $_POST['uphone'];
$techtype = $_POST['utechtype'];
$floorscount = $_POST['ufloorscount'];
$square = $_POST['usquare'];
$pplcount = $_POST['upplcount'];

$telephone = htmlspecialchars($telephone);
$techtype = htmlspecialchars($techtype);
$floorscount = htmlspecialchars($floorscount);
$square = htmlspecialchars($square);
$pplcount = htmlspecialchars($pplcount);

$telephone = urldecode($telephone);
$techtype = urldecode($techtype);
$floorscount = urldecode($floorscount);
$square = urldecode($square);
$pplcount = urldecode($pplcount);

$telephone = trim($telephone);
$techtype = trim($techtype);
$floorscount = trim($floorscount);
$square = trim($square);
$pplcount = trim($pplcount);

//echo $firstname;
//echo "<br>";
//echo $telephone;
mail("pro-home-wood@mail.ru", "Заявка на дом из дерева. pro-home-wood.ru", "Телефон: ".$telephone."\n Технология строительства: ".$techtype."\n Сколько этажей: ".$floorscount."\n Предполагаемая площадь: ".$square."\n Количество проживающих: ".$pplcount,"From: pro-home-wood@mail.ru \r\n");

//$post_data = array(); pro-home-wood@mail.ru

//if (isset($_POST['uname'])) { $post_data['name'] = htmlspecialchars($_POST['uname']); } else { $post_data['name'] = ''; }
//if (isset($_POST['uphone'])) { $post_data['phone'] = htmlspecialchars($_POST['uphone']); } else { $post_data['phone'] = ''; }
//$post_data['site'] = 'iphone-express.ru';

//$curl = curl_init();
//curl_setopt($curl, CURLOPT_URL, 'http://portal.dev-platform.ru/Modules/RequestsForm/Listening/Index/5942200c877a5');
//curl_setopt($curl, CURLOPT_POST, 1);
//curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
//curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
//$output = curl_exec($curl);
?>