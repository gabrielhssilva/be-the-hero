import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.scss';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api'

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    // Cadastrar Caso
    async function handleIncidentRegister(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })

            history.push('/perfil');
        } catch (err) {
            alert('Erro ao cadastrar caso, por favor tente novamente!');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo Be The Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/perfil">
                        <FiArrowLeft size={16} color="#E02141" />
                        Voltar para Perfil
                    </Link>
                </section>
                <form onSubmit={handleIncidentRegister}>
                    <input
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Valor em reais"
                        onChange={e => setValue(e.target.value)}
                    />
                    <button className="btn" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
