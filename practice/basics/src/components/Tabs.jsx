export default function Tabs({ buttons, children, ButtonsContainer }) {
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {/* <menu>
                {buttons}
            </menu> */}
            {children}
        </>
    )
}