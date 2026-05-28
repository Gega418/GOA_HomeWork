const Divs = ({title, description, icon, button}) => {
    return(
        <div id="content1">
            <img src={icon} alt="" />
            {title}
            {description}
            {button}
        </div>
    )
}

export default Divs