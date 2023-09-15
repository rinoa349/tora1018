# アプリケーション名
TORa ～health ＆ beauty〜
# アプリケーション概要
エステ店のサービス内容を把握することができ、予約できる。
# URL
https://tora-1018-production.onrender.com
# テスト用アカウント
・Basic認証アカウント：yukie  
・Basic認証ID：1018
# 利用方法
・エステ内容のメニュー、料金、案内情報を知ることができる。  
・予約画面から日付を指定し、予約することができる。
# アプリケーションを作成した背景
姉がエステ店を開業するので、新規のお客様を開拓したいということで、新規のお客様でも見やすく分かりやすい説明、来店したくなるようなホームページ作りを意識して新規のお客様獲得できるようにとアプリケーション開発することにした。
# 洗い出した要件
https://docs.google.com/spreadsheets/d/1sBBnuA2maPVzBURtgVYDiZVPkAMfv5AS8bGCAxhPV68/edit#gid=982722306
# 実装した機能についての画像やGIFおよびその説明
各メニューをすぐに検索できるよう、ハンバーガーメニューを実装。
[![Image from Gyazo](https://i.gyazo.com/41eb80087ea9634062ef33f76b4bdc01.gif)](https://gyazo.com/41eb80087ea9634062ef33f76b4bdc01)
# 画面遷移図
[![Image from Gyazo](https://i.gyazo.com/a0afddaaf0533fc5184f8ab67dee0b41.png)](https://gyazo.com/a0afddaaf0533fc5184f8ab67dee0b41)
# 開発環境
・フロントエンド  
・インフラ  
・テキストエディタ  
・タスク管理
# ローカルでの動作方法
以下のコマンドを順に実行。  
% git clone https://github.com/rinoa349/tora1018.git  
% cd tora1018  
% bundle install  
% yarn install
# 工夫したポイント
エステ店のホームページ作成ということで、新規のお客様が見やすいように文字の大きさ、行間、背景色を意識し、全体的に柔らかい印象になるように開発した。店内の雰囲気や、お客様の感想などの写真をストレスなく見れるようにJavaScriptでハンバーガーメニューを作成し、