
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0">
<title>gacha</title>
<link rel='stylesheet' href='https://www.nejigram.com/assets/css/reboot.css' type='text/css' />
<link rel='stylesheet' href='../assets/css/common.css' type='text/css' />
<link rel='stylesheet' href='css/gacha.css' type='text/css' />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="js/gacha.js"></script>

</head>
<body>
<header class="pt_1">
    <p class="tc fs_2"><img src="https://www.nejigram.com/assets/img/stamp/023.png" class="buruburu w8"><span class="buruburu">gacha.</span><img src="https://www.nejigram.com/assets/img/stamp/024.png" class="buruburu w8"></p>
    <p class="tc fs_0_7 lh_1 ja">ガチャ。</p>
</header>
<p id="test"></p>
<article class="box m0a pd_1 mt_1">

    <p class="tc mt_4"><button class="btn" id="gacha1">gacha!</button></p>

    <div id="area_gacha1" class="no_disp">
        <div class="kurubox mt_2 m0a">
            <div class="omote tc">
                <img src="https://www.nejigram.com/assets/img/stamp/top.png" width="80%" class="gs">

            </div>
            <div class="ura tc">
                <img src="https://www.nejigram.com/assets/img/stamp/023.png" width="80%">
            </div>
        </div>

        <p class="tc mt_2"><button class="btn" id="returnbtn_gacha1">return</button></p>
    </div>

    <p class="tc mt_4"><button class="btn" id="gacha10">10連gacha!</button></p>
    <div id="area_gacha10" class="no_disp">
        <?php for($x = 0;$x < 10;$x++) : ?>
            <?php if(!$x || $x % 5 === 0) :?><div class="fbox"><?php endif;?>
            <div class="kurubox mt_2">
                <div class="omote pikapika tc">
                    <img src="https://www.nejigram.com/assets/img/stamp/top.png" width="80%" class="gs">

                </div>
                <div class="ura tc">
                    <img src="https://www.nejigram.com/assets/img/stamp/023.png" width="80%">
                </div>
            </div>
        <?php if($x && ($x+1) % 5 === 0) :$div_close_flg = true;?></div><?php else :$div_close_flg = false;?><?php endif;?>
        <?php endfor;?>
        <?php if(!$div_close_flg) :?></div><?php endif;?>
        <p class="tc mt_1"><button class="btn" id="returnbtn_gacha10">return</button></p>
    </div>

</article>
</body>
</html>
