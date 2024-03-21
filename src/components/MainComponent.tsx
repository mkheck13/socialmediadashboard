import '../App.css';
import TopCardComponent from './TopCardComonent';
import BottomCardComponent from './BottomCardComonent';
import { useState } from 'react';

import instagramLogo from '../images/icon-instagram.svg'
import facebookLogo from '../images/icon-facebook.svg';
import twitterLogo from '../images/icon-twitter.svg';
import youtubeLogo from '../images/icon-youtube.svg';
import upArrow from '../images/icon-up.svg';
import downArrow from '../images/icon-down.svg'



function MainComponent() {
    const [bg, setBg] = useState<string>('bgLight');
    const [rectangle, setRectangle] = useState<string>('bgRectangleLight');
    const [cardClass, setCardClass] = useState<string>('boxLight');
    const [text1, setText1] = useState<string>('lightTxt1');
    const [text3, setText3] = useState<string>('lightTxt1');
    const [text2, setText2] = useState<string>('lightTxt2');
    const [hrLine, setHrLine] = useState<string>('hrLine');

    const handleClick = () => {
        if (bg === 'bgLight') {
            setBg('bgDark');
            setRectangle('bgRectangleDark');
            setCardClass('boxDark');
            setText1('darkTxt1');
            setText3('darkTxt2');
            setText2('darkTxt2');
            setHrLine('darkHrLine');
        } else {
            setBg('bgLight');
            setRectangle('bgRectangleLight');
            setCardClass('boxLight');
            setText1('lightTxt1');
            setText3('lightTxt1');
            setText2('lightTxt2');
            setHrLine('hrLine');
        }
    }

    return (
        <div className={'xl:px-44 sm:px-20 pt-3 px-[26px] minH ' + bg}>
            <div className={rectangle}>
            </div>
            <div className='grid md:grid-cols-2 sm:mb-5 mb-10 relative'>
                <div className='mt-6 sm:mb-7 mb-5'>
                    <h1 className={'interBold sm:text-[27px] text-[23.5px] ' + text2}>Social Media DashBoard</h1>
                    <p className={'interBold heading ' + text1}>Total Followers: 23,004</p>
                </div>
                <hr className={hrLine + ' md:hidden'} />
                <div className='flex md:justify-end justify-between items-center md:mt-0 mt-4'>
                    <h1 className={'heading interBold ' + text1}>Dark Mode</h1>
                    <label className='switch ml-3'>
                        <input onClick={handleClick} type="checkbox" />
                        <span className='slider'></span>
                    </label>
                </div>
            </div>

            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:gap-8 gap-6 relative'>
                <BottomCardComponent bar={'facebookBar'} logo={facebookLogo} arrow={upArrow} username={'@nathanf'} number={'1987'} type={'FOLLOWERS'} update={'12 Today'} color={'green'} cardClass={cardClass} text1={text1} text2={text2} />

                <BottomCardComponent bar={'twitterBar'} logo={twitterLogo} arrow={upArrow} username={'@nathanf'} number={'1044'} type={'FOLLOWERS'} update={'99 Today'} color={'green'} cardClass={cardClass} text1={text1} text2={text2} />

                <BottomCardComponent bar={'igBar'} logo={instagramLogo} arrow={upArrow} username={'@nathanf'} number={'11k'} type={'FOLLOWERS'} update={'1099 Today'} color={'green'} cardClass={cardClass} text1={text1} text2={text2} />

                <BottomCardComponent bar={'youtubeBar'} logo={youtubeLogo} arrow={downArrow} username={'Nathan F.'} number={'8239'} type={'SUBSCRIBERS'} update={'144 Today'} color={'red'} cardClass={cardClass} text1={text1} text2={text2} />

            </div>

            <h1 className={'mt-10 mb-5 sm:text-[24px] text-[23.5px] interBold ' + text3}>Overview - Today</h1>

            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:gap-8 gap-4 pb-10'>
                <TopCardComponent type={'Page Views'} logo={facebookLogo} number={'87'} percent={'3%'} arrow={upArrow} color={'green'} cardClass={cardClass} text1={text1} text2={text2} />
                <TopCardComponent type={'Likes'} logo={facebookLogo} number={'52'} percent={'2%'} arrow={downArrow} color={'red'} cardClass={cardClass} text1={text1} text2={text2} />
                <TopCardComponent type={'Likes'} logo={instagramLogo} number={'5462'} percent={'2257%'} arrow={upArrow} color={'green'} cardClass={cardClass} text1={text1} text2={text2} />
                <TopCardComponent type={'Profile Views'} logo={instagramLogo} number={'52k'} percent={'1375%'} arrow={upArrow} color={'green'} cardClass={cardClass} text1={text1} text2={text2} />
            
                <TopCardComponent type={'Retweets'} logo={twitterLogo} number={'117'} percent={'303%'} arrow={upArrow} color={'green'} cardClass={cardClass} text1={text1} text2={text2} />
                <TopCardComponent type={'Likes'} logo={twitterLogo} number={'507'} percent={'553%'} arrow={upArrow} color={'green'} cardClass={cardClass} text1={text1} text2={text2} />
                <TopCardComponent type={'Likes'} logo={youtubeLogo} number={'107'} percent={'19%'} arrow={downArrow} color={'red'} cardClass={cardClass} text1={text1} text2={text2} />
                <TopCardComponent type={'Total Views'} logo={youtubeLogo} number={'1407'} percent={'12%'} arrow={downArrow} color={'red'} cardClass={cardClass} text1={text1} text2={text2} />
            </div>
        </div>
    );
}

export default MainComponent;