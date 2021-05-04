import { useContext, useState } from "react";
import { AppContext } from "../../../Context";

const UserList = () => {
  const {
    users,
    userLength,
    editMode,
    cancelEdit,
    updateUser,
    deleteUser,
  } = useContext(AppContext);

  // Storing users new data when they editing their info.
  const [newData, setNewData] = useState({});

  const saveBtn = () => {
    updateUser(newData);
  };

  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };

  const enableEdit = (id, user_fname, user_lname, user_rg, user_orgao, user_cpf, user_telefone, user_datan, user_nacionalidade, user_npai, user_nmae, user_ecivil, user_regime, user_email, user_cep, user_logradouro, user_numero, user_complemento, user_bairro, user_cidade, user_estado, user_pais) => {
    setNewData({id, user_fname, user_lname, user_rg, user_orgao, user_cpf, user_telefone, user_datan, user_nacionalidade, user_npai, user_nmae, user_ecivil, user_regime, user_email, user_cep, user_logradouro, user_numero, user_complemento, user_bairro, user_cidade, user_estado, user_pais });
    editMode(id);
  };

  const deleteConfirm = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteUser(id);
    }
  };

  return !userLength ? (
    <p className='list-text'>{userLength === null ? "Loading..." : "Please insert some users."}</p>
  ) : (
    <table className='table-edit'>
      <thead id='List'>
        <tr>
          <th>Primeiro Nome</th>
          <th>Sobrenome</th>
          <th>RG</th>
          <th>Órgão Emissor</th>
          <th>CPF</th>
          <th>Telefone</th>
          <th>Data Nascimento</th>
          <th>Nacionalidade</th>
          <th>Nome do Pai</th>
          <th>Nome da Mãe</th>
          <th>Estado Civil</th>
          <th>Regime de Casamento</th>
          <th>Email</th>
          <th>CEP</th>
          <th>Logradouro</th>
          <th>Número</th>
          <th>Complemento</th>
          <th>Bairro</th>
          <th>Cidade</th>
          <th>Estado</th>
          <th>País</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, user_fname, user_lname, user_rg, user_orgao, user_cpf, user_telefone, user_datan, user_nacionalidade, user_npai, user_nmae, user_ecivil, user_regime, user_email, user_cep, user_logradouro, user_numero, user_complemento, user_bairro, user_cidade, user_estado, user_pais, isEditing }) => {
          return isEditing === true ? (
            <tr key={id}>
              <td>
                <input
                  type="text"
                  defaultValue={user_fname}
                  onChange={(e) => updateNewData(e, "user_fname")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={user_lname}
                  onChange={(e) => updateNewData(e, "user_lname")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={user_rg}
                  onChange={(e) => updateNewData(e, "user_rg")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={user_orgao}
                  onChange={(e) => updateNewData(e, "user_orgao")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={user_cpf}
                  onChange={(e) => updateNewData(e, "user_cpf")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={user_telefone}
                  onChange={(e) => updateNewData(e, "user_telefone")}
                />
              </td>
              <td>
                <input
                  type="date"
                  defaultValue={user_datan}
                  onChange={(e) => updateNewData(e, "user_datan")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={user_nacionalidade}
                  onChange={(e) => updateNewData(e, "user_nacionalidade")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={user_npai}
                  onChange={(e) => updateNewData(e, "user_npai")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={user_nmae}
                  onChange={(e) => updateNewData(e, "user_nmae")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={user_ecivil}
                  onChange={(e) => updateNewData(e, "user_ecivil")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={user_regime}
                  onChange={(e) => updateNewData(e, "user_regime")}
                />
              </td>
              <td>
                <input
                  type="email"
                  defaultValue={user_email}
                  onChange={(e) => updateNewData(e, "user_email")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={user_cep}
                  onChange={(e) => updateNewData(e, "user_cep")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={user_logradouro}
                  onChange={(e) => updateNewData(e, "user_logradouro")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={user_numero}
                  onChange={(e) => updateNewData(e, "user_numero")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={user_complemento}
                  onChange={(e) => updateNewData(e, "user_complemento")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={user_bairro}
                  onChange={(e) => updateNewData(e, "user_bairro")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={user_cidade}
                  onChange={(e) => updateNewData(e, "user_cidade")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={user_estado}
                  onChange={(e) => updateNewData(e, "user_estado")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={user_pais}
                  onChange={(e) => updateNewData(e, "user_pais")}
                />
              </td>
              <td>
                <button className="btn green-btn" onClick={() => saveBtn()}>
                  Save
                </button>
                <button
                  className="btn default-btn"
                  onClick={() => cancelEdit(id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ) : (
            <tr key={id}>
              <td>{user_fname}</td>
              <td>{user_lname}</td>  
              <td>{user_rg}</td>
              <td>{user_orgao}</td>
              <td>{user_cpf}</td>
              <td>{user_telefone}</td>
              <td>{user_datan}</td>
              <td>{user_nacionalidade}</td>
              <td>{user_npai}</td>
              <td>{user_nmae}</td>
              <td>{user_ecivil}</td>
              <td>{user_regime}</td>
              <td>{user_email}</td>
              <td>{user_cep}</td>
              <td>{user_logradouro}</td>
              <td>{user_numero}</td>
              <td>{user_complemento}</td>
              <td>{user_bairro}</td>
              <td>{user_cidade}</td>
              <td>{user_estado}</td>
              <td>{user_pais}</td>
              <td>
                <button
                  className="btn default-btn"
                  onClick={() => enableEdit(id, user_fname, user_lname, user_rg, user_orgao, user_cpf, user_telefone, user_datan, user_nacionalidade, user_npai, user_nmae, user_ecivil, user_regime, user_email, user_cep, user_logradouro, user_numero, user_complemento, user_bairro, user_cidade, user_estado, user_pais)}
                >
                  Edit
                </button>
                <button
                  className="btn red-btn"
                  onClick={() => deleteConfirm(id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserList;