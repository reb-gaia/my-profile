import React from 'react'

import Card from './card/Card'
import './About.css'

export default props => (

    <div className="cards">
        <Card
            title="Front-end"
            logo="./assets/react.svg"
            description="React JS, Angular e Dart"></Card>
        <Card
            title="Back-end"
            logo="./assets/react.svg"
            description="C#/.NET, Angular e Dart"></Card>
        <Card
            title="Mobile"
            logo="./assets/react.svg"
            description="C#/.NET, Angular e Dart"></Card>

        <Card
            title="DevOPS"
            logo="./assets/react.svg"
            description="C#/.NET, Angular e Dart"></Card>
        <Card
            title="UX&UI"
            logo="./assets/react.svg"
            description="C#/.NET, Angular e Dart"></Card>
        <Card
            title="Data Science"
            logo="./assets/react.svg"
            description="C#/.NET, Angular e Dart"></Card>
    </div>
)