import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "./actions";

const App = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.reducer.posts);


    window.addEventListener('load', async () => {
        if ('serviceWorker' in navigator) {
            try {
                const reg = await navigator.serviceWorker.register('sw.js')
                console.log('Service worker register success', reg)
            } catch (e) {
                console.log('Service worker register fail')
            }
        }

        dispatch(getPosts())
    })

    const renderPosts = posts?.map(post => (
        <div className="card">
            <div className="card-title">
                ${post.title}
            </div>
            <div className="card-body">
                ${post.body}
            </div>
        </div>
    ))

    return (
    <div className="App">
        <nav>
            <h1>Progressive Web Apps</h1>
        </nav>
        <header>
            <h2>Изучаем PWA, manifest, Service Workers</h2>
        </header>
        <div className="container">
            {renderPosts}
        </div>
    </div>
  );
}

export default App;
