import axios from 'axios'
import { Table, Container, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import CreateModal from '../components/ModalEntradas/CreateAddModal'
import UpdateModal from '../components/ModalEntradas/UpdateModal'
import { Api } from '../api/Api'
import { Link } from 'react-router-dom'

function Entradas() {
    const [Posts, setPosts] = useState()
    const [CreateModalOpen, setCreateModalOpen] = useState(false)
    const [UpdateModalOpen, setUpdateModalOpen] = useState(false)
    const [selectedPosts, setSelectedPosts] = useState()

    const handleCloseCreateModal = () => setCreateModalOpen(false);
    const handleShowCreateModal = () => setCreateModalOpen(true);

    const handleCloseUpdateModal = () => setUpdateModalOpen(false);
    const handleShowUpdateModal = () => setUpdateModalOpen(true);

    const getPosts = async () => {
        try {
            const response = await Api.get('/entradas');
            const data = response.data;
            console.log(data)

            setPosts(data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

        getPosts()

    }, []);

    async function deletePosts(Id) {

        try {
            axios
            Api.delete('/entradas/' + Id)

            const formattedPosts = Posts.filter(Postss => {
                if (Postss.id !== Id) {
                    return Postss
                }
            })

            setPosts(formattedPosts)
        } catch (err) {
            throw err
        }
    }

    async function createPosts(event) {
        try {
            event.preventDefault()

            const req = event.currentTarget.elements
            const nome = req.nome.value
            const descricao = req.descricao.value
            const preco = req.preco.value
            axios
            Api.post('/entradas', { nome: nome, preco: preco, descricao: descricao })
                .then(res => {
                    setPosts([...Posts, {
                        nome: req.nome.value,
                        descricao: req.descricao.value,
                        preco: req.preco.value
                    }])
                    setCreateModalOpen(false)
                })
        } catch (err) {
            throw err
        }
    }

    async function updatePosts(event) {
        try {
            event.preventDefault()

            const req = event.currentTarget.elements
            const nome = req.nome.value
            const descricao = req.descricao.value
            const preco = req.preco.value
            const id = selectedPosts.id;
            axios
            Api.put('/entradas/' + id, { id: id, nome: nome, preco: preco, descricao: descricao })

            const formattedPosts = Posts.map(Postss => {
                if (Postss.id === selectedPosts.id) {
                    return {
                        id: selectedPosts.id,
                        nome: req.nome.value,
                        descricao: req.descricao.value,
                        preco: req.preco.value
                    }
                }

                return Postss
            })

            setPosts(formattedPosts)

            setUpdateModalOpen(false)
        } catch (err) {
            throw err
        }
    }

    return (
        <div className="body">
            <Container id="container"
                className="
        d-flex
        flex-column
        align-items-start
        justify-content-center
        h-100
        w-100
        "
            >
               <li className='voltar'><Button variant='dark'> <Link to={'/adm'}>Voltar</Link></Button></li><br />
               
                <Table  bordered>
                    <thead>
                        <tr>
                            <th className="th">Nome</th>
                            <th className="th">preço</th>
                            <th className="th">Descrição</th>
                            <th className="th">Ações</th>
                        </tr>
                    </thead>

                    <tbody >
                        {Posts && Posts.map(Posts => (
                            <tr  key={Posts.id}>
                                <td className="th">{Posts.nome}</td>
                                <td className="th">{Posts.preco}</td>
                                <td className="th">{Posts.descricao}</td>
                                <td>
                                    <Button onClick={() => deletePosts(Posts.id)} variant='danger'>
                                        Excluir
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            handleShowUpdateModal()
                                            setSelectedPosts(Posts)
                                        }}
                                        variant='warning'
                                        className='m-1'
                                    >
                                        Atualizar
                                    </Button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Button
                    className="mb-8"
                    onClick={handleShowCreateModal}
                    variant='primary'>
                    Adicionar
                </Button>
            </Container>
            <CreateModal ModalOpen={CreateModalOpen} handleClose={handleCloseCreateModal} createPosts={createPosts} />
            {selectedPosts && (
                <UpdateModal ModalOpen={UpdateModalOpen} handleClose={handleCloseUpdateModal} updatePosts={updatePosts} Posts={selectedPosts} />
            )}
        </div>
    )
}

export default Entradas
