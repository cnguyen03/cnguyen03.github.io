import Header from './Header'
import Position from './Position'
import Contacts from './Contacts'

export default function ViewportPage() {
    return (
        <>
        <div className="flex flex-col items-center justify-center h-screen">
            <Header></Header>
            <Position></Position>
            <Contacts></Contacts>
        </div>
        </>
    )

};