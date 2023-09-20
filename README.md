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
姉がエステ店を開業することになり、新規顧客の獲得を目指しています。その目的を達成するため、見やすさと理解しやすさを最優先にした説明をするよう心掛け、訪れたくなるような印象を与えるホームページを作ることにしました。
# 洗い出した要件
https://docs.google.com/spreadsheets/d/1sBBnuA2maPVzBURtgVYDiZVPkAMfv5AS8bGCAxhPV68/edit#gid=982722306
# 実装した機能についての画像やGIFおよびその説明
各メニューをすぐに検索できるよう、ハンバーガーメニューを実装。
[![Image from Gyazo](https://i.gyazo.com/41eb80087ea9634062ef33f76b4bdc01.gif)](https://gyazo.com/41eb80087ea9634062ef33f76b4bdc01)
[![Image from Gyazo](https://i.gyazo.com/054437690aa3d2de64540123a54971bc.jpg)](https://gyazo.com/054437690aa3d2de64540123a54971bc)
[![Image from Gyazo](https://i.gyazo.com/7f0e41dc1a56d69ad3a20901fa013e66.png)](https://gyazo.com/7f0e41dc1a56d69ad3a20901fa013e66)
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
エステ店のホームページ作成ということで、新規のお客様が見やすいように文字の大きさ、行間、背景色を意識し、全体的に柔らかい印象になるように開発した。  
JavaScriptでハンバーガーメニューを実装し、各ページにすぐにアクセスすることができ、画像スライダーを実装することにより店内の雰囲気や、お客様の感想などの写真をストレスなく見れるようにした。  
Googleマップで地図情報を載せることで、エステ店までのアクセス情報がわかりやすくなるようにした。