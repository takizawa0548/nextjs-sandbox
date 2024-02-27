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
