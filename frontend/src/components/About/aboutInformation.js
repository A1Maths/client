import { MdPersonSearch, MdOutlineQuiz, MdOutlineDashboardCustomize } from 'react-icons/md';
import { SiBookstack, SiFuturelearn } from 'react-icons/si';
import { RiFunctionLine } from 'react-icons/ri';
import { GiClassicalKnowledge } from 'react-icons/gi'
import { AiFillRobot } from 'react-icons/ai';

export const features = [
    {
        title: 'Interactive',
        points: [{
            index: 0,
            icon: <RiFunctionLine className='about__icons'/>,
            iconClass: 'interactive__icon',
            content: 'Interactive lessons: Our lessons are designed to be engaging and interactive, making it easy for you to understand and retain new Maths concepts.'
        },
        {
            index: 1,
            icon: <MdOutlineQuiz className='about__icons'/>,
            iconClass: 'quiz__icon',
            content: 'Quizzes and practice problems: Test your knowledge with quizzes and practice problems that are tailored to your skill level and the exam format.'
        }]
    },
    {
        title: 'Personalised learning',
        points: [{
            index: 0,
            icon: <MdPersonSearch className='about__icons'/>,
            iconClass: 'personalised__icon',
            content: 'Personalized instruction: Our system tracks your progress and adjusts the difficulty of the lessons and problems to match your skill level.'
        },
        {
            index: 1,
            icon: <MdOutlineDashboardCustomize className='about__icons'/>,
            iconClass: 'topics__icon',
            content: 'Topic selection: Study at your own pace by choosing which topics to repeat, with unique questions generated everytime.'
        }]
    },
    {
        title: 'Expert knowledge',
        points: [{
            index: 0,
            icon: <GiClassicalKnowledge className='about__icons'/>,
            iconClass: 'knowledge__icon',
            content: 'Expert teachers: Get help from expert tutors who are available to answer your questions and provide feedback on your work.'
        },
        {
            index: 1,
            icon: <SiFuturelearn className='about__icons'/>,
            iconClass: 'progress__icon',
            content: "Progress tracking: Track your progress and see how far you've come over time."
        }]
    },
    {
        title: 'Exam ready',
        points: [{
            index: 0,
            icon: <SiBookstack className='about__icons'/>,
            iconClass: 'pastpapers__icon',
            content: 'Past Exam Papers: Access to a bank of past exam papers, so you can get familiar with the format of the actual exam.'
        },
        {
            index: 1,
            icon: <AiFillRobot className='about__icons'/>,
            iconClass: 'mockpapers__icon',
            content: 'Auto-generated Mock Papers: so you can practice as many times as you like.'
        }]
    }
];