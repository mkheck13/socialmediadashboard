import React from 'react'

const TopCardComponent = (props: { type: string, logo: string, arrow: string, percent: string, number: string, color: string, cardClass: string, text1: string, text2: string }) => {
    return (
        <div className={props.cardClass + " pt-6 px-7 pb-3 min-h-28"}>
                <div className='grid grid-cols-2 mb-4'>
                    <div>
                        <h3 className={'heading interBold ' + props.text1}>{props.type}</h3>
                    </div>

                    <div className='flex justify-end'>
                        <img className='' src={props.logo} alt="social media logo" />
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='flex items-end'>
                        <h3 className={'title interBold ' + props.text2}>{props.number}</h3>
                    </div>

                    <div className='flex justify-end'>
                        <div className='flex items-end mb-[2px]'>
                            <img className='arrows mb-[0.45rem] mr-1' src={props.arrow} alt="arrow indicator" />
                            <p className={'interBold username ' + props.color}>{props.percent}</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default TopCardComponent