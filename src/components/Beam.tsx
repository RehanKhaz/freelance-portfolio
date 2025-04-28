const Beam = ({ bg }: { bg: string }) => {
    return <div style={{
        background: bg
    }} className={`h-6 w-6 relative rounded-full`} >
        <span style={{ background: bg }} className={`h-full w-full absolute inset-0 rounded-full animate-ping`} />
    </div>
}

export default Beam