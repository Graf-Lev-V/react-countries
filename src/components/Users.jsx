import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export default function Users() {

    const navigate = useNavigate();

    const { id } = useParams();
    const userId = Number(id);

    const { data: user, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

    return (
        <article>
            <button onClick={() => navigate(`/users/${userId - 1}`)} disabled={userId <= 1}>Previous user</button>
            <button onClick={() => navigate(`/users/${userId + 1}`)} disabled={userId >= 10}>Next user</button>

            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            <p>{user?.name}</p>
            <p>{user?.email}</p>
            <p>{user?.company?.name}</p>
        </article>
    )
}