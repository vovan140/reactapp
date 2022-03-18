export const MenuItem = (props) => {
    const { item } = props
    const { link, title } = item

    return (
        <>
            {
                item.subPages?.length > 0 ? <button>{title}
                <img width={8} height={8} src="/img/opm.svg" alt="live" />
                </button> : <a href={link}>{title}</a>
            }
        </>
        
    )
}