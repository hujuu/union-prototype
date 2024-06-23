import { useState, useEffect } from 'react';
import Header from "../components/Header";
import { xumm } from "../store/XummStore";
import MembershipList from "../components/MembershipList.tsx";
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import {
    EllipsisVerticalIcon,
} from '@heroicons/react/20/solid'

const statuses = { Completed: 'text-green-400 bg-green-400/10', Error: 'text-rose-400 bg-rose-400/10' }
const activityItems = [
    {
        user: {
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        commit: '2d89f0c8',
        branch: 'main',
        status: 'Completed',
        duration: '25s',
        date: '45 minutes ago',
        dateTime: '2023-01-23T11:00',
    },
    // More items...
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Union() {
    const [account, setAccount] = useState<string | undefined>(undefined);

    useEffect(() => {
        xumm.user.account.then((account) => setAccount(account));
    }, []);

    const connect = async () => {
        await xumm.authorize();
    };

    const disconnect = async () => {
        await xumm.logout();
        setAccount(undefined);
    };

    return (
        <main>
            <Header account={account} onConnect={connect} disConnect={disconnect}/>
            <header className="relative isolate pt-2">
                <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
                    <div
                        className="absolute left-16 top-full -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
                        <div
                            className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
                            style={{
                                clipPath:
                                    'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
                            }}
                        />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gray-900/5"/>
                </div>

                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                    <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
                        <div className="flex items-center gap-x-6">
                            <img
                                src="https://gateway.pinata.cloud/ipfs/QmUxtwtHFBLZokLzXA8WyCLUf1EGMr4Xzt3cZBaZvufPXt"
                                alt=""
                                className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10"
                            />
                            <h1>
                                <div className="text-sm leading-6 text-gray-500">
                                    Invoice <span className="text-gray-700">#00011</span>
                                </div>
                                <div className="mt-1 text-base font-semibold leading-6 text-gray-900">Tuple, Inc</div>
                            </h1>
                        </div>
                        <div className="flex items-center gap-x-4 sm:gap-x-6">
                            <a href="#" className="hidden text-sm font-semibold leading-6 text-gray-900 sm:block">
                                Edit
                            </a>
                            <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Send
                            </a>

                            <Menu as="div" className="relative sm:hidden">
                                <MenuButton className="-m-3 block p-3">
                                    <span className="sr-only">More</span>
                                    <EllipsisVerticalIcon className="h-5 w-5 text-gray-500" aria-hidden="true"/>
                                </MenuButton>

                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <MenuItem>
                                        {({focus}) => (
                                            <button
                                                type="button"
                                                className={classNames(
                                                    focus ? 'bg-gray-50' : '',
                                                    'block w-full px-3 py-1 text-left text-sm leading-6 text-gray-900',
                                                )}
                                            >
                                                Copy URL
                                            </button>
                                        )}
                                    </MenuItem>
                                    <MenuItem>
                                        {({focus}) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    focus ? 'bg-gray-50' : '',
                                                    'block px-3 py-1 text-sm leading-6 text-gray-900',
                                                )}
                                            >
                                                Edit
                                            </a>
                                        )}
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>
            </header>
            {/* Activity list */}
            <div className="border-t border-white/10 pt-11">
                <h2 className="px-4 text-base font-semibold leading-7 text-gray-800 sm:px-6 lg:px-8">メンバー</h2>
                <table className="mt-6 w-full whitespace-nowrap text-left">
                    <colgroup>
                        <col className="w-full sm:w-4/12" />
                        <col className="lg:w-4/12" />
                        <col className="lg:w-2/12" />
                        <col className="lg:w-1/12" />
                        <col className="lg:w-1/12" />
                    </colgroup>
                    <thead className="border-b border-white/10 text-sm leading-6 text-white">
                    <tr>
                        <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
                            User
                        </th>
                        <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                            Commit
                        </th>
                        <th scope="col" className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
                            Status
                        </th>
                        <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20">
                            Duration
                        </th>
                        <th
                            scope="col"
                            className="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8"
                        >
                            Deployed at
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                    {activityItems.map((item) => (
                        <tr key={item.commit}>
                            <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                                <div className="flex items-center gap-x-4">
                                    <img src={item.user.imageUrl} alt="" className="h-8 w-8 rounded-full bg-gray-800" />
                                    <div className="truncate text-sm font-medium leading-6 text-white">{item.user.name}</div>
                                </div>
                            </td>
                            <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                <div className="flex gap-x-3">
                                    <div className="font-mono text-sm leading-6 text-gray-400">{item.commit}</div>
                                    <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
                            {item.branch}
                          </span>
                                </div>
                            </td>
                            <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                                <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                                    <time className="text-gray-400 sm:hidden" dateTime={item.dateTime}>
                                        {item.date}
                                    </time>
                                    <div className={classNames(statuses[item.status], 'flex-none rounded-full p-1')}>
                                        <div className="h-1.5 w-1.5 rounded-full bg-current" />
                                    </div>
                                    <div className="hidden text-white sm:block">{item.status}</div>
                                </div>
                            </td>
                            <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                                {item.duration}
                            </td>
                            <td className="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                                <time dateTime={item.dateTime}>{item.date}</time>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <MembershipList account={account}/>

        </main>
    );
}
