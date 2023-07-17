import './Header.css'

export function Header({title, image, children}){
    return(
        

            <header className="header2">
                <div className="header_container">
                    <div className="header_container-bg">
                        <img src={image} alt="header backgroung image" />
                    </div>
                    <div className="header_content">
                        <h2>{title}</h2>
                        <p>{children}</p>
                    </div>
                </div>
            </header>
        
    )
}