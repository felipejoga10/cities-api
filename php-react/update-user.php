<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->id)
    && isset($data->user_fname)
    && isset($data->user_lname)
    && isset($data->user_rg)
    && isset($data->user_orgao)
    && isset($data->user_cpf)
    && isset($data->user_telefone)
    && isset($data->user_datan)
    && isset($data->user_nacionalidade)
    && isset($data->user_npai)
    && isset($data->user_nmae)
    && isset($data->user_ecivil)
    && isset($data->user_regime)
    && isset($data->user_email)
    && isset($data->user_cep)
    && isset($data->user_logradouro)
    && isset($data->user_numero)
    && isset($data->user_complemento)
    && isset($data->user_bairro)
    && isset($data->user_cidade)
    && isset($data->user_estado)
    && isset($data->user_pais)
    && is_numeric($data->id)
    && !empty(trim($data->user_fname))
    && !empty(trim($data->user_lname))
    && !empty(trim($data->user_rg))
    && !empty(trim($data->user_orgao))
    && !empty(trim($data->user_cpf))
    && !empty(trim($data->user_telefone))
    && !empty(trim($data->user_datan))
    && !empty(trim($data->user_nacionalidade))
    && !empty(trim($data->user_npai))
    && !empty(trim($data->user_nmae))
    && !empty(trim($data->user_ecivil))
    && !empty(trim($data->user_regime))
    && !empty(trim($data->user_email))
    && !empty(trim($data->user_cep))
    && !empty(trim($data->user_logradouro))
    && !empty(trim($data->user_numero))
    && !empty(trim($data->user_complemento))
    && !empty(trim($data->user_bairro))
    && !empty(trim($data->user_cidade))
    && !empty(trim($data->user_estado))
    && !empty(trim($data->user_pais))
) {
    $userfname = mysqli_real_escape_string($db_conn, trim($data->user_fname));
    $userlname = mysqli_real_escape_string($db_conn, trim($data->user_lname));
    $userrg = mysqli_real_escape_string($db_conn, trim($data->user_rg));
    $userorgao = mysqli_real_escape_string($db_conn, trim($data->user_orgao));
    $usercpf = mysqli_real_escape_string($db_conn, trim($data->user_cpf));
    $usertelefone = mysqli_real_escape_string($db_conn, trim($data->user_telefone));
    $userdatan = mysqli_real_escape_string($db_conn, trim($data->user_datan));
    $usernacionalidade = mysqli_real_escape_string($db_conn, trim($data->user_nacionalidade));
    $usernpai = mysqli_real_escape_string($db_conn, trim($data->user_npai));
    $usernmae = mysqli_real_escape_string($db_conn, trim($data->user_nmae));
    $userecivil = mysqli_real_escape_string($db_conn, trim($data->user_ecivil));
    $userregime = mysqli_real_escape_string($db_conn, trim($data->user_regime));
    $useremail = mysqli_real_escape_string($db_conn, trim($data->user_email));
    $usercep = mysqli_real_escape_string($db_conn, trim($data->user_cep));
    $userlogradouro = mysqli_real_escape_string($db_conn, trim($data->user_logradouro));
    $usernumero = mysqli_real_escape_string($db_conn, trim($data->user_numero));
    $usercomplemento = mysqli_real_escape_string($db_conn, trim($data->user_complemento));
    $userbairro = mysqli_real_escape_string($db_conn, trim($data->user_bairro));
    $usercidade = mysqli_real_escape_string($db_conn, trim($data->user_cidade));
    $userestado = mysqli_real_escape_string($db_conn, trim($data->user_estado));
    $userpais = mysqli_real_escape_string($db_conn, trim($data->user_pais));
    if (filter_var($useremail, FILTER_VALIDATE_EMAIL)) {
        $updateUser = mysqli_query($db_conn,
        "UPDATE `users` 
        SET `user_fname`='$userfname',
            `user_lname`='$userlname',
            `user_rg`='$userrg',
            `user_orgao`='$userorgao',
            `user_cpf`='$usercpf',
            `user_telefone`='$usertelefone',
            `user_datan`='$userdatan',
            `user_nacionalidade`='$usernacionalidade',
            `user_npai`='$usernpai',
            `user_nmae`='$usernmae',
            `user_ecivil`='$userecivil',
            `user_regime`='$userregime',
            `user_email`='$useremail',
            `user_cep`='$usercep',
            `user_logradouro`='$userlogradouro',
            `user_numero`='$usernumero',
            `user_complemento`='$usercomplemento',
            `user_bairro`='$userbairro',
            `user_cidade`='$usercidade',
            `user_estado`='$userestado',
            `user_pais`='$userpais',
        WHERE `id`='$data->id'");
        if ($updateUser) {
            echo json_encode(["success" => 1, "msg" => "User Updated."]);
        } else {
            echo json_encode(["success" => 1, "msg" => "User  Updated!"]);
        }
    } else {
        echo json_encode(["success" => 0, "msg" => "Invalid Email Address!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}