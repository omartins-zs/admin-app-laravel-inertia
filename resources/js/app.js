import "./bootstrap";
// import "../css/app.css";

// import { createApp, h } from "vue";
// import { createInertiaApp } from "@inertiajs/inertia-vue3";
// import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

// createInertiaApp({
//   title: (title) => `${title} - ${appName}`,
//   resolve: (name) =>
//     resolvePageComponent(
//       `./Pages/${name}.vue`,
//       import.meta.glob("./Pages/**/*.vue")
//     ),
//   setup({ el, app, props, plugin }) {
//     return createApp({ render: () => h(app, props) })
//       .use(plugin)
//       .mount(el);
//   },
// });

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        return pages[`./Pages/${name}.vue`];
    },
    setup({ el, app, props, plugin }) {
        createApp({ render: () => h(app, props) })
            .use(plugin)
            .mount(el);
    },
});
