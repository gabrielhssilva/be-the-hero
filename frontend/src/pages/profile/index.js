import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.scss';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api'

export default function Profile() {
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();

    // Salvar informações de login no Storage
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    // Carregar Casos por Perfil
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    // Deletar Caso
    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            }
            )

            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (err) {
            alert('Erro ao deletar caso! Por favor, tente novamente.')
        }

    }

    // Função de Logout
    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }


    // Renderização da Página
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logo Be The Hero" />
                <span>Bem vinda, {ongName}!</span>

                <Link className="btn" to="/casos/novo">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02141" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button onClick={()=> handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}