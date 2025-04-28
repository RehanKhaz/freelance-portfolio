import Image from "next/image"


const BentoGridBox = ({ src, title, containerClass, desc  }: { src: string, title: string, containerClass: string, desc: string  }) => {
    return (
        <div id="bento-grid" className={`grid-container ${containerClass}`}>
            <Image
                src={src}
                alt={title}
                height={src =='/assets/trust.png' ? 300 : 240}
                width={src =='/assets/trust.png' ? 300 : 240}
                
                className={`object-cover ${src == '/assets/rehandev.png' && 'rounded-full'} pointer-events-none mix-blend-difference overflow-hidden sm:h-[250px]`}
            />
            <h3 className='bento-grid-head'>{title}</h3>
            <p className='bento-grid-desc'>{desc}</p>
        </div>
    )
}

export default BentoGridBox