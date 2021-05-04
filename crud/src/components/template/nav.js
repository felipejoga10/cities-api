import React from 'react'
import './nav.css'
import Logo from './logo'
import List from './list/UserList'


export default props =>
<div className='menu'>
    <aside className="menu-area">
         <div className='logo'><Logo></Logo></div>
         <div className='list'>
            <ul>
                <li><a href="link1.htm"><i class="fa fa-user-plus" aria-hidden="true"></i>Cadastrar Administrador</a></li>
                <li><a href="link2.htm"><i class="fa fa-list" aria-hidden="true"></i>Administradores</a></li>
                <li><a href="link3.htm"><i class="fa fa-share-square-o" aria-hidden="true"></i>Sair</a></li>
            </ul>
            <div className='textMenu'>
                <p>Todos os valores dos ativos aqui apresentados são convertidos ao equivalente em moeda corrente(R$)</p>
            </div>
        </div>
    </aside>
</div>