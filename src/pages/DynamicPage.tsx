import { useParams, Navigate } from 'react-router-dom';
import db from '../firebase/services'

import { collection, onSnapshot, } from 'firebase/firestore'
import { useState, } from 'react'


const DynamicPage: React.FC = () => {

    const [URL, setURL] = useState({})
    const { id } = useParams()

    type URL = {
        [key: string]: string
    }

    const snap = async () => {
        await onSnapshot(collection(db, "URLs"), (snapshot) => {
            let data = snapshot.docs.map(doc => doc.data())

            // merge the data into an object
            let myData = Object.assign({}, ...data)

            setURL(myData)

            let myUrl = `xrly.vercel.com/${id}`
            const url = URL[myUrl as keyof typeof URL]


            if (url === undefined) {
                // If the ID is not found in the URL object, redirect to a 404 page or another desired location

                return <Navigate to="/404" />;
            }

            window.location.href = url; // Redirect to the external address

        });
    }

    snap()

    return (
        <div>
            Redirecting...
        </div>
    )

    // return <(div>Redirecting...</div)>;

};

export default DynamicPage;