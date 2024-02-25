<?php

namespace App\Controller;

use Cake\Controller\Controller;
use Cake\Http\Response;
use Cake\Datasource\ConnectionManager;

class HelloController extends Controller
{
    public function index(): Response
    {

        $connection = ConnectionManager::get('default');

        // SQLクエリを実行
        $results = $connection->execute('SELECT "Hello" FROM "Hello"')->fetchAll('assoc');
        $message = 'Hello';
        $this->set(compact('results'));
        $this->viewBuilder()->setOption('serialize', ['results']);

        return $this->response->withType('application/json')->withStringBody(json_encode(compact('results')));
    }
}