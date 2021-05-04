import { useState, useContext } from "react";
import { AppContext } from "../../../Context";
import './form.css'
const Form = () => {
  const { insertUser } = useContext(AppContext);
  const [newUser, setNewUser] = useState({});

  // Storing the Insert User Form Data.
  const addNewUser = (e, field) => {
    setNewUser({
      ...newUser,
      [field]: e.target.value,
    });
  };

  // Inserting a new user into the Database.
  const submitUser = (e) => {
    e.preventDefault();
    insertUser(newUser);
    e.target.reset();
  };

  return (
   
    <form className="insertForm" onSubmit={submitUser}>
      <div>
      <p>Altere aqui seus dados:</p>
    
      <input
        type="text"
        id="_fname"
        onChange={(e) => addNewUser(e, "user_fname")}
        placeholder="Enter first name"
        autoComplete="off"
        required
      />

      <input
        type="text"
        id="_lname"
        onChange={(e) => addNewUser(e, "user_lname")}
        placeholder="Enter last name"
        autoComplete="off"
        required
      /><br/>
      <input
        type="text"
        id="_rg"
        onChange={(e) => addNewUser(e, "user_rg")}
        placeholder="Enter RG"
        autoComplete="off"
        required
      />
      <input
        type="text"
        id="_orgao"
        onChange={(e) => addNewUser(e, "user_orgao")}
        placeholder="Enter Orgao emissor"
        autoComplete="off"
        required
      />
      <input
        type="text"
        id="_cpf"
        onChange={(e) => addNewUser(e, "user_cpf")}
        placeholder="CPF"
        autoComplete="off"
        required
      /><br/>
      <input
        type="text"
        id="_telefone"
        onChange={(e) => addNewUser(e, "user_telefone")}
        placeholder="Telefone"
        autoComplete="off"
        required
      />
      <input
        type="date"
        id="_datan"
        onChange={(e) => addNewUser(e, "user_datan")}
        placeholder="Data de Nascimento: DD/MM/YYYY"
        autoComplete="off"
        required
      />    
      <input
        type="text"
        id="_nacionalidade"
        onChange={(e) => addNewUser(e, "user_nacionalidade")}
        placeholder="Nacionalidade"
        autoComplete="off"
        required
      /><br/>
      <input
        type="text"
        id="_npai"
        onChange={(e) => addNewUser(e, "user_npai")}
        placeholder="Nome do pai"
        autoComplete="off"
        required
      />
      <input
        type="text"
        id="_nmae"
        onChange={(e) => addNewUser(e, "user_nmae")}
        placeholder="Nome da Mae"
        autoComplete="off"
        required
      /><br/>
      <input
        type="text"
        id="_ecivil"
        onChange={(e) => addNewUser(e, "user_ecivil")}
        placeholder="Estado Civil"
        autoComplete="off"
        required
      />
      <input
        type="text"
        id="_regime"
        onChange={(e) => addNewUser(e, "user_regime")}
        placeholder="Regime de Casamento"
        autoComplete="off"
        required
      /><br/>
      <input
        type="email"
        id="_email"
        onChange={(e) => addNewUser(e, "user_email")}
        placeholder="Enter email"
        autoComplete="off"
        required
      />
      <br/>
      <label className='endereco'>Endereço</label>
      <br/>
      <input
        type="text"
        id="_cep"
        onChange={(e) => addNewUser(e, "user_cep")}
        placeholder="CEP"
        autoComplete="off"
        required
      />
      <input
        type="text"
        id="_logradouro"
        onChange={(e) => addNewUser(e, "user_logradouro")}
        placeholder="Logradouro:"
        autoComplete="off"
        required
      /><br/>
      <input
        type="text"
        id="_numero"
        onChange={(e) => addNewUser(e, "user_numero")}
        placeholder="Numero"
        autoComplete="off"
        required
      />
      <input
        type="text"
        id="_complemento"
        onChange={(e) => addNewUser(e, "user_complemento")}
        placeholder="Complemento"
        autoComplete="off"
        required
      /><br/>
      <input
        type="text"
        id="_bairro"
        onChange={(e) => addNewUser(e, "user_bairro")}
        placeholder="Bairro"
        autoComplete="off"
        required
      />
      <input
        type="text"
        id="_cidade"
        onChange={(e) => addNewUser(e, "user_cidade")}
        placeholder="Cidade"
        autoComplete="off"
        required
      /><br/>
      <input
        type="text"
        id="_estado"
        onChange={(e) => addNewUser(e, "user_estado")}
        placeholder="Estado"
        autoComplete="off"
        required
      />
      <input
        type="text"
        id="_pais"
        onChange={(e) => addNewUser(e, "user_pais")}
        placeholder="Pais"
        autoComplete="off"
        required
      /><br/>
    
      <input id="submit-form" type="submit" value="Insert" />
      </div>
    </form>
  );
};

export default Form;