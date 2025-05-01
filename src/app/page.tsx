import {STRAPI_API} from "@/config/instance";
import {ENDPOINTS} from "@/config/endpoints";
import {ENV} from "@/config/enviroments";
import {newsItem} from "@/shared/types/news-item.type";


export default async function Home() {
    const response = await STRAPI_API.get(ENDPOINTS.GET.NEWS_LAST);
    const news = response.data;

    return (
        <div>
            <div className="bg-[#004EA7] flex flex-col text-white" style={{
                minHeight: '70vh',
                backgroundImage: 'url(/bg.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <header className="flex justify-between items-center px-6 py-10 text-white">
                    <div className="flex w-full justify-between items-center">
                        <div className="flex items-center">
                            <img  src='/logo.png' alt="Logo" className="h-10 cursor-pointer" />

                            <div className="relative ml-4">
                                <button
                                    className="flex cursor-pointer items-center bg-white/10 text-white px-8 py-2 rounded-lg backdrop-blur-md">
                                    Русский
                                    <span className="ml-2">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z"/>
                                    </svg>
                               </span>
                                </button>
                            </div>
                        </div>
                        <div className="flex cursor-pointer items-center gap-4">
                            <div
                                className="bg-white/10 flex items-center rounded text-white outline-none backdrop-blur-md  ">
                            <span className="ml-4">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                     viewBox="0,0,256,256"
                                     style={{fill: '#FFFFFF'}}>
                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1"
                                   stroke-linecap="butt"
                                   stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray=""
                                   stroke-dashoffset="0"
                                   font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                   style={{mixBlendMode: 'normal'}}>
                                    <g transform="scale(5.12,5.12)">
                                        <path
                                            d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"></path>
                                    </g>
                                </g>
                            </svg>
                            </span>
                                <input type="text" placeholder="Поиск по сайту"
                                       className="px-6 py-3 text-sm outline-none w-64"/>
                            </div>
                            <button
                                className="text-sm px-6 py-3 cursor-pointer whitespace-nowrap px-3 py-1 rounded bg-white/10 text-white outline-none backdrop-blur-md">Экранный
                                диктор
                            </button>
                            <button
                                className="text-sm px-6 py-3 cursor-pointer whitespace-nowrap px-3 py-1 rounded bg-white/10 text-white outline-none backdrop-blur-md font-semibold">e-University
                            </button>
                        </div>
                    </div>
                </header>

                <nav className="px-6 py-2 text-sm text-center text-white">
                    <a href="#" className="mr-4">Приемная комиссия</a>
                    <a href="#" className="mr-4">Университет</a>
                    <a href="#" className="mr-4">Обучение</a>
                    <a href="#" className="mr-4">Наука</a>
                    <a href="#" className="mr-4">Erasmus</a>
                    <a href="#" className="">Shoqan Global</a>
                </nav>

                <section
                    className="px-6 py-10 pb-32  mt-auto text-white flex flex-col lg:flex-row justify-between items-center gap-10">
                    <div className="">
                        <h1 className="text-2xl select-none lg:text-8xl leading-20">
                            Кокшетауский университет
                            имени Шокана <em className="italic font-normal">Уалиханова</em>
                        </h1>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-center sm:text-left">
                            <div>60 лет лидер в системе<br/>высшего образования</div>
                            <div>Топ 200 университетов мира<br/>по The Impact Ranking</div>
                            <div>29 место в QS<br/>Central Asia 2023</div>
                        </div>
                    </div>

                    <div className="w-full max-w-md rounded-lg overflow-hidden">
                        <p className="text-sm mb-2">Последние события</p>
                        <img
                            src="https://shokan.edu.kz/media/images/21_917.original_3_bHhHJcl.original.format-webp.webp"
                            alt="Event" className="rounded-lg"/>
                        <div className="flex justify-between mt-2 text-sm text-gray-300">
                            <span>1/7</span>
                            <span className="space-x-2">
                          <button className="hover:text-white">&lt;</button>
                          <button className="hover:text-white">&gt;</button>
                        </span>
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-full px-6 py-4 border-b bg-white">
                <div className="max-w-7xl mx-auto">
                    <input type="text" placeholder="Введите запрос"
                           className="w-full  px-4 py-2 outline-none rounded-lg bg-gray-100 text-gray-700"/>
                    <div className="mt-2 text-sm text-gray-500">
                        Популярные запросы:
                        <a href="#" className="underline hover:text-blue-600">Подразделения</a>,
                        <a href="#" className="underline hover:text-blue-600">Факультеты и кафедры</a>,
                        <a href="#" className="underline hover:text-blue-600">Наука и инновации</a>,
                        <a href="#" className="underline hover:text-blue-600">Услуги</a>
                    </div>
                </div>
            </div>
            <div className="rounded-4xl text-[#004EA7] -mt-10 py-10 bg-white px-6">
                <div>
                    <h2 className="text-6xl mb-6">Поступление</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-6 border rounded-xl shadow-sm">
                            <div className="text-3xl font-medium">Бакалавриат</div>
                            <div className="text-xl text-gray-500">Образовательные программы</div>
                            <div className="text-7xl mt-2 font-bold text-blue-700">83</div>
                        </div>
                        <div className="p-6 border rounded-xl shadow-sm">
                            <div className="text-3xl font-medium">Магистратура</div>
                            <div className="text-xl text-gray-500">Образовательные программы</div>
                            <div className="text-7xl mt-2 font-bold text-blue-700">44</div>
                        </div>
                        <div className="p-6 border rounded-xl shadow-sm">
                            <div className="text-3xl font-medium">Докторантура</div>
                            <div className="text-xl text-gray-500">Образовательные программы</div>
                            <div className="text-7xl mt-2 font-bold text-blue-700">10</div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 px-6">
                    <div className="grid self-center justify-center items-center md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-6xl mb-6">Новости</h2>
                            <div className="space-y-4">
                                {news.data.map((item: newsItem) => (
                                    <div key={item.id}
                                         className="flex cursor-pointer flex-col justify-center items-start gap-4 border border-gray-300 hover:border-[#004EA7] rounded-xl p-4">
                                        <img src={
                                            ENV.BACKEND_API_URL +
                                            (item.image.formats.medium?.url || item.image.url)
                                        } alt="news"
                                             className="rounded-full w-44 h-44 object-cover"/>
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">
                                                {new Date(item.publishedAt).toLocaleDateString('ru-RU', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric'
                                                })}</div>
                                            <div className="text-xl truncate max-w-full font-medium">{item.title}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-semibold mb-4">События</h2>
                            <div className="space-y-4">
                                <div
                                    className="p-4 flex justify-between border border-gray-300 hover:border-[#004EA7] rounded-xl cursor-pointer">
                                    «Наследие Шокана Уалиханова: региональный аспект и глобальные перспективы»
                                    <img src="/chevron-right.svg" alt=""/>
                                </div>
                                <div
                                    className="p-4 flex justify-between border rounded-xl  border-gray-300 hover:border-[#004EA7] cursor-pointer">
                                    «Наследие Шокана Уалиханова: региональный аспект и глобальные перспективы»
                                    <img src="/chevron-right.svg" alt=""/>
                                </div>
                                <div
                                    className="p-4 flex justify-between border rounded-xl  border-gray-300 hover:border-[#004EA7] cursor-pointer">
                                    «Наследие Шокана Уалиханова: региональный аспект и глобальные перспективы»
                                    <img src="/chevron-right.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-4xl mb-4">Студентам</h2>
                        <div
                            className="border h-80 rounded-xl border-gray-300 hover:border-[#004EA7] p-6 space-y-2 text-sm">
                            <a href="#" className="block text-lg hover:underline">Telegram Bot</a>
                            <a href="#" className="block text-lg hover:underline">Platonus</a>
                            <a href="#" className="block text-lg hover:underline">Расписание</a>
                            <a href="#" className="block text-lg hover:underline">Льготы на обучение</a>
                            <a href="#" className="block text-lg hover:underline">Электронная библиотека</a>
                            <a href="#" className="block text-lg hover:underline">Мультимедийные учебники</a>
                            <a href="#" className="block text-lg hover:underline">Каталог дополнительных образовательных
                                программ</a>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl mb-4">Сотрудникам</h2>
                        <div
                            className="border h-80 rounded-xl border-gray-300 hover:border-[#004EA7] p-6 space-y-2 text-sm">
                            <a href="#" className="block text-xl hover:underline">Salem Office</a>
                            <a href="#" className="block text-xl hover:underline">Корпоративная почта</a>
                            <a href="#" className="block text-xl hover:underline">ИС Параграф</a>
                            <a href="#" className="block text-xl hover:underline">Platonus</a>
                            <a href="#" className="block text-xl hover:underline">Электронная библиотека</a>
                            <a href="#" className="block text-xl hover:underline">Мультимедийные учебники</a>
                        </div>
                    </div>
                </div>

                <div className=" px-6 pb-12">
                    <h2 className="text-2xl mb-6">Партнеры</h2>
                    <div className="flex flex-wrap justify-start gap-6 items-center">
                        <img src="/partners.jpg" alt="alt"
                             className="rounded-full w-20 h-20 object-contain bg-gray-50 p-2 shadow"/>
                        <img src="/partners.jpg" alt="kazbeef"
                             className="rounded-full w-20 h-20 object-contain bg-gray-50 p-2 shadow"/>
                        <img src="/partners.jpg" alt="bank"
                             className="rounded-full w-20 h-20 object-contain bg-gray-50 p-2 shadow"/>
                        <img src="/partners.jpg" alt="forte"
                             className="rounded-full w-20 h-20 object-contain bg-gray-50 p-2 shadow"/>
                        <img src="/partners.jpg" alt="bereke"
                             className="rounded-full w-20 h-20 object-contain bg-gray-50 p-2 shadow"/>
                        <img src="/partners.jpg" alt="damu"
                             className="rounded-full w-20 h-20 object-contain bg-gray-50 p-2 shadow"/>
                        <img src="/partners.jpg" alt="agro"
                             className="rounded-full w-20 h-20 object-contain bg-gray-50 p-2 shadow"/>
                    </div>

                    <div className="flex justify-end mt-4 gap-2">
                        <button
                            className="w-8 h-8 rounded-full border border-gray-300 text-lg text-gray-700 hover:bg-gray-100">&lt;</button>
                        <button
                            className="w-8 h-8 rounded-full border border-gray-300 text-lg text-gray-700 hover:bg-gray-100">&gt;</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
