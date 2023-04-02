import { LoaderContainer } from './style'
function Loader() {
    return (
        <LoaderContainer>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </LoaderContainer>
    )
}

export default Loader;
