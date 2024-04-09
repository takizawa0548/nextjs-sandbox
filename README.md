

"
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>Modal Example</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>お住まいのエリア・住居タイプによって利用できるサービス・プランが異なります。</p>
    <div class="modal-buttons">
      <button class="modal-button">標準市内区内郵便 1 丁目</button>
      <button class="modal-button">標準市内区内郵便 2 丁目</button>
      <button class="modal-button">標準市内区内郵便 3 丁目</button>
    </div>
    <a href="#" class="modal-link">登録する住所がない方はこちら</a>
  </div>
</div>

<script src="script.js"></script>
</body>
</html>


/* styles.css */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal-button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background: #f44336; /* Red */
  color: white;
  border: none;
  cursor: pointer;
}

.modal-button:hover {
  background-color: #d73725;
}

.modal-link {
  display: block;
  margin-top: 20px;
  text-align: center;
  color: #0645ad; /* Blue link */
  text-decoration: none;
}

.modal-link:hover {
  text-decoration: underline;
}
"

実際に使う方はclone後に下記を実施してください。
・webフォルダに移動し、コマンドの実施
```
 npm install
 npm run build
```
・api/srcフォルダに移動し、コマンドの実施
```
composer install
```
・api/src/config/app_local.phpのソースを修正(composer install実行後に表示されます）
```php
       'default' => [
            'className' => 'Cake\Database\Connection',
            'driver' => 'Cake\Database\Driver\Postgres',
            'persistent' => false,
            'host' => 'db',
            'username' => 'app',
            'password' => 'app',
            'database' => 'app',
            'encoding' => 'utf8',
            'timezone' => 'UTC',
            'cacheMetadata' => true,
        ],
```
・プロジェクトフォルド直下に移動し、コマンドの実施
```
docker compose up
```
・下記にアクセスして、Helloテーブル＞Helloカラム（character 10)を作成し、データも作成
http://localhost:8080/?pgsql=db&server=db&username=app&db=app
パスワード:app
・http://localhost:80 にアクセス
※DBで失敗する場合は、 http://localhost:80/hello でアクセスしてエラー出てないか確認
