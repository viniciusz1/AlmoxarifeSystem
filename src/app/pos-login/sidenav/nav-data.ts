export const navbarData = [
    {
        routeLink: '/home',
        icon: 'bi bi-house-door',
        label: 'Home',
        notAllowed: ['']
    },
    {
        routeLink: '/home/historico',
        icon: 'bi bi-alarm',
        label: 'Histórico',
        notAllowed: ['Professor']
    },
    {
        routeLink: '/home/entregas',
        icon: 'bi bi-journal-text',
        label: 'Pedidos',
        notAllowed: ['Professor']
    },
    {
        routeLink: '/home/pedidos',
        icon: 'bi bi-journal-text',
        label: 'Seus Pedidos',
        notAllowed: ['Atendente', 'Supervisor']
    },
    {
        routeLink: '/home/entrada/0',
        icon: 'bi bi-chevron-double-up',
        label: 'Dar entrada',
        notAllowed: ['Professor', 'Atendente']
    },
    {
        routeLink: '/home/contas',
        icon: 'bi bi-arrow-repeat',
        label: 'Alterar Status',
        notAllowed: ['Professor', 'Atendente']
    },
    {
        routeLink: '/home/solicitacoes',
        icon: 'bi bi-check-lg',
        label: 'Confirmar Usuários',
        notAllowed: ['Professor', 'Atendente']
    },
    {
        routeLink: '/home/perfil',
        icon: 'bi bi-person-circle',
        label: 'Seu perfil',
        notAllowed: ['']
    },
    {
        routeLink: '/home/dashboard',
        icon: 'bi bi-list-task',
        label: 'Dashboard',
        notAllowed: ['Professor']
    },
];