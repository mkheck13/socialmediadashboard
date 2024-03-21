import React from 'react'

const BottomCardComponent = (props: { bar: string, logo: string, arrow: string, username: string, number: string, type: string, update: string, color: string, cardClass: string, text1: string, text2: string}) => {
  return (
    <div className={props.cardClass}>
      <div className={'h-1 barRadius mb-1 ' + props.bar}></div>

      <div className='p-5'>

        <div className='flex justify-center items-center min-h-[24px]'>

          <img className='h-full' src={props.logo} alt="" />

          <h1 className={'username interBold ml-2 ' + props.text1}>{props.username}</h1>

        </div>

        <div className={'text-center interBold followersNum ' + props.text2}>{props.number}</div>

        <h4 className={'text-center followers interLight username ' + props.text1}>{props.type}</h4>

        <div className='flex justify-center mt-5'>
          <div className='flex flex-wrap-reverse content-center mr-1'>
            <img className='arrows mb-[1px]' src={props.arrow} alt="" />
          </div>
          <h4 className={'interBold username ' + props.color}>{props.update}</h4>
        </div>

      </div>

    </div>
  )
}

export default BottomCardComponent