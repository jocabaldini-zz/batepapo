@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-2">
                <h3>Usuários</h3>
                <ul class="list-group">
                    <li class="list-group-item">
                        <a href="#"></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-8">
                <div class="panel panel-default">
                    <div class="panel-heading">{{$room->name}}</div>

                    <div class="panel-body">
                        <ul class="chat list-unstyled">

                        </ul>
                    </div>

                    <div class="panel-footer">
                        <div class="input-group">
                            <input type="text" class="form-control input-md" placeholder="Digite sua mensagem"/>
                            <span class="input-group-btn">
                                <button class="btn btn-success btn-md">Enviar</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection