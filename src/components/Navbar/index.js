export function Navbar(){
    return (
        <div>
            <nav className={"navbar navbar-dark bg-primary"} style={{height: 60, display: "flex", alignItems: "center"}}>
                <p className={"navbar-brand"} style={{color: "white", fontSize: 24, paddingLeft: 250}}>LAB - WikiCountries</p>
            </nav>
        </div>
    )
}