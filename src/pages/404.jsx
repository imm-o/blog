



import { memo } from "react";
import { useRouteError } from "react-router-dom";

export default memo((props) =>{
    const error = useRouteError();
    console.error(error, props);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error?.statusText || error?.message}</i>
            </p>
            <a href="/">Back to home</a>
        </div>
    );
})