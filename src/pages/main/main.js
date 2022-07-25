import React from 'react';
import './main.scss'
const Main = ({data2}) => {

    console.log(data2)
    return (
        <>
            <div class="main-header">
                <a class="menu-link-main" href="#">All Programmers</a>
                <div class="main__menu">
                    <a class="main-header-link is-active" href="#">Front-End</a>
                    <a class="main-header-link" href="#">Back-End</a>
                    <a class="main-header-link" href="#">UX/UI</a>

                </div>
            </div>

            <div class="content-wrapper">
                <div class="content-wrapper-header">
                    <div class="content-wrapper-context">
                        <h3 class="img-content">
                            <svg viewBox="0 0 512 512">
                                <path
                                    d="M467 0H45C20.099 0 0 20.099 0 45v422c0 24.901 20.099 45 45 45h422c24.901 0 45-20.099 45-45V45c0-24.901-20.099-45-45-45z"
                                    fill="#d6355b" data-original="#ff468c" />
                                <path xmlns="http://www.w3.org/2000/svg"
                                    d="M512 45v422c0 24.901-20.099 45-45 45H256V0h211c24.901 0 45 20.099 45 45z"
                                    fill="#d6355b" data-original="#d72878" />
                                <path xmlns="http://www.w3.org/2000/svg"
                                    d="M467 30H45c-8.401 0-15 6.599-15 15v422c0 8.401 6.599 15 15 15h422c8.401 0 15-6.599 15-15V45c0-8.401-6.599-15-15-15z"
                                    fill="#2e000a" data-original="#700029" />
                                <path xmlns="http://www.w3.org/2000/svg"
                                    d="M482 45v422c0 8.401-6.599 15-15 15H256V30h211c8.401 0 15 6.599 15 15z"
                                    fill="#2e000a" data-original="#4d0e06" />
                                <path xmlns="http://www.w3.org/2000/svg"
                                    d="M181 391c-41.353 0-75-33.647-75-75 0-8.291 6.709-15 15-15s15 6.709 15 15c0 24.814 20.186 45 45 45s45-20.186 45-45-20.186-45-45-45c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 45 45 45c41.353 0 75 33.647 75 75s-33.647 75-75 75z"
                                    fill="#d6355b" data-original="#ff468c" />
                                <path xmlns="http://www.w3.org/2000/svg"
                                    d="M391 361h-30c-8.276 0-15-6.724-15-15V211h45c8.291 0 15-6.709 15-15s-6.709-15-15-15h-45v-45c0-8.291-6.709-15-15-15s-15 6.709-15 15v45h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15h15v135c0 24.814 20.186 45 45 45h30c8.291 0 15-6.709 15-15s-6.709-15-15-15z"
                                    fill="#d6355b" data-original="#d72878" />
                            </svg>
                            Osh Programmers
                        </h3>
                        <div class="content-text">A Front-End Web Developer is a tech industry professional who builds the front portion of websites .</div>
                        <button class="content-button">Start free trial</button>
                    </div>
                    <img class="content-wrapper-img" src="https://assets.codepen.io/3364143/glass.png" alt="" />
                </div>
                <div class="content-section">
                    <div class="content-section-title">Программисты</div>
                    <div class="apps-card">
                        {
                            data2.map((element) => {
                                console.log(data2)
                                return (
                                        <div key={element.id} className="app-card">
                                            <span>
                                                <svg viewBox="0 0 512 512" style={{ border: '1px solid #a059a9' }}>
                                                    <path xmlns="http://www.w3.org/2000/svg"
                                                        d="M480 0H32C14.368 0 0 14.368 0 32v448c0 17.664 14.368 32 32 32h448c17.664 0 32-14.336 32-32V32c0-17.632-14.336-32-32-32z"
                                                        fill="#210027" data-original="#7b1fa2" />
                                                    <g xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M192 64h-80c-8.832 0-16 7.168-16 16v352c0 8.832 7.168 16 16 16s16-7.168 16-16V256h64c52.928 0 96-43.072 96-96s-43.072-96-96-96zm0 160h-64V96h64c35.296 0 64 28.704 64 64s-28.704 64-64 64zM400 256h-32c-18.08 0-34.592 6.24-48 16.384V272c0-8.864-7.168-16-16-16s-16 7.136-16 16v160c0 8.832 7.168 16 16 16s16-7.168 16-16v-96c0-26.464 21.536-48 48-48h32c8.832 0 16-7.168 16-16s-7.168-16-16-16z"
                                                            fill="#f6e7fa" data-original="#e1bee7" />
                                                    </g>
                                                </svg>
                                                {element.name}
                                            </span>
                                            <div class="app-card__subtext">{element.discription}</div>
                                            <div class="app-card-buttons">
                                                <button class="content-button status-button">Update</button>
                                                <div class="menu"></div>
                                            </div>
                                        </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;