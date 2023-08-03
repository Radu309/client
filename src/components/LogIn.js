import {useLocation} from "react-router-dom";
import React from 'react';
import { GOOGLE_AUTH_URL } from "../constants/constants";

export function LogIn(){

    const useQuery = () => new URLSearchParams(useLocation().search);
    let query = useQuery();
    console.log(query.get('state'));

    return (
        <div>
            <div>
                <h1>
                    <a
                        href={GOOGLE_AUTH_URL}>
                        // href="http://localhost:3000/oauth2/authorization/google">
                        LogIn
                    </a>
                </h1>
            </div>
        </div>
    );
}