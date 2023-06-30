import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
import db from '../firebase/services'

import { collection, onSnapshot, setDoc, doc } from 'firebase/firestore'
import { useState, useEffect } from 'react'


const DynamicPage = ({ match }) => {
    const [URL, setURL] = useState({})
    type URL = {
        [key: string]: string
    }

    const snap = async () => {
        await onSnapshot(collection(db, "URLs"), (snapshot) => {
            let data = snapshot.docs.map(doc => doc.data())

            // merge the data into an object
            let myData = Object.assign({}, ...data)
            console.log(myData)
            setURL(myData)

        }
        );
    }
    const { id } = match.params;
    console.log(id)
    const url = URL[id as keyof typeof URL];

    if (!url) {
        // If the ID is not found in the URL object, redirect to a 404 page or another desired location
        return <Navigate to="/404" />;
        console.log("got here")
    }

    window.location.href = url; // Redirect to the external address

    return null; // Placeholder, as the redirect happens before rendering
};

export default DynamicPage;