import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import alan_portrait from './alan-portrait.png';
import alan_logo from './alan-logo.png';
import alan_headshot from './alan-headshot.png';
import datavisor_logo from './datavisor_logo.png'
import outlier_logo from './outlier.jpg';
import ace_of_spades from './ace_of_spades.jpg';
import spirit_of_math from './som_logo.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    alan_portrait,
    alan_logo,
    alan_headshot,
    datavisor_logo,
    outlier_logo,
    ace_of_spades,
    spirit_of_math,
};

export const workData = [
    {
      title: 'My Portfolio',
      description: 'Web Design',
      bgImage: '/work-1.png',
      link: 'https://github.com/azowmann/Portfolio-Website', // Add the link here
    },
    {
      title: 'Celestial Classifier',
      description: 'Machine Learning',
      bgImage: '/work-2.png',
      link: 'https://github.com/kennyzhao-code/Exoplanet-Habitability-Classifier', // Add the link here
    },
    {
      title: 'Amazon Review Insights',
      description: 'Natural Language Processing',
      bgImage: '/work-3.png',
      link: 'https://www.google.ca/maps', // Add the link here
    },
    {
      title: 'One Bad Apple',
      description: 'Image Recognition',
      bgImage: '/work-4.png',
      link: 'https://github.com/ValueAchooMatthew/OneBadApple', // Add the link here
    },
  ];

export const serviceData = [
    {icon: assets.datavisor_logo, title: 'QA Engineer', description: 'Contributing to automation testing for DataVisor', link: '#', modalContent: {
      images: [assets.datavisor_logo],
      text: 'asdfadsfadsfadsfasdfdsadsfdsafasdf'
    } },
    { icon: assets.outlier_logo, title: 'Prompt Engineer', description: 'Optimizing Prompts for experimentation in LLMs for Outlier AI', link: '#', modalContent: {
      images: [assets.datavisor_logo],
      text: 'asdfadsfadsfadsfasdfdsadsfdsafasdf'
    } },
    { icon: assets.ace_of_spades, title: 'Poker Player', description: 'Amateur poker fanatic/player implenting GTO making $15000 over one summer', link: '#', modalContent: {
      images: [assets.datavisor_logo],
      text: 'asdfadsfadsfadsfasdfdsadsfdsafasdf'
    } },
    { icon: assets.spirit_of_math, title: 'Assistant Teacher', description: 'Assisted and taught high performing student (grades 1-11) at Spirit of Math Schools', link: '#', modalContent: {
      images: [assets.datavisor_logo],
      text: 'asdfadsfadsfadsfasdfdsadsfdsafasdf'
    }},
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Python JavaScript SQL React Js ' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'BASc in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.mongodb, assets.figma, assets.git
];