"use strict";
var home_component_1 = require('./home/home.component');
var user_component_1 = require('./user/user.component');
var icons_component_1 = require('./icons/icons.component');
var table_component_1 = require('./table/table.component');
var notifications_component_1 = require('./notifications/notifications.component');
var typography_component_1 = require('./typography/typography.component');
var rotas_component_1 = require('./rotas/rotas.component');
var notas_component_1 = require('./notas/notas.component');
var cadastro_component_1 = require('./cadastro/cadastro.component');
var notasCadastro_component_1 = require('./cadastro/notasCadastro.component');
exports.MODULE_ROUTES = [
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'table', component: table_component_1.TableComponent },
    { path: 'icons', component: icons_component_1.IconsComponent },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent },
    { path: 'typography', component: typography_component_1.TypographyComponent },
    { path: 'rotas', component: rotas_component_1.RotasComponent },
    { path: 'notas', component: notas_component_1.NotasComponent },
    { path: 'cadastro', component: cadastro_component_1.CadastroComponent },
    { path: '', redirectTo: 'rotas', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    user_component_1.UserComponent,
    table_component_1.TableComponent,
    icons_component_1.IconsComponent,
    notifications_component_1.NotificationsComponent,
    typography_component_1.TypographyComponent,
    rotas_component_1.RotasComponent,
    notas_component_1.NotasComponent,
    cadastro_component_1.CadastroComponent,
    notasCadastro_component_1.NotasCadastroComponent,
];
//# sourceMappingURL=dashboard.routes.js.map