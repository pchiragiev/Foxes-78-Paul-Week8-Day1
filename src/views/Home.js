import React from "react";

const Home = props => {
    return (
        <div className='home'>
            <h1>Home</h1>
            <div class="container-fluid">
            <table className='table'>
                <thead>
                    <tr>
                    <th>Students</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.students.map((student, index) => {
                            return <tr key={index}><td>{student}</td></tr>
                        })
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
};
export default Home;