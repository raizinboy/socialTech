$(function(){

  //もっとみるボタンにアニメーションをつける
  $('.button-more').on('mouseover', function(){
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    }, 100);
  });
  $('.button-more').on('mouseout', function(){
    $(this).animate({
      opacity: 1.0,
      marginLeft: 0,
    }, 100);
  });

  //メインビジュアルのカルーセル化
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  $('#submit').on('click', function(a){
    //formタグによる送信を拒否
    a.preventDefault();
    //入力チェックをした結果、エラーがあるかないか判定
    let result = inputCheck();
  });

  //フォーカスが外れたとき(blur)にフォームの入力チェックをする
  $('#name').blur(function(){
    inputCheck();
  });

  $('#furigana').blur(function(){
    inputCheck();
  });

  $('#email').blur(function(){
    inputCheck();
  });

  $('#tel').blur(function(){
    inputCheck();
  });

  $('#message').blur(function(){
    inputCheck();
  });

  $('#agree').click(function(){
    inputCheck();
  });

  //お問い合わせフォームの入力チェック
  function inputCheck() {
    //エラーのチェック要素
    let result;
    //エラーメッセージのテキスト
    let message ='';
    //エラーがなければfalse, エラーがあればtrue
    let error = false;

    //お名前のチェック
    if($('#name').val() == ''){
      console.log('a')
      //エラーあり
      $('#name').css('background-color','#f79999');
      error = true;
      massage += 'お名前を入力してください。\n';
      } else {
        //エラーなし
        $('#name').css('background-color', '#fafafa');
      }
    

      // フリガナのチェック
      if ($('#furigana').val() == '') {
        // エラーあり
        console.log('b')
        $('#furigana').css('background-color','#f79999');
        error = true;
        message += 'フリガナを入力してください。\n';
      } else {
        // エラーなし
        $('#furigana').css('background-color','#fafafa');
      }

      //お問い合わせのチェック
      if($('#message').val() == ''){
        //エラーあり
      $('#message').css('background-color', '#f79999');
      error = true;
      message += 'お問い合わせ内容を入力してください。\n';
      } else {
        //エラーなし
        $('#message').css('background-color', '#fafafa');
      }

      //メールアドレスのチェック
      if($('#email').val() == ''|| $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1){
        //エラーあり
        $('#email').css('background-color', '#f79999');
        error = true;
        message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
      } else {
        console.log('v');
        //エラーなし
        $('#email').css('background-color', '#fafafa');
      }
  };
});
