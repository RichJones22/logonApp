<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { dashboard, login, register } from '@/routes';

withDefaults(
    defineProps<{
        canRegister: boolean;
    }>(),
    {
        canRegister: true,
    },
);
</script>

<template>
    <Head title="Welcome">
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <div
        class="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]"
    >
        <header
            class="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl"
        >
            <nav class="flex items-center justify-end gap-4">
                <Link
                    v-if="$page.props.auth.user"
                    :href="dashboard()"
                    class="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                >
                    Dashboard
                </Link>
                <template v-else>
                    <Link
                        :href="login()"
                        class="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                    >
                        Log in
                    </Link>
                    <Link
                        v-if="canRegister"
                        :href="register()"
                        class="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                    >
                        Register
                    </Link>
                </template>
            </nav>
        </header>
        <div
            class="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0"
        >
            <main
                class="flex w-full max-w-[335px] flex-col-reverse overflow-hidden rounded-lg lg:max-w-4xl lg:flex-row"
            >
                <div
                    class="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]"
                >
                    <h1 class="mb-1 font-medium">Let's get started</h1>
                    <p class="mb-2 text-[#706f6c] dark:text-[#A1A09A]">
                        Laravel has an incredibly rich ecosystem. <br />We
                        suggest starting with the following.
                    </p>
                    <ul class="mb-4 flex flex-col lg:mb-6">
                        <li
                            class="relative flex items-center gap-4 py-2 before:absolute before:top-1/2 before:bottom-0 before:left-[0.4rem] before:border-l before:border-[#e3e3e0] dark:before:border-[#3E3E3A]"
                        >
                            <span
                                class="relative bg-white py-1 dark:bg-[#161615]"
                            >
                                <span
                                    class="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#e3e3e0] bg-[#FDFDFC] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] dark:border-[#3E3E3A] dark:bg-[#161615]"
                                >
                                    <span
                                        class="h-1.5 w-1.5 rounded-full bg-[#dbdbd7] dark:bg-[#3E3E3A]"
                                    />
                                </span>
                            </span>
                            <span>
                                Read the
                                <a
                                    href="https://laravel.com/docs"
                                    target="_blank"
                                    class="ml-1 inline-flex items-center space-x-1 font-medium text-[#f53003] underline underline-offset-4 dark:text-[#FF4433]"
                                >
                                    <span>Documentation</span>
                                    <svg
                                        width="10"
                                        height="11"
                                        viewBox="0 0 10 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-2.5 w-2.5"
                                    >
                                        <path
                                            d="M7.70833 6.95834V2.79167H3.54167M2.5 8L7.5 3.00001"
                                            stroke="currentColor"
                                            stroke-linecap="square"
                                        />
                                    </svg>
                                </a>
                            </span>
                        </li>
                        <li
                            class="relative flex items-center gap-4 py-2 before:absolute before:top-0 before:bottom-1/2 before:left-[0.4rem] before:border-l before:border-[#e3e3e0] dark:before:border-[#3E3E3A]"
                        >
                            <span
                                class="relative bg-white py-1 dark:bg-[#161615]"
                            >
                                <span
                                    class="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#e3e3e0] bg-[#FDFDFC] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] dark:border-[#3E3E3A] dark:bg-[#161615]"
                                >
                                    <span
                                        class="h-1.5 w-1.5 rounded-full bg-[#dbdbd7] dark:bg-[#3E3E3A]"
                                    />
                                </span>
                            </span>
                            <span>
                                Watch video tutorials at
                                <a
                                    href="https://laracasts.com"
                                    target="_blank"
                                    class="ml-1 inline-flex items-center space-x-1 font-medium text-[#f53003] underline underline-offset-4 dark:text-[#FF4433]"
                                >
                                    <span>Laracasts</span>
                                    <svg
                                        width="10"
                                        height="11"
                                        viewBox="0 0 10 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-2.5 w-2.5"
                                    >
                                        <path
                                            d="M7.70833 6.95834V2.79167H3.54167M2.5 8L7.5 3.00001"
                                            stroke="currentColor"
                                            stroke-linecap="square"
                                        />
                                    </svg>
                                </a>
                            </span>
                        </li>
                    </ul>
                    <ul class="flex gap-3 text-sm leading-normal">
                        <li>
                            <a
                                href="https://cloud.laravel.com"
                                target="_blank"
                                class="inline-block rounded-sm border border-black bg-[#1b1b18] px-5 py-1.5 text-sm leading-normal text-white hover:border-black hover:bg-black dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#1C1C1A] dark:hover:border-white dark:hover:bg-white"
                            >
                                Deploy now
                            </a>
                        </li>
                    </ul>
                </div>
                <div
                    class="relative -mb-px aspect-[335/364] w-full shrink-0 overflow-hidden rounded-t-lg bg-[#fff2f2] lg:mb-0 lg:-ml-px lg:aspect-auto lg:w-[500px] lg:rounded-t-none lg:rounded-r-lg dark:bg-[#1D0002]"
                >
                    <!-- Premise Logo -->
                    <svg
                        class="w-full max-w-none translate-y-0 text-[#F53003] opacity-100 transition-all duration-750 dark:text-[#F61500] starting:opacity-0 motion-safe:starting:translate-y-6"
                        viewBox="0 0 438 104"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <text
                            x="0"
                            y="92"
                            font-family="Inter var, Inter, system-ui, sans-serif"
                            font-size="95"
                            font-weight="700"
                            fill="currentColor"
                            textLength="438"
                            lengthAdjust="spacingAndGlyphs"
                        >Premise</text>
                    </svg>

                    <!-- Software -->
                    <svg
                        class="relative -mt-[4rem] -ml-8 w-[500px] max-w-none [--stroke-color:#1B1B18] lg:ml-0 dark:[--stroke-color:#FF750F]"
                        viewBox="0 0 540 195"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g
                            class="text-[#1B1B18] opacity-100 mix-blend-darken transition-all delay-300 duration-750 dark:text-black dark:mix-blend-normal starting:opacity-0"
                        >
                            <mask id="sw-mask-1" maskUnits="userSpaceOnUse" x="-1" y="25" width="432" height="170" fill="black">
                                <rect fill="white" x="-1" y="25" width="432" height="170" />
                                <text x="0" y="170" font-family="Inter var, Inter, system-ui, sans-serif" font-size="160" font-weight="900" textLength="430" lengthAdjust="spacingAndGlyphs">Software</text>
                            </mask>
                            <text x="0" y="170" font-family="Inter var, Inter, system-ui, sans-serif" font-size="160" font-weight="900" fill="currentColor" textLength="430" lengthAdjust="spacingAndGlyphs">Software</text>
                            <text x="0" y="170" font-family="Inter var, Inter, system-ui, sans-serif" font-size="160" font-weight="900" stroke="var(--stroke-color)" stroke-width="2.4" mask="url(#sw-mask-1)" textLength="430" lengthAdjust="spacingAndGlyphs">Software</text>
                        </g>

                        <g
                            class="text-[#F3BEC7] opacity-100 transition-all delay-400 duration-750 dark:text-[#4B0600] starting:opacity-0 motion-safe:starting:-translate-x-[26px]"
                        >
                            <mask id="sw-mask-2" maskUnits="userSpaceOnUse" x="24" y="25" width="432" height="170" fill="black">
                                <rect fill="white" x="24" y="25" width="432" height="170" />
                                <text x="25" y="170" font-family="Inter var, Inter, system-ui, sans-serif" font-size="160" font-weight="900" textLength="430" lengthAdjust="spacingAndGlyphs">Software</text>
                            </mask>
                            <text x="25" y="170" font-family="Inter var, Inter, system-ui, sans-serif" font-size="160" font-weight="900" fill="currentColor" textLength="430" lengthAdjust="spacingAndGlyphs">Software</text>
                            <text x="25" y="170" font-family="Inter var, Inter, system-ui, sans-serif" font-size="160" font-weight="900" stroke="var(--stroke-color)" stroke-width="2.4" mask="url(#sw-mask-2)" textLength="430" lengthAdjust="spacingAndGlyphs">Software</text>
                        </g>

                        <g
                            class="text-[#F8B803] opacity-100 mix-blend-color transition-all delay-400 duration-750 dark:text-[#391800] dark:mix-blend-hard-light starting:opacity-0 motion-safe:starting:-translate-x-[51px]"
                        >
                            <mask id="sw-mask-3" maskUnits="userSpaceOnUse" x="50" y="25" width="432" height="170" fill="black">
                                <rect fill="white" x="50" y="25" width="432" height="170" />
                                <text x="51" y="170" font-family="Inter var, Inter, system-ui, sans-serif" font-size="160" font-weight="900" textLength="430" lengthAdjust="spacingAndGlyphs">Software</text>
                            </mask>
                            <text x="51" y="170" font-family="Inter var, Inter, system-ui, sans-serif" font-size="160" font-weight="900" fill="currentColor" textLength="430" lengthAdjust="spacingAndGlyphs">Software</text>
                            <text x="51" y="170" font-family="Inter var, Inter, system-ui, sans-serif" font-size="160" font-weight="900" stroke="var(--stroke-color)" stroke-width="2.4" mask="url(#sw-mask-3)" textLength="430" lengthAdjust="spacingAndGlyphs">Software</text>
                        </g>

                        <g
                            class="text-[#F3BEC7] opacity-100 mix-blend-multiply transition-all delay-400 duration-750 dark:text-[#733000] dark:mix-blend-normal starting:opacity-0 motion-safe:starting:-translate-x-[78px]"
                        >
                            <mask id="sw-mask-4" maskUnits="userSpaceOnUse" x="76" y="25" width="432" height="170" fill="black">
                                <rect fill="white" x="76" y="25" width="432" height="170" />
                                <text x="77" y="170" font-family="Inter var, Inter, system-ui, sans-serif" font-size="160" font-weight="900" textLength="430" lengthAdjust="spacingAndGlyphs">Software</text>
                            </mask>
                            <text x="77" y="170" font-family="Inter var, Inter, system-ui, sans-serif" font-size="160" font-weight="900" fill="currentColor" textLength="430" lengthAdjust="spacingAndGlyphs">Software</text>
                            <text x="77" y="170" font-family="Inter var, Inter, system-ui, sans-serif" font-size="160" font-weight="900" stroke="var(--stroke-color)" stroke-width="2.4" mask="url(#sw-mask-4)" textLength="430" lengthAdjust="spacingAndGlyphs">Software</text>
                        </g>

                        <g
                            class="text-[#F3BEC7] opacity-100 mix-blend-hard-light transition-all delay-400 duration-750 dark:text-[#4B0600] starting:opacity-0 motion-safe:starting:-translate-x-[102px]"
                        >
                            <mask id="sw-mask-5" maskUnits="userSpaceOnUse" x="101" y="25" width="432" height="170" fill="black">
                                <rect fill="white" x="101" y="25" width="432" height="170" />
                                <text x="102" y="170" font-family="Inter var, Inter, system-ui, sans-serif" font-size="160" font-weight="900" textLength="430" lengthAdjust="spacingAndGlyphs">Software</text>
                            </mask>
                            <text x="102" y="170" font-family="Inter var, Inter, system-ui, sans-serif" font-size="160" font-weight="900" fill="currentColor" textLength="430" lengthAdjust="spacingAndGlyphs">Software</text>
                            <text x="102" y="170" font-family="Inter var, Inter, system-ui, sans-serif" font-size="160" font-weight="900" stroke="var(--stroke-color)" stroke-width="2.4" mask="url(#sw-mask-5)" textLength="430" lengthAdjust="spacingAndGlyphs">Software</text>
                        </g>
                    </svg>
                    <div
                        class="absolute inset-0 rounded-t-lg shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-t-none lg:rounded-r-lg dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]"
                    ></div>
                </div>
            </main>
        </div>
        <div class="hidden h-14.5 lg:block"></div>
    </div>
</template>
