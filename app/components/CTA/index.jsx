import React from 'react'
import Image from 'next/image'

import sourceCodeIcon from '../../assets/images/icons/source_code_icon.png'
import chevronIcon from '../../assets/images/icons/chevron_right_icon.png'

export default function CTA({
    title = 'Button',
    link = '#',
    idleIcon,
    hoverIcon,
    classNames = 'cta-primary',
    openInNewTab = false,
}) {
    return (
        <a
            href={link}
            target={openInNewTab ? '__blank' : ''}
            rel={openInNewTab ? 'noreferrer noopener' : ''}
        >
            <button className={classNames}>
                <p>{title}</p>
                {
                    <Image
                        src={idleIcon ? idleIcon : sourceCodeIcon}
                        alt="Icon"
                        className="icon"
                        onClick={() => window.location.reload()}
                        loading="lazy"
                    />
                }
                {hoverIcon && (
                    <Image
                        src={hoverIcon ? hoverIcon : chevronIcon}
                        alt="Icon"
                        className="cta-icon"
                        onClick={() => window.location.reload()}
                        loading="lazy"
                    />
                )}
            </button>
        </a>
    )
}
