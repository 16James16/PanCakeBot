import Router from './Router';
import GlobalStyle from './GlobalStyles';
import Header from 'shared/components/Header';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Router />
        </>   
    );
}

export default App;